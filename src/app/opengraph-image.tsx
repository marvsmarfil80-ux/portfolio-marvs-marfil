import { ImageResponse } from "next/og";

export const alt = "Marvs Marfil | Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const box = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  padding: "80px",
  background: "#0b0f14",
  color: "#e5e7eb",
};

export default function Image() {
  return new ImageResponse(
    (
      <div style={box}>
        <div style={{ display: "flex", fontSize: 30, color: "#ffffff" }}>Portfolio</div>
        <div style={{ display: "flex", fontSize: 88, fontWeight: 700, marginTop: 16 }}>
          Marvs Marfil
        </div>
        <div style={{ display: "flex", fontSize: 40, color: "#9ca3af", marginTop: 24 }}>
          {"AI Workflow Automation, APIs & Full-Stack"}
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#ffffff", marginTop: 40 }}>
          Open to Remote Entry-Level Roles
        </div>
      </div>
    ),
    { ...size },
  );
}
