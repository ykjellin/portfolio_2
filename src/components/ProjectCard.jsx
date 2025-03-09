import React from 'react';

const ProjectCard = ({ title, description, imageUrl, repoUrl, liveUrl }) => {
  return (
    <div className="bg-card border-2 border-primary shadow-lg p-4 text-textLight flex flex-col items-center justify-between h-[400px] relative hover:shadow-[0_0_10px_rgba(255,215,0,0.5)]">
      {/* Project Image */}
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />

      {/* Project Title & Description */}
      <div className="flex flex-col items-center text-center flex-grow">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>

      {/* Buttons at Bottom */}
      <div className="w-full flex justify-between absolute bottom-4 left-0 px-4">
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-primary text-primary bg-card px-4 py-2 hover:bg-primary hover:text-dark transition"
        >
          GitHub
        </a>
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-primary text-primary bg-card px-4 py-2 hover:bg-primary hover:text-dark transition"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
