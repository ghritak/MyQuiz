import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Header = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <MaterialIcons name='arrow-back-ios' size={20} />
      </TouchableOpacity>
      <Text style={styles.heading}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: { padding: 6, marginLeft: 10 },
  heading: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default Header;
