import { NavigationContainer } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import {
  CurvedBottomBar,
  ICurvedBottomBarRef,
} from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native-size-scaling';

StatusBar.setBarStyle('dark-content');

const RenderScreen = () => {
  return <View style={styles.screen} />;
};

const ThemeScreen = () => {
  const ref = useRef<ICurvedBottomBarRef>(null);
  const [type] = useState<'DOWN' | 'UP'>('DOWN');

  const _renderIcon = (routeName: string, selectedTab: string) => {
    let icon = '';

    switch (routeName) {
      case 'title1':
        icon = 'ios-home-outline';
        break;
      case 'title2':
        icon = 'apps-outline';
        break;
      case 'title3':
        icon = 'bar-chart-outline';
        break;
      case 'title4':
        icon = 'person-outline';
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={23}
        color={routeName === selectedTab ? '#FF3030' : 'gray'}
      />
    );
  };

  return (
    <View style={styles.container}>
      <CurvedBottomBar.Navigator
        ref={ref}
        type={type}
        circlePosition={'CENTER'}
        height={55}
        circleWidth={50}
        bgColor="white"
        borderTopLeftRight
        initialRouteName="title1"
        renderCircle={({ routeName, selectedTab, navigate }) => (
          <TouchableOpacity
            style={[type === 'DOWN' ? styles.btnCircle : styles.btnCircleUp]}
            onPress={() => {
              navigate(routeName);
            }}
          >
            <Ionicons
              name="chatbubbles-outline"
              size={23}
              color={selectedTab === routeName ? 'red' : 'black'}
            />
          </TouchableOpacity>
        )}
        tabBar={({ routeName, selectedTab, navigate }) => {
          return (
            <TouchableOpacity
              onPress={() => navigate(routeName)}
              style={styles.tabbarIcon}
            >
              {_renderIcon(routeName, selectedTab)}
            </TouchableOpacity>
          );
        }}
      >
        <CurvedBottomBar.Screen
          name="title1"
          position="LEFT"
          component={RenderScreen}
        />
        <CurvedBottomBar.Screen
          name="title2"
          component={RenderScreen}
          position="LEFT"
        />
        <CurvedBottomBar.Screen
          name="title0"
          component={RenderScreen}
          position="CIRCLE"
        />
        <CurvedBottomBar.Screen
          name="title3"
          position="RIGHT"
          component={RenderScreen}
        />
        <CurvedBottomBar.Screen
          name="title4"
          component={RenderScreen}
          position="RIGHT"
        />
      </CurvedBottomBar.Navigator>
    </View>
  );
};

const MainScreen = () => {
  return (
    <NavigationContainer>
      <ThemeScreen />
    </NavigationContainer>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 28,
  },
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
    tintColor: '#48CEF6',
  },
  img: {
    width: 30,
    height: 30,
  },
  tabbarIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    backgroundColor: '#BFEFFF',
    flex: 1,
  },
});
