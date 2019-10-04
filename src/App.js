import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { MainNavigator, NavigatorConfig} from "./Components/Menu/MainNavigator";

const App = createAppContainer(createDrawerNavigator(MainNavigator, NavigatorConfig));

export default App;