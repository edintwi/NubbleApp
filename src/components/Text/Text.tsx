import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';

import {createText} from '@shopify/restyle';
import { Theme } from '../../theme/theme';

type SRTextProps = React.ComponentProps<typeof SRText>;

const SRText = createText<Theme>();

interface TextProps extends SRTextProps {
  preset?: TextVariants;
  bold?: boolean;
  semibold?: boolean;
  italic?: boolean;
}

export function Text({
  children,
  preset = 'paragraphMedium',
  style,
  bold,
  italic,
  semibold,
  ...SRTextProps
}: TextProps) {

  const fontFamily = getFontFamily(preset, bold, italic, semibold);

  return (
    <SRText color='backgroundContranst' style={[$fontSizes[preset], {fontFamily}, style]} {...SRTextProps}>
      {children}
    </SRText>
  );
}

function getFontFamily(preset: TextVariants, bold?: boolean, semibold?: boolean, italic?: boolean) {
  
  if(preset === 'headingLarge' || preset === `headingMedium` || preset === `headingSmall`){
    return italic ?  $fontFamily.boldItalic : $fontFamily.bold;
  }
  
  switch (true) {
    case bold && italic:
      return $fontFamily.boldItalic;
    case bold:
      return $fontFamily.bold;
    case italic:
      return $fontFamily.italic;
    case semibold && italic:
      return $fontFamily.mediumItalic;
    case semibold:
      return $fontFamily.medium;
    default:
      return $fontFamily.regular;
  }
}

type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: {fontSize: 32, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},

  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},

  paragraphCaption: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
};

const $fontFamily = {
  black: 'Satoshi-Black',
  blackItalic: 'Satoshi-BlackItalic',
  bold: 'Satoshi-Bold',
  boldItalic: 'Satoshi-BoldItalic',
  italic: 'Satoshi-Italic',
  light: 'Satoshi-Light',
  lightItalic: 'Satoshi-LightItalic',
  medium: 'Satoshi-Medium',
  mediumItalic: 'Satoshi-MediumItalic',
  regular: 'Satoshi-Regular',
};
