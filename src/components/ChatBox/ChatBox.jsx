import React, { useState, useEffect } from "react";
import { Row, Col } from 'antd';
import queryString from 'query-string';
import io from "socket.io-client";

import ScrollToBottom from 'react-scroll-to-bottom';

import ChatMessage from '../ChatMessage/ChatMessage';

const ChatBox = ({ room, messages, name, setMessage, sendMessage, message }) => {
	  return (
		    
		    <Row justify="center" className="page-content">
              <Col span={16}>


                <div class="chat-page">
                  <div className="chat-page-header"> 
                      Chat Box of : {room}
                  </div>
                  <div class="msg-inbox">
                    <div class="chats">

                        <ScrollToBottom className="msg-page">
                        
                          {messages.map((message, i) =>

                            <div key={i}>
                              <ChatMessage message={message} name={name}/>
                            </div>  
                          )}
                        </ScrollToBottom>

                    </div>
                    
                  </div>

                  <div class="msg-bottom">
                    <div class="input-group">
                      <input 
                          type="text" 
                          class="form-control" 
                          placeholder="send message..." 
                          value={message} 
                          name=""
                          onChange={({ target: { value } }) => setMessage(value)}
                          onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null} 
                        />
                      <div class="input-group-append">
                        <span class="input-group-text" onClick={e => sendMessage(e)}><i class="fa fa-paper-plane"></i></span>
                      </div>

                    </div>
                  </div>

                </div>  
              </Col>
            </Row>
          
		  );
	}

export default ChatBox;