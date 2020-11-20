import React from 'react';
import { Container, Header, Content, Thumbnail, Body, Icon, Text } from 'native-base';
import { StyleSheet, View, TouchableOpacity } from 'react-native'

import Ava from '../assets/images/avatar.png'

export default function ChatScreen({navigation}) {
  function HomeChat() {
    navigation.navigate('Home')
  }

  return (
    <Container>
      <Header style={style.header}>
        <TouchableOpacity onPress={HomeChat}>
        <Icon style={style.icon1} name='arrow-left' type="FontAwesome5" />
        </TouchableOpacity>   
        <View style={style.thumb}>       
        <Thumbnail style={style.avatar} source={Ava}/>
        </View>
          <Body>
          <Text style={style.text}>Jhon Doe</Text>
          <Text note>Last seen Yesterday</Text>
        </Body>
        <View>
        <TouchableOpacity>
            <Icon style={style.icon2} name='ellipsis-v' type="FontAwesome5" />
        </TouchableOpacity>
        </View>     
      </Header>
      <Content padder>
        <Text>Content Chat</Text>
      </Content>
    </Container>
  );
}

const style = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: 'black',
  },
  avatar: {
    width: 45,
    height: 45,
  },
  thumb: {
    paddingRight: 10,
    marginLeft: 25
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  icon2: {
    color: 'white',
    paddingRight: 10
  },
  icon1: {
    color: 'white',
    paddingLeft: 10
  },
})