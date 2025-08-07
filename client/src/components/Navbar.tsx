import { Link, useLocation } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <Disclosure
      as="nav"
      style={{
        backgroundColor: "#2563eb",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      {({ open }) => (
        <>
          <div
            style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "64px",
              }}
            >
              {/* Logo - Fixed on left */}
              <Link to="/" style={{ flexShrink: 0 }}>
                <img
                  src="/assets/MMC.svg"
                  alt="MMC Logo"
                  style={{
                    height: "60px",
                    width: "auto",
                    maxWidth: "120px",
                  }}
                />
              </Link>

              {/* Desktop Navigation */}
              <div
                style={{ display: "flex", gap: "32px" }}
                className="hidden md:flex"
              >
                {navLinks.map(({ name, path }) => (
                  <Link
                    key={name}
                    to={path}
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: isActive(path) ? "#1e40af" : "white",
                      backgroundColor: isActive(path)
                        ? "#ffffff"
                        : "transparent",
                      padding: "8px 16px",
                      borderRadius: "6px",
                      textDecoration: "none",
                      border: isActive(path)
                        ? "2px solid #1e40af"
                        : "2px solid transparent",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {name}
                  </Link>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Disclosure.Button
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8px",
                    borderRadius: "6px",
                    color: "white",
                    border: "none",
                    background: "transparent",
                  }}
                >
                  {open ? (
                    <XMarkIcon
                      style={{
                        display: "block",
                        height: "24px",
                        width: "24px",
                      }}
                    />
                  ) : (
                    <Bars3Icon
                      style={{
                        display: "block",
                        height: "24px",
                        width: "24px",
                      }}
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel
            style={{ backgroundColor: "#1d4ed8" }}
            className="md:hidden"
          >
            <div
              style={{
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {navLinks.map(({ name, path }) => (
                <Disclosure.Button
                  as={Link}
                  key={name}
                  to={path}
                  style={{
                    display: "block",
                    padding: "12px 16px",
                    fontSize: "16px",
                    fontWeight: "600",
                    color: isActive(path) ? "#1e40af" : "white",
                    backgroundColor: isActive(path) ? "#ffffff" : "transparent",
                    borderRadius: "6px",
                    textDecoration: "none",
                    border: isActive(path)
                      ? "2px solid #1e40af"
                      : "2px solid transparent",
                    textAlign: "left",
                    margin: "4px 0",
                    transition: "all 0.2s ease",
                  }}
                >
                  {name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
