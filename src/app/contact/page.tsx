import type { Metadata } from "next";
import { Suspense } from "react";
import { ConnectCards } from "@/components/connect-cards";
import { ContactForm } from "@/components/contact-form";
import { LiveTime } from "@/components/live-time";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Marvs Marfil by email or through his profiles, and request a copy of his CV.",
};

export default function ContactPage() {
  return (
    <div>
      <header className="border-b border-dashed border-border pb-6">
        <h1 id="contact-heading" className="text-3xl font-semibold">Get in touch</h1>
        <p className="mt-2 text-muted">
          I am open to remote entry-level roles. Email is the fastest way to reach me.
        </p>
        <div className="mt-4">
          <LiveTime />
        </div>
      </header>

      <section
        id="request-cv"
        aria-labelledby="work-heading"
        className="mt-6 scroll-mt-6 rounded-2xl border border-border bg-card p-6 sm:p-8"
      >
        <h2 id="work-heading" className="text-xl font-semibold">Let&rsquo;s work together</h2>
        <p className="mt-1 text-sm text-muted">Tell me what you need and I will reply by email.</p>
        <Suspense fallback={null}>
          <ContactForm />
        </Suspense>
      </section>

      <ConnectCards />
    </div>
  );
}
