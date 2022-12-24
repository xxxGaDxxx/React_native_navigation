import {useNavigation} from "@react-navigation/native";
import {Button, Text, View} from "react-native";
import {useAppNavigation} from "./types";

export const HomeScreen = () => {
  const navigation = useAppNavigation()


  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title={'Go to Details'} onPress={() => {
        navigation.navigate('Details')
      }}/>
    </View>
  );
}