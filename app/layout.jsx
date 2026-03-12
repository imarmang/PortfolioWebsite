import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Arman Gasparyan",
  description: "Arman Gasparyan | Software Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <main className="pl-[60px]">{children}</main>
      </body>
    </html>
  );
}
