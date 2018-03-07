import express from 'express'
import { hubRouter } from './resources/hub'
import { deliveryBoyRouter } from './resources/deliveryboy'
import { supervisorRouter } from './resources/supervisor'

export const restRouter = express.Router()

restRouter.use('/hub', hubRouter)
restRouter.use('/deliveryBoy', deliveryBoyRouter)
restRouter.use('/supervisor', supervisorRouter)

restRouter.all('*', (req, res) => {
  res.json({ok: 'fallback from rest'})
})

