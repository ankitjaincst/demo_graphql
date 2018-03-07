import bodyParser from 'body-parser'
import logger from 'morgan'

const setGlobalMiddleware = (app) => {
  app.use(logger('dev'));
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())
}

export default setGlobalMiddleware