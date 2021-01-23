import {StyleSheet} from 'react-native';
import COLORS from './colors';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.mainColor,
  },
  textTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.white,
  },
});
