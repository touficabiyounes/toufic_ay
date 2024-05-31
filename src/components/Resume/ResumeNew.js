import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import englishPdf from "../../Assets/general_Internship_resume.pdf"; 
import frenchPdf from "../../Assets/general_Internship_resume_fr.pdf"; 
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [language, setLanguage] = useState("FRE"); 
  const [pdf, setPdf] = useState(frenchPdf); 

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  // Function to toggle language
  const toggleLanguage = () => {
    if (language === "FRE") {
      setLanguage("ENG");
      setPdf(englishPdf);
    } else {
      setLanguage("FRE");
      setPdf(frenchPdf);
    }
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            onClick={toggleLanguage} // Toggle language on click
            style={{ maxWidth: "100px", marginTop: "10px" }}
          >
            &nbsp;{language} {/* Display current language */}
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} 
            renderTextLayer={false} 
            />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
