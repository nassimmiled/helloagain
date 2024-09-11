import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import useSWR from 'swr';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

import {RewardCard, CollectedRewardCard} from '~/components';
import {COLLECT_REWARD, REMOVE_REWARD} from '~/constants';
import {theme} from '~/themes';

const {colors} = theme;

const BOUNTIES_URL =
  'https://staging.helloagain.at/api/v1/clients/5189/bounties/';

const fetcher = url => axios.get(url).then(res => res.data);

export const RewardsScreen = () => {
  const [availableRewards, setAvailableRewards] = useState([]);
  const {data: bounties, error} = useSWR(BOUNTIES_URL, fetcher);
  const collectedRewards = useSelector(state => state.rewards);
  const dispatch = useDispatch();

  useEffect(() => {
    if (bounties) {
      setAvailableRewards(bounties);
    }
  }, [bounties]);

  const handleCollectReward = reward => {
    setAvailableRewards(prevRewards =>
      prevRewards.filter(item => item.id !== reward.id),
    );
    dispatch({type: COLLECT_REWARD, payload: reward});
  };

  const handleRemoveReward = reward => {
    setAvailableRewards(prevRewards => [...prevRewards, reward]);
    dispatch({type: REMOVE_REWARD, payload: reward});
  };

  if (error) {
    return <Text style={styles.error}>Error loading data.</Text>;
  }
  if (!bounties) {
    return <Text style={styles.loading}>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Rewards</Text>
      <FlatList
        data={availableRewards}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <RewardCard reward={item} onCollect={handleCollectReward} />
        )}
        contentContainerStyle={styles.listPadding}
      />

      <Text style={[styles.title, {top: scale(10)}]}>Collected Rewards</Text>
      <FlatList
        data={collectedRewards}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <CollectedRewardCard item={item} onRemove={handleRemoveReward} />
        )}
        contentContainerStyle={styles.listPadding}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: verticalScale(16),
    paddingHorizontal: scale(20),
    backgroundColor: colors.background,
  },
  title: {
    fontSize: moderateScale(17),
    fontWeight: 'bold',
    marginBottom: verticalScale(20),
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: verticalScale(20),
  },
  loading: {
    textAlign: 'center',
    marginTop: verticalScale(20),
  },
  listPadding: {
    paddingHorizontal: scale(8),
  },
});
