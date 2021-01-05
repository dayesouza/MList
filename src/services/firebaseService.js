import { firebase } from "../firebase/config";

export default class FirebaseService {
  static getDataOrdered = (nodePath, userId, orderedBy, callback) => {
    let query = firebase.firestore().collection(nodePath);
    query.where("authorID", "==", userId).orderBy(orderedBy, "desc");

    query.onSnapshot((dataSnapshot) => {
      let items = [];
      dataSnapshot.forEach((doc) => {
        const entity = doc.data();
        entity.id = doc.id;
        items.push(entity);
      });
      callback(items);
    });

    return query;
  };

  static saveData = (nodePath, object) => {
    let query = firebase.firestore().collection(nodePath);
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    object.createdAt = timestamp;
    return query.add(object);
  };
}
