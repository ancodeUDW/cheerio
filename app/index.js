import {
    createDrawerNavigator,
} from 'react-navigation';

import IntroScreen      from './scenes/intro';
import HomeScreen       from './scenes/home';
import MessageScreen    from './scenes/message';
import HappyScreen      from './scenes/happyCombo';
import NeutralScreen    from './scenes/neutralCombo';
import SadScreen        from './scenes/sadCombo';
import AboutScreen      from './scenes/about';

const Cherio = createDrawerNavigator(
    {
        Intro:      { screen: IntroScreen },
        Home:       { screen: HomeScreen },
        Message:    { screen: MessageScreen },
        Happy:      { screen: HappyScreen },
        Neutral:    { screen: NeutralScreen },
        Sad:        { screen: SadScreen },
        About:      { screen: AboutScreen },
    },
    {
        initialRouteName: 'Intro', // the intro screen will do an animation
    }
);

export default Cherio;
