import React from 'react';

//import onlineIcon from '../../icons/onlineIcon.png';
//import closeIcon from '../../icons/closeIcon.png';

import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src="https://github.com/adrianhajdin/project_chat_application/blob/master/client/src/icons/onlineIcon.png" alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/"><img src="https://github.com/adrianhajdin/project_chat_application/blob/master/client/src/icons/closeIcon.png" alt="close icon" /></a>
    </div>
  </div>
);

export default InfoBar;