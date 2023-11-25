'use client'
import NextLink from '@/app/common/Header/NextLink';
import {FooterNavListContainer} from '@/app/common/Footer/Footer.styles';

export default function FooterNavList({linkList, title}: { linkList: any[], title: string }) {
  return (
    <FooterNavListContainer>
      <h4 className="footer-nav-list-heading">
        {title}
      </h4>
      <div className="footer-nav-list-items">
        <ul>
          {
            linkList.map((item) => (
              <li key={item.label[0]!.text}>
                <NextLink className="link-style" item={item} target="_blank">{item.label[0]!.text}</NextLink>
              </li>
            ))
          }
        </ul>
      </div>
    </FooterNavListContainer>
  )
}
