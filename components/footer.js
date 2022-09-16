import React from 'react';
import styles from '../styles/Footer.module.scss';

const FooterComponent = () => {
    return (
        <footer className={styles.footer}>
            <span itemProp="copyright" className={styles.footerCopy}>Copyright © 2022 NEOSOFT</span>
        </footer>
    );
}

export default FooterComponent;