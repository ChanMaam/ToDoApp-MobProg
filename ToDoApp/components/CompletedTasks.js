import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { TaskContext } from '../context/TaskContext';  

const CompletedTasks = ({ navigation }) => {
  const { completedTasks, setCompletedTasks } = useContext(TaskContext);  

  const handleDeleteTask = (index) => {
    const updatedTasks = completedTasks.filter((_, i) => i !== index); 
    setCompletedTasks(updatedTasks); 
  };

  return (
    <View style={styles.container}>
      {/* Aesthetically pleasing back button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Completed Tasks</Text>
      
      {completedTasks.length > 0 ? (
        <FlatList
          data={completedTasks}
          renderItem={({ item, index }) => (
            <View style={styles.item}>
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
              <TouchableOpacity onPress={() => handleDeleteTask(index)}>
                <Text style={styles.deleteButton}>🗑️</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <View style={styles.noTasksContainer}>
          <Text style={styles.noTasksText}>No completed tasks yet!</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#021526', 
    paddingTop: 130, 
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 70,  
    left: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',  
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  backButtonText: {
    color: '#E8B86D',  
    fontSize: 18,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#6EACDA', 
    fontFamily: 'Helvetica Neue',
  },
  item: {
    backgroundColor: '#6EACDA', 
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#03346E', 
  },
  description: {
    fontSize: 14,
    color: '#021526', 
  },
  deleteButton: {
    fontSize: 18,
    color: '#FF0000', 
  },
  noTasksContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  noTasksText: {
    fontSize: 18,
    color: '#777',
  },
});

export default CompletedTasks;
