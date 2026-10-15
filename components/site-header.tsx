"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/brand-mark";
import { navigation } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className={`site-header${open ? " is-open" : ""}`}>
      <div className="wrap header-bar">
        <BrandMark preload />

        <nav id="site-navigation" className="site-nav" aria-label="Main">
          {navigation.map((item) => {
            const current = item.href === pathname;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            className="nav-appointment"
            href="/appointment"
            aria-current={pathname === "/appointment" ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            Book Appointment
          </Link>
        </nav>

        <Link
          className="header-cta"
          href="/appointment"
          aria-current={pathname === "/appointment" ? "page" : undefined}
        >
          Book Appointment
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="menu-bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>
    </header>
  );
}
