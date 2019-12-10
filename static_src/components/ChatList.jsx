import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentSend from 'material-ui/svg-icons/content/send';


export default class ChatList extends React.Component {
    render() {
        return<div id='chatList'>
            <List>
                <ListItem primaryText="Чат 5" leftIcon={<ContentSend />} />
                <ListItem primaryText="Чат 1" leftIcon={<ContentSend />} />
                <ListItem primaryText="Чат 2" leftIcon={<ContentSend />} />
                <ListItem primaryText="Чат 3" leftIcon={<ContentSend />} />
                <ListItem primaryText="Чат 4" leftIcon={<ContentSend />} />
            </List>   
        </div>
    }
}