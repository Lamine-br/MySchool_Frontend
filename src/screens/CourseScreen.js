import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import axios from '../services/api';

export default function CourseScreen() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/courses');
        setCourses(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCourses();
  }, []);

  const renderCourse = ({item}) => (
    <View style={styles.courseCard}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cours disponibles</Text>
      <FlatList
        data={courses}
        renderItem={renderCourse}
        keyExtractor={item => item._id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  header: {fontSize: 20, fontWeight: 'bold', marginBottom: 20},
  courseCard: {padding: 10, borderWidth: 1, marginBottom: 10},
  title: {fontSize: 16, fontWeight: 'bold'},
});
