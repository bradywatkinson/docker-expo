import { createStackNavigator } from 'react-navigation';

import SignInScreen from 'app/screens/SignInScreen';

const AuthStack = createStackNavigator({
  SignIn: SignInScreen,
});

export default AuthStack;
