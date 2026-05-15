import "./globals.css";
import Sidebar from "@/components/Sidebar";
import {config} from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {Analytics} from "@vercel/analytics/react";

config.autoAddCss = false;

export const metadata = {
    title: "Arman Gasparyan",
    description: "Arman Gasparyan | Software Developer",
    icons: {
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <Sidebar/>
        <main className="main-content">{children}</main>
        <Analytics/>
        <p className="copyright">© 2026 Arman Gasparyan</p>
        </body>
        </html>
    );
}