import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/oceanai.png";
import editor from "../../Assets/Projects/parkinweb.png";
import chatify from "../../Assets/Projects/lyricsapp.png";
import suicide from "../../Assets/Projects/medimanage.png";
import bitsOfCode from "../../Assets/Projects/maze.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="LyricsFuze"
              description="A Song Lyrics Application Yonder allowing users to search by artist name, lyrics, or song title to find all available data using an API, 
              developed using Java and JavaFX."
              ghLink="https://github.com/touficabiyounes/lyrics_app.git"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="GoldMiner"
              description="GoldMiner is a multiplayer game where players collect as much gold as possible in a randomly generated maze. Players discover the maze and move by sending requests to the server, and the winner is the one who collects the most gold pieces , using java."
              ghLink="https://github.com/touficabiyounes/Gold_finder.git"
    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ParkWise"
              description="A website enabling online parking space reservation in various parking lots, considering parking duration and other reservations, 
              developed using SQL, HTML/CSS, and JavaScript."
              ghLink="https://github.com/touficabiyounes/ParkWise.git"
                      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="OceanDetectAI"
              description="OceanDetectAI is a Python-based project that detects oceans in images with 82-85% accuracy. Using the Python Imaging Library (PIL) for image preprocessing and scikit-learn (sklearn) for machine learning."
              ghLink="https://github.com/touficabiyounes/OceanDetectAI.git"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="MediManage"
              description="This project aims to develop a comprehensive hospital management system using Spring Boot, Java, JavaScript, HTML, CSS, and more. This repository is actively under development.
              Stay tuned for updates as we build features to streamline hospital operations, enhance patient care, and improve administrative efficiency."
              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
