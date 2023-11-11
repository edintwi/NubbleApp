import React from 'react';
import {Dimensions, Image} from 'react-native';

import {Post} from '@domain';

type Props = Pick<Post, 'imageURL'>;

export function PostImage({imageURL}: Props) {
  return (
    <Image
      source={{uri: imageURL}}
      style={{
        width: Dimensions.get('screen').width,
        resizeMode: 'cover',
        height: 300,
        marginHorizontal: -24,
      }}
    />
  );
}
