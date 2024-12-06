import styles from './Footer.module.css'

import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();

    if (location.pathname === "/login") {
        return null;
    }
    return (
        <div className={styles.NewBoardBoard_header11}>
            <footer>
                <h3 >
                    feito por ℳurilo &amp; Eduflippi
                </h3>
            </footer>
        </div >
    )
}

export default Footer
