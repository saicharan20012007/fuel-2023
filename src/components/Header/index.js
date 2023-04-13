import {
    Header1,
    Header1Subsection1,
    LinkedinIcon,
    FacebookIcon,
    TwitterIcon,
    HeaderIconDescription,
    YoutubeIcon,
    LinkItem,
    PhoneIcon,
    MailIcon,
    Header2,
    NavItem,
    Logo,
    NavItemsContainer,
  } from "./HeaderStyledComponents";
  
  const Header = () => (
    <>
      <Header1>
        <Header1Subsection1>
          <LinkedinIcon />
          <FacebookIcon />
          <TwitterIcon />
          <YoutubeIcon />
        </Header1Subsection1>
        <Header1Subsection1>
          <PhoneIcon />
          <HeaderIconDescription>+91 9876543210</HeaderIconDescription>
          <MailIcon />
          <HeaderIconDescription>fueldelivery@gmail.com</HeaderIconDescription>
        </Header1Subsection1>
      </Header1>
      <Header2>
        <Logo
          src="https://res.cloudinary.com/dwzaz0hvq/image/upload/v1679076841/Screenshot_172_dbuek4.png"
          alt="lpgo"
        />
        <NavItemsContainer>
          <LinkItem to="/"><NavItem>HOME</NavItem></LinkItem>
         <LinkItem to="/about"> <NavItem>ABOUT</NavItem></LinkItem>
         <LinkItem to="/admin"> <NavItem>ADMIN</NavItem></LinkItem>
          <LinkItem to="/login"><NavItem>USER</NavItem></LinkItem>
        </NavItemsContainer>
      </Header2>
    </>
  );
  
  export default Header;