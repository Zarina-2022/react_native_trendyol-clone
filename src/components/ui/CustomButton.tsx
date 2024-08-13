import {Text, TouchableOpacity} from 'react-native';
import {buttonStyle} from './styles';
import {ButtonInterface} from '../../modals/ui/interface';

const CustomButton: React.FC<ButtonInterface> = ({
  title,
  onPress,
  BgColor,
  titleColor,
  style
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[buttonStyle.container, { backgroundColor: BgColor }, style]}>
      <Text style={[buttonStyle.text, {color: titleColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
