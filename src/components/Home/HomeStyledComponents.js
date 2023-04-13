import styled from "styled-components";
import "typeface-raleway";
import "typeface-quicksand";

import "typeface-roboto";
import { ImLinkedin2 } from "react-icons/im";
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
export const HomeSection1 = styled.div`
  background-image: url("https://nectarbits.com/blog/wp-content/uploads/2020/10/NCT-Fuel-Delivery-business-tips.png");
  background-size: cover;
  height: 500px;
  margin-bottom: 25px;
`;

export const HomeSection2 = styled.div`
  display: flex;
  flex-direction: row;
  height: 500px;
  margin-top: 25px;
`;

export const HomeS2SubSection = styled.div`
  width: 50%;
`;

export const HomeS2SubSectionImage = styled.img`
  height: 500px;
  width: 100%;
`;

export const HomeS2SubSectionDescription = styled.p`
  color: #30302f;
  font-size: 18px;
  font-weight: 400;
  line-height: 29px;
  font-family: "Quicksand", sans-serif;

  padding: 10px;
`;

export const HomeFooterSection = styled.div`
  height: 400px;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;

  background-color: #183b56;
`;

export const FooterSection1 = styled.div`
  width: 33%;

  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;