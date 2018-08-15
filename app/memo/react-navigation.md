# react-navigation

## Base info
* to access to the navigation in a component you can use *this.props.navigation* - from here, navigation
* navigation has several functions:
    * **navigate('screen')** goes to the screen with the name 'screen'. If we are already in it it does nothing
    * **push('screen')** force to go to screen, and add is to the stack, even if we already are in that screen
    * **goBack()**: goes back an screen from the stack. In android it is equivalent to press the back button
    * **popToTop()**: goes back at the start of the stack

* navigation enables us to pass parameters:
    * **navigate('RouteName', { - params go here -})**
    * in the component we just navigate, we can get the parameters by using:
        **getParam(paramName, defaultValue)**.
    * As an alternative to getParam, you may use **navigation.state.params**. It is null if no parameters are specified.
    
## types of navigators:
* stack Navigator
    * creation: createStackNavigation
* drawerNavigation:
    * creation: createDrawerNavigator
* tab Navigator
    * creation: createBottomTabNavigator/createTopTabNavigation
    
## drawerNavigation:
until now we have used the default stackNavigation, but there are other navigators in react-navigation, one example is 
drawerNavigation, that can be created with:

*createDrawerNavigator*

DrawerNavigation has its own set of functions, in the navigation prop: 
* openDrawer();
* closeDrawer();
* toggleDrawer();

Each of these functions, behind the scenes, are simply dispatching actions:
* this.props.navigation.dispatch(DrawerActions.openDrawer());
* this.props.navigation.dispatch(DrawerActions.closeDrawer());
* this.props.navigation.dispatch(DrawerActions.toggleDrawer());


## postdata
note: navigate('screen') goes back to the stack if we go back an screen? test it out later

### sources:
https://reactnavigation.org/docs/en/getting-started.html