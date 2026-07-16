import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#07120d",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            background: "#059669",
            borderRadius: 36,
            color: "#f8faf9",
            display: "flex",
            fontSize: 64,
            fontWeight: 800,
            height: 132,
            justifyContent: "center",
            letterSpacing: -5,
            width: 132,
          }}
        >
          MF
        </div>
      </div>
    ),
    size,
  );
}
