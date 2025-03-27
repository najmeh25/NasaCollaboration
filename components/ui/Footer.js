"use client"

import { usePathname } from 'next/navigation';
import styles from './Footer.module.css';
import Link from 'next/link';
import SocialMediaItem from '@/components/SocialMediaItem'; 

// TASK - React 1 week 2
const PageLinkItem = ({ href, title }) => {
  return (
    <li>
      <Link href={href}>{title}</Link>
    </li>
  );
};
export const Footer = () => {
  const path = usePathname().split('?')[0];
  return (
    <footer className={path !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>Explore the universe and beyond. Your journey to the stars starts here.</p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>
      {/* TASK - React 1 week 2 */}
      {/* Create a new List for the Pages */}
      {/* We need to use the <Link /> component here */}
      {/* <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          <li> <Link/> </li>
          ...
        </ul>
      </div> */}
      {/* Docs for the Link: https://nextjs.org/docs/pages/api-reference/components/link */}


      {/* ✅ list of page*/}
      <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          <PageLinkItem href="/" title="Home" />
          <PageLinkItem href="/destination" title="Destinations" />
          <PageLinkItem href="/about" title="About Us" />
          <PageLinkItem href="/contact" title="Contact" />
        </ul>
      </div>

    
      {/* TASK - React 1 week 1 */}
      {/* Add a new list item for LINKEDIN */}
      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
  <SocialMediaItem url="https://facebook.com" title="Facebook" icon="/socialmedia/image1.png" />
  <SocialMediaItem url="https://instagram.com" title="Instagram" icon="/socialmedia/image3.png" />
  <SocialMediaItem url="https://tiktok.com" title="Tiktok" icon="/socialmedia/image4.png" />
  <SocialMediaItem url="https://linkedin.com" title="LinkedIn" icon="/socialmedia/image2.png" />
      </ul>

          {/* TASK - React 1 week 2 */}
          {/* Create a <SocialMediaItem /> component and replace all of the list items! */}
          {/* it should accept the following props */}
          {/* url, title, icon */}
          {/* For the icons, you can download 1-2 social media icons for testing and put it in the /public/socialmedia/ folder */}
       
      </div>
    </footer>
  );
}
