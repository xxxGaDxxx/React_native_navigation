import {StyleSheet, Text, View, Button} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UsersScreen} from "./src/screens/UsersScreen";
import {HomeScreen} from "./src/screens/HomeScreen";
import {DetailsScreen} from "./src/screens/DetailsScreen";
import {RootStackParamsList} from "./src/screens/types";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createDrawerNavigator} from "@react-navigation/drawer";


// const Stack = createNativeStackNavigator<RootStackParamsList>();

const Tab = createBottomTabNavigator<RootStackParamsList>();

// const Drawer = createDrawerNavigator<RootStackParamsList>();


export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/*<Stack.Navigator initialRouteName={'Home'}>*/}
        {/*  <Stack.Screen name={'Users'} component={UsersScreen}/>*/}
        {/*  <Stack.Screen name={'Home'} component={HomeScreen}/>*/}
        {/*  <Stack.Screen name={'Details'} component={DetailsScreen}/>*/}
        {/*</Stack.Navigator>*/}

        <Tab.Navigator screenOptions={{headerShown:false}}>
          <Tab.Screen name={'Users'} component={UsersScreen}/>
          <Tab.Screen name={'Home'} component={HomeScreen}/>
          <Tab.Screen name={'Details'} component={DetailsScreen}/>
        </Tab.Navigator>

        {/*<Drawer.Navigator screenOptions={{drawerPosition:'right'}}>*/}
        {/*<Drawer.Navigator >*/}
        {/*  <Drawer.Screen name={'Users'} component={UsersScreen}/>*/}
        {/*  <Drawer.Screen name={'Home'} component={HomeScreen}/>*/}
        {/*  <Drawer.Screen name={'Details'} component={DetailsScreen}/>*/}
        {/*</Drawer.Navigator>*/}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
