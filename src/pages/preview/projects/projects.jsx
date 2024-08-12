import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import p from "./constant";

const ProjectPreview = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="w-full max-w-6xl text-white">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            My Recent <strong className="text-purple-500">Works</strong>
          </h1>
          <p className="text-gray-300">
            Here are a few projects I've worked on recently.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {p.PROJECTLIST.map((project, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
              <div className="bg-white bg-opacity-20 shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-opacity-30 hover:shadow-purple-500">
                <img src={project.imgPath} alt={`Project: ${project.title}`} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex space-x-2">
                    <a 
                      href={project.ghLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                    >
                      <BsGithub className="mr-2" /> GitHub
                    </a>
                    {project.demoLink && (
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center bg-gray-600 text-white  px-4 rounded hover:bg-gray-700 transition-colors"
                      >
                        <CgWebsite className="mr-2" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
