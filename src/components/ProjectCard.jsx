import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, image, description, link, onImageClick }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card bg-dark text-light shadow-lg h-100 border-secondary">
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{ cursor: 'pointer' }}
          onClick={onImageClick}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <Link to={link} className="btn btn-outline-light">Vidi više</Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
