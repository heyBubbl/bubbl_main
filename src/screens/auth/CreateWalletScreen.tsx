// src/screens/auth/CreateWalletScreen.js
import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Image,
  Animated,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const CreateWalletScreen = () => {
  // Animation speed control - increase this value to make it slower
  const ANIMATION_DURATION = 5000; // 5 seconds per color transition
  
  // Animation values for each gradient
  const fadeAnim1 = useRef(new Animated.Value(1)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;
  const fadeAnim3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Create a sequence of animations
    const animateGradients = () => {
      Animated.sequence([
        // Show gradient 1, fade out others
        Animated.parallel([
          Animated.timing(fadeAnim1, {
            toValue: 1,
            duration: ANIMATION_DURATION,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim2, {
            toValue: 0,
            duration: ANIMATION_DURATION,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim3, {
            toValue: 0,
            duration: ANIMATION_DURATION,
            useNativeDriver: true,
          }),
        ]),
        // Show gradient 2, fade out others
        Animated.parallel([
          Animated.timing(fadeAnim1, {
            toValue: 0,
            duration: ANIMATION_DURATION,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim2, {
            toValue: 1,
            duration: ANIMATION_DURATION,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim3, {
            toValue: 0,
            duration: ANIMATION_DURATION,
            useNativeDriver: true,
          }),
        ]),
        // Show gradient 3, fade out others
        Animated.parallel([
          Animated.timing(fadeAnim1, {
            toValue: 0,
            duration: ANIMATION_DURATION,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim2, {
            toValue: 0,
            duration: ANIMATION_DURATION,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim3, {
            toValue: 1,
            duration: ANIMATION_DURATION,
            useNativeDriver: true,
          }),
        ]),
      ]).start(() => {
        // Loop the animation
        animateGradients();
      });
    };

    // Start the animation
    animateGradients();

    // Clean up on unmount
    return () => {
      fadeAnim1.setValue(0);
      fadeAnim2.setValue(0);
      fadeAnim3.setValue(0);
    };
  }, [fadeAnim1, fadeAnim2, fadeAnim3]);

  const handleCreateWallet = () => {
    // This function would handle the actual wallet creation
    console.log('Creating wallet...');
  };

  return (
    <SafeAreaView className="w-full h-full flex">
      {/* First gradient */}
      <Animated.View style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: fadeAnim1,
      }}>
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
      </Animated.View>

      {/* Second gradient */}
      <Animated.View style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: fadeAnim2,
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
      </Animated.View>

      {/* Third gradient */}
      <Animated.View style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: fadeAnim3,
      }}>
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

      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <View className="flex-1 flex flex-col items-center px-5">
        <View className="flex-1 flex flex-col items-center justify-center">
          <Image
            source={require('../../../assets/images/Logo.png')}
            className="w-[105px] h-[100px] mb-4"
          />
        <Text className="text-6xl font-bold text-center text-white" style={{
          fontFamily: 'Modak',
          lineHeight: 70,
        }}>
          heyBubbl
        </Text>
        </View>
        <View className="flex flex-col items-center w-full justify-center">
        <TouchableOpacity
          className="bg-white py-4 px-8 rounded-lg w-3/4 items-center rounded-full"
          onPress={handleCreateWallet}
        >
          <Text className="text-base font-semibold text-black opacity-50" style={{ 
            fontFamily: 'Fredoka-SemiBold',
           }}>
            Create
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="py-4 px-8 rounded-lg w-4/5 items-center rounded-full"
          onPress={handleCreateWallet}
        >
          <Text className="text-base font-semibold text-white opacity-60" style={{ 
            fontFamily: 'Fredoka-Regular',
           }}>
            Import
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateWalletScreen;