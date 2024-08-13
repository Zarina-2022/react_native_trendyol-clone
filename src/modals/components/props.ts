import { User } from "../auth/interface";
import { Notification } from "../store/interface";

export interface CustomInputProps {
  placeholder: string;
}
export interface WidgetHeaderProps {
  widgetTitle: string;
  seeAll: string;
  category: string;
}

// empty screens props

export interface EmptyScreenProps {
  image: React.ReactNode; // data: lottie animation .json format
  title: string;
  description1?: string;
  description2?: string;
  button: React.ReactNode; // custom button component
}

// ProfileCard component:
export interface ProfileCardProps {
  user: User;
}

// Notification component:
export interface NotificationCardProps {
  item: Notification;
}


