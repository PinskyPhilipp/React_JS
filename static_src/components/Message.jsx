import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
   static propTypes = {
       text: PropTypes.string.isRequired,
   };

   render() {
       return <div className = 'message'>
           <div>{ this.props.autor }</div>
           <div>{ this.props.text }</div>
       </div>
   }
}
