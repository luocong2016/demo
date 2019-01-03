import { Request, Response, NextFunction } from 'express'
import { ContactController } from '../controllers/crmController'

export class Routes {
  public contactController: ContactController = new ContactController()

  public routes(app): void {
    app.route('/').get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'GET request successfulll.'
      })
    })

    app
      .route('/contact')
      .get((req: Request, res: Response, next: NextFunction) => {
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        
        req.query.key !== 'lutz' ? res.status(401).send('验证未通过!') : next();
      }, this.contactController.getContacts)
      .post(this.contactController.addNewContact)

    app
      .route('/contact/:contactId')
      .get(this.contactController.getContactWithID)
      .put(this.contactController.updateContact)
      .delete(this.contactController.deleteContact)
  }
}
