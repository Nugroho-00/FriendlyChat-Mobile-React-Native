import React from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

import Ava from '../assets/images/avatar.png'

export default function ListChat() {
  return (
    <Container>
    <Header />
    <Content padder>
      <List>
        <ListItem avatar>
          <Left>
              <Thumbnail source={Ava} />
          </Left>
          <Body>
            <Text>Kumar Pratik</Text>
            <Text note>Doing what you like will always keep you happy . .</Text>
          </Body>
          <Right>
            <Text note>3:43 pm</Text>
          </Right>
        </ListItem>
      </List>
    </Content>
  </Container>
  );
}