import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/navigation/RootNavigation';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {Text} from 'react-native';
import Spinner from './src/components/ui/Spinner';

const App: React.FC = () => {
  const linking = {
    prefixes: ['https://www.trendyol.com', 'trendyol://'],
    config: {
      screens: {
        productDetail: 'productDetail/:id',
      },
    },
  };

  return (
    <Provider store={store}>
      <NavigationContainer linking={linking} fallback={<Spinner />}>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
