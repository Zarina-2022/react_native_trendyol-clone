import {StyleSheet} from 'react-native';
import {height, width} from '../utils/constants';

export const categoriesStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    marginTop: 15,
    paddingLeft: 10,
  },
  categoryText: {
    fontWeight: '600',
  },
});

export const widgetContainerStyles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    marginTop: 15,
  },
});

export const introductionStyles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  image: {
    width: width * 1,
    height: height * 0.2,
  },
});
