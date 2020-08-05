import React, {useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import auth from '@react-native-firebase/auth';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('test@gmail.com');
  const [password, setPassword] = useState('123123');
  const onLoginPress = async () => {
    console.log('before login');
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        // navigation.navigate('Home');
        // usersRef
        //     .doc(uid)
        //     .get()
        //     .then((firestoreDocument) => {
        //         if (!firestoreDocument.exists) {
        //             alert('User does not exist anymore.');
        //             return;
        //         }
        //         const user = firestoreDocument.data();
        //         navigation.navigate('Home', {user});
        //     })
        //     .catch((error) => {
        //         alert(error);
        //     });
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };
  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>Welcome to Chat app</Title>
      <FormInput
        labelName="Email"
        value={email}
        autoCapitalize="none"
        onChangeText={(userEmail) => setEmail(userEmail)}
      />
      <FormInput
        labelName="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={(userPassword) => setPassword(userPassword)}
      />
      <FormButton
        title="Login"
        modeValue="contained"
        labelStyle={styles.loginButtonLabel}
        onPress={onLoginPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
  },
  loginButtonLabel: {
    fontSize: 22,
  },
  navButtonText: {
    fontSize: 16,
  },
});
