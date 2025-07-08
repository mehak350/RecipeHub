import { GitHub, LinkedIn } from "@mui/icons-material";

import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f00a56] text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between items-center space-y-6 md:space-y-0">
          {/* Logo or Title */}
          <div className="text-xl font-bold">Recipe Hub</div>

          {/* Navigation Links */}
          <ul className="flex space-x-6 text-sm">
            <li>
              <Link to={"/"} className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to={"Services"} className="hover:text-gray-400">
                Services
              </Link>
            </li>
            <li>
              <Link to={"OurProcess"} className="hover:text-gray-400">
                Our Process
              </Link>
            </li>
            <li>
              <Link to={"AboutUs"} className="hover:text-gray-400">
                About
              </Link>
            </li>
          </ul>

          {/* Social Media Icons (use emoji or replace with icons) */}
          <div className="flex space-x-4 text-lg">
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-green  -400">
              <InstagramIcon />
            </a>
            <a
              target="_blank"
              href="https://github.com/mehak350/RecipeHub"
              aria-label="Instagram"
              className="hover:text-green  -400">
              <GitHub />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-green  -400">
              <LinkedIn />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Recipe Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
