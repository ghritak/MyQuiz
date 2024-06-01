import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Input from '../ui/Input';
import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';
import FormButton from '../ui/FormButton';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [activity, setActivity] = useState({
    passwordVisible: false,
    loading: false,
  });

  const handleSignup = async () => {
    setActivity((prev) => ({
      ...prev,
      loading: true,
    }));
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const { user } = userCredential;
      await updateProfile(user, { displayName: formData.name });
      console.log('User profile updated successfully!');
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
      case 'auth/missing-password':
        message = 'Password cannot be blank.';
        break;
      case 'auth/weak-password':
        message = 'Password should be at least 6 characters.';
        break;
      case 'auth/email-already-in-use':
        message = 'User with this email already exists.';
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
        <Text style={styles.heading}>Sign up</Text>
        <Input
          value={formData.name}
          placeholder='Name'
          iconLeft={<Octicons name='person' size={20} />}
          onChangeText={(text) =>
            setFormData((prev) => ({ ...prev, name: text }))
          }
        />
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
              onPress={() => {
                setActivity((prev) => ({
                  ...prev,
                  passwordVisible: !activity.passwordVisible,
                  errorMessage: '',
                }));
              }}
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
        <FormButton loading={activity.loading} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign up</Text>
        </FormButton>
        <View style={styles.signupCont}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text style={styles.signupButton}>Log in</Text>
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
  signupButton: { color: '#7980f5', fontWeight: '600' },
});

export default SignupScreen;
