import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';
import FormButton from '../components/FormButton';
import auth from '@react-native-firebase/auth';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Title>Click button join room</Title>
      <FormButton
        modeValue="contained"
        title="chatgroup"
        onPress={() => {
          navigation.navigate('Room');
        }}
      />
      <FormButton
        modeValue="contained"
        title="Logout"
        onPress={async () => {
          try {
            await auth().signOut();
            // navigation.navigate('Login');
          } catch (e) {
            console.error(e);
          }
        }}
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
});
