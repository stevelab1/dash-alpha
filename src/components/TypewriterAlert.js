import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";

const TypewriterAlert = () => {
  const [showTypewriter, setShowTypewriter] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypewriter(false);
    }, 6000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Alert variant="danger" className="mt-3" style={{backgroundColor: '#f8f9fa'}}>
      {showTypewriter ? (
        <span className="typewriter-text">
          No definition found. We are working on it...
        </span>
      ) : (
        "No definition found."
      )}
    </Alert>
  );
};

export default TypewriterAlert;
