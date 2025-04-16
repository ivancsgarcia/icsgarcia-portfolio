import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-around bg-gray-100 p-8">
      <div>Ivan Garcia</div>
      <nav>
        <ul className="flex gap-8">
          <li className="hover:cursor-pointer hover:underline">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="hover:cursor-pointer hover:underline">
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li className="hover:cursor-pointer hover:underline">
            <NavLink to={"/projects"}>Projects</NavLink>
          </li>
          <li className="hover:cursor-pointer hover:underline">
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
