"use client"
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import Link from 'next/link'

import styles from './Navbar.module.css';

const navbarItems = [
  {
    title: 'ABOUT US',
    link: '/about_us',
  },
  {
    title: 'DESTINATION',
    link: '/destination',
  },
  {
    title: 'NASA COLLABORATION',
    link: '/nasa_collaboration',
  }
];

// NavItem component
const NavItem = ({ title, link, isActive }) => {
  return (
    <li className={classNames(styles.navbarLinks, { [styles.isLinkActive]: isActive })}>
      <Link href={link}><b>{title}</b></Link>
    </li>
  );
};


export const Navbar = () => {
  const currentPath = usePathname()

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <a href="/"><img src="/shared/logo.svg" alt="" /> GALACTICA</a>
      </div>
      <div className={styles.decorativeLine} />
      <nav className={styles.navbar}>
        <div className={styles.navbarBG} />
        <ul className={styles.navbarList}>
          {/* TASK - React 1 week 2 */}
          {/* Create a <NavItem> component, which accepts the following:  */}
          {/* title, link, isActive  */}
               
          {/* TASK - React 1 week 3 */}
          {/* replace repeating content by using navbarItems.map(() => <NavLink />) */}
          {navbarItems.map((item) => (
            <NavItem 
              key={item.link} 
              title={item.title} 
              link={item.link} 
              isActive={item.link === currentPath} 
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}