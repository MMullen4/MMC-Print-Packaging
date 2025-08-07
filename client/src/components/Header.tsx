import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="p-4 flex items-center justify-center">
      <Link to="/">
        <img
          src="/assets/MMC.svg"
          alt="MMC Logo"
          className="mx-auto mb-6 w-[90%] max-w-[150px] h-auto"
        />
      </Link>
    </header>
  );
}
