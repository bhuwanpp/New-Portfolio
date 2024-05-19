import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({ subsets: ["latin"],
  weight: ["300", "400", "500","600", "700", "800", "900" ],
  variable: '--font-kanit',
 });


export const metadata: Metadata = {
  title: "Bhuwan Paudel 👨🏻‍💻 | Software Developer",
  description: "Hi, I am Bhuwan , Software Developer who likes Javascript and also love making websites.I just want to work with computers and get paid.",
  icons: {
    icon:'/images/bp.png', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>{children}
      <script
      src="https://kit.fontawesome.com/c8eb323ddc.js" async
      ></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"
    async ></script>
      </body>
    </html>
  );
}
