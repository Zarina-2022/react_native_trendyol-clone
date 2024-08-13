import { View} from 'react-native';
import LottieView from 'lottie-react-native';
import {spinnerStyles} from './styles';

interface SpinnerProps {
  message?: string;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = () => {
  return (
    <View>
      <LottieView
        source={require('../../assets/animations/spinner.json')}
        style={spinnerStyles.spinner}
        autoPlay
        loop
      />
    </View>
  );
};
export default Spinner;
