import React from 'react';

const Resume = () => {
  return (
    <div className="pdf-container">
      <iframe
        src="/resume.pdf"
        title="Resume"
        width="100%"
        height="100%"
        style={{ minHeight: '100vh' }}
      />
    </div>
  );
};

export default Resume;
