import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <p>using <Link to="https://uptimerobot.com/" text="UptimeRobot" /> API</p>
      </div>
    </div>
  );
}

export default Footer;
