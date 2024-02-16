import React from 'react';
import {ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';

import {Post, usePostList} from '@domain';
import {FlatList} from 'react-native-gesture-handler';

import {PostItem, Screen} from '@components';
import {AppTabScreenProps} from '@routes';

import {HomeEmpty} from './components/HomeEmpty';
import {HomeHeader} from './components/HomeHeader';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const {postList, error, isLoading, refetch} = usePostList();

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={$screen} flex={1}>
      <FlatList
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{flex: postList?.length === 0 ? 1 : undefined}}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={HomeHeader}
        ListEmptyComponent={
          <HomeEmpty loading={isLoading} error={error} refetch={refetch} />
        }
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  paddingTop: 0,
  paddingHorizontal: 0,
  paddingBottom: 0,
};
