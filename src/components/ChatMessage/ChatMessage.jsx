import React from 'react';

import ReactEmoji from 'react-emoji';

const ChatMessage = ({ message: { time, text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{trimmedName} {time}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
        )
        : (
          <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
              <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
            </div>
            <p className="sentText pl-10 ">{time} {user}</p>
          </div>
        )
  );
}

export default ChatMessage;


/*                              <div class="received-chats">
                                <div class="received-chats-img">
                                  <img src="main.png"/>
                                </div>

                                <div class="received-msg">
                                  <div class="received-msg-inbox">
                                    <p>Hi !!! This is a message.</p>
                                    <span class="time">11:01 PM | Oct 11</span>
                                    
                                  </div>
                                  
                                </div>
                              </div>

                              <div class="outgoing-chats">

                                <div class="outgoing-chats-msg">
                                  <p>Hi !!! This is a message.</p>
                                  <span class="time">11:01 PM | Oct 11</span>
                                </div>

                                <div class="outgoing-chats-img">
                                  <img src="main.png"/>
                                </div>
                              </div>
*/