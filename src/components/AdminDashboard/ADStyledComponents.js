import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1a1a1a;
  width: 250px;
`;

export const SidebarHeader = styled.h2`
  color: white;
  margin: 20px;
  text-align: center;
`;

export const SidebarLink = styled.a`
  color: white;
  font-size: 18px;
  text-decoration: none;
  padding: 10px 20px;
  &:hover {
    background-color: #333;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContentHeader = styled.h2`
  color: #333;
  margin: 20px;
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OrderTitle = styled.h3`
  color: #333;
  margin-bottom: 10px;
`;

export const OrderText = styled.p`
  color: #777;
  margin-bottom: 5px;
`;

export const OrderButton = styled.button`
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;