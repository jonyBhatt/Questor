"use client";
import Logo from "@/assets/logo.svg";
import { ModeToggle } from "@/components/MoodeToggle";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import { TokensIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const Mobilenav = () => {
  const pathname = usePathname();
  return (
    <div className="flex md:hidden">
      <Sheet>
        <SheetTrigger>
          <TokensIcon fontSize={35} color="lime" className="w-6 h-6" />
        </SheetTrigger>
        <SheetContent className="flex flex-col h-svh p-0">
          <SheetHeader className="border-b-2 p-6">
            <div className="flex items-start gap-1 ">
              <Image src={Logo} alt="logo" className="w-auto" />
              <h3 className="font-gm font-extrabold text-xl">Questor</h3>
            </div>
          </SheetHeader>
          <div className="flex-grow p-6 l">
            <div className="flex flex-col w-full gap-16">
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
              <div className="px-4">
                <ModeToggle />
              </div>
            </div>
          </div>
          <SheetFooter className="font-gm">
            <span>
              <b>Questor</b> made by
            </span>
            <h2 className="font-bold text-center"> Jit B Jony </h2>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};
