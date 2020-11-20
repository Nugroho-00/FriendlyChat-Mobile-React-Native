import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, Form, Item, Input, Text, Button, Icon} from 'native-base';

export default function Register({navigation}) {
  function GoHome() {
    navigation.navigate('Home')
  }

  return (
    <Container>
      <Content padder style={style.parent}>
        <Text style={style.header}>
          Phone Number
        </Text>
        <Form>
        <Item floatingLabel>
              <Input placeholder="Select Country" />
            </Item>
        <Item floatingLabel>      
              <Input placeholder="Phone Number" />
            </Item>
        </Form>
        <View style={style.btn}>
          <View>
            <Button
              primary
              rounded
              onPress={GoHome}  
              style={style.button}
            >
              <Icon style={ style.icon} name="arrow-alt-circle-right" type="FontAwesome5" />
           </Button>  
          </View>        
        </View>   
      </Content>
    </Container>
  );
}

const style = StyleSheet.create({
  parent: {
    backgroundColor: '#F9F9F9',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  btn: {
    margin: 20,
    alignItems: 'flex-end'
  },
  button: {
    alignItems: 'center',
    borderRadius: 60,
    height: 60,
  },
  icon: {
    fontSize: 45
  }
});
