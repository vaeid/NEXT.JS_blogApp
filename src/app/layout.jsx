import '../styles/globals.css';
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang='fa' dir='rtl'>
      <body>{children}</body>
    </html>
  );
}
