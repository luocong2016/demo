import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as mongoose from 'mongoose'
import serverConfig from './config/serverConfig'
import { Routes } from './routes/crmRoutes'

class App {
  public app: express.Application
  public routePrv: Routes = new Routes()

  constructor() {
    this.app = express()
    this.config()
    this.routePrv.routes(this.app)
    this.mongoSetup()
  }

  private config(): void {
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: false }))
    this.app.use(express.static('public'))
  }

  private mongoSetup(): void {
    mongoose.connect(
      serverConfig.mongoDB,
      { useNewUrlParser: true }
    )
    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error:'))
    db.once('open', () => console.log(`Connecting MongoDB successfully.`))
  }
}

export default new App().app
