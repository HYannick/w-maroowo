import {createClient} from '@/prismicio';
import BaseFooter from '@/app/common/Footer/BaseFooter';

export default async function Footer() {
  const client = createClient()
  const footerNavigation = await client.getSingle('footer_navigation');

  return <BaseFooter navigation={footerNavigation} />
}
