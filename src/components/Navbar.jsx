import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [insightsDropdownOpen, setInsightsDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleInsightsDropdown = () => setInsightsDropdownOpen(!insightsDropdownOpen);

  // Nav items for scrolling on the same page (About, Services)
  const navItems = [
    { label: 'About', to: 'about' },
    { label: 'Services', to: 'services' },
  ];

  // Insights submenu (full pages)
  const insightsSubmenu = [
    { label: 'Case Studies', to: '/case-studies' },
    { label: 'Publications', to: '/publications' },
  ];

  return (
    <header className="fixed w-full z-50 bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-lg font-bold text-[#ab0f09]">My Portfolio</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-800">
          {/* Scroll links */}
          {navItems.map((item) => (
            <ScrollLink
              key={item.label}
              to={item.to}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-[#ab0f09] transition"
            >
              {item.label}
            </ScrollLink>
          ))}

          {/* Contact - Router Link */}
          <RouterLink
            to="/contact"
            className="hover:text-[#ab0f09] transition"
          >
            Contact
          </RouterLink>

          {/* Resume */}
          <RouterLink
            to="/resume"
            className="hover:text-[#ab0f09] transition"
          >
            Resume
          </RouterLink>

          {/* Insights Dropdown */}
          <div className="relative group">
            <button
              onClick={toggleInsightsDropdown}
              className="flex items-center gap-1 hover:text-[#ab0f09] transition"
            >
              Insights <ChevronDown size={16} />
            </button>
            {insightsDropdownOpen && (
              <div className="absolute bg-white shadow-md rounded mt-2 w-44 py-2 text-sm z-50">
                {insightsSubmenu.map((item) => (
                  <RouterLink
                    key={item.label}
                    to={item.to}
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setInsightsDropdownOpen(false)}
                  >
                    {item.label}
                  </RouterLink>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow px-4 py-4 space-y-3 text-sm font-medium text-gray-800">
          {navItems.map((item) => (
            <ScrollLink
              key={item.label}
              to={item.to}
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="block hover:text-[#ab0f09]"
            >
              {item.label}
            </ScrollLink>
          ))}

          {/* Contact */}
          <RouterLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-[#ab0f09]"
          >
            Contact
          </RouterLink>

          {/* Resume */}
          <RouterLink
            to="/resume"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-[#ab0f09]"
          >
            Resume
          </RouterLink>

          {/* Mobile Insights Dropdown */}
          <div>
            <button
              onClick={toggleInsightsDropdown}
              className="flex items-center gap-1 hover:text-[#ab0f09]"
            >
              Insights <ChevronDown size={16} />
            </button>
            {insightsDropdownOpen && (
              <div className="pl-4 space-y-1 mt-2">
                {insightsSubmenu.map((item) => (
                  <RouterLink
                    key={item.label}
                    to={item.to}
                    className="block hover:text-[#ab0f09]"
                    onClick={() => {
                      setMenuOpen(false);
                      setInsightsDropdownOpen(false);
                    }}
                  >
                    {item.label}
                  </RouterLink>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
