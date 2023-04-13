import styled from "styled-components";
import { ImLinkedin2 } from "react-icons/im";
import {Link} from 'react-router-dom'
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { AiOutlineMail, AiOutlineMenu } from "react-icons/ai";

export const Header1 = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #4f46e5;
`;

export const LinkedinIcon = styled(ImLinkedin2)`
  height: 20px;
  width: 20px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;

export const LinkItem = styled(Link)`
text-decoration: none;`
export const FacebookIcon = styled(BsFacebook)`
  height: 20px;
  width: 20px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;
export const Menu = styled(AiOutlineMenu)`
  height: 30px;
  width: 30px;
  color: black;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
`;

export const Sidebar = styled.div`
  width: 0;
  height: 100vh;
  background-color: #0b034f;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  overflow-x: hidden;
  transition: 0.5s;
`;

export const TwitterIcon = styled(BsTwitter)`
  height: 20px;
  width: 20px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;

export const YoutubeIcon = styled(BsYoutube)`
  height: 20px;
  width: 20px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;

export const PhoneIcon = styled(BsFillTelephoneFill)`
  height: 20px;
  width: 20px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;
export const FaBarsIcon = styled(FaBars)`
  height: 20px;
  width: 20px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;

export const MailIcon = styled(AiOutlineMail)`
  height: 20px;
  width: 20px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;

export const InstagramIcon = styled(BsInstagram)`
  height: 20px;
  width: 20px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Header1Subsection1 = styled.div`
  height: 50px;
  width: 500px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
`;
export const Footer1Subsection1 = styled.div`
  height: 50px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
`;

export const HeaderIconDescription = styled.p`
  color: white;
  font-family: Roboto;
  font-size: 20px;
`;

export const Header2 = styled.div`
  height: 100px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.5); /* Box shadow properties */
`;

export const Logo = styled.img`
  height: 80px;
  align-self: center;
  width: 150px;
`;

export const NavItemsContainer = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;
export const NavItem = styled.p`
  font-family: "Raleway";
  font-size: 20px;
  color: black;
  padding-left: 10px;
  padding-right: 10px;
  font-weight: 500;
`;
export const FooterNavItem = styled.p`
  font-family: "Raleway";
  font-size: 20px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  font-weight: 600;
`;