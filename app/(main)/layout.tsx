import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar/Navbar";
import { ReactNode } from "react";

export default function MainLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex flex-col h-svh w-full">
      <Navbar />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}
