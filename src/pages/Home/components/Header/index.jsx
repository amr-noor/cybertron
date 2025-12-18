import { NavLink } from "react-router";

import "./index.css";

const Header = () => <header>
    <nav>
        <NavLink to="/help">مساعدة</NavLink>
        <NavLink to="/play">العب</NavLink>
        <NavLink to="/">معلومات</NavLink>
    </nav>
</header>;

export default Header;