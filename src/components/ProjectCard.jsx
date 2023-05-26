import React from 'react';
import ProjectCard from './ProjectCard';

const WorksSection = () => {
  return (
    <section ref={worksRef} id="works">
      <h2>Works</h2>
      <div className="sectionContent">
        <ul className="project-grid">
          <ProjectCard title="Project 1" />
          <ProjectCard title="Project 2" />
          {/* Add more ProjectCard instances as needed */}
        </ul>
      </div>
    </section>
  );
};

export default WorksSection;
