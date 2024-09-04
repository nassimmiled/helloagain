import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import useSWR from 'swr';
import axios from 'axios';
import {RewardCard} from '../components/RewardCard';
import {useDispatch, useSelector} from 'react-redux';

import {theme} from '../themes';

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
    dispatch({type: 'COLLECT_REWARD', payload: reward});
  };

  const handleRemoveReward = reward => {
    setAvailableRewards(prevRewards => [...prevRewards, reward]);
    dispatch({type: 'REMOVE_REWARD', payload: reward});
  };

  if (error) return <Text style={styles.error}>Error loading data.</Text>;
  if (!bounties) return <Text style={styles.loading}>Loading...</Text>;

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

      <Text style={styles.title}>Collected Rewards</Text>
      <FlatList
        data={collectedRewards}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.collectedCard}>
            <View style={styles.collectedImageContainer}>
              {item.image ? (
                <Image
                  source={{uri: item.image}}
                  style={styles.collectedImage}
                />
              ) : (
                <View style={styles.noImage}>
                  <Text style={styles.noImageText}>No Image</Text>
                </View>
              )}
            </View>
            <View style={styles.collectedInfo}>
              <Text style={styles.collectedRewardName}>{item.name}</Text>
              <Text style={styles.collectedPoints}>
                Points: {item.needed_points}
              </Text>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => handleRemoveReward(item)}>
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={styles.listPadding}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  loading: {
    textAlign: 'center',
    marginTop: 20,
  },
  collectedCard: {
    backgroundColor: colors.background,
    borderRadius: 8,
    elevation: 3,
    marginBottom: 15,
    flexDirection: 'row',
    padding: 10,
    shadowColor: colors.foreground,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  collectedImageContainer: {
    flex: 1,
    marginRight: 10,
  },
  collectedImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  noImage: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.bac,
    borderRadius: 8,
  },
  noImageText: {
    color: colors.secondBackground,
  },
  collectedInfo: {
    flex: 2,
    justifyContent: 'center',
  },
  collectedRewardName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  collectedPoints: {
    fontSize: 14,
    color: colors.secondBackground,
    marginBottom: 10,
  },
  removeButton: {
    backgroundColor: colors.danger,
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  removeButtonText: {
    color: colors.background,
    fontWeight: 'bold',
  },
  listPadding: {
    paddingHorizontal: 8,
  },
});
