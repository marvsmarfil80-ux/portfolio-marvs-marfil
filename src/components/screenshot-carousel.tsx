"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ImageOff, Maximize2, X } from "lucide-react";
import type { ShotItem } from "@/lib/projects";

const btn =
  "inline-flex size-9 items-center justify-center rounded-md border border-border bg-card text-foreground transition-colors hover:border-accent disabled:opacity-40";

export function ScreenshotCarousel({ items }: { items: ShotItem[] }) {
  const [i, setI] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const n = items.length;

  if (n === 0) {
    return (
      <div className="flex aspect-video flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-card text-muted">
        <ImageOff className="size-6" aria-hidden="true" />
        <p className="text-sm">Screenshots coming soon</p>
      </div>
    );
  }

  const go = (d: number) => setI((c) => (c + d + n) % n);
  const onKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    }
  };
  const cur = items[i];
  const raw = (src: string) => src.endsWith(".svg");

  const controls = (
    <div className="flex shrink-0 items-center gap-2">
      <button type="button" onClick={() => go(-1)} disabled={n < 2} aria-label="Previous screenshot" className={btn}>
        <ChevronLeft className="size-4" aria-hidden="true" />
      </button>
      <span className="min-w-10 text-center text-sm text-muted">{i + 1}/{n}</span>
      <button type="button" onClick={() => go(1)} disabled={n < 2} aria-label="Next screenshot" className={btn}>
        <ChevronRight className="size-4" aria-hidden="true" />
      </button>
    </div>
  );

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Project screenshots"
      tabIndex={0}
      onKeyDown={onKey}
      className="rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-background">
        <button
          type="button"
          onClick={() => dialogRef.current?.showModal()}
          aria-label="Expand screenshot"
          className="absolute inset-0 cursor-zoom-in"
        >
          <Image src={cur.src} alt={cur.alt} fill sizes="(min-width: 1024px) 800px, 100vw" className="object-cover" unoptimized={raw(cur.src)} />
          <span className="absolute right-3 top-3 rounded-md bg-background/80 p-1.5 text-foreground" aria-hidden="true">
            <Maximize2 className="size-4" />
          </span>
        </button>
      </div>

      <div className="mt-3 flex items-start justify-between gap-4">
        <p className="text-sm text-muted" aria-live="polite">{cur.caption}</p>
        {controls}
      </div>

      {n > 1 && (
        <ul className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {items.map((it, idx) => (
            <li key={it.src} className="shrink-0">
              <button
                type="button"
                onClick={() => setI(idx)}
                aria-label={`Show screenshot ${idx + 1} of ${n}`}
                aria-current={idx === i}
                className={`relative block h-14 w-24 overflow-hidden rounded-md border transition-colors ${idx === i ? "border-accent" : "border-border opacity-70 hover:opacity-100"}`}
              >
                <Image src={it.src} alt="" fill sizes="96px" className="object-cover" unoptimized={raw(it.src)} />
              </button>
            </li>
          ))}
        </ul>
      )}

      <dialog
        ref={dialogRef}
        aria-label="Screenshot viewer"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialogRef.current?.close();
        }}
        className="m-auto max-h-[92vh] w-[min(95vw,64rem)] rounded-lg border border-border bg-card p-4 text-foreground backdrop:bg-black/70"
      >
        <div className="flex justify-end">
          <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Close viewer" className={btn}>
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>
        <div className="relative mt-3 aspect-video overflow-hidden rounded-md bg-background">
          <Image src={cur.src} alt={cur.alt} fill sizes="95vw" className="object-contain" unoptimized={raw(cur.src)} />
        </div>
        <div className="mt-3 flex items-start justify-between gap-4">
          <p className="text-sm text-muted">{cur.caption}</p>
          {controls}
        </div>
      </dialog>
    </div>
  );
}
