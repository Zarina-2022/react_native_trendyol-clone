import {StyleSheet} from 'react-native';

export const profileCardStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:20  
  },
  text: {
    fontSize: 16,
  },
  iconContainer: {
    width: 50,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
