const ProjectCard = ({ project }) => {
    return (
      <div className="border rounded-lg overflow-hidden shadow-lg">
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="mt-2 text-gray-600">{project.description}</p>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  