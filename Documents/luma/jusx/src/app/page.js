import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-8 font-sans">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="mb-6 text-gray-600">A showcase of modern web and mobile development.</p>
      
      <div className="flex gap-4">
        <Link href="/about" className="text-blue-500 hover:underline">About Me</Link>
        <Link href="/projects" className="text-blue-500 hover:underline">View Projects</Link>
      </div>
    </main>
  );
}