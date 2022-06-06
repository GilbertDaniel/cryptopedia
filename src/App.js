import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { HomePage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './components'
import './App.css'
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
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