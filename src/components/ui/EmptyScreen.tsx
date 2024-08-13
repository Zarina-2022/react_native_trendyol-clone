import {Text, View} from 'react-native';
import {EmptyScreenProps} from '../../modals/components/props';
import {emptyScreenStyle} from './styles';

const EmptyScreen: React.FC<EmptyScreenProps> = ({
  image,
  title,
  description1,
  description2,
  button,
}) => {
  return (
    <View style={emptyScreenStyle.container}>
      <View style={emptyScreenStyle.image}>{image}</View>
      <View style={emptyScreenStyle.textContainer}>
        <Text style={emptyScreenStyle.title}>{title}</Text>
        <Text style={emptyScreenStyle.description1}>{description1}</Text>
        <Text style={emptyScreenStyle.description2}>{description2}</Text>
        <View style={emptyScreenStyle.button}>{button}</View>
      </View>
    </View>
  );
};

export default EmptyScreen;
