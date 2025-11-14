import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCard({ title, description }) {
  return (
    <Card className="project-card">
      <Card.Body>
        <Card.Title className="project-title">{title}</Card.Title>
        <Card.Text className="project-description">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
