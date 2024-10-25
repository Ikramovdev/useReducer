import React from 'react';
import { LikeOutlined, ShoppingOutlined } from '@ant-design/icons';
import {  Card } from 'antd';
const { Meta } = Card;
const UsersItem = ({item}) => (
  <Card
    style={{
      width: 300,
      backgroundColor:"lightblue",
    }}
    cover={
      <img
        alt="example"
        src={item.image}
      />
    }
    actions={[
      <LikeOutlined className='scale-[1.5]'/>,
      <ShoppingOutlined className='scale-[1.5]'/>,
    ]}
  >
    <Meta
      title={`${item.firstName} - ${item.lastName}`}
      description={item.email}
      />
  </Card>
);
export default UsersItem;