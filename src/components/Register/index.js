import Header from "../Header"
import {useState } from 'react'
import { BallTriangle } from "react-loader-spinner";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { RegistrationWrapper,Loader, Form,Input, Button, InputWrapper,RegistrationContainer } from "./RegisterStyledComponents";

const Register = () => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const history = useNavigate();
    const [isLoading, setLoading] = useState(false);

   
    const handleSubmit = async (event) => {
        setLoading(true);

      event.preventDefault();
      const data = {
        firstname,
        lastname,
        email,
        address,
        phone, 
        password, 
        city, 
        country
      };
  
      const url = "https://fuel-api.onrender.com/register"
      // console.log(userDetails);
  
      try {
        const response = await axios.post(url, data);
        console.log(response.data);
        if (response.data.status === 200) {
          alert("Registration Success");
          setLoading(false);

          history("/login");
        } else {
          alert("Registration  Failed");
          history("/register");
          setLoading(false);

        }
      } catch (error) {
        console.log(error.response.data);
      }
    };

    
    const Loading = () => {
        return (
          <Loader>
            <BallTriangle color="#00BFFF" height={80} width={80} />
          </Loader>
        );
      };
    
        
    return (
      <> {isLoading ? (
        Loading()
      ) : ( <><Header/>  
<RegistrationContainer> 
      <RegistrationWrapper>
        
        <h2>Registration</h2>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <Input
              type="text"
              value={firstname}
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="text"
              value={lastname}
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="text"
              value={phone}
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <Input type="text"
            placeholder="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
    </InputWrapper>
    <Button type="submit">Register</Button>
    
  </Form>
</RegistrationWrapper>
</RegistrationContainer>
 
 </>)}
 </>
);
};

export default Register;