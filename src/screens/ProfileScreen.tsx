import {Button, Text, View} from "react-native";
import {useAppNavigation} from "./types";


export const ProfileScreen = () => {
  const navigation = useAppNavigation()

  // const {id, isWork, age, name} = route.params

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      <Button title={'Go to Settings'} onPress={() => {
        navigation.navigate('Details',{screen:'Settings',params:{profileId:'45asd'}})
      }}/>
    </View>
  );
}