import React from "react";
import { useParams } from "react-router-dom";

const Blog: React.FC = () => {
  const { tab } = useParams<{ tab?: string }>();

  return (
    <div className="page-container page">
      <p>This is the Blog Page.</p>
      {tab && (
        <p>Tab: <strong>{tab}</strong></p>
      )}
    </div>
  );
};

export default Blog;
