
import React from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from './Message';
import '../style/style.css';


export default class MessageField extends React.Component {
    state = {
        messages: [
            { text: "Привет!", author: 'Робот:' },
            { text: "Как дела?", author: 'Робот:' }
        ],
        input: '',
    };
 
 
 
   componentDidUpdate() {
    if (this.state.messages.length % 2 === 1) {  
        setTimeout(() =>
        this.setState(
            { messages: [ ...this.state.messages, {text: 'Не приставай ко мне, я робот!', author: 'Робот:'} ] }),
        1000);
     }
    }

    handleClick = (message) => {
        this.sendMessage(message)
    };
 
    handleChange = (event) => {
        this.setState({ input: event.target.value });
    };
 
    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) { // Enter
            this.sendMessage(message)
        }
    };
   
    sendMessage = (message) => {
        this.setState({ messages: [ ...this.state.messages, {text: message, author: '"Это Я!'} ], 
        input: '',
        });
        
    };
 

   render() {
    const messageElements = this.state.messages.map((message, index) => (
        <Message key={ index } text={ message.text } author={ message.author } />));


       return <div className='layout'>
           <div className='message-field'>
           { messageElements }
           </div>
           <div style={ { width: '100%', display: 'flex' } }>
               <TextField
                   name="input"
                   fullWidth={ true }
                   hintText="Введите сообщение"
                   style={ { fontSize: '22px' } }
                   onChange={ this.handleChange }
                   value={ this.state.input }
                   onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }
               />
               <FloatingActionButton onClick={ () => this.handleClick(this.state.input) }>
                   <SendIcon />
               </FloatingActionButton>
            </div>
           </div>
     }
}
