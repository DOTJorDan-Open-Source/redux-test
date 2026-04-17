export default function ProjectDetails({ params }) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Project Overview: {params.id}</h1>
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Technical Details</h2>
        <p>
          You are currently viewing the dynamic route for <strong>{params.id}</strong>. 
          This page template automatically handles any project ID passed into the URL structure.
        </p>
      </div>
    </div>
  );
}