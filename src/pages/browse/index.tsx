import { FunctionComponent, useState } from 'react'

import { BrowseController } from '../../../controller'

import { Filters } from '@/components/Filters'
import { ItemCard } from '@/components/ItemCard'
import { Item } from '@/utils/types'
import { GetStaticProps } from 'next'

type BrowseProps = {
  items: Item[]
  categories: string[]
  colors: string[]
}

export const Browse: FunctionComponent<BrowseProps> = ({
  items,
  categories,
  colors,
}) => {
  const [selectedCategories, setSelectedCategories] = useState(new Set())

  return (
    <div className="lg:flex">
      <Filters
        categories={categories}
        selectedCategories={selectedCategories}
      />
      <main id="main" className="scroll line">
        <div
          id="itemCards"
          className="flex flex-wrap justify-around lg:justify-start gap-4 m-8 ml-14"
        >
          {items.map((item, i) => (
            <ItemCard key={i} item={item} />
          ))}
        </div>
      </main>
    </div>
  )
}

export const getServerSideProps: GetStaticProps = async () => {
  const data = await BrowseController.get()
  if (data?.Error) return console.log('Server Error')
  const { items, categories, colors } = data

  return {
    props: { items, categories, colors },
  }
}
