import Image from 'next/image'

export default function Item() {
  const item_has_pic = true
  const item_name = 'test'
  const color_name = 'red'
  const item = true
  const quantity = 1

  function renderPic() {
    if (item_has_pic)
      return (
        <Image
          src="/img/items/{{item_id}}.webp"
          alt="dish"
          className="img w-[270px] h-[270px]"
        />
      )
    return (
      <Image
        src="/img/items/image_not_available.png"
        alt="not available"
        className="img w-[270px] h-[270px]"
      />
    )
  }
  return (
    <div
      id="card"
      className="container border-2 border-zinc-600 w-64 h-[363px] relative rounded"
      data-color="{{color_name}}"
      data-category="{{category_name}}"
      data-item="{{item_name}}"
      data-id="{{item_id}}"
    >
      {renderPic()}
      <div className="text-center flex justify-center items-center h-[89px] bg-zinc-600 text-white p-2">
        <p className="font-dosis text-xl row-span-4 col-span-5">{item_name}</p>
        {item && (
          <>
            <p className="font-dosis text-xl">{color_name}</p>
            <p className="font-dosis text-xl">Quantity: {quantity}</p>
          </>
        )}
      </div>
      <i className="addItem fa-solid fa-plus text-xl text-white absolute bottom-1 right-1 z-10 hover:text-orange-400"></i>
      <i className="edit fa-solid fa-pen-to-square text-white absolute right-2 bottom-2 hover:text-orange-400"></i>
    </div>
  )
}
