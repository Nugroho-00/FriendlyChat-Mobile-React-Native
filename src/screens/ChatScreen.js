import React from 'react';
import { Container, Header, Content, Thumbnail, Body, Right, Button, Icon, Text } from 'native-base';
import { StyleSheet, View, TouchableOpacity } from 'react-native'

import Ava from '../assets/images/avatar.png'

export default function ChatScreen({navigation}) {
  // function Chat() {
  //   navigation.navigate('ListChat')
  // }

  return (
    <Container>
      <Header style={style.header}>
        <View style={style.thumb}>
        <Thumbnail style={style.avatar} source={Ava}/>
        </View>
          <Body>
          <Text style={style.text}>Jhon Doe</Text>
          <Text note>Last seen Yesterday</Text>
        </Body>
        <View>
        <TouchableOpacity>
            <Icon style={style.icon} name='ellipsis-v' type="FontAwesome5" />
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
  },
  avatar: {
    width: 45,
    height: 45,
  },
  thumb: {
    paddingRight: 10,
    marginLeft: 10
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  icon: {
    color: 'white',
    paddingRight: 10
  },
})