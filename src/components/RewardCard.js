import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

import {theme} from '~/themes';

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
    borderRadius: scale(8),
    elevation: 3,
    marginBottom: verticalScale(15),
    flexDirection: 'row',
    padding: scale(10),
    shadowColor: colors.foreground,
    shadowOffset: {width: 0, height: verticalScale(2)},
    shadowOpacity: 0.1,
    shadowRadius: scale(4),
  },
  imageContainer: {
    flex: 1,
    marginRight: scale(10),
    alignSelf: 'center',
  },
  image: {
    width: scale(75),
    height: scale(75),
    borderRadius: scale(8),
  },
  noImage: {
    width: scale(75),
    height: scale(75),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderRadius: scale(8),
  },
  noImageText: {
    color: colors.secondBackground,
  },
  info: {
    flex: 2,
    justifyContent: 'center',
  },
  rewardName: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    marginBottom: verticalScale(5),
  },
  rewardPoints: {
    fontSize: moderateScale(14),
    color: colors.secondBackground,
    marginBottom: verticalScale(10),
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: scale(8),
    padding: scale(10),
    alignItems: 'center',
  },
  buttonText: {
    color: colors.background,
    fontWeight: 'bold',
  },
});
