import Head from 'next/head'

import Filters from '@/components/Filters'
import Item from '@/components/Item'

export default function Browse() {
  let items: string[] = []

  return (
    <>
      <Head>
        <title>Browse Fiestaware</title>
      </Head>
      <div className="lg:flex">
        <Filters />
        <main id="main" className="scroll line">
          <div
            id="itemCards"
            className="flex flex-wrap justify-around lg:justify-start gap-4 m-8 ml-14"
          >
            {items.map((item, i) => (
              <p key={i}>{!!item && 'test'}</p>
              // <Item item={item} />
            ))}
          </div>
        </main>
      </div>
    </>
  )
}
