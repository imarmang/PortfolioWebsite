import "./globals.css";
import Sidebar from "@/components/Sidebar";
import {config} from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export const metadata = {
    title: "Arman Gasparyan",
    description: "Arman Gasparyan | Software Developer",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <Sidebar/>
        <main className="main-content">{children}</main>
        </body>
        </html>
    );
}