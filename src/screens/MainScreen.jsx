import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TopSection from '../components/TopSection';
import { SafeAreaView } from 'react-native-safe-area-context';
import { palette } from '../theme/palette';
import { SCREENS_TITLE } from '../utils/constants';

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <TopSection preventBack title={SCREENS_TITLE.CREDIT_REPORT} />
      <View style={styles.sectionArea}>
        <View style={styles.reportContainer}>
          <Text style={styles.titleText}>{SCREENS_TITLE.YOUR_CREDIT_REPORT}</Text>
          <View style={styles.graphComponent}> </View>
        </View>
        <View style={styles.impactScoreContainer}>
        <Text style={styles.titleText}>{SCREENS_TITLE.WHAT_IS_IMPACTING_YOUR_SCORE}</Text>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: palette.light_lavender,
  },
  sectionArea: {
    paddingHorizontal: 16
  },
  reportContainer: {
    marginVertical: 16
  },
  titleText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16
  },
  impactScoreContainer:{}
});
