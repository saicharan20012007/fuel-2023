import {AiOutlineMail} from 'react-icons/ai'
import styled from 'styled-components'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

export const HomeFooterSection = styled.div`
  height: 300px;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;

  background-color: #183b56;
`;

export const LinkItem = styled(Link)`
text-decoration: none;`

export const FooterSection1 = styled.div`
  width: 33%;

  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

export const FooterNavItem = styled.p`
  font-family: "Raleway";
  font-size: 20px;
  color: white;
  cursor:pointer;
  padding-left: 10px;
  padding-right: 10px;
  font-weight: 600;
`;
export const Logo = styled.img`
  height: 80px;
  align-self: center;
  width: 150px;
`;
export const Footer1Subsection1 = styled.div`
  height: 50px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
`;

export const MailIcon = styled(AiOutlineMail)`
  height: 20px;
  width: 20px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;export const PhoneIcon = styled(BsFillTelephoneFill)`
height: 20px;
width: 20px;
color: white;
padding-left: 10px;
padding-right: 10px;
`;
export const HeaderIconDescription = styled.p`
  color: white;
  font-family: Roboto;
  font-size: 20px;
`;