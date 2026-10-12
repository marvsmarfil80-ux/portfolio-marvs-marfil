"use client";

import { useSyncExternalStore } from "react";
import { Clock } from "lucide-react";
import { siteConfig } from "@/config/nav";

function formatTime(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: siteConfig.timeZone,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 15_000);
  return () => clearInterval(id);
}

const getSnapshot = () => formatTime(new Date());
// Server renders a neutral placeholder to avoid a hydration mismatch.
const getServerSnapshot = () => null;

export function LiveTime() {
  const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <div className="flex items-center gap-3">
      <Clock className="size-5 shrink-0 text-accent" aria-hidden="true" />
      <div>
        <p className="text-sm text-muted">PH Time (UTC+8)</p>
        <p className="font-medium text-foreground">{time ?? "--:--"}</p>
      </div>
    </div>
  );
}
