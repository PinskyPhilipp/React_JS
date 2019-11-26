import React from 'react';
import ReactDOM from 'react-dom';


let messages = ['Привет', 'Как дела?',];

function click(){
   messages.push('Нормально');
   console.log(messages);
};

const MessageComponent = (props) => <div>{props.text}</div>;

const MessageField = (props) => {
   const messageElements = props.messages.map(message => <MessageComponent text={ message } />);
   return (
      <div>
         <button onClick = { click }>Click me</button>
         { messageElements }
      </div>
   )
};

ReactDOM.render(
   <MessageField messages={ messages } />,
   document.getElementById('root'),
);