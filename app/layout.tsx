import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"CommonGround · Planning & Resource Sharing",description:"One workspace for shared planning, people and resources."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
