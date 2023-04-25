import { MouseEventHandler, useState, FunctionComponent } from 'react'

type FilterProps = {
  filterName: FilterType
  filters: string[]
  selectedFilters: Set<string>
  setSelectedFilters: Function
}

type FilterType = 'Categories' | 'Colors' | 'Items'
type SelectType = 'select' | 'deselect'

export const Filter: FunctionComponent<FilterProps> = ({
  filterName,
  filters,
  selectedFilters,
  setSelectedFilters,
}) => {
  const [showFilter, setShowFilter] = useState(true)

  function toggleAccordion(target: HTMLTextAreaElement): void {
    toggleIcon(target)
    setShowFilter((showFilter) => !showFilter)
  }

  function toggleIcon(target: HTMLTextAreaElement): void {
    target.classList.toggle('fa-angle-down')
    target.classList.toggle('fa-angle-up')
  }

  function curriedFilterHandler(select: SelectType): Function {
    return (e: PointerEvent) => {
      const updated = new Set(selectedFilters)
      const target = e.target as HTMLAreaElement

      if (select === 'select') {
        updated.add(target?.outerText)
      } else {
        updated.delete(target?.outerText)
      }
      setSelectedFilters(updated)
    }
  }

  return (
    <div className="mb-3 w-64 relative">
      <i
        className="fa-angle-down fa-solid absolute top-1.5 left-44 lg:left-24"
        onClick={(e) => toggleAccordion(e.target as HTMLTextAreaElement)}
      ></i>
      <p className="font-dosis text-lg lg:mb-3">{filterName}</p>
      {showFilter && (
        <div className="accordion">
          <ul onClick={curriedFilterHandler('select') as MouseEventHandler}>
            {filters
              ?.filter((filter) => !selectedFilters.has(filter))
              .map((filter) => (
                <li className="font-dosis" key={filter}>
                  {filter}
                </li>
              ))}
          </ul>
          <br />
          <ul onClick={curriedFilterHandler('deselect') as MouseEventHandler}>
            {filters
              ?.filter((filter) => selectedFilters.has(filter))
              .map((filter) => (
                <li className="font-dosis" key={filter}>
                  {filter}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  )
}
