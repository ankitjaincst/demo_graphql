import express from 'express'
import supervisorController from './supervisor.controller'

export const supervisorRouter = express.Router()

supervisorRouter.get('/creation', supervisorController.create)
supervisorRouter.get('/find', supervisorController.find)

supervisorRouter.all('*', (req, res) => {
  res.json({ok: 'fallback from supervisor'})
})
