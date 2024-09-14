import Header from "@/app/_components/Header";

import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome to The Wild Oasis",
  },
  description: "A family-run retreat in the Italian Dolomites",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} relative bg-primary-950 text-primary-100 min-h-screen flex flex-col px-10`}
      >
        <Header />
        <div className="flex-1 px-8 py-12" >

        <main className="max-w-7xl mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
