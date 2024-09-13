import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Contact() {
  const socialLinks = [
    { url: 'https://github.com/Tetsewa', label: 'GitHub' },
    { url: 'https://gitlab.com/yourusername', label: 'GitLab' },
    { url: 'https://instagram.com/yourusername', label: 'Instagram' },
    { url: 'https://facebook.com/yourusername', label: 'Facebook' },
    { url: 'https://codepen.io/yourusername', label: 'CodePen' },
    { url: 'https://linkedin.com/in/amatwilliams', label: 'LinkedIn' },
    { url: 'https://twitter.com/yourusername', label: 'X (Twitter)' },
    { url: 'mailto:yourname@gmail.com', label: 'Gmail' }
  ];

  return (
    <div className="p-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Connect with Me</h1>
      
      <div className="flex justify-center space-x-2">
        {socialLinks.map((social, index) => (
          <SocialIcon 
            key={index} 
            url={social.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            fgColor="#fff"
            bgColor="#333"
            className="hover:scale-110 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
}

export default Contact;
