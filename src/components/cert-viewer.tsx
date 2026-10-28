"use client";

import { useRef } from "react";
import { FileText, X } from "lucide-react";

export function CertViewer({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button
        type="button"
        onClick={() => ref.current?.showModal()}
        className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-border px-3.5 py-1.5 text-[13px] font-medium text-foreground transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <FileText className="size-4 text-muted" aria-hidden="true" />
        View certificate
      </button>
      <dialog
        ref={ref}
        aria-label={`Certificate: ${title}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) ref.current?.close();
        }}
        className="m-auto max-h-[92dvh] max-w-[94vw] overflow-visible bg-transparent p-0 backdrop:bg-black/70"
      >
        <div className="relative">
          <button
            type="button"
            onClick={() => ref.current?.close()}
            aria-label="Close certificate"
            className="absolute right-2 top-2 rounded-full bg-black/70 p-2 text-white hover:bg-black"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={`Certificate: ${title}`}
            className="max-h-[88dvh] max-w-[94vw] rounded-lg bg-white object-contain"
          />
        </div>
      </dialog>
    </>
  );
}
