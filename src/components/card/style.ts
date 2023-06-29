import { StyleSheet } from "react-native";
import theme from '../../theme/index';

export const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    backgroundColor: theme.COLORS.GRAY_500,
    padding: 12,
    borderRadius: 7,
    marginVertical: 5,
  },

  text: {
    color: theme.COLORS.GRAY_200,
    marginLeft: 5,
    flex:1
  },




})
