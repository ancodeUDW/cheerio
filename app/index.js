import {
    createAppContainer,
    createDrawerNavigator,
} from 'react-navigation';

import IntroScreen      from './scenes/intro';
import HomeScreen       from './scenes/home';
import HappyScreen      from './scenes/happyCombo';
import NeutralScreen    from './scenes/neutralCombo';
import SadScreen        from './scenes/sadCombo';
import AboutScreen      from './scenes/about';

const Cheerio = createDrawerNavigator(
    {
        Intro:      { screen: IntroScreen },
        Home:       { screen: HomeScreen },
        Happy:      { screen: HappyScreen },
        Neutral:    { screen: NeutralScreen },
        Sad:        { screen: SadScreen },
        About:      { screen: AboutScreen },
    },
    {
        initialRouteName: 'Intro', // the intro screen will do an animation
    }
);

const App = createAppContainer(Cheerio);

export default App;
