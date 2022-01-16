import React from 'react';
import styles from './Header.module.css';
//import nasaLogo from '../../../images/NASA_logo.svg.jpg';

const Header = () => {

    return(

        <div>
            <h1 className={styles.headerText}> Nasa UI Demo (OpenApi) </h1>
            <img className={styles.nasaLogo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png" />
        </div>

    )
}

export default Header;