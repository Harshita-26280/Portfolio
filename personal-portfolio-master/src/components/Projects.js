import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Healthy Habits Tracker.",
    description: `Developed a Healthy Habits Tracker web app using React and Firebase, enabling users to track habits, monitor streaks, and stay motivated with quotes and notifications. 
    Featured real-time sync, a responsive UI, and deployment on Vercel.`,
  },
  {
    title: "SocialEcho Website |Team of 2",
    description: `Built SocialEcho, a full-stack social media app using the MERN stack with authentication, posts, and follow features. 
    Integrated AI-based moderation and context-aware security for a safe, scalable user experience.`,
  },
  {
    title: "AI-Driven Mental Health Support System(Ongoing)|Team of 4",
    description: `Developed an AI-powered mental health support app using NLP and machine learning to detect stress and anxiety through chatbot interactions. 
    Features sentiment analysis, mood tracking, and a 3D therapist model for a more engaging, empathetic experience.`,
  },
];

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <h2 className="text-center mb-3">Projects</h2>

        {/* Project Summary */}
        <p className="project-summary text-center mb-5">
          A showcase of my recent work in Machine Learning, web development etc,each project reflecting innovation, problem-solving,
          and technical expertise.Designed and developed end-to-end applications combining intuitive front-end interfaces with robust back-end architecture. Implemented responsive UI using React, optimized server-side performance with Node.js, and integrated secure database solutions with MongoDB.Utilized version control and testing best practices to ensure scalability, maintainability, and high performance across all projects.
        </p>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col key={index} xs={12} md={6} lg={4} className="d-flex">
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
