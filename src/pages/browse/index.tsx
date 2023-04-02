import Filters from '@/components/Filters'
import Item from '@/components/Item'

import BrowseController from '../../../controller/BrowseController'

export default function Browse({ items, categories, colors }) {
  return (
    <>
      <div className="lg:flex">
        <Filters categories={categories} colors={colors} items={items} />
        <main id="main" className="scroll line">
          <div
            id="itemCards"
            className="flex flex-wrap justify-around lg:justify-start gap-4 m-8 ml-14"
          >
            {items.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </div>
        </main>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const data = await BrowseController.get()
  if (data?.Error) return console.log('Server Error')
  const { items, categories, colors } = data

  return {
    props: { items, categories, colors },
  }
}
