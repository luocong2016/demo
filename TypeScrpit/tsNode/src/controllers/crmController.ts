import * as mongoose from 'mongoose'
import { ContactSchema } from '../models/crmModel'
import { Request, Response } from 'express'

const Contact = mongoose.model('Contact', ContactSchema)

export class ContactController {
  public addNewContact(req: Request, res: Response) {
    const newContact = new Contact(req.body)

    newContact.save(
      (error, contact) => {
        error ? res.send(error) : res.json(contact)
      }
    )
  }

  public getContacts(req: Request, res: Response) {
    Contact.find(
      {},
      (error, contact) => {
        error ? res.send(error) : res.json(contact)
      }
    )
  }

  public getContactWithID(req: Request, res: Response) {
    const { contactId } = req.params

    Contact.findById(
      contactId,
      (error, contact) => {
        error ? res.send(error) : res.json(contact)
      }
    )
  }

  public updateContact(req: Request, res: Response) {
    const { contactId } = req.params

    Contact.findOneAndUpdate(
      { _id: contactId },
      req.body,
      { new: true },
      (error, contact) => {
        error ? res.send(error) : res.json(contact)
      }
    )
  }

  public deleteContact(req: Request, res: Response) {
    const { contactId } = req.params

    Contact.remove(
      { _id: contactId },
      error => {
        error ? res.send(error) : res.json({ message: '操作成功!' });
      }
    )
  }

}
