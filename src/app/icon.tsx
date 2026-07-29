import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 16,
          background: "radial-gradient(circle at 30% 30%, #36d6ff, #1e88ff 45%, #050914 82%)",
        }}
      >
        <svg viewBox="0 0 40 40" width="38" height="38" fill="none">
          <circle cx="20" cy="9" r="3.6" fill="#ffffff" />
          <circle cx="9" cy="27" r="3.6" fill="#ffffff" />
          <circle cx="31" cy="27" r="3.6" fill="#ffffff" />
          <path
            d="M20 12.6 12 24.5 M20 12.6 28 24.5 M12.6 27 27.4 27"
            stroke="#ffffff"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
