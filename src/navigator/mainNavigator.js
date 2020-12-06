import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings182519Navigator from '../features/Settings182519/navigator';
import UserProfile182512Navigator from '../features/UserProfile182512/navigator';
import Settings182511Navigator from '../features/Settings182511/navigator';
import Settings182509Navigator from '../features/Settings182509/navigator';
import SignIn2182507Navigator from '../features/SignIn2182507/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings182519: { screen: Settings182519Navigator },
UserProfile182512: { screen: UserProfile182512Navigator },
Settings182511: { screen: Settings182511Navigator },
Settings182509: { screen: Settings182509Navigator },
SignIn2182507: { screen: SignIn2182507Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
