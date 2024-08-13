import {createAsyncThunk} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import {Notification} from '../../modals/store/interface';

export const getFirestoreNotifications = createAsyncThunk<Notification[]>(
  'notifications/getFirestoreNotifications',
  async () => {
    const notificationsResponse: Notification[] = [];
    await firestore()
      .collection('Notification')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          notificationsResponse.push({
            id: documentSnapshot.id,
            description: documentSnapshot.data().description,
            productId: documentSnapshot.data().productId,
            title: documentSnapshot.data().title,
            url: documentSnapshot.data().url,
            date: documentSnapshot.data().date,
            hasSeen: documentSnapshot.data().hasSeen,
          });
        });
        //console.log('notificationsResponse', notificationsResponse);
      });
    return notificationsResponse;
  },
);

export const updateFirestoreNotifications = createAsyncThunk<void, string>(
  'notifications/updateFirestoreNotifications',
  async (id: string) => {
    await firestore().collection('Notification').doc(id).update({
      hasSeen: true,
    });
  },
);

export const addMessageNotificationsRemote = createAsyncThunk(
  'notifications/addMessageNotificationsRemote',
  async (params: object) => {
    await firestore()
      .collection('Notification')
      .add(params)
      .then(value => {
        console.log(value);
      })
      .catch(err => {
        console.log(err);
      });
  },
);
