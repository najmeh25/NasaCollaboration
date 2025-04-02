// components/footer/SocialMediaItem.js

import Image from 'next/image';
import Link from 'next/link';

const SocialMediaItem = ({ url, title, icon }) => {
  return (
    <li>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <Image src={icon} alt={title} width={24} height={24} />
        {title}
      </Link>
    </li>
  );
};

export default SocialMediaItem;
