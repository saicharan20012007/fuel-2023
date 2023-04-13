import {
    HeaderIconDescription,
    FooterNavItem,
    PhoneIcon,
    MailIcon,
    FooterSection1,
    HomeFooterSection,
    HomeS2SubSection,
    HomeSection1,
    Logo,
    Footer1Subsection1,
    HomeSection2,
    HomeS2SubSectionImage,
    HomeS2SubSectionDescription,
  } from "./HomeStyledComponents";
  import Header from "../Header";
  const Home = () => (
    <>
      <Header />
      <HomeSection1 />
      <HomeSection2>
        <HomeS2SubSection>
          <HomeS2SubSectionImage
            src="https://s3-ap-south-1.amazonaws.com/eww-wp/wp-content/uploads/2019/11/21130316/On-demand-gas-delivery-service-app.jpg"
            alt="FuelDelivery"
          />
        </HomeS2SubSection>
        <HomeS2SubSection>
          <HomeS2SubSectionDescription>
            Online fuel delivery is a convenient and efficient service that allows
            customers to order fuel from the comfort of their own homes or
            businesses. A high-quality online fuel delivery service should be
            reliable, secure, and easy to use. Reliability is essential, as
            customers need to know that their fuel will be delivered on time and
            without any issues.
          </HomeS2SubSectionDescription>
        </HomeS2SubSection>
      </HomeSection2>
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
          <FooterNavItem>HOME</FooterNavItem>
          <FooterNavItem>ABOUT</FooterNavItem>
          <FooterNavItem>REVIEWS</FooterNavItem>
          <FooterNavItem>ADMIN</FooterNavItem>
          <FooterNavItem>USER</FooterNavItem>
        </FooterSection1>
        <FooterSection1>
          <h1>Address</h1>
          <h4>Vijayawada, Andhrapradesh, India.</h4>
        </FooterSection1>
      </HomeFooterSection>
    </>
  );
  
  export default Home;