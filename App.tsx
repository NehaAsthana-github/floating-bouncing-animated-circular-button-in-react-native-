import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const App = () => {
  const [bounceValue] = useState(new Animated.Value(1));

  useEffect(() => {
    // Define the animation
    Animated.loop(
      Animated.spring(bounceValue, {
        toValue: 1.2,
        friction: 1,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ scale: bounceValue }] }}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Tap Me</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});

export default App;
