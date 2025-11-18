import React from "react";
import { useParams } from "react-router-dom";

const Notfound: React.FC = () => {
  const { tab } = useParams<{ tab?: string }>();

  return (
    <div className="page-container page">
      <p>404 Page not found.</p>
      {tab && (
        <p>Tab: <strong>{tab}</strong></p>
      )}
    </div>
  );
};
  
export default Notfound;
