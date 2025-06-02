
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default function RoutingPanel({ onClose }) {
  return (
    <View style={styles.panel}>
      <TextInput placeholder="Starting Location" style={styles.input} />
      <TextInput placeholder="Ending Location" style={styles.input} />
      <Text>Estimated Time: 5 mins</Text>
      <TouchableOpacity onPress={onClose}>
        <Text style={styles.close}>Close</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
  },
  input: {
    backgroundColor: '#f3f4f6',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  close: {
    marginTop: 10,
    color: 'red',
    fontWeight: 'bold',
  },
});
