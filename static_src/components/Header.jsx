import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import Avatar from 'material-ui/Avatar';


export default class Header extends React.Component {
   static propTypes = {
       chatId: PropTypes.number,
   };

   static defaultProps = {
       chatId: 1,
   };

   render() {
       return (
           <div className="header">
                <div className="chat">
                    <div>Чат { this.props.chatId }</div>
                </div>
                <div className="chat">
                    <Link to='/profile/' style={{ textDecoration: 'none' }}>
                        <Avatar><span>Ф</span></Avatar>
                    </Link>
                </div>
                
             
            </div>
       )
   }
}