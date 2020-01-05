import firebase from 'firebase/app'
import 'firebase/firestore'

class FirebaseManager {
  constructor () {
    // Initialize Cloud Firestore through Firebase
    firebase.initializeApp({
      apiKey: '',
      authDomain: '',
      projectId: ''
    })
    this.db = firebase.firestore()
  }
  /**
   * Firebaseからデータを取得
   */
  fetchFromFirebase () {
    return this.db
      .collection('calEvent')
      .get()
  }
  commitToFirebase (data) {
    return this.db.collection('calEvent').add(data)
  }
  /**
   * Firebeseのデータを更新
   * @param {Object} data
   * @returns {Promise}
   */ 
  updateFromFirebase (data) {
    return this.db
      .collection('calEvent')
      .doc(data.id)
      .update({
        details: data.details
      })
  }
  /**
   * Firebaseのデータを削除
   * @param {Object} data
   * @returns {Promise}
   */
  deleteFromFirebase (data) {
    return this.db
      .collection('calEvent')
      .doc(data)
      .delete();
  }
}

export default new FirebaseManager()
