import React from 'react';
import Facebook from '../../assets/facebook.png'; 
import Youtube from '../../assets/youtube.png'; 
import Linkedin from '../../assets/linkedin.png'; 

const SocialLinks = () => {
  return (
    <div className="flex space-x-2 w-[10vw]">
      {/* Facebook Icon */} 
      <h3>Follow:</h3>
      <a
        href="https://www.facebook.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800"
        aria-label="Facebook profile"
      >
        <img src={Facebook} alt="facebook" />
      </a>

      {/* Youtube Icon */}
      <a
        href="https://www.youtube.com/@odeifuomedia6004"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-600"
        aria-label="Instagram profile"
      >
       <img src={Youtube} alt="Utube" />
      </a>

      {/* LinkedIn Icon */}
      <a
        href="https://www.linkedin.com/in/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:text-blue-900"
        aria-label="LinkedIn profile"
      >
        <img src={Linkedin} alt="facebook" />
      </a>
    </div>
  );
};

export default SocialLinks;
