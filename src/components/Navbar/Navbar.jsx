import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [dropdown, setDropdown] = useState({ about: false, department: false, academics: false });

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        <li>Home</li>

        {/* About Us Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setDropdown({ ...dropdown, about: true })}
          onMouseLeave={() => setDropdown({ ...dropdown, about: false })}
        >
          About us
          <ul className={`dropdown-menu ${dropdown.about ? 'show' : ''}`}>
            <li>Our History</li>
            <li>Vision & Mission</li>
            <li>Leadership</li>
            <li>Infrastructure</li>
          </ul>
        </li>

        {/* Department Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setDropdown({ ...dropdown, department: true })}
          onMouseLeave={() => setDropdown({ ...dropdown, department: false })}
        >
          Department
          <ul className={`dropdown-menu ${dropdown.department ? 'show' : ''}`}>
            <li>Yoga Therapy</li>
            <li>Naturopathy</li>
            <li>Ayurveda</li>
            <li>Physiotherapy</li>
          </ul>
        </li>

        {/* Academics Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setDropdown({ ...dropdown, academics: true })}
          onMouseLeave={() => setDropdown({ ...dropdown, academics: false })}
        >
          Academics
          <ul className={`dropdown-menu ${dropdown.academics ? 'show' : ''}`}>
            <li>Undergraduate Programs</li>
            <li>Postgraduate Programs</li>
            <li>Research & Publications</li>
            <li>Student Resources</li>
          </ul>
        </li>

        <li>Events</li>
        <li>Life@ACNYS</li>
        <li>
          <button className="btn">Contact us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
