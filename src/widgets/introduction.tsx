import {Pressable} from 'react-native';
import {introductionStyles} from './styles';
import FastImage from 'react-native-fast-image';

const Introduction: React.FC = () => {

  return (
    <Pressable style={introductionStyles.container}>
      <FastImage
        source={{
          uri: 'https://www.ideasoft.com.tr/wp-content/uploads/2023/06/Trendyolda-En-Cok-Satilan-Urunler-2024-Incelemesi-1.png',
          priority: FastImage.priority.low,
          cache: FastImage.cacheControl.web, // birkez yuklendikten sonra sadece cache'ten alacak
        }}
        resizeMode={FastImage.resizeMode.contain}
        defaultSource={require('../assets/images/introd.png')}
        style={introductionStyles.image}
      />
    </Pressable>
  );
};

export default Introduction;
