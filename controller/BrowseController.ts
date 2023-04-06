import { Item, Category, Color, Inventory } from '../models'
import { Item as ItemType } from '@/utils/types'
import { Result } from '@/utils/types'

type GetReturnType = {
  items: ItemType[]
  categories: string[]
  colors: string[]
}

export type GetOneReturnType = {
  item: ItemType
  colors: string[]
}

type PostOneReturnType = {
  inventory: ItemType[]
}

export class BrowseController {
  static async get(): Promise<Result<Error, GetReturnType>> {
    try {
      // Query all items
      const itemObjects = await Item.findAll({
        include: [{ model: Category }],
      })
      const dataForItems = itemObjects.map((data) => data.get({ plain: true }))
      // const imagesNotAvailable = []
      const items = dataForItems.map((data) => {
        return {
          id: data.id,
          name: data.item_name,
          // has_pic: !imagesNotAvailable.includes(data.id),
          has_pic: true,
          category_name: data.category.category_name,
        }
      })
      // Query all categories
      const categoryObjects = await Category.findAll()
      const categories = categoryObjects.map(
        (data) => data.dataValues.category_name
      )
      // Query all colors
      const colorObjects = await Color.findAll()
      const colors = colorObjects.map((data) => data.dataValues.color_name)
      return { success: true, value: { items, categories, colors } }
    } catch (err) {
      console.log('browseGetError', err)
      return { success: false, error: err }
    }
  }

  static async getOne(id: number): Promise<Result<Error, GetOneReturnType>> {
    try {
      const itemObject = await Item.findByPk(id)
      if (itemObject === null)
        return { success: false, error: 'No item with that ID' }
      const dataFromItem = itemObject.get({ plain: true })
      const item = { has_pic: true, ...dataFromItem }
      const colorObjects = await Color.findAll()
      const colors = colorObjects.map(
        (data) => data.get({ plain: true }).color_name
      )
      return {
        success: true,
        value: {
          item,
          colors,
        },
      }
    } catch (err) {
      console.log('browseGetOneError', err)
      return { success: false, error: err }
    }
  }

  // static async postOne(): Promise<PostOneReturnType> {
  //   try {
  //     const item_id = +req.params.id
  //     const user_id = req.session.user_id
  //     const color = await Color.findAll({
  //       where: { color_name: req.body.color },
  //     })
  //     const color_id = color[0].get({ plain: true }).id
  //     const quantity = +req.body.qty
  //     const createData = { user_id, item_id, color_id, quantity }
  //     const inventoryData = await Inventory.create(createData)
  //     return inventoryData
  //   } catch (err) {
  //     return { Error: err }
  //   }
  // }
}
