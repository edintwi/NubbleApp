import React from 'react';

import {Post} from '@domain';

import {Box, ProfileAvatar, Text} from '@components';
import {useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';

type Props = Pick<Post, 'author'>;

export function PostHeader({author}: Props) {
  const navigation = useNavigation();

  function navigateToProfile() {
    navigation.navigate('ProfileScreen', {userId: author.id});
  }
  return (
    <Pressable onPress={navigateToProfile}>
      <Box marginBottom="s16" flexDirection="row" mb="s24" alignItems="center">
        <ProfileAvatar imageURL={author.profileURL} />
        <Text ml="s12" semiBold preset="paragraphMedium">
          {author.userName}
        </Text>
      </Box>
    </Pressable>
  );
}
