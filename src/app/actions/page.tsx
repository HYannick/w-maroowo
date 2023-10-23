import { createClient } from "@/prismicio";
import {SliceZone} from '@prismicio/react';
import {components} from '@/slices';

const queryActions = () => {
  const client = createClient()
  return client.getSingle('actionslist')
}

export default async function Page({ params }:any) {
  const page = await queryActions()
  return (
    <div className="container">
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  )
}