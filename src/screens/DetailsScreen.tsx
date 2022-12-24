import {useNavigation} from "@react-navigation/native";
import {Button, Text, View} from "react-native";
import {RootDetailsParamsList, useAppNavigation} from "./types";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ProfileScreen} from "./ProfileScreen";
import {SettingsScreen} from "./SettingsScreen";


const Stack = createNativeStackNavigator<RootDetailsParamsList>();

export const DetailsScreen = () => {
  const navigation = useAppNavigation()

  return (
    <View style={{flex: 1}}>
      <Stack.Navigator>
        <Stack.Screen name={'Profile'} component={ProfileScreen}/>
        <Stack.Screen name={'Settings'} component={SettingsScreen}/>
      </Stack.Navigator>
      {/*<Text>Details Screen</Text>*/}
      {/*<Button title={'Go to Users'} onPress={() => {*/}
      {/*  navigation.navigate('Users', {id: 100, name: 'Vlad', age: 24, isWork: false})*/}
      {/*}}/>*/}
    </View>
  );
}