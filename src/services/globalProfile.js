import {fb, db} from '../firebase'

const user = fb.auth().currentUser
export default user
