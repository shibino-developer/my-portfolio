import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [insightsDropdownOpen, setInsightsDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleInsightsDropdown = () => setInsightsDropdownOpen(!insightsDropdownOpen);

  const navItems = [
    { label: 'About', to: 'about' },
    { label: 'Services', to: 'services' },
    { label: 'Technology', to: 'technology' },
    { label: 'Contact', to: 'contact' },
  ];

  const insightsSubmenu = [
    { label: 'Case Studies', to: 'case-studies' },
    { label: 'Whitepapers', to: 'whitepapers' },
    { label: 'Blog', to: 'blog' },
    { label: 'Designs', to: 'designs' },
  ];

  return (
    <header className="fixed w-full z-50 bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-lg font-bold text-[#ab0f09]">My Portfolio</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-800">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-[#ab0f09] transition"
            >
              {item.label}
            </Link>
          ))}

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
                  <Link
                    key={item.label}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {item.label}
                  </Link>
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
            <Link
              key={item.label}
              to={item.to}
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="block hover:text-[#ab0f09]"
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Dropdown */}
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
                  <Link
                    key={item.label}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className="block hover:text-[#ab0f09]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
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
