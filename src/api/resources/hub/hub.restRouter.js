import express from 'express'
import hubController from './hub.controller'

export const hubRouter = express.Router()

hubRouter.get('/creation', hubController.create)
hubRouter.get('/find', hubController.find)

hubRouter.all('*', (req, res) => {
  res.json({ok: 'fallback from hub'})
})
