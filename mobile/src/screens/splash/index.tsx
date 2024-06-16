import React, { useState } from 'react';
import { AVPlaybackStatus, ResizeMode, Video } from 'expo-av';
import { StyleSheet, View } from 'react-native';

interface Props {
  onComplete: (finished: boolean) => void;
}

export const Splash = ({ onComplete }: Props) => {
  const [lastStatus, setLastStatus] = useState<AVPlaybackStatus>({} as AVPlaybackStatus);

  function onPlaybackStatusUpdate(status: AVPlaybackStatus) {
    if (status.isLoaded) {
      if (lastStatus.isLoaded !== status.isLoaded) {
        setLastStatus(status);
      }

      if (status.didJustFinish) {
        onComplete(true);
      }
    }
  }

  return (
    <View style={StyleSheet.absoluteFill}>
      <Video
        style={StyleSheet.absoluteFill}
        resizeMode={ResizeMode.COVER}
        source={require('../../../assets/splash.mp4')}
        isLooping={false}
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}
        shouldPlay={true}
      />
    </View>
  );
};
