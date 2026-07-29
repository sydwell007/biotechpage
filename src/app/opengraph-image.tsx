import { ImageResponse } from "next/og";
import { siteTagline } from "@/data/siteConfig";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          backgroundImage:
            "radial-gradient(circle at 15% 10%, rgba(30,136,255,0.55), transparent 55%), radial-gradient(circle at 90% 0%, rgba(123,97,255,0.45), transparent 55%), linear-gradient(135deg, #050914, #0b1a33)",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 30,
            fontWeight: 900,
            color: "#36d6ff",
          }}
        >
          CIVITAS BIOTECH
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 900, marginTop: 24, maxWidth: 980, lineHeight: 1.08 }}>
          {siteTagline}
        </div>
        <div style={{ display: "flex", fontSize: 28, marginTop: 28, color: "rgba(255,255,255,0.82)", maxWidth: 880 }}>
          Non-invasive neural interfaces, wearable robotics, and NeuroOS - the AI layer connecting human intent to
          machine capability.
        </div>
      </div>
    ),
    { ...size }
  );
}
