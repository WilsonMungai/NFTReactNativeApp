import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { usedFonts } from 'expo-font';

import Home from './screens/Home';
import Details from './screens/Details'

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

const App = () => {

  // Initializing fonts
  const [loaded] = usedFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./asssets/fonts/Inter-SemiBold.ttf"),
    InterRegular: require("./asssets/fonts/Inter-Regular.ttf"),
    InterLight: require("./asssets/fonts/Inter-Light.ttf"),
    InterMedium: require("./asssets/fonts/Inter-Medium.ttf")
  });

  if(!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
     <Stack.Navigator screenOptions={{ headerShown: false }}
      initialRouteName="Home">
       <Stack.Screen name="Home" component={Home} />
       <Stack.Screen name="Details" component={Details} />
     </Stack.Navigator>
    </NavigationContainer>
   );
}

export default App;