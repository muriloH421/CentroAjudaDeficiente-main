import styles from './Header.module.css'
import { Link, useLocation } from 'react-router-dom';

const navigation = [
    { path: "/centroajuda", element: "Centro de Ajuda" },
    { path: "/Login", element: "Login" },
];


const Header = () => {
    const location = useLocation();

    if (location.pathname === "/login") {
        return null;
    }


    return (
        <div className={styles.container}>
            <div>
                {navigation.map((nav) => (
                    <Link className="nav-link nav-item my-3 my-md-none mx-md-3" key={nav.name} to={nav.componente}>{nav.name}</Link>
                ))
                }
            </div>
        </div>
    )
}

export default Header
