import{ Logo,Person,Cart} from "../components/svg";
import { Link } from "react-router-dom";

const Navbar = () => {
    const linksleft = [
        {
            linktitle: "SHOP ALL",
            linkroute: "/shopall",
        },
        {
            linktitle: "PURIFICATION",
            linkroute: "/purification",
        },
        {
            linktitle: "HOME",
            linkroute: "/home",
        },
        {
            linktitle: "DRINKWARE",
            linkroute: "/drinkware",
        },
    ];
    const linksright = [
        {
            linktitle: "TECHNOLOGY",
            linkroute: "/technology",
        },
        {
            linktitle: "WATER QUALITY",
            linkroute: "/swipe",
        },
       
    ];

    return (
      <div className="w-full bg-white px-16 py-4">
        <nav className="flex justify-between items-center">
          <ul className="flex space-x-10">
            {linksleft.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.linkroute}
                  className="cursor-pointer font-semibold tracking-widest text-sm"
                >
                  {link.linktitle}
                </Link>
              </li>
            ))}
          </ul>
          <Logo />
          <ul className="flex space-x-12 items-center">
            {linksright.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.linkroute}
                  className="cursor-pointer font-semibold tracking-widest text-sm"
                >
                  {link.linktitle}
                </Link>
              </li>
            ))}
            <div className="flex space-x-3">
              <Person />
              <Cart />
            </div>
          </ul>
        </nav>
      </div>
    );
};

export default Navbar;
