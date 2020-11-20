import React from 'react';
import { Image, View, StyleSheet} from 'react-native';
import { Container, Content, Text, Button, Icon } from 'native-base';
  
export default function WelcomeScreen({ navigation}) {
  function register() {
    navigation.navigate('Register')
  }
  return (
    <Container style={style.container}>
      <Content padder>
        <View style={style.header}>
          <Text style={style.textHeader}>Welcome To FriendlyChat</Text>
        </View>
        <View style={style.content}>
        <View style={style.button}>
            <Button
              iconRight
              bordered
              rounded
              onPress={register}
            >
            <Text style={style.text}>Get Messaging</Text>
            <Icon name="long-arrow-alt-right" type="FontAwesome5" />    
          </Button>
        </View>
        </View>     
      </Content>
    </Container>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 200,
    justifyContent: 'center'
  },
  button: {
    borderRadius: 25,
    marginBottom: 20,
  },
  header: {
    marginBottom: 30
  },
  textHeader: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center'
  },
  content: {
    width: '100%',
    alignItems: 'center'
  },
  text: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 14,
  },
})