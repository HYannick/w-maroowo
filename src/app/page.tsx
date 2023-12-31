import { createClient } from "@/prismicio";
import {SliceZone} from '@prismicio/react';
import {components} from '@/slices';

export default async function Home({ params }:any) {
  const client = createClient()
  const page = await client.getSingle('home')
  return (
    <>
      <SliceZone slices={page.data.slices} components={components} />
    </>);
}