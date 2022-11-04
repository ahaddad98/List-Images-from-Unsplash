import React from "react";
import styled from "styled-components";
import { Button, Select } from 'antd';
import { Tabs } from 'antd';

const Headerstyle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .select{
        background: #FFFFFF;
        border: 1px solid #DCDCDC;
        border-radius: 4px;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
        color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }
    .tabs{
        .ant-tabs-top > .ant-tabs-nav::before, .ant-tabs-top > div > .ant-tabs-nav::before {
            display: none;
        }
        .ant-tabs-top > .ant-tabs-nav .ant-tabs-ink-bar, .ant-tabs-top > div > .ant-tabs-nav .ant-tabs-ink-bar {
            display: none;
        }
        .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
            color: #515055;
            background: #DDDDDD;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            /* font-family: 'Poppins'; */
            /* font-style: normal; */
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
        }
        .ant-tabs-tab-btn {
            outline: none;
            transition: all 0.3s;
            padding: 3px 6px 3px 6px;
            font-family: 'Roboto', sans-serif;
            /* font-family: 'Poppins'; */
            /* font-style: normal; */
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
        }
        .ant-tabs-tab + .ant-tabs-tab {
            margin: 0 0 0 15px;
        }
    }
`

const Header = () => {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    const onChange = (key: string) => {
        console.log(key);
    };
    return <Headerstyle>
        <div className="select">
            <Select
                defaultValue="Popular"
                style={{ width: 120 }}
                bordered={false}
                onChange={handleChange}
                options={[
                    // {
                    //     value: 'jack',
                    //     label: 'Jack',
                    // },
                    // {
                    //     value: 'lucy',
                    //     label: 'Lucy',
                    // },
                    // {
                    //     value: 'disabled',
                    //     disabled: true,
                    //     label: 'Disabled',
                    // },
                    // {
                    //     value: 'Yiminghe',
                    //     label: 'yiminghe',
                    // },
                ]}
            />
        </div>
        <div className="tabs">
            <Tabs
                defaultActiveKey="1"
                onChange={onChange}
                items={[
                    {
                        label: `All`,
                        key: '1',
                        children: ``,
                    },
                    {
                        label: `Animation`,
                        key: '2',
                        children: ``,
                    },
                    {
                        label: `Branding`,
                        key: '3',
                        children: ``,
                    },
                    {
                        label: `Illustration`,
                        key: '4',
                        children: ``,
                    },
                    {
                        label: `Mobile`,
                        key: '5',
                        children: ``,
                    },
                    {
                        label: `Print`,
                        key: '6',
                        children: ``,
                    },
                    {
                        label: `Product design`,
                        key: '7',
                        children: ``,
                    },
                    {
                        label: `Typography`,
                        key: '8',
                        children: ``,
                    },
                    {
                        label: `Web Design`,
                        key: '9',
                        children: ``,
                    },
                ]}
            />
        </div>
        <div>
            <Button type="primary" className="select" icon={<img src='/filter.png' width={20} height={20}></img>}>
                Filters
            </Button>
        </div>
    </Headerstyle>
}

export default Header