import React from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  return (
    <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      <div className="text-2xl font-bold tracking-tight">KITCHEN ARCHITECT</div>
      <nav>
        <ul className="flex gap-8 text-sm">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.href}
                className={({ isActive }) => `
                  pb-1 
                  hover:text-gray-900 
                  transition-colors duration-200
                  ${isActive
                    ? 'border-b-2 border-gray-900 font-medium text-gray-900'
                    : 'border-b-2 border-transparent text-gray-600'
                  }`}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}