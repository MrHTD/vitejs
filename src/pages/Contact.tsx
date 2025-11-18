import React from "react";
import { useParams } from "react-router-dom";

const Contact: React.FC = () => {
  const { type } = useParams<{ type?: string }>();

  return (
    <div className="page-container page">
      <p>This is the Contact Page.</p>
      {type && (
        <p>Contact Type: <strong>{type}</strong></p>
      )}
    </div>
  );
};

export default Contact;
