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
    loading: false,
    errorMessage: '',
    passwordVisible: false,
  });

  const handleLogin = async () => {
    setActivity((prev) => ({
      ...prev,
      loading: true,
    }));
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      console.log('User logged in successfully!');
    } catch (error) {
      handleAuthError(error);
      console.log(error?.message);
    }
  };

  const handleAuthError = (error) => {
    let message = '';

    switch (error.code) {
      case 'auth/invalid-email':
        message = 'The email address is not valid.';
        break;
      case 'auth/invalid-credential':
        message = 'Invalid Credentials';
        break;
      case 'auth/missing-password':
        message = 'Password cannot be blank.';
        break;
      case 'auth/user-disabled':
        message =
          'The user corresponding to the given email has been disabled.';
        break;
      case 'auth/user-not-found':
        message = 'There is no user corresponding to the given email.';
        break;
      case 'auth/wrong-password':
        message =
          'The password is invalid or the user does not have a password.';
        break;
      case 'auth/too-many-requests':
        message =
          'Access to this account has been temporarily disabled due to many failed login attempts.';
        break;

      default:
        message = 'An unknown error occurred. Please try again.';
    }
    setActivity((prev) => ({
      ...prev,
      errorMessage: message,
      loading: false,
    }));
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
          onChangeText={(text) => {
            setFormData((prev) => ({ ...prev, email: text }));
            setActivity((prev) => ({
              ...prev,
              errorMessage: '',
            }));
          }}
        />
        <Input
          value={formData.password}
          placeholder='Password'
          autoCapitalize={false}
          secureTextEntry={activity.passwordVisible}
          onChangeText={(text) => {
            setFormData((prev) => ({ ...prev, password: text }));
            setActivity((prev) => ({
              ...prev,
              errorMessage: '',
            }));
          }}
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
        {activity.errorMessage && (
          <Text style={{ color: 'red' }}>{activity.errorMessage}</Text>
        )}
        <FormButton loading={activity.loading} onPress={handleLogin}>
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
