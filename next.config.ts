import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 65 für die grossen Fotos (Slider, Kategoriekacheln), 75 bleibt der
    // Standard für alles andere. Ab Next 16 muss jede genutzte Stufe hier stehen.
    qualities: [65, 75],
  },
};

export default nextConfig;
