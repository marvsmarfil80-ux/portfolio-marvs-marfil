"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import type { MouseEvent } from "react";
import Image from "next/image";
import { ArrowRight, FileText, Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/config/nav";
import { ThemeToggle } from "@/components/theme-toggle";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

function SidebarContent({ label, onNavigate }: { label: string; onNavigate?: () => void }) {
  const pathname = usePathname();

  function onCvClick(e: MouseEvent<HTMLAnchorElement>) {
    if (!siteConfig.cvFileHref && pathname === "/contact") {
      e.preventDefault();
      window.dispatchEvent(new Event("request-cv"));
      document.getElementById("request-cv")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onNavigate?.();
  }

  return (
    <div className="flex flex-col gap-5 px-6 pb-5 pt-12">
      <div className="flex flex-col items-center gap-3 border-b border-border pb-5 text-center">
        <div className="relative size-22 overflow-hidden rounded-full border border-border bg-background">
          <Image
            src="/images/profile.jpg"
            alt="Photo of Marvs Marfil"
            fill
            sizes="96px"
            className="object-cover object-[50%_35%]"
          />
        </div>
        <p className="text-xl font-semibold">{siteConfig.name}</p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="-mt-2 break-all text-sm text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {siteConfig.email}
        </a>
        <ThemeToggle />
      </div>

      <nav aria-label={label}>
        <ul className="flex flex-col gap-1">
          {navLinks.map(({ label: text, href, icon: Icon }) => {
            const active = isActive(pathname, href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={onNavigate}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-2 rounded-md px-4 py-2 text-base transition-colors ${
                    active
                      ? "bg-accent/10 font-medium text-foreground"
                      : "text-muted hover:bg-card hover:text-foreground"
                  }`}
                >
                  <Icon className={`size-5 ${active ? "text-accent" : ""}`} aria-hidden="true" />
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="flex flex-col gap-3 border-t border-border pt-5">
        <a
          href={siteConfig.cvHref}
          onClick={onCvClick}
          className="flex items-center gap-2 rounded-md border border-accent px-4 py-2 text-base font-semibold text-foreground transition-colors hover:bg-accent/10"
        >
          <FileText className="size-5 text-accent" aria-hidden="true" />
          Request CV
          <ArrowRight className="ml-auto size-4 text-muted" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

export function Sidebar() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeMenu = () => dialogRef.current?.close();

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden w-72 shrink-0 lg:block lg:overflow-y-auto">
        <SidebarContent label="Main" />
      </aside>

      {/* Mobile top bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-background px-4 py-3 lg:hidden">
        <span className="font-semibold">{siteConfig.name}</span>
        <button
          type="button"
          onClick={() => dialogRef.current?.showModal()}
          aria-label="Open menu"
          aria-haspopup="dialog"
          className="rounded-md border border-border p-2 text-foreground"
        >
          <Menu className="size-5" aria-hidden="true" />
        </button>
      </header>

      {/* Mobile drawer: native <dialog> gives a focus trap and Esc to close */}
      <dialog
        ref={dialogRef}
        aria-label="Menu"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeMenu();
        }}
        className="m-0 h-dvh max-h-none w-72 max-w-[85vw] border-r border-border bg-card p-0 text-foreground backdrop:bg-black/60 lg:hidden"
      >
        <div className="relative h-full">
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="absolute right-3 top-3 rounded-md p-2 text-muted hover:text-foreground"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
          <SidebarContent label="Mobile" onNavigate={closeMenu} />
        </div>
      </dialog>
    </>
  );
}
