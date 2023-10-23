import {createClient} from '@/prismicio';
import BaseHeader from '@/app/common/Header/BaseHeader';

export default async function Header() {
  const client = createClient()
  const mainNavigation = await client.getSingle('main_navigation');

  return <BaseHeader navigation={mainNavigation} />
}
