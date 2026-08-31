import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon, generated so it stays in step with the brand accent. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0A",
          fontSize: 96,
          fontWeight: 700,
          letterSpacing: -4,
          color: "#F5F5F5",
          fontFamily: "sans-serif",
        }}
      >
        N
        <span
          style={{
            width: 14,
            height: 14,
            borderRadius: 999,
            background: "#3B82F6",
            marginLeft: 6,
            marginTop: 40,
          }}
        />
      </div>
    ),
    size,
  );
}
