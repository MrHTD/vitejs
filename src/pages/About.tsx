import React from "react";
import { useParams } from "react-router-dom";

const About: React.FC = () => {
  const { section } = useParams<{ section?: string }>();

  return (
    <div className="page-container page">
      <p>This is the About Page.</p>
      {section && (
        <p>Section: <strong>{section}</strong></p>
      )}
    </div>
  );
};

export default About;
