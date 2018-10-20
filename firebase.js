import { firebaseApp } from './firebaseConfig';

const db = firebaseApp.database();
const database = db.ref('database');
export const dbAdminRef = database.child('admin');
export const dbDoctorRef = database.child('doctor');
export const dbPatientRef = database.child('patient');
export const dbRequestedDoctorsRef = database.child('requested_doctors');