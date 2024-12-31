import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function CourseCard({title, description}) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {padding: 10, borderWidth: 1, marginVertical: 5},
  title: {fontSize: 18, fontWeight: 'bold'},
});
