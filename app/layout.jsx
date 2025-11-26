import { Outfit } from "next/font/google";
import { Toaster } from "react-hot-toast";
import StoreProvider from "@/app/StoreProvider";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
    title: {
        default: 'Xe điện chất! - Hệ thống phân phối phụ kiện và đồ chơi xe điện hàng đầu',
        template: '%s - Xe điện chất!',
    },
    description: "Chào mừng bạn đến với Xe điện chất! – Địa chỉ tin cậy dành cho cộng đồng yêu xe xanh. Chúng tôi tự hào là thế giới phụ kiện dành cho xe điện, mang đến những giải pháp nâng cấp toàn diện từ thẩm mỹ đến hiệu năng cho xế yêu của bạn.",
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
