import { AntdRegistry } from "@ant-design/nextjs-registry";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={roboto.className}
        style={{
          padding: "0",
          margin: "0",
        }}
      >
        <AntdRegistry> {children}</AntdRegistry>
      </body>
    </html>
  );
}
