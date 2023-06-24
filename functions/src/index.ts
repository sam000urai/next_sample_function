import * as admin from 'firebase-admin';
import * as next_sample from './next_sample';

// initialize
admin.initializeApp();
export const db = admin.firestore();

export { next_sample };
