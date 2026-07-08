import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, Menu, X } from "lucide-react";
import { navLinks } from "../../constants/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const isDarkNav = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-md"
          : isDarkNav
            ? "border-b border-white/10 bg-slate-950/40 backdrop-blur-md"
            : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-xl text-white">
            <Plane size={20} />
          </div>

          <span
            className={`font-bold text-2xl transition-colors duration-300 ${
              isDarkNav ? "text-white" : "text-slate-900"
            }`}
          >
            TravelMind{" "}
            <span className={isDarkNav ? "text-blue-300" : "text-blue-600"}>
              AI
            </span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  isActive
                    ? isDarkNav
                      ? "font-semibold text-blue-300"
                      : "font-semibold text-blue-600"
                    : isDarkNav
                      ? "text-white/85 transition hover:text-white"
                      : "text-gray-700 transition hover:text-blue-600"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3">
          <Link
            to="/login"
            className={`rounded-full border px-5 py-2 transition ${
              isDarkNav
                ? "border-white/30 text-white hover:border-white/60 hover:bg-white/10"
                : "border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600"
            }`}
          >
            Login
          </Link>

          <Link
            to="/get-started"
            className={`rounded-full px-5 py-2 transition ${
              isDarkNav
                ? "bg-white text-slate-900 hover:bg-blue-50"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className={`md:hidden transition-colors ${
            isDarkNav ? "text-white" : "text-slate-800"
          }`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
        >
          {isMobileOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="bg-white shadow-md md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-5 gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                >
                  <NavLink
                    to={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}

              <Link
                to="/login"
                onClick={() => setIsMobileOpen(false)}
                className="border rounded-full py-2 text-center"
              >
                Login
              </Link>

              <Link
                to="/get-started"
                onClick={() => setIsMobileOpen(false)}
                className="bg-blue-600 text-white rounded-full py-2 text-center"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;