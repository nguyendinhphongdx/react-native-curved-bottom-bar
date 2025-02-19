[<img src="https://github.com/hoaphantn7604/file-upload/blob/master/document/navigationbar/react-native-curved-bottom-bar-demo.png">](https://github.com/hoaphantn7604/file-upload/blob/master/document/navigationbar/react-native-curved-bottom-bar-demo.png)

## react-native-curved-bottom-bar
A high performance, beautiful and fully customizable curved bottom navigation bar for React Native.
Implemented using [react-native-svg](https://github.com/react-native-svg/react-native-svg) and [@react-navigation/bottom-tabs](https://github.com/react-navigation/react-navigation).
## Getting started
```js
npm install react-native-curved-bottom-bar --save
```
or
```js
yarn add react-native-curved-bottom-bar
```
Now we need to install [react-native-svg](https://github.com/react-native-svg/react-native-svg) and [@react-navigation/bottom-tabs](https://reactnavigation.org/docs/bottom-tab-navigator/).

### Demo
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/navigationbar/react-native-curved-bottom-bar.gif)


### CurvedBottomBar.Navigator

| Props              | Params                                                | isRequire | Description                                                       |
|--------------------|-------------------------------------------------------| --------- |-------------------------------------------------------------------|
| type               | 'DOWN' or 'UP'                                        | Yes       | Type of the center tab item, downward curve or upward curve       |
| circlePosition     | 'CENTER' or 'LEFT' or 'RIGHT'                         | No        | Position of circle button                                         |
| initialRouteName   | String                                                | Yes       | The name of the route to render on first load of the navigator    |
| tabBar             | ({ routeName, selectedTab, navigate }) => JSX.Element | Yes       | Function that returns a React element to display as the tab bar   |
| renderCircle       | ({ routeName, selectedTab, navigate }) => JSX.Element | Yes       | Function that returns a React element to display as the center tab item |
| circleWidth        | Number                                                | No        | Customize width of the center tab item. Minimum is 50px and Maximum is 60px 
| style              | ViewStyle                                             | No        | Styling for container view                                        |
| width              | Number                                                | No        | Customize width for container view                                |
| height             | Number                                                | No        | Customize height for container view, Minimum is 50px and Maximum is 90px |
| borderTopLeftRight | Boolean                                               | No        | Border radius top left and top right of container view            |
| bgColor            | String                                                | No        | Background color of container view                                |
| strokeColor        | ColorValue                                            | No        | Navigator stroke color                                            |
| strokeWidth        | Number                                                | No        | Border width of container view                                    |


### CurvedBottomBar.Screen

| Props              | Params                        | isRequire | Description                                                                               |
| ------------------ | ----------------------------- | --------- | ----------------------------------------------------------------------------------------- |
| name               | String                        | Yes       | Name of the route to jump to                                                              |
| position           | 'LEFT' or 'RIGHT' or 'CIRCLE' | Yes       | Set position of tabbar icon to the left or right of the circle button. Use type "CIRCLE" only when you want the circle button is a tabview |
| component          | (props) => JSX.Element        | Yes       | Screen params to merge into the destination route                                         |

### API
| Function           | Params                        | Description                                                                               |
| ------------------ | ----------------------------- | ----------------------------------------------------------------------------------------- |
| setVisible         | Boolean                       | Used to hide/show the tab bar. Ex: ref.current.setVisible(false)                          |

### Example 1
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/navigationbar/react-native-curved-bottom-bar-1.png)
```javascript
  import React from 'react';
  import {
    Alert,
    Animated,
    StyleSheet,
    TouchableOpacity,
    View,
  } from 'react-native';
  import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import { NavigationContainer } from '@react-navigation/native';

  export const tabBar = () => {
    const _renderIcon = (routeName, selectedTab) => {
      let icon = '';

      switch (routeName) {
        case 'title1':
          icon = 'ios-home-outline';
          break;
        case 'title2':
          icon = 'settings-outline';
          break;
      }

      return (
        <Ionicons
          name={icon}
          size={25}
          color={routeName === selectedTab ? 'black' : 'gray'}
        />
      );
    };
    const renderTabBar = ({ routeName, selectedTab, navigate }) => {
      return (
        <TouchableOpacity
          onPress={() => navigate(routeName)}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {_renderIcon(routeName, selectedTab)}
        </TouchableOpacity>
      );
    };

    return (
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <CurvedBottomBar.Navigator
            style={styles.bottomBar}
            strokeWidth={0.5}
            strokeColor="#DDDDDD"
            height={55}
            circleWidth={50}
            bgColor="white"
            initialRouteName="title1"
            borderTopLeftRight
            renderCircle={({ selectedTab, navigate }) => (
              <Animated.View style={styles.btnCircle}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                  }}
                  onPress={() => Alert.alert('Click Action')}>
                  <Ionicons name={'apps-sharp'} color="gray" size={25} />
                </TouchableOpacity>
              </Animated.View>
            )}
            tabBar={renderTabBar}>
            <CurvedBottomBar.Screen
              name="title1"
              position="LEFT"
              component={() => (
                <View style={{ backgroundColor: '#BFEFFF', flex: 1 }} />
              )}
            />
            <CurvedBottomBar.Screen
              name="title2"
              component={() => (
                <View style={{ backgroundColor: '#FFEBCD', flex: 1 }} />
              )}
              position="RIGHT"
            />
          </CurvedBottomBar.Navigator>
        </NavigationContainer>
      </View>
    );
  };

  export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    button: {
      marginVertical: 5,
    },
    bottomBar: {},
    btnCircle: {
      width: 60,
      height: 60,
      borderRadius: 35,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      padding: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 0.5,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 1,
      bottom: 30,
    },
    imgCircle: {
      width: 30,
      height: 30,
      tintColor: 'gray',
    },
    img: {
      width: 30,
      height: 30,
    },
  });
```

### Example 2
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/navigationbar/react-native-curved-bottom-bar-2.png)
```js
  import React from 'react';
  import {
    Alert,
    Animated,
    StyleSheet,
    TouchableOpacity,
    View,
  } from 'react-native';
  import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import { NavigationContainer } from '@react-navigation/native';

  export const tabBar = () => {
    const _renderIcon = (routeName, selectedTab) => {
      let icon = '';

      switch (routeName) {
        case 'title1':
          icon = 'ios-home-outline';
          break;
        case 'title2':
          icon = 'settings-outline';
          break;
      }

      return (
        <Ionicons
          name={icon}
          size={25}
          color={routeName === selectedTab ? 'black' : 'gray'}
        />
      );
    };
    const renderTabBar = ({ routeName, selectedTab, navigate }) => {
      return (
        <TouchableOpacity
          onPress={() => navigate(routeName)}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {_renderIcon(routeName, selectedTab)}
        </TouchableOpacity>
      );
    };

    return (
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <CurvedBottomBar.Navigator
            type="UP"
            style={styles.bottomBar}
            strokeWidth={0.5}
            strokeColor="#DDDDDD"
            height={55}
            circleWidth={50}
            bgColor="white"
            initialRouteName="title1"
            borderTopLeftRight
            renderCircle={({ selectedTab, navigate }) => (
              <Animated.View style={styles.btnCircleUp}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                  }}
                  onPress={() => Alert.alert('Click Action')}>
                  <Ionicons name={'apps-sharp'} color="gray" size={25} />
                </TouchableOpacity>
              </Animated.View>
            )}
            tabBar={renderTabBar}>
            <CurvedBottomBar.Screen
              name="title1"
              position="LEFT"
              component={() => (
                <View style={{ backgroundColor: '#BFEFFF', flex: 1 }} />
              )}
            />
            <CurvedBottomBar.Screen
              name="title2"
              component={() => (
                <View style={{ backgroundColor: '#FFEBCD', flex: 1 }} />
              )}
              position="RIGHT"
            />
          </CurvedBottomBar.Navigator>
        </NavigationContainer>
      </View>
    );
  };

  export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    button: {
      marginVertical: 5,
    },
    bottomBar: {},
    btnCircleUp: {
      width: 60,
      height: 60,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#E8E8E8',
      bottom: 18,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 1,
    },
    imgCircle: {
      width: 30,
      height: 30,
      tintColor: 'gray',
    },
    img: {
      width: 30,
      height: 30,
    },
  });
```

[<img src="https://github.com/hoaphantn7604/file-upload/blob/master/document/profile/hoa_phan_dev_banner.png">](https://www.youtube.com/channel/UClwDARgTpIwOOugYtgEW1Uw?sub_confirmation=1)
