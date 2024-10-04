"use client";
import Link from "next/link";
import { Button } from "../../ui/button";
import { ModeToggle } from "../../MoodeToggle";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
export const Desktop = () => {
  const pathname = usePathname();
  return (
    <div className="hidden  md:flex  items-center gap-16">
      <div className="flex items-center gap-2">
        <Link
          href="/"
          className={cn(
            pathname === "/"
              ? "border border-primary hover:bg-transparent hover:text-inherit"
              : "hover:bg-primary hover:text-primary-foreground",
            "py-1 px-4 rounded-full font-gs transition-colors duration-500 ease-in-out "
          )}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={cn(
            pathname === "/about"
              ? "border border-primary hover:bg-transparent hover:text-inherit"
              : "hover:bg-primary hover:text-primary-foreground",
            "py-1 px-4 rounded-full font-gs transition-colors duration-500 ease-in-out "
          )}
        >
          About
        </Link>
        <Link
          href="/instructor"
          className={cn(
            pathname === "/instructor"
              ? "border border-primary hover:bg-transparent hover:text-inherit"
              : "hover:bg-primary hover:text-primary-foreground",
            "py-1 px-4 rounded-full font-gs transition-colors duration-500 ease-in-out "
          )}
        >
          Instructor
        </Link>
        <Link
          href="/contact"
          className={cn(
            pathname === "/contact"
              ? "border border-primary hover:bg-transparent hover:text-inherit"
              : "hover:bg-primary hover:text-primary-foreground",
            "py-1 px-4 rounded-full font-gs transition-colors duration-500 ease-in-out "
          )}
        >
          Contact
        </Link>
        <div>
          <ModeToggle />
        </div>
      </div>

      <div>
        <Button size={"lg"} className="rounded-full">
          Register
        </Button>
      </div>
    </div>
  );
};
