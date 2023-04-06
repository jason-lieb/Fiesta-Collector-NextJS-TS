export type Item = {
  id: number
  has_pic: boolean
  name: string
  category_name: string
  color_name?: string
  quantity?: number
}

export type Result<Error, Value> =
  | {
      success: false
      error: unknown
    }
  | {
      success: true
      value: Value
    }

export type SelectedCategories = Set<string>
