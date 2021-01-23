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

export const buttonStyles = StyleSheet.create({
  container: {
    height: '20%',
    width: '100%',
    margin: 10,
    padding: 10,
    borderRadius: 19,
    backgroundColor: COLORS.mainColorDark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: COLORS.white,
    fontSize: 30,
  },
});

export const listItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 19,
    backgroundColor: COLORS.lightGrey,
  },
});

export const itemStyles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 5,
    borderRadius: 10,
    backgroundColor: COLORS.white,
  },
  textItem: {
    fontSize: 40,
    color: COLORS.mainColorDark,
  },
});

export const itemSeperatorStyles = StyleSheet.create({
  container: {
    height: 1,
    width: '100%',
    backgroundColor: COLORS.black,
  },
});
