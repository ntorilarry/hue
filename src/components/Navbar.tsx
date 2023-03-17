import React, { useState } from "react";
import Logo from "../assets/logo/logo.png";
import Logoblack from "../assets/logo/logo-black.png";
import Switcher from "./Switcher";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <div>
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative flex items-center justify-between">
            <a
              href="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center"
            >
              <img className="hidden dark:block" src={Logo} alt="" />
              <img className="block dark:hidden" src={Logoblack} alt="" />
            </a>
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <Switcher />
              </li>
            </ul>
            <div className="lg:hidden">
              <Switcher />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
