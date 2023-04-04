import { FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

import { Item } from '@/utils/types'

type ItemProps = {
  item: Item
}

export const ItemCard: FunctionComponent<ItemProps> = ({ item }) => {
  const router = useRouter()

  return (
    <div
      id="card"
      className="container border-2 border-zinc-600 w-64 h-[363px] relative rounded"
    >
      {item?.item_has_pic ? (
        <Image
          src={`/items/${item.item_id}.webp`}
          alt={item.item_name}
          className="img w-[270px] h-[270px]"
          width={270}
          height={270}
        />
      ) : (
        <Image
          src="/items/image_not_available.png"
          alt="not available"
          className="img w-[270px] h-[270px]"
          width={270}
          height={270}
        />
      )}
      <div className="text-center flex justify-center items-center h-[89px] bg-zinc-600 text-white p-2">
        <p className="font-dosis text-xl row-span-4 col-span-5">
          {item.item_name}
        </p>
        {item?.color_name && (
          <>
            <p className="font-dosis text-xl">{item.color_name}</p>
            <p className="font-dosis text-xl">Quantity: {item.quantity}</p>
          </>
        )}
      </div>
      {router.pathname === '/' ? (
        <i className="edit fa-solid fa-pen-to-square text-white absolute right-2 bottom-2 hover:text-orange-400"></i>
      ) : (
        <Link href={`/browse/${item.item_id}`}>
          <i className="addItem fa-solid fa-plus text-xl text-white absolute bottom-1 right-1 z-10 hover:text-orange-400"></i>
        </Link>
      )}
    </div>
  )
}
