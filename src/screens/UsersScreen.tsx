import {Button, Text, View} from "react-native";
import {useAppNavigation, UsersScreenProps} from "./types";


export const UsersScreen = ({route}: UsersScreenProps) => {
  const navigation = useAppNavigation()
  // console.log('route',JSON.stringify(route, null, 2))
  // console.log('params',JSON.stringify(route.params, null, 2))

  // const {id, isWork, age, name} = route.params

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Users Screen</Text>
      <Button title={'Go to Home'} onPress={() => {
        navigation.navigate('Home')
      }}/>
    </View>
  );
}