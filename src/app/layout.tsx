import type { ReactNode } from 'react';

export const metadata = {
  title: 'dasshsboaard',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}