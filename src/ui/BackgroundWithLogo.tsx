// src/screens/auth/CreateWalletScreen.js
import React, {useEffect, useRef} from 'react';
import {View, SafeAreaView, StatusBar, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {MotiText, MotiImage} from 'moti';

const BackgroundWithLogo = ({children}: {children: React.ReactNode}) => {
  // Animation speed control - increase this value to make it slower
  const ANIMATION_DURATION = 5000; // 5 seconds per color transition

  // Animation value for gradient transition
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animateGradient = () => {
      // Create a loop animation
      Animated.sequence([
        // Animate to second gradient
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: ANIMATION_DURATION,
          useNativeDriver: true,
        }),
        // Animate back to first gradient
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: ANIMATION_DURATION,
          useNativeDriver: true,
        }),
      ]).start(() => {
        // Loop the animation
        animateGradient();
      });
    };

    // Start the animation
    animateGradient();

    // Clean up on unmount
    return () => {
      fadeAnim.setValue(0);
    };
  }, [fadeAnim]);

  return (
    <SafeAreaView className="w-full h-full flex">
      <LinearGradient
        colors={['#a39eff', '#a39eff']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      />

      {/* Animated gradient overlay */}
      <Animated.View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          opacity: fadeAnim,
        }}>
        <LinearGradient
          colors={['#8faceb', '#8faceb']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
        />
        <LinearGradient
          colors={['#ff94c9', '#ff94c9']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
        />
      </Animated.View>

      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View className="flex-1 flex flex-col items-center px-5">
        <View className="flex-1 flex flex-col items-center justify-center">
          <MotiImage
            source={require('../../assets/images/Logo.png')}
            className="w-[105px] h-[100px] mb-4"
            from={{scale: 0, opacity: 0}}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              delay: 1000,
              type: 'spring',
              duration: 3000,
            }}
          />
          <MotiText
            className="text-6xl font-bold text-center text-white"
            style={{
              fontFamily: 'Modak',
              lineHeight: 70,
            }}
            from={{opacity: 0}}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 3000,
            }}>
            heyBubbl
          </MotiText>
        </View>
        <View className="absolute w-full h-full flex flex-col items-center justify-center">
          <View className="flex-1"></View>
          {children}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BackgroundWithLogo;
