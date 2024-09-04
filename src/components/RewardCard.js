import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from '../themes';

const {colors} = theme;

export const RewardCard = ({reward, onCollect}) => {
  const handleCollect = () => {
    onCollect(reward);
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        {reward.image ? (
          <Image source={{uri: reward.image}} style={styles.image} />
        ) : (
          <View style={styles.noImage}>
            <Text style={styles.noImageText}>No Image</Text>
          </View>
        )}
      </View>
      <View style={styles.info}>
        <Text style={styles.rewardName}>{reward.name}</Text>
        <Text style={styles.rewardPoints}>
          Points needed: {reward.needed_points}
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleCollect}>
          <Text style={styles.buttonText}>Collect Reward</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
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
  imageContainer: {
    flex: 1,
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  noImage: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderRadius: 8,
  },
  noImageText: {
    color: colors.secondBackground,
  },
  info: {
    flex: 2,
    justifyContent: 'center',
  },
  rewardName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  rewardPoints: {
    fontSize: 14,
    color: colors.secondBackground,
    marginBottom: 10,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.background,
    fontWeight: 'bold',
  },
});
