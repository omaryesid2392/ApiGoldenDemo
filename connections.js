
const admin = require('firebase-admin');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const { getAuth } = require('firebase-admin/auth');

const serviceAccount = require("./goldendemo-22081-firebase-adminsdk-i2oub-e677da7c1e.json");

const app = admin.initializeApp({ credential: admin.credential.cert(serviceAccount)});
//const db = app.firestore();
// const app = firebaseInit2.firestore();
let db = getFirestore();
let autenticacion = getAuth();
console.log('Firebase configurado');
module.exports = {db, autenticacion};