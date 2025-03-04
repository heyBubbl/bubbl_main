// src/screens/auth/CreateWalletScreen.js
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import BackgroundWithLogo from '../../ui/BackgroundWithLogo';

const CreateWalletScreen = () => {
  const handleCreateWallet = () => {
    // This function would handle the actual wallet creation
    console.log('Creating wallet...');
    // Additional wallet creation logic here
  };

  return (
    <BackgroundWithLogo>
      <View className="flex flex-col items-center w-full justify-center">
        <TouchableOpacity
          className="bg-white py-4 px-8 w-3/4 items-center rounded-full"
          onPress={handleCreateWallet}>
          <Text
            className="text-base font-semibold text-black opacity-50"
            style={{
              fontFamily: 'Fredoka-SemiBold',
            }}>
            Create
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="py-4 px-8 w-4/5 items-center rounded-full"
          onPress={handleCreateWallet}>
          <Text
            className="text-base font-semibold text-white opacity-60"
            style={{
              fontFamily: 'Fredoka-Regular',
            }}>
            Import
          </Text>
        </TouchableOpacity>
      </View>
    </BackgroundWithLogo>
  );
};

export default CreateWalletScreen;
