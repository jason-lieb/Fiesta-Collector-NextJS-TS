import { FunctionComponent } from 'react'
import { GetServerSideProps, GetStaticProps } from 'next'
import Image from 'next/image'

import { BrowseController } from '../../../controller'
import { Item } from '@/utils/types'

type BrowseItemProps = {
  item: Item
  item_has_pic: boolean
  colors: string[]
}

const BrowseItem: FunctionComponent<BrowseItemProps> = ({
  item,
  item_has_pic,
  colors,
}) => {
  return (
    <div>
      <p className="font-dosis text-zinc-600 text-4xl mt-12 text-center underline">
        {item.item_name}
      </p>
      <div className="flex justify-center gap-24 mt-16">
        {!!item_has_pic ? (
          <Image
            src={`/items/${item.id}.webp`}
            alt="dish"
            className="border-4 border-zinc-600 rounded w-[400px] h-[400px]"
            width={400}
            height={400}
          />
        ) : (
          <Image
            src="/items/image_not_available.png"
            alt="not available"
            className="img w-[400px] h-[400px]"
            width={400}
            height={400}
          />
        )}
        <form>
          <div className="mb-10 w-1/5 lg:w-64">
            <p className="font-dosis text-2xl">Color</p>
            <select
              aria-label="Select Year"
              className="form-select appearance-none block w-full px-3 py-1.5 font-dosis text-zinc-500 bg-white bg-clip-padding bg-no-repeat border-2 border-solid border-zinc-600
        rounded transition ease-in-out m-0 focus:text-zinc-600 cursor-pointer focus:bg-white focus:border-zinc-600 focus:outline-none"
              defaultValue="Select one"
            >
              <option>Select one</option>
              {colors?.map((color, i) => (
                <option key={i} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col font-dosis gap-2">
            <label htmlFor="quantity" className="text-2xl">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              className="text-xl text-zinc-500 border-2 border-zinc-600 rounded p-1.5 pl-3"
              defaultValue="1"
              min="1"
            />
          </div>
          <button
            id="addItem"
            className="font-dosis border-2 border-zinc-600 rounded p-2 mt-14"
          >
            Add to Inventory
          </button>
        </form>
      </div>
    </div>
  )
}

export default BrowseItem

export const getServerSideProps: GetServerSideProps<BrowseItemProps> = async ({
  params,
}) => {
  const data = await BrowseController.getOne(params?.id)
  if (data?.Error) return console.log('Server Error')
  const { item, item_has_pic, colors } = data

  return {
    props: { item, item_has_pic, colors },
  }
}
