import { StatusBar } from 'expo-status-bar';
import Styles from './components/StylesAndHeightWidth/Styles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Button, Text, View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import FlatLists from './components/FlatLists/FlatLists';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator>
        <Stack.Screen name='home'
          component={Home}
          options={{ title: "Home" }} />

        <Stack.Screen name='style'
          component={Styles}
          options={{ title: "own styles" }} />

        <Stack.Screen name='flat'
          component={FlatLists}
          options={{ title: "Flat-List" }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Home = ({ navigation }) => {
  return <View style={{ flex: 1 }}>
    <Button
      title='Styles'
      onPress={() => { navigation.navigate('style', { placeholder: "Your good name..." }) }} />
    <Button
      title='FlatList'
      onPress={() => { navigation.navigate('flat') }} />

    <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
      <TouchableHighlight onPress={() => Alert.alert("TouchableHighlight")}>
        <View style={{ backgroundColor: "pink", padding: 10 }}>
          <Text>TouchableHighlight</Text>
        </View>
      </TouchableHighlight>

      <TouchableOpacity onLongPress={() => Alert.alert("TouchableOpacity")}>
        <View style={{ backgroundColor: "red", padding: 10 }}>
          <Text>TouchableOpacity</Text>
        </View>
      </TouchableOpacity>

      <TouchableNativeFeedback onPress={() => Alert.alert("TouchableNativeFeedback")}>
        <View style={{ backgroundColor: "yellow", padding: 10 }}>
          <Text>TouchableNativeFeedback</Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableWithoutFeedback onPress={() => Alert.alert("TouchableWithoutFeedback")}>
        <View style={{ backgroundColor: "lightgreen", padding: 10 }}>
          <Text>TouchableWithoutFeedback</Text>
        </View>
      </TouchableWithoutFeedback>

    </View>
  </View>
}
