import {NavigationProp, NavigatorScreenParams, useNavigation} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type RootStackParamsList = {
  Home: undefined
  Details: NavigatorScreenParams<RootDetailsParamsList>

  Users: {
    id: number
    name: string
    age: number
    isWork: boolean
  }
}

export type RootDetailsParamsList = {
  Profile:undefined
  Settings: {
    profileId:string
  }
}

export type UsersScreenProps = NativeStackScreenProps<RootStackParamsList, 'Users'>;

export type NavigationUseType = NavigationProp<RootStackParamsList>
export const useAppNavigation = () => useNavigation<NavigationUseType>()
