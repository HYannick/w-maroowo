'use client'
import {PrismicNextLink} from '@prismicio/next';
import {usePathname} from 'next/navigation';

export default function NextLink({item}: any) {
  const pathname = usePathname();
  return (
    <PrismicNextLink field={item.link} className={`text -bold ${pathname === item.link.url ? 'active' : ''}`}>
      {item.label[0].text}
    </PrismicNextLink>
  )
}