import {Button, Text, View} from "react-native";
import {useAppNavigation} from "./types";


export const SettingsScreen = () => {
  const navigation = useAppNavigation()

  // const {id, isWork, age, name} = route.params

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings Screen</Text>
      {/*<Button title={'Go to Home'} onPress={() => {*/}
      {/*  navigation.navigate('Home')*/}
      {/*}}/>*/}
    </View>
  );
}