import React, {useState, useRef} from 'react';
import styles from '../styles/Header.module.scss';
import Link from 'next/link';

const HeaderComponent = () => {
    const [active, setActive] = useState('1'),
    linkContainer = useRef();

    const handleClick = (e) => {
        linkContainer.current.querySelectorAll('a').forEach(e => e.classList.remove('active'));
        e.currentTarget.classList.add('active');
        setActive(e.currentTarget.getAttribute('data-id'));
    }

    return (
        <header className={styles.header}>
            <div itemScope itemType="https://schema.org/Home" className={styles.logo}>
                <Link href="/"><a itemProp="url" onClick={() => setActive('1')}><span className={styles.logo}></span> </a></Link>
            </div>
            {/* <div ref={linkContainer} className={styles.links}>
                <Link href="/compress"><a className={active === '1' ? styles.active : styles.basic}  data-id="1" onClick={handleClick}>Compress</a></Link>
                <Link href="/converttojpg"><a className={active === '2' ? styles.active  : styles.basic} onClick={handleClick} data-id="2">To jpg</a></Link>
                <Link href="/converttopng"><a className={active === '3' ? styles.active  : styles.basic} onClick={handleClick} data-id="3">To png</a></Link>
            </div> */}
        </header>
    );
}

export default HeaderComponent;