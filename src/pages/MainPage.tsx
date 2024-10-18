import React, { useState } from 'react';
import './MainPage.css';

const MainPage: React.FC = () => {
  const [link, setLink] = useState('');

  const handleDownload = () => {
    // Implement download logic here
    console.log('Downloading from:', link);
  };

  return (
    <div className="main-page">
      <h1>Freepik Content Downloader</h1>
      <div className="input-container">
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Paste your Freepik.com link here"
        />
        <button onClick={handleDownload}>Download Now</button>
      </div>
    </div>
  );
};

export default MainPage;