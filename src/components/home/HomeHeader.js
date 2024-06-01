import { StyleSheet, Text, View } from 'react-native';
import IconButton from '../ui/IconButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../constants/Colors';
import { style } from '../../constants/styles';
import { auth } from '../../../firebaseConfig';

const HomeHeader = () => {
  const {
    currentUser: { displayName },
  } = auth;
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View>
        <Text style={style.heading}>
          Hi, <Text style={styles.name}>{displayName?.split(' ')[0]}</Text>
        </Text>
        <Text style={styles.slogan}>Create your own quiz</Text>
      </View>
      <IconButton onPress={() => navigation.navigate('createquiz')}>
        <MaterialCommunityIcons name='plus' size={20} color={'white'} />
      </IconButton>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  name: { color: Colors.primary },
  slogan: { marginTop: 4 },
  container: {
    marginHorizontal: 14,
  },
});

export default HomeHeader;
