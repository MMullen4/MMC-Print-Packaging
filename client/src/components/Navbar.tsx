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

  const isActive = (path: string) =>
    location.pathname === path
      ? "text-blue-600 underline"
      : "text-gray-700 hover:text-blue-500";

  return (
    <Disclosure as="nav" className="bg-white shadow sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex-shrink-0">
                <img
                  src="/assets/MMC.svg"
                  alt="MMC Logo"
                  className="h-20 w-auto"
                />
              </Link>

              {/* Desktop Nav */}
              <div className="hidden md:flex space-x-6">
                {navLinks.map(({ name, path }) => (
                  <Link
                    key={name}
                    to={path}
                    className={`px-4 py-2 border border-blue-600 rounded-md text-lg font-semibold transition hover:bg-blue-600 hover:text-white ${isActive(
                      path
                    )}`}
                  >
                    {name}
                  </Link>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Nav */}
          <Disclosure.Panel className="md:hidden px-4 pb-3 pt-2">
            {navLinks.map(({ name, path }) => (
              <Disclosure.Button
                key={name}
                as={Link}
                to={path}
                className={`block py-2 text-base font-medium ${isActive(path)}`}
              >
                {name}
              </Disclosure.Button>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
