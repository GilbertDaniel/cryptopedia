import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import { Layout, Typography, Space, Button, Menu, Avatar } from 'antd'
import { HomePage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './components'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from './images/cryptocurrency.png'
import './App.css'

const App = () => {
  const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize <= 800) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);
  return (
    <div className='app'>
      <div className='navbar'>
        <div className='nav-container'>
          <div className='logo-container'>
            <Avatar src={icon} size="large" />
            <Typography.Title level={2} className='logo'>
              <Link to="/">Cryptopedia</Link>
            </Typography.Title>
            <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
          </div>
          {activeMenu && (
            <Menu theme="dark">
              <Menu.Item icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item icon={<FundOutlined />}>
                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
              </Menu.Item>
              {/* <Menu.Item icon={<MoneyCollectOutlined />}>
                        <Link to="/exchanges">Exchanges</Link>
                    </Menu.Item> */}
              <Menu.Item icon={<BulbOutlined />}>
                <Link to="/news">News</Link>
              </Menu.Item>
            </Menu>
          )}
        </div>
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path="/" element={<HomePage />}></Route>
              <Route exact path="/exchanges" element={<Exchanges />}></Route>
              <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />}></Route>
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />}></Route>
              <Route exact path="/news" element={<News />}></Route>
            </Routes>
          </div>
        </Layout>
        <div className='footer'>
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2022
            <Link to="/">
              Cryptoverse Inc.
            </Link> <br />
            All Rights Reserved.
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            {/* <Link to="/exchanges">Exchanges</Link> */}
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>

    </div>
  )
}

export default App