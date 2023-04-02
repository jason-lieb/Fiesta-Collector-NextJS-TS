import { useRouter } from 'next/router'

export default function Filters({ categories, colors, items }) {
  const router = useRouter()

  return (
    <aside id="filters" className="sm:w-full">
      <div className="text-center lg:text-left">
        <div className="flex flex-col items-center lg:items-start pt-3 ml-5">
          <div className="mb-3 w-64 relative">
            <i className="fa-angle-down fa-solid absolute top-1.5 left-44 lg:left-24"></i>
            <p className="font-dosis text-lg lg:mb-3">Categories</p>
            <div className="accordion">
              <ul id="categoryFilters">
                {categories?.map((category) => (
                  <li className="font-dosis" key={category}>
                    {category}
                  </li>
                ))}
              </ul>
              <br />
              <ul id="selectedCategoryFilters"></ul>
            </div>
          </div>
          {router.pathname === '/' && (
            <>
              <div className="mb-3 w-64 relative">
                <i className="fa-angle-down fa-solid absolute top-1.5 left-40 lg:left-14"></i>
                <p className="font-dosis text-lg lg:mb-3">Colors</p>
                <div className="accordion">
                  <ul id="colorFilters">
                    {colors?.map((color) => (
                      <li className="font-dosis" key={color}>
                        {color}
                      </li>
                    ))}
                  </ul>
                  <br />
                  <ul id="selectedColorFilters"></ul>
                </div>
              </div>
              <div className="mb-3 w-64 relative">
                <i className="fa-angle-down fa-solid absolute top-1.5 left-40 lg:left-12"></i>
                <p className="font-dosis text-lg lg:mb-3">Items</p>
                <div className="accordion">
                  <ul id="itemFilters">
                    {items?.map((item) => (
                      <li className="font-dosis" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <br />
                  <ul id="selectedItemFilters"></ul>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </aside>
  )
}
