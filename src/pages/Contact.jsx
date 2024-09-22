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
    <div className="min-h-screen flex flex-col justify-center items-center bg-background p-8">
      <div className="bg-main rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-center mb-4 text-neutral font-pacifico">Connect with Me</h1>
        
        <h2 className="text-xl text-center mb-8 text-neutral font-courgette">
          Would you like to connect with me over a virtual cup of tea or coffee?
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {socialLinks.map((social, index) => (
            <SocialIcon 
              key={index} 
              url={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              fgColor="#F5F5F5"
              bgColor="#36454F"
              className="hover:scale-110 transition-transform duration-300 hover:bg-accent"
            />
          ))}
        </div>
        
        <p className="text-center text-neutral">
          Feel free to reach out through any of these platforms. I'm always excited to connect and collaborate!
        </p>
      </div>
    </div>
  );
}

export default Contact;