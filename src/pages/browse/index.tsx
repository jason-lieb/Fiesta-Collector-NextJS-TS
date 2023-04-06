import { FunctionComponent, useState } from 'react'
import { GetServerSideProps } from 'next'

import { BrowseController } from '../../../controller'

import { Filters } from '@/components/Filters'
import { ItemCard } from '@/components/ItemCard'
import { Item, SelectedCategories } from '@/utils/types'

type BrowseProps =
  | {
      items: Item[]
      categories: string[]
      colors: string[]
      error: undefined
    }
  | {
      items: undefined
      categories: undefined
      colors: undefined
      error: unknown
    }

const Browse: FunctionComponent<BrowseProps> = ({
  items,
  categories,
  colors,
  error,
}) => {
  const [selectedCategories, setSelectedCategories] =
    useState<SelectedCategories>(new Set())

  if (error) {
    return <div>Error</div>
  }

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
          {items?.map((item, i) => (
            <ItemCard key={i} item={item} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Browse

export const getServerSideProps: GetServerSideProps<BrowseProps> = async () => {
  const data = await BrowseController.get()

  if (!data.success) return { props: { error: data.error } }

  const { items, categories, colors } = data.value

  return {
    props: {
      items,
      categories,
      colors,
    },
  }
}
