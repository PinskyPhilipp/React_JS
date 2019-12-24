
import React from 'react';
import PropTypes from "prop-types";
import MessageField from './MessageField';
import ChatList from './ChatList';
import Header from './Header';





export default class Layout extends React.Component {

    static propTypes = {
        chatId: PropTypes.number,
    };
 
    static defaultProps = {
        chatId: 1,
    };
 
    render() {
        return <div >
           <Header chatId={ this.props.chatId } />
                <div id='wraper'>
                    <ChatList />
                    <div id='layout'>
                    <MessageField chatId={ this.props.chatId } />
                    </div>
                </div>
        </div>
    }
}

