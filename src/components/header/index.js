import React, {memo} from 'react';

import {headerLinks} from '@/common/local-data'
import {NavLink} from 'react-router-dom';
import {SearchOutlined} from '@ant-design/icons'
import {Input} from "antd";

import {
    HeaderLeft,
    HeaderRight,
    HeaderWrapper
}
    from './style'

export default memo(function Header(props) {

    //设置路由选择样式，前三个和最后一个为路由，商城和音乐人为超链接

    const navBarSelect = (item, index) => {
        if (index < 3 || index === 5) {
            return (
                <NavLink to={item.link}>
                    {item.title}
                    <i className="sprite_01 icon"></i>
                </NavLink>
            )
        } else {
            return <a href={item.link}>{item.title} </a>
        }
    }


    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a href="#/" className="sprite_01 logo ">网易云音乐</a>
                    <div className="select-list">
                        {
                            headerLinks.map((item, index) => {
                                return (
                                    <div key={item.title} className="select-item">
                                        {navBarSelect(item, index)}
                                    </div>
                                )
                            })
                        }
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />}/>
                    <a className="center" href="#/">创作者中心</a>
                    <a href="#/">登录</a>
                </HeaderRight>
            </div>
            <div className="divider"></div>

        </HeaderWrapper>
    )
})

;