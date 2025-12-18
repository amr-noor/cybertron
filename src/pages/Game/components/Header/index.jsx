import { NavLink } from "react-router";

import "./index.css";

const Header = () => <header>
    <nav>
        <NavLink to="/help">
            <i className="fa-solid fa-circle-info"></i>
        </NavLink>
        <NavLink to="/play">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </NavLink>
    </nav>
</header>;

export default Header;