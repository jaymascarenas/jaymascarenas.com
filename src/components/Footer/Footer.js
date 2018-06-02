import React from 'react';

const Footer = () => {
  let  date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <div className="footer">
        <p>&copy; {year} <a href="http://www.jaymascarenas.com">jaymascarenas.com</a></p>
      </div>
    </footer>
  )
}
 
export default Footer;