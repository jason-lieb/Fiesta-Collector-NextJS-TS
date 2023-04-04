const { User } = require('../models')

export class SignupController {
  static async post(req, res) {
    try {
      const userInfo = await User.create(req.body)
      res.status(200).json(userInfo)
    } catch (err) {
      return { Error: err }
    }
  }
}
