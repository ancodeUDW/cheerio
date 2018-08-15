import {
    createStackNavigator,
} from 'react-navigation';

import HomeScreen       from './scenes/home';
import MessageScreen    from './scenes/message';
import AboutScreen      from './scenes/about';

const Cherio = createStackNavigator(
    {
        Home:       { screen: HomeScreen },
        Message:    { screen: MessageScreen },
        About:      { screen: AboutScreen },
    },
    {
        initialRouteName: 'Home',
    }
);

export default Cherio;
