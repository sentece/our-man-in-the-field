import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { MainNavigator } from "./Menu/MainNavigator";

const App = createAppContainer(createDrawerNavigator(MainNavigator));

export default App;