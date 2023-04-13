import { HomeFooterSection,FooterNavItem,Logo, FooterSection1,HeaderIconDescription,LinkItem, Footer1Subsection1, MailIcon, PhoneIcon } from "./FooterStyledComponents";
const Footer = () => (
<HomeFooterSection>
        <FooterSection1>
          <Logo
            src="https://res.cloudinary.com/dwzaz0hvq/image/upload/v1679076841/Screenshot_172_dbuek4.png"
            alt="lpgo"
          />
          <h1>Reach Us</h1>
          <Footer1Subsection1>
            <PhoneIcon />
            <HeaderIconDescription>+91 9876543210</HeaderIconDescription>
          </Footer1Subsection1>
          <Footer1Subsection1>
            <MailIcon />
            <HeaderIconDescription>fueldelivery@gmail.com</HeaderIconDescription>
          </Footer1Subsection1>
        </FooterSection1>
        <FooterSection1>
          <h1>Quick Links</h1>
          <FooterNavItem>
            <LinkItem to="/">HOME</LinkItem></FooterNavItem>
          <FooterNavItem>
            <LinkItem to = "/about">ABOUT</LinkItem></FooterNavItem>
          <LinkItem to="/admin"><FooterNavItem>ADMIN</FooterNavItem></LinkItem>
          <FooterNavItem>
            <LinkItem to = "/order">USER</LinkItem></FooterNavItem>
        </FooterSection1>
        <FooterSection1>
          <h1>Address</h1>
          <h4>Vijayawada, Andhrapradesh, India.</h4>
        </FooterSection1>
      </HomeFooterSection>)

export default Footer;