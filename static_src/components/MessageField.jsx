
import React from 'react';
import Message from './Message';

export default class MessageField extends React.Component {
    state = {
        messages: [
            { text: "Привет!", autor: 'Робот:' },
            { text: "Как дела?", autor: 'Робот:' }
        ],
    };
 
 
 
   componentDidUpdate() {
    if (this.state.messages.length % 2 === 1) {  
        setTimeout(() =>
        this.setState(
            { messages: [ ...this.state.messages, {text: 'Не приставай ко мне, я робот!', autor: 'Робот:'} ] }),
        1000);
    }
}

   handleClick = () => {
    this.setState({ messages: [ ...this.state.messages, {text: 'Нормально', autor: 'Это Я:'} ] });
   };

   render() {
    const messageElements = this.state.messages.map((message, index) => (
        <Message key={ index } text={ message.text } autor={ message.autor } />));


       return <div>
           { messageElements }
           <button onClick={ this.handleClick }>Отправить сообщение</button>
       </div>
   }
   
}
