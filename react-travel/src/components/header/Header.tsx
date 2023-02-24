import React from 'react';
import classess from "./Header.module.css";
import {Button, Dropdown, Input, Layout, Menu, Typography} from "antd";
import {GoogleOutlined} from "@ant-design/icons";
import logo from "../../assets/logo.svg";

export const Header: React.FC = ()=>{
    return (
        <>
            <div className={classess['app-Header']}>
                {/*top header*/}
                <div className={classess['top-header']}>
                    <div className={classess.inner}>
                        <Typography.Text>让旅游幸福</Typography.Text>
                        <Dropdown.Button
                            style={{marginLeft:15,display:'inline'}}
                            overlay={
                                <Menu>
                                    <Menu.Item>中文</Menu.Item>
                                    <Menu.Item>英文</Menu.Item>
                                </Menu>
                            }
                            icon={<GoogleOutlined/>}
                        >
                            语言
                        </Dropdown.Button>
                        <Button.Group className={classess['button-group']}>
                            <Button>注册</Button>
                            <Button>登录</Button>
                        </Button.Group>
                    </div>

                </div>

                <Layout.Header className={classess['main-header']}>
                    <img src={logo} alt={''} className={classess['App-logo']}></img>
                    <Typography.Title level={3} className={classess['title']}>React 旅游网</Typography.Title>
                    <Input.Search
                        placeholder={'请输入搜索关键字'}
                        className={classess['search-input']}
                    />
                </Layout.Header>

                <Layout.Header>
                    <Menu
                        className={classess['main-menu']}
                        mode={'horizontal'}
                        items={[
                            { key: "1", label: "旅游首页" },
                            { key: "2", label: "周末游" },
                            { key: "3", label: "跟团游" },
                            { key: "4", label: "自由行" },
                            { key: "5", label: "私家团" },
                            { key: "6", label: "邮轮" },
                            { key: "7", label: "酒店+景点" },
                            { key: "8", label: "当地玩乐" },
                            { key: "9", label: "主题游" },
                            { key: "10", label: "定制游" },
                            { key: "11", label: "游学" },
                            { key: "12", label: "签证" },
                            { key: "13", label: "企业游" },
                            { key: "14", label: "高端游" },
                            { key: "15", label: "爱玩户外" },
                            { key: "16", label: "保险" },
                        ]}
                    >

                    </Menu>
                </Layout.Header>


            </div>
        </>
    );
}

