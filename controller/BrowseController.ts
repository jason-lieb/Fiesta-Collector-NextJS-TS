import { Item, Category, Color, Inventory } from '../models'
import { Item as ItemType } from '@/utils/types'

type GetReturnType =
  | {
      item: ItemType
      categories: string[]
      colors: string[]
    }
  | { Error: any }

type GetOneReturnType =
  | {
      item: ItemType
      colors: string[]
    }
  | { Error: any }

type PostOneReturnType =
  | {
      inventory: ItemType[]
    }
  | { Error: any }

export class BrowseController {
  static async get(): Promise<GetReturnType> {
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
      return { items, categories, colors }
    } catch (err) {
      return { Error: err }
    }
  }

  static async getOne(id: number): Promise<GetOneReturnType> {
    try {
      const itemObject = await Item.findByPk(id)
      const dataFromItem = itemObject?.get({ plain: true })
      const item = { has_pic: true, ...dataFromItem }
      // const imagesNotAvailable = []
      const colorObjects = await Color.findAll()
      const colors = colorObjects.map(
        (data) => data.get({ plain: true }).color_name
      )
      return {
        item,
        // item_has_pic: !imagesNotAvailable.includes(item.id),
        colors,
      }
    } catch (err) {
      return { Error: err }
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
