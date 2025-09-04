

import {fb, db} from '../firebase';

/**
 * @param col(collection), doc(document)
 */

export default {
  /**
   * @return object collection
   * @param col
   * @param doc
   * @param data
   */

  getAll: (col) => db.collection(col).where('status', '==', true).get().then((querySnapshot) => {
    let array = []
    querySnapshot.forEach((doc) => {
      let obj = doc.data()
      obj.id = doc.id
      array.push(obj)
    })
    return array
  }),
  getById: (col, doc) => db.collection(col).doc(doc).get().then((querySnapshot) => {
    return querySnapshot.data()
  }),
  create: (col, doc) => db.collection(col).add(doc).then((querySnapshot) => {
    return querySnapshot
  }),
  createUser: (col, doc) => db.collection(col).doc(doc.uid).set(doc).then((querySnapshot) => {
    return querySnapshot
  }),
  update: (col, doc, entity) => db.collection(col).doc(doc).update(entity).then((querySnapshot) => {
    return querySnapshot
  }),
  delete: (col, doc) => db.collection(col).doc(doc).delete().then((querySnapshot) => {
    return querySnapshot
  }),
  where: (col, filter, operator, value) => db.collection(col).where(filter, operator, value).get().then((querySnapshot) => {
    let values = []
    querySnapshot.forEach((doc) => {
      let obj = doc.data()
      obj.id = doc.id
      values.push(obj)
    })
    return values
  })
}
