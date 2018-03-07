import express from 'express'
import deliveryBoyController from './deliverboy.controller'

export const deliveryBoyRouter = express.Router()

deliveryBoyRouter.get('/creation', deliveryBoyController.create)
deliveryBoyRouter.get('/find', deliveryBoyController.find)

deliveryBoyRouter.all('*', (req, res) => {
  res.json({ok: 'fallback from deliveryBoy'})
})
