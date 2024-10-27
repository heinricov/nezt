"use client";

import { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/sidebar";
import ProductMobilePage from "@/components/hero-mobile";

export default function ProductPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setSidebarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <section className="flex flex-col min-h-screen">
        <div className="flex flex-1 pt-16 relative" ref={sidebarRef}>
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </div>
        {!sidebarOpen && (
          <div className="fixed top-16 z-20 lg:hidden p-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        )}
        {/* Main Content */}
        <div className="flex-1 overflow-auto pt-24 lg:ml-64">
          <ProductMobilePage />
        </div>
      </section>
    </>
  );
}
