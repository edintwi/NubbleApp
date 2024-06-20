import {ToastPosition, useToast, useToastService} from '@services';
import React, {useCallback, useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import {ToastContent} from './components/ToastContent';

const DEFAULT_DURATION = 2000;

export function Toast() {
  const toast = useToast();
  const {hideToast} = useToastService();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const position: ToastPosition = toast?.position || 'top';

  const runEnteringAnimation = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const runExitingAnimation = useCallback(
    (callback: Animated.EndCallback) => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(callback);
    },
    [fadeAnim],
  );

  useEffect(() => {
    if (toast) {
      runEnteringAnimation();
      setTimeout(() => {
        runExitingAnimation(hideToast);
      }, toast.duration || DEFAULT_DURATION);
    }
  }, [hideToast, toast, runExitingAnimation, runEnteringAnimation]);

  if (!toast) {
    return null;
  }
  return (
    <Animated.View
      style={{
        position: 'absolute',
        alignSelf: 'center',
        opacity: fadeAnim,
        [position]: 100,
      }}>
      <ToastContent toast={toast} />
    </Animated.View>
  );
}
