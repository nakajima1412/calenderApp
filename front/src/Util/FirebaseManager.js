import firebase from 'firebase/app'
import 'firebase/firestore'

class FirebaseManager {
  constructor () {
    // Initialize Cloud Firestore through Firebase
    firebase.initializeApp({
      apiKey: process.env.VUE_APP_FB_API_KEY,
      authDomain: process.env.VUE_APP_FB_AUTH_DOMAIN,
      projectId: process.env.VUE_APP_FB_PROJECT_ID
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
