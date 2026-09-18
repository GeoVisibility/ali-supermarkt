export type InstagramPost = {
  id: string;
  caption: string | null;
  mediaUrl: string;
  permalink: string;
  timestamp: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
};

type GraphMediaItem = {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
};

/**
 * Fetches the account's most recent Instagram posts via the Instagram Graph API.
 * Returns null when INSTAGRAM_ACCESS_TOKEN / INSTAGRAM_USER_ID aren't configured
 * yet, or when the request fails — callers should fall back to static content.
 *
 * Setup (one-time, done by the account owner in developers.facebook.com):
 *  1. Connect the Instagram professional account and generate a long-lived
 *     access token with the instagram_basic (or instagram_business_basic) scope.
 *  2. Set INSTAGRAM_ACCESS_TOKEN and INSTAGRAM_USER_ID as Vercel env vars.
 *  3. Long-lived tokens expire after ~60 days and need refreshing.
 */
export async function getRecentInstagramPosts(
  limit = 3
): Promise<InstagramPost[] | null> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;

  if (!token || !userId) return null;

  const fields = "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";
  const url = `https://graph.instagram.com/${userId}/media?fields=${fields}&limit=${limit}&access_token=${token}`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return null;

    const data = (await res.json()) as { data?: GraphMediaItem[] };
    if (!data.data) return null;

    return data.data.map((item) => ({
      id: item.id,
      caption: item.caption ?? null,
      mediaUrl: item.media_type === "VIDEO" ? item.thumbnail_url ?? item.media_url : item.media_url,
      permalink: item.permalink,
      timestamp: item.timestamp,
      mediaType: item.media_type,
    }));
  } catch {
    return null;
  }
}
