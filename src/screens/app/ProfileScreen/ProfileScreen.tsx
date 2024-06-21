import React from 'react';

import {useUserGetById} from '@domain';

import {ActivityIndicator, Box, ProfileAvatar, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';
import {RefreshControl, ScrollView} from 'react-native-gesture-handler';

export function ProfileScreen({route}: AppScreenProps<'ProfileScreen'>) {
  const userId = route.params.userId;

  const {isLoading, isError, user, refetch, isFetching} =
    useUserGetById(userId);

  return (
    <Screen canGoback>
      {isLoading && <ActivityIndicator color={'error'} />}
      {isError && <Text> error ao carregar perfil do usuário</Text>}
      {user && (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={isFetching} onRefresh={refetch} />
          }>
          <Box alignItems="center">
            <ProfileAvatar
              imageURL={user.profileUrl}
              size={64}
              borderRadius={24}
            />
            <Text preset="headingMedium" bold>
              {user.fullName}
            </Text>
            <Text>@{user.userName}</Text>
          </Box>
        </ScrollView>
      )}
    </Screen>
  );
}
