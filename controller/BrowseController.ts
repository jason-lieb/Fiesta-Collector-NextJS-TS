import { Item, Category, Color, Inventory } from '../models'

export class BrowseController {
  static async get() {
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

  static async getOne(id) {
    try {
      const itemObject = await Item.findByPk(id)
      const item = itemObject.get({ plain: true })
      const imagesNotAvailable = []
      const colorObjects = await Color.findAll()
      const colors = colorObjects.map(
        (data) => data.get({ plain: true }).color_name
      )
      return {
        item,
        // item_has_pic: !imagesNotAvailable.includes(item.id),
        has_pic: true,
        colors,
      }
    } catch (err) {
      return { Error: err }
    }
  }

  // static async postOne() {
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
