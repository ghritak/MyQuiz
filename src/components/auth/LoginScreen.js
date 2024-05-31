import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Input from '../ui/Input';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';
import { Colors } from '../../constants/Colors';
import FormButton from '../ui/FormButton';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [activity, setActivity] = useState({
    passwordVisible: false,
  });

  const handleLogin = async () => {
    setActivity((prev) => ({
      ...prev,
      loading: true,
    }));
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const { user } = userCredential;
      console.log(user);

      console.log('User logged in successfully!');
    } catch (error) {
      setActivity((prev) => ({
        ...prev,
        loading: false,
      }));
      console.log(error?.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formCont}>
        <Text style={styles.heading}>Log in</Text>
        <Input
          value={formData.email}
          placeholder='Email'
          autoCapitalize={false}
          iconLeft={<MaterialCommunityIcons name='email-outline' size={20} />}
          onChangeText={(text) =>
            setFormData((prev) => ({ ...prev, email: text }))
          }
        />
        <Input
          value={formData.password}
          placeholder='Password'
          autoCapitalize={false}
          secureTextEntry={activity.passwordVisible}
          onChangeText={(text) =>
            setFormData((prev) => ({ ...prev, password: text }))
          }
          iconLeft={<MaterialCommunityIcons name='lock-outline' size={20} />}
          iconRight={
            <TouchableOpacity
              onPress={() =>
                setActivity((prev) => ({
                  ...prev,
                  passwordVisible: !activity.passwordVisible,
                }))
              }
            >
              <MaterialCommunityIcons
                name={activity.passwordVisible ? 'eye' : 'eye-off'}
                size={20}
              />
            </TouchableOpacity>
          }
        />
        <FormButton onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </FormButton>
        <View style={styles.signupCont}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('signup')}>
            <Text style={styles.signupButton}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formCont: {
    width: '80%',
  },
  heading: { fontSize: 20, fontWeight: '700', marginBottom: 10 },
  buttonText: { color: 'white', fontWeight: '500' },
  signupCont: { flexDirection: 'row', alignItems: 'center' },
  signupButton: { color: Colors.primary, fontWeight: '600' },
});

export default LoginScreen;
