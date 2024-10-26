"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Search, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const menuItems = [
  { title: "Home", href: "/" },
  { title: "Product", href: "/product" },
  { title: "About", href: "/about" },
  { title: "License", href: "/license" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <nav className="fixed w-full z-20 top-0 bg-white/80 dark:bg-gray-900/80 shadow-lg transition-colors duration-200 backdrop-blur-md">
        <div className="max-w-[100rem] mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center">
                <span className="font-semibold text-gray-800 dark:text-white text-3xl mr-16">
                  NEZ.T
                </span>
              </Link>
              {/* Desktop menu */}
              <div className="hidden md:flex items-center space-x-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`py-2 px-3 transition duration-300 ${
                      pathname === item.href
                        ? "text-blue-500 dark:text-blue-400 font-semibold"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {/* Search input */}
              <form onSubmit={handleSearch} className="hidden md:flex">
                <Input
                  type="search"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                />
                <Button
                  type="submit"
                  variant="ghost"
                  size="icon"
                  className="text-gray-600 dark:text-gray-400"
                >
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
              </form>
              {/* contact icon */}
              {/* <div className="flex gap-1">
                <Github />
                <Discord />
              </div> */}
              {/* Theme toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
              {/* Mobile menu button */}
              <div className="md:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="text-gray-600 dark:text-gray-400"
                    >
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
                  >
                    <nav className="flex flex-col space-y-4 mt-4">
                      <form onSubmit={handleSearch} className="flex mb-4">
                        <Input
                          type="search"
                          placeholder="Search..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="flex-grow bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                        />
                        <Button
                          type="submit"
                          variant="ghost"
                          size="icon"
                          className="text-gray-600 dark:text-gray-400"
                        >
                          <Search className="h-5 w-5" />
                          <span className="sr-only">Search</span>
                        </Button>
                      </form>
                      {menuItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className={`text-lg font-semibold transition duration-300 ${
                            pathname === item.href
                              ? "text-blue-500 dark:text-blue-400"
                              : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
