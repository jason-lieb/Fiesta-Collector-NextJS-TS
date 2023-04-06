import { useRouter } from 'next/router'
import { MouseEventHandler, useState, FunctionComponent } from 'react'

type FilterProps = {
  categories?: string[]
  colors?: string[]
  items?: string[]
  selectedCategories: Set<string>
  selectedColors?: Set<string>
  selectedItems?: Set<string>
}

type FilterType = 'categories' | 'colors' | 'items'

export const Filters: FunctionComponent<FilterProps> = ({
  categories,
  colors,
  items,
}) => {
  const router = useRouter()

  const [showCategories, setShowCategories] = useState(true)
  const [showColors, setShowColors] = useState(true)
  const [showItems, setShowItems] = useState(true)

  function curriedToggleAccordion(list: FilterType): Function {
    let setFunc: Function
    let currentState: boolean
    switch (list) {
      case 'categories':
        setFunc = setShowCategories
        currentState = showCategories
        break
      case 'colors':
        setFunc = setShowColors
        currentState = showColors
        break
      case 'items':
        setFunc = setShowItems
        currentState = showItems
        break
    }
    return (e: PointerEvent) => {
      toggleIcon(e.target as HTMLTextAreaElement)
      setFunc((currentState: boolean) => !currentState)
    }
  }

  function toggleIcon(target: HTMLTextAreaElement): void {
    target.classList.toggle('fa-angle-down')
    target.classList.toggle('fa-angle-up')
  }

  return (
    <aside id="filters" className="sm:w-full">
      <div className="text-center lg:text-left">
        <div className="flex flex-col items-center lg:items-start pt-3 ml-5">
          <div className="mb-3 w-64 relative">
            <i
              className="fa-angle-down fa-solid absolute top-1.5 left-44 lg:left-24"
              onClick={
                curriedToggleAccordion('categories') as MouseEventHandler
              }
            ></i>
            <p className="font-dosis text-lg lg:mb-3">Categories</p>
            <div className="accordion">
              <ul id="categoryFilters" onClick={(e) => console.log(e)}>
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
                <i
                  className="fa-angle-down fa-solid absolute top-1.5 left-40 lg:left-14"
                  onClick={
                    curriedToggleAccordion('colors') as MouseEventHandler
                  }
                ></i>
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
                <i
                  className="fa-angle-down fa-solid absolute top-1.5 left-40 lg:left-12"
                  onClick={curriedToggleAccordion('items') as MouseEventHandler}
                ></i>
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

const defaultProps: FilterProps = {
  categories: [],
  colors: [],
  items: [],
  selectedCategories: new Set(),
  selectedColors: new Set(),
  selectedItems: new Set(),
}

Filters.defaultProps = defaultProps
