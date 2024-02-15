import React, { useRef } from 'react'
import { StyleSheet, View, Animated, PanResponder } from 'react-native'



export const Animation102Screen = () => {

  const { current: pan } = useRef(new Animated.ValueXY());

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x,
        dy: pan.y,
      },
    ], {
      useNativeDriver: false
    }),
    onPanResponderRelease: () => {
      Animated.spring(
        pan,
        {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false
        },
      ).start();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.Box]}
      />
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  Box: {
    backgroundColor: '#75CEDB',
    width: 150,
    height: 150,
    borderRadius: 12
  },

});