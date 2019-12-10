import React from 'react';
import MessageField from './MessageField';
import Header from './Header';
import ChatList from './ChatList';




export default class Layout extends React.Component {

    render() {
        return <div >
           <Header />
                <div id='wraper'>
                    <ChatList />
                    <div id='layout'>
                        <MessageField />
                    </div>
                </div>
        </div>
    }
}