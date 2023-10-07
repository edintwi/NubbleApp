import React from 'react';
import { Theme } from '../theme/theme';
import { useTheme } from '@shopify/restyle';

export function useAppTheme(){
    return useTheme<Theme>();
}