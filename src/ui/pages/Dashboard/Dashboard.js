import React from 'react'
import './dashboard.css'
import { Menu, Dropdown, Icon } from 'antd';
import TitleHeader from '../../shared/TitleHeader/TitleHeader.js'

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
  </Menu>
);
class Dashboard extends React.Component{
  render(){
    return(
      <div className='dash-board'>
        <TitleHeader title='大家评价' />
        <div className='dash-board-wrap'>
            <Dropdown overlay={menu}>
              <div className='dash-board-top'>
              <div className='dash-board-userinfo'>
                <img src="http://media.haoduoshipin.com/yummy/default-avatar.png" size="small"/>
                <div>
                  <h3>Liulu</h3>
                  <span>time</span>
                </div>
                <div className='dash-board-actions'>
                  <span>点评</span>
                  <span><Icon type="heart"/>点赞</span>
                </div>
              </div>
              <div className='dash-board-dishes'>
                <img src='http://media.haoduoshipin.com/yummy/dishes/dish1.jpg'/>
              </div>
            </div>
            </Dropdown>
          <div className='dash-board-bottom'>
    11
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
