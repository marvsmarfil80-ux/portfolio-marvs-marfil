import { NextResponse } from "next/server";
import { siteConfig } from "@/config/nav";

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  if (clean(data.website, 200) !== "") return NextResponse.json({ ok: true });
  const name = clean(data.name, 100).replace(/[\r\n]+/g, " ");
  const email = clean(data.email, 200);
  const message = clean(data.message, 2000);
  const cv = data.cv === true;
  if (!name || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const key = process.env.RESEND_API_KEY;
  if (!key) return NextResponse.json({ ok: false }, { status: 500 });
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [siteConfig.email],
      reply_to: email,
      subject: `${cv ? "CV request" : "Portfolio inquiry"} from ${name}`,
      text: `${message}\n\nName: ${name}\nEmail: ${email}`,
    }),
  });
  return NextResponse.json({ ok: res.ok }, { status: res.ok ? 200 : 502 });
}
