import { FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import { Filter } from './Filter'

type FilterProps = {
  categories: string[]
  colors?: string[]
  items?: string[]
  selectedCategories: Set<string>
  selectedColors?: Set<string>
  selectedItems?: Set<string>
  setSelectedCategories: Function
  setSelectedColors?: Function
  setSelectedItems?: Function
}

export const Filters: FunctionComponent<FilterProps> = ({
  categories,
  selectedCategories,
  setSelectedCategories,
  colors,
  selectedColors,
  setSelectedColors,
  items,
  selectedItems,
  setSelectedItems,
}) => {
  const router = useRouter()

  return (
    <aside id="filters" className="sm:w-full">
      <div className="text-center lg:text-left">
        <div className="flex flex-col items-center lg:items-start pt-3 ml-5">
          <Filter
            filterName={'Categories'}
            filters={categories}
            selectedFilters={selectedCategories}
            setSelectedFilters={setSelectedCategories}
          />

          {router.pathname === '/' && (
            <>
              {selectedColors && setSelectedColors && (
                <Filter
                  filterName={'Colors'}
                  filters={colors as string[]}
                  selectedFilters={selectedColors}
                  setSelectedFilters={setSelectedColors}
                />
              )}
              {selectedItems && setSelectedItems && (
                <Filter
                  filterName={'Items'}
                  filters={items as string[]}
                  selectedFilters={selectedItems}
                  setSelectedFilters={setSelectedItems}
                />
              )}
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
  setSelectedCategories: () => {},
  setSelectedColors: () => {},
  setSelectedItems: () => {},
}

Filters.defaultProps = defaultProps
