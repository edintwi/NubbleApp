import React from 'react';

import {Post} from '@domain';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';

type Props = Pick<Post, 'reactionCount' | 'commentCount' | 'favoriteCount'>;

export function PostActions({
  reactionCount,
  commentCount,
  favoriteCount,
}: Props) {
  function likePost() {
    //TODO
  }
  function navigateToComment() {
    //TODO
  }
  function favoritePost() {
    //TODO
  }

  return (
    <Box flexDirection="row" mt="s16">
      <Item
        icon={{
          default: 'heart',
          marked: 'heartFill',
        }}
        marked={false}
        text={reactionCount}
        onPress={likePost}
      />
      <Item
        icon={{
          default: 'comment',
          marked: 'comment',
        }}
        marked={false}
        text={commentCount}
        onPress={navigateToComment}
      />
      <Item
        icon={{
          default: 'bookmark',
          marked: 'bookmarkFill',
        }}
        marked={false}
        text={favoriteCount}
        onPress={favoritePost}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked: boolean;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
  text: number;
}
function Item({icon, onPress, text, marked}: ItemProps) {
  return (
    <TouchableOpacityBox
      mr="s24"
      onPress={onPress}
      flexDirection="row"
      alignItems="center">
      <Icon
        color={marked ? 'marked' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      {text > 0 && (
        <Text bold ml="s4" preset="paragraphSmall">
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
