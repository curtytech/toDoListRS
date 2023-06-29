import { StatusBar } from 'react-native';
import { Text, View } from 'react-native';
import { Home } from "./src/screens/Home";

import theme from './src/theme';


export default function App() {
  return (
    <View style={{
      backgroundColor: theme.COLORS.GRAY_600,
      height: 10000
    }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </View>
  );
}

