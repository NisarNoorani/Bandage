import './globals.css';

export const metadata = {
    title: 'Next 15',
    description: 'A Next.js 15 Project',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}
