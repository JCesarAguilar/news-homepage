import { useState } from "react";
import burgerMenu from "../assets/images/icon-menu.svg";
import close from "../assets/images/icon-menu-close.svg";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="sm:hidden">
        <img
          className="w-10 h-4 cursor-pointer"
          src={burgerMenu}
          alt="Menu hamburguesa"
        />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black opacity-50 sm:hidden z-40"></div>
          <div className="fixed top-0 right-0 w-2/3 h-full bg-white shadow-lg p-6 z-50 sm:hidden">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-5"
            >
              <img src={close} alt="close" />
            </button>

            <nav className="mt-28 space-y-5">
              <a href="#" className="block text-lg hover:text-red-500">
                Home
              </a>
              <a href="#" className="block text-lg hover:text-red-500">
                New
              </a>
              <a href="#" className="block text-lg hover:text-red-500">
                Popular
              </a>
              <a href="#" className="block text-lg hover:text-red-500">
                Trending
              </a>
              <a href="#" className="block text-lg hover:text-red-500">
                Categories
              </a>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
