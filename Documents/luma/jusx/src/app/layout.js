import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Ahmed Sakkijha | Portfolio',
  description: 'Software Developer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto p-8 text-gray-800 font-sans antialiased">
        
        {}
        <header className="mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 pb-6 gap-4">
          <Link href="/" className="text-xl font-bold tracking-tight hover:text-gray-500 transition">
            Ahmed Sakkijha
          </Link>
          <nav className="flex gap-6 text-sm font-medium text-gray-500">
            <Link href="/about" className="hover:text-gray-900 transition">About</Link>
            <Link href="/projects" className="hover:text-gray-900 transition">Projects</Link>
          </nav>
        </header>

        {}
        <main className="min-h-[50vh]">
          {children}
        </main>

        {/* SIMPLE FOOTER */}
        <footer className="mt-16 text-sm text-gray-400 border-t border-gray-200 pt-6">
          <p>© {new Date().getFullYear()} Ahmed Sakkijha. Based in Amman.</p>
        </footer>

      </body>
    </html>
  );
}