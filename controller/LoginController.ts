// const { User } = require('../models')

// import { Result } from '@/utils/types'

// type PostType = {
//   user: unknown ////////////////////
// }

// export class LoginController {
//   static async post(
//     email: string,
//     password: string
//   ): Promise<Result<Error, PostType>> {
//     try {
//       const dbUserData = await User.findOne({
//         where: { email },
//       })

//       if (!dbUserData) {
//         return {
//           success: false,
//           error: 'Incorrect email or password. Please try again!',
//         }
//       }

//       const validPassword = await dbUserData.checkPassword(password)

//       if (!validPassword) {
//         return {
//           success: false,
//           error: 'Incorrect email or password. Please try again!',
//         }
//       }

//       req.session.save(() => {
//         req.session.loggedIn = true
//         req.session.user_id = dbUserData.dataValues.id
//         res
//           .status(200)
//           .json({ user: dbUserData, message: 'You are now logged in!' })
//       })
//     } catch (err) {
//       return {
//         success: false,
//         error: err,
//       }
//     }
//   }

//   static redirect(req, res, next) {
//     // If the user is logged in, redirect them to the home route
//     if (req.session.loggedIn) {
//       if (req.method === 'GET') {
//         res.redirect('/')
//       } else if (req.method === 'POST') {
//         res.status(400).json({ message: 'User already logged in' })
//       }
//     } else {
//       next()
//     }
//   }
// }
