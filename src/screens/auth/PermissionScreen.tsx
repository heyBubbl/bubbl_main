import BackgroundWithLogo from '../../ui/BackgroundWithLogo';
import {PERMISSIONS, request, RESULTS, check} from 'react-native-permissions';
import {Platform, Alert} from 'react-native';
import {useEffect, useState} from 'react';

export default function PermissionScreen() {
  const checkPermissions = async () => {
    try {
      // Check microphone permission
      const micPermissionToCheck =
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.MICROPHONE
          : PERMISSIONS.ANDROID.RECORD_AUDIO;

      const micStatus = await check(micPermissionToCheck);
      console.log('Microphone permission status:', micStatus);

      // Check speech recognition permission
      const speechPermissionToCheck =
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.SPEECH_RECOGNITION
          : PERMISSIONS.ANDROID.RECORD_AUDIO; // Android uses same permission for both

      const speechStatus = await check(speechPermissionToCheck);
      console.log('Speech recognition permission status:', speechStatus);

      return {
        microphone: micStatus,
        speechRecognition: speechStatus,
      };
    } catch (error) {
      console.error('Error checking permissions:', error);
      return null;
    }
  };

  useEffect(() => {
    checkPermissions();
  }, []);

  return (
    <BackgroundWithLogo>
      <></>
    </BackgroundWithLogo>
  );
}
