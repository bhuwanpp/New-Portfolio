import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bhuwan Paudel 👨🏻‍💻 | Software Developer",
  description: "Bhuwan Paudel Portfolio | Software Developer | Self Taught | Programming | Javascript",
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
      <body className={inter.className}>{children}
      <script
      src="https://kit.fontawesome.com/c8eb323ddc.js" async
      ></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"
    async ></script>
      </body>
    </html>
  );
}
