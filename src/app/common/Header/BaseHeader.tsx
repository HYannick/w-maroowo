'use client'
import {PrismicNextLink} from '@prismicio/next';
import NextLink from '@/app/common/Header/NextLink';
import {HeaderWrapper, Logo, LogoWrapper, Navigation, NavigationItem} from '@/app/common/Header/Header.styles';

export default function BaseHeader({navigation}: any) {
  return (
    <HeaderWrapper >
      <LogoWrapper>
        <PrismicNextLink href="/">
          <Logo />
        </PrismicNextLink>
      </LogoWrapper>
      <Navigation>
        {navigation.data.navigationlinks.map((item: any) => (
          <NavigationItem key={JSON.stringify(item)}>
            <NextLink item={item} />
          </NavigationItem>
        ))}
      </Navigation>
    </HeaderWrapper>
  )
}
