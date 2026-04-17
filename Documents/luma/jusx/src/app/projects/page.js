import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
        Hello, m Ahmed.
      </h1>
      
      <p className="text-lg text-gray-600 leading-relaxed">
        I am a software developer with a focus on web and mobile applications, including projects like Oqood. 
        I enjoy working with modern frameworks, containerization, and building clean, functional tools.
      </p>
      
      <div className="pt-6 flex gap-4">
        <Link 
          href="/projects" 
          className="text-gray-900 font-medium underline underline-offset-4 decoration-gray-300 hover:decoration-gray-900 transition"
        >
          View my projects
        </Link>
      </div>
      
    </div>
  );
}