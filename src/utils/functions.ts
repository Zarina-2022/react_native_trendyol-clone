import { Notification } from "../modals/store/interface";

// to toggle favorite items:
export const toggleFavorite = (products: any, id: number | string) => {
  const product = products.find(
    (prod: {id: string | number}) => prod.id === id,
  );
  if (product) {
    product.favorite = !product.favorite;
  }
};

//  Unique ID
export const generateUniqueId = () =>
  '_' + Math.random().toString(36).substring(2, 9);

// count number of notification:
export const countNotificationRead = (notifications: Array<Notification>) => {
  return notifications.filter((item: Notification) => !item.hasSeen).length;
};

