import React, { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "SERVICES", href: "#services" },
    { name: "SKILLS", href: "#skills" },
    { name: "WORK", href: "#work" },
    { name: "TESTIMONIALS", href: "#testimonials" },
    { name: "MAP", href: "#map" },
  ];

  const handleClick = (href) => {
    setActive(href);
    setOpen(false);
  };

  const linkClass = (href) =>
    `transition ${
      active === href
        ? "text-[var(--primaryColor)] font-semibold"
        : "hover:text-[var(--primaryColor)]"
    }`;

  return (
    <header className="fixed w-full z-20 bg-white border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold font-script text-[var(--primaryColor)]">
          <a href="#home" onClick={() => handleClick("#home")}>
            TrustBrick
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {navItems.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                onClick={() => handleClick(href)}
                className={linkClass(href)}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <Hamburger toggled={isOpen} size={24} toggle={setOpen} />
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 w-full bg-gray-100 z-10 px-4 shadow-md"
            >
              <ul className="py-6 flex flex-col space-y-3 text-sm font-medium">
                {navItems.map(({ name, href }) => (
                  <li key={name}>
                    <a
                      href={href}
                      onClick={() => handleClick(href)}
                      className={linkClass(href)}
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
