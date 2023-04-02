import User from './User'
import Inventory from './Inventory'
import Category from './Category'
import Item from './Item'
import Color from './Color'

// One (Category) to Many (Item) Association
Item.belongsTo(Category, {
  foreignKey: 'category_id',
})

Category.hasMany(Item, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
})

// One (Item) to Many (Inventory) Association
Inventory.belongsTo(Item, {
  foreignKey: 'item_id',
})

Item.hasMany(Inventory, {
  foreignKey: 'item_id',
  onDelete: 'CASCADE',
})

// One (Color) to Many (Inventory) Association
Inventory.belongsTo(Color, {
  foreignKey: 'color_id',
})

Color.hasMany(Inventory, {
  foreignKey: 'color_id',
  onDelete: 'CASCADE',
})

// One (User) to Many (Inventory) Association
Inventory.belongsTo(User, {
  foreignKey: 'user_id',
})

User.hasMany(Inventory, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
})

export { User, Inventory, Category, Item, Color }
