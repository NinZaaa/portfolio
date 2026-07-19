import { ImageResponse } from "next/og"

export const alt = "Bidhan Dhakal personal brand preview"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background: "linear-gradient(135deg, #090D14 0%, #101826 55%, #151F31 100%)",
          color: "#E8EEF9",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#2ED3FF",
          }}
        >
          Personal Brand
        </div>
        <div style={{ marginTop: 16, fontSize: 68, fontWeight: 700 }}>Bidhan Dhakal</div>
        <div style={{ marginTop: 18, fontSize: 30, color: "#B7C2D9" }}>
          Engineering Student building toward Cybersecurity Engineering
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
