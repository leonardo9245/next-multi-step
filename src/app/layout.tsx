import { ContextProvider } from '@/context/context';
import './globals.css';
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata = {
  title: 'Lorem Gaming',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
