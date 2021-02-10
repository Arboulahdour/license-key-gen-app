import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from "socket.io-client";
import { Layout, Menu, Breadcrumb, Row, Col, Card } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  TeamOutlined,
  HomeOutlined,
  UserOutlined,
  LogoutOutlined,
  WechatOutlined,
} from '@ant-design/icons';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import 'antd/dist/antd.css';

import ChatBox from '../ChatBox/ChatBox';

const ENDPOINT = '192.168.148.250:5000';

let socket;

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const Room = ({ location }) => {

  const [collapsed, setcollapsed] = useState(false);

  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);


  useEffect(() => {
  const { name, room } = queryString.parse(location.search);

  socket = io(ENDPOINT);

  setRoom(room);
  setName(name);

  socket.emit('join', { name, room }, (error) => {
    if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
        });
    }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }



  const changeState = () => setcollapsed(!collapsed)
  return (
    <Router>
    <Layout style={{ minHeight: '100vh', background: '#1e2334', color: 'white' }}>
    
      <Sider trigger={null} collapsible collapsed={collapsed} className="sideBar">
        
        <div className="logo"/>
        
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" className="sideBar-menu">
          
          <Menu.Item key="-1" icon={<HomeOutlined />}>
            <Link to="/room/">Room Home</Link>
          </Menu.Item>
          
          {/*<Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          */}

          <SubMenu key="sub1" icon={<TeamOutlined />} title="Connected People">
            {users.map(({name}, index) => (
            <Menu.Item className="sideBar-submenu" key={index + 5}>{name}</Menu.Item>
            ))}
          </SubMenu>
          
          {/*<SubMenu key="sub2" icon={<UserOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>*/}

          <Menu.Item key="3" icon={<WechatOutlined />}>
            <Link to={`/room/chatbox?name=${name}&room=${room}`}>Open Chat</Link>
          </Menu.Item>
          
          <Menu.Item key="4" icon={<LogoutOutlined />}>
            <a href='/'>Exit</a>
          </Menu.Item>
        
        </Menu>
      
      </Sider>
    
      <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: changeState,
          })}
        </Header>
      
        <Content>

        <Route path="/room/chatbox/">
          <ChatBox room={room} messages={messages} name={name} message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </Route>
          
          
        </Content>
        
        <Footer style={{ textAlign: 'center', color: 'white' }} className="site-layout-background">Copyright © chatin.io 2021.</Footer>
      </Layout>
    
    </Layout>
    </Router>
  );
}

export default Room;
