import Header from "../Header";
import Footer from "../Footer"
import {
  AboutTitle,
  AboutSection1,
  AboutSectionImage,
  AboutSectionDesContainer,
  AboutDescription
} from "./AboutStyledComponents";

const About = () => (
  <>
    <Header />
    <AboutTitle>About Us</AboutTitle>
    <AboutSection1>
      <AboutSectionImage 
        src="https://successko.com/wp-content/uploads/2021/05/on-demand-fuel-delivery.png"
        alt="about"
      />
      <AboutSectionDesContainer>
        <AboutDescription>
        Welcome to our fuel delivery website! We are a reliable and trusted provider of high-quality fuel delivery services for both residential and commercial customers. Our goal is to ensure that our customers always have access to the fuel they need, when they need it.
        </AboutDescription>
        <AboutDescription>
        At our fuel delivery website, we offer a range of fuel types, including gasoline, diesel, and heating oil, to meet the diverse needs of our customers. Our team of experienced professionals is dedicated to providing timely and efficient delivery services, with a focus on safety and reliability.
        </AboutDescription>
        <AboutDescription>
        We understand that our customers lead busy lives, which is why we offer flexible scheduling options to ensure that our deliveries fit into their schedules. Our website also features easy-to-use online ordering and payment systems, making it simple and convenient for our customers to place orders and manage their accounts.
        </AboutDescription>
        <AboutDescription>
        Whether you need fuel for your home or business, you can count on us to provide the highest quality products and services at competitive prices. Thank you for choosing our fuel delivery website – we look forward to serving you!
        </AboutDescription>
        <AboutDescription>
        In addition to our fuel delivery services, we also offer tank monitoring and maintenance services. Our team can help you keep track of your fuel levels, and we can provide regular maintenance to ensure your fuel tank is in good condition and operating efficiently.
        </AboutDescription>
      </AboutSectionDesContainer>
    </AboutSection1>
    <Footer/>
   </>
);

export default About;