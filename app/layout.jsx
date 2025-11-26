import { Outfit } from "next/font/google";
import { Toaster } from "react-hot-toast";
import StoreProvider from "@/app/StoreProvider";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
    title: {
        default: 'Stedfasts - Gadgets you\'ll love. Prices you\'ll trust.',
        template: '%s - Stedfasts'
    },
    description: "Stedfasts is your one-stop shop for the latest and greatest gadgets. We offer a wide variety of products at competitive prices, all with our commitment to quality and customer satisfaction.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${outfit.className} antialiased`}>
                <StoreProvider>
                    <Toaster />
                    {children}
                </StoreProvider>
            </body>
        </html>
    );
}
