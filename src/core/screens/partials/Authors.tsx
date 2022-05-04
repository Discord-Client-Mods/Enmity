import { StyleSheet, ColorMap, Constants, Profiles } from '@metro/common';
import { Text, TouchableOpacity, View } from '@components';
import React from 'react';

const { ThemeColorMap } = ColorMap;

export default function ({ authors }) {
  if (!authors || !Array.isArray(authors) || !authors.length) {
    return null;
  }

  const styles = StyleSheet.createThemedStyleSheet({
    linkless: {
      color: ThemeColorMap.HEADER_SECONDARY,
      fontFamily: Constants.Fonts.PRIMARY_SEMIBOLD,
      display: 'flex',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center'
    },

    link: {
      color: ThemeColorMap.HEADER_PRIMARY,
      fontFamily: Constants.Fonts.PRIMARY_SEMIBOLD,
      display: 'flex',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center'
    },

    container: {
      marginLeft: 2.5
    }
  });

  return <View style={styles.container}>
    {authors.map((author, index) => {
      const isFirst = index !== authors.length - 1;

      if (typeof author === 'string') {
        return (
          <Text style={styles.linkless}>
            {author}{isFirst && ','}
          </Text>
        );
      } else if (typeof author === 'object' && author.name && !author.id) {
        return (
          <Text style={styles.linkless}>
            {author.name}{isFirst && ','}
          </Text>
        );
      } else if (typeof author === 'object' && author.name && author.id) {
        return (
          <TouchableOpacity
            key={author.id}
            onPress={() => Profiles.showUserProfile({ userId: author.id })}
          >
            <Text style={styles.link}>
              {author.name}{isFirst && ','}
            </Text>
          </TouchableOpacity>
        );
      }

      return null;
    }).filter(Boolean)}
  </View>;
}