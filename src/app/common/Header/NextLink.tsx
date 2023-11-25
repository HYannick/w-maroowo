'use client'
import {PrismicNextLink} from '@prismicio/next';
import {usePathname} from 'next/navigation';

export default function NextLink({item, link, label}: any) {
  const pathname = usePathname();
  return (
    <PrismicNextLink field={link || item.link} className={`text -bold ${pathname === (link || item.link).url ? 'active' : ''}`}>
      {label || item.label[0].text}
    </PrismicNextLink>
  )
}