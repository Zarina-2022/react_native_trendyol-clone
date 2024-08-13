import { StyleProp, ViewStyle } from "react-native";

export interface ButtonInterface {
    title: string;
    onPress: () => void;
    BgColor: string;
    titleColor: string;
    style?: StyleProp<ViewStyle>; 
  }
  