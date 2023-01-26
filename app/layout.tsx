import '../styles/globals.css'

export default function RootLayout({
    children,
  }: { 
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900'>{children}</body>
      </html>
    );
}
  