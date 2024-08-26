import ProjectCard from '../../components/projectCard';

const projects = [
  { title: 'Project 1', description: 'Description of project 1', imageUrl: '/images/project1.png' },
  { title: 'Project 2', description: 'Description of project 2', imageUrl: '/images/project2.png' },
];

export default function Projects() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold text-gray-800">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
