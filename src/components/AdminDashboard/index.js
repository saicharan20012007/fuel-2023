import {DashboardContainer,SidebarContainer,SidebarHeader,SidebarLink,ContentContainer,ContentHeader,OrderTitle,OrderContainer,OrderDetails, OrderText} from "./ADStyledComponents"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "../Header"

// const ordersData = [
//     {
//       id: 1,
//       date: 'March 12, 2023',
//       customerName: 'John Doe',
//       deliveryAddress: '123 Main St',
//       gallons: 100,
//       totalCost: 300,
//       status: 'Pending',
//     },
//     {
//       id: 2,
//       date: 'March 14, 2023',
//       customerName: 'Jane Smith',
//       deliveryAddress: '456 Elm St',
//       gallons: 200,
//       totalCost: 600,
//       status: 'Delivered',
//     },
//   ];

  

  
  const AdminDashboard = () => {
    const [orders, setOrders] = useState([]);
    console.log(orders)

    useEffect(() => {
    axios.get('https://fuel-api.onrender.com/api/orders')
          .then(res => setOrders(res.data))
          .catch(err => console.log(err));
      }, []);
    
  
    return (
        <>        <Header/>
      <DashboardContainer>
        <SidebarContainer>
          <SidebarHeader>Dashboard</SidebarHeader>
          <SidebarLink href="#">Orders</SidebarLink>
          <SidebarLink href="#">Customers</SidebarLink>
          <SidebarLink href="#">Reports</SidebarLink>
        </SidebarContainer>
        <ContentContainer>
          <ContentHeader>Orders</ContentHeader>
          {orders.map((order) => (
            <OrderContainer key={order.id}>
              <OrderDetails>
                <OrderTitle>state #{order.state}</OrderTitle>
                <OrderText>District: {order.district}</OrderText>
                <OrderText>City: {order.city}</OrderText>
                <OrderText>Address: {order.address}</OrderText>
                <OrderText>Fueltype: {order.fueltype}</OrderText>
                <OrderText>Quantity: {order.quantity}</OrderText>
          <OrderText>Delivery Date: {order.deliverydate}</OrderText>
        </OrderDetails>
      </OrderContainer>
    ))}
  </ContentContainer>
</DashboardContainer>    </>

);
};

export default AdminDashboard;