import {createClient} from "@/prismicio";
import {SliceZone} from '@prismicio/react';
import {components} from '@/slices';

const queryAbout = () => {
  const client = createClient()
  return client.getSingle('about')
}

export default async function Page({params}: any) {
  const page = await queryAbout()
  return (
    <div className="container">
      <SliceZone slices={page.data.slices} components={components}/>
    </div>
  )
}