import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

import {theme} from '~/themes';

const {colors} = theme;

export const CollectedRewardCard = ({item, onRemove}) => {
  const onPressRemoveItem = () => {
    onRemove(item);
  };

  return (
    <View style={styles.collectedCard}>
      <View style={styles.collectedImageContainer}>
        {item.image ? (
          <Image source={{uri: item.image}} style={styles.collectedImage} />
        ) : (
          <View style={styles.noImage}>
            <Text style={styles.noImageText}>No Image</Text>
          </View>
        )}
      </View>
      <View style={styles.collectedInfo}>
        <Text style={styles.collectedRewardName}>{item.name}</Text>
        <Text style={styles.collectedPoints}>Points: {item.needed_points}</Text>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={onPressRemoveItem}>
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  collectedCard: {
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
  collectedImageContainer: {
    flex: 1,
    marginRight: scale(10),
    alignSelf: 'center',
  },
  collectedImage: {
    width: scale(75),
    height: scale(75),
    borderRadius: scale(8),
  },
  noImage: {
    width: scale(80),
    height: scale(80),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.bac,
    borderRadius: scale(8),
  },
  noImageText: {
    color: colors.secondBackground,
  },
  collectedInfo: {
    flex: 2,
    justifyContent: 'center',
  },
  collectedRewardName: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    marginBottom: verticalScale(5),
  },
  collectedPoints: {
    fontSize: moderateScale(14),
    color: colors.secondBackground,
    marginBottom: verticalScale(10),
  },
  removeButton: {
    backgroundColor: colors.danger,
    borderRadius: scale(8),
    paddingVertical: verticalScale(5),
    paddingHorizontal: scale(10),
    alignItems: 'center',
  },
  removeButtonText: {
    color: colors.background,
    fontWeight: 'bold',
  },
});

export default CollectedRewardCard;
