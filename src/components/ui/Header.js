import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Header = ({ title, type }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        {type === 'close' ? (
          <Ionicons name='close-outline' size={30} />
        ) : (
          <MaterialIcons
            name='arrow-back-ios'
            size={20}
            style={{ marginLeft: 10 }}
          />
        )}
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
  backButton: { padding: 6 },
  heading: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default Header;
