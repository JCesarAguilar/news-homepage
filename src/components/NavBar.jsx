import BurgerMenu from "./BurgerMenu";

export const NavBar = () => {
  return (
    <>
      <BurgerMenu />
      <ul className="hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center text-dark-grayish-blue">
        <li>
          <a href="#" className="hover:text-soft-red">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-soft-red">
            New
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-soft-red">
            Popular
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-soft-red">
            Trending
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-soft-red">
            Categories
          </a>
        </li>
      </ul>
    </>
  );
};
