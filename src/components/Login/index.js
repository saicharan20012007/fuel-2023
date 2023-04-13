import Header from "../Header"
import { BallTriangle } from "react-loader-spinner";

import {useState} from "react"
import {useNavigate, Link} from "react-router-dom"
import axios from 'axios';

import { LoginContainer,LoginWrapper,Loader,LoginFormCard,RegisterButton ,Input,Form, Button } from "./LoginStyledComponents"
const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const Loading = () => {
    return (
      <Loader>
        <BallTriangle color="#00BFFF" height={80} width={80} />
      </Loader>
    );
  };
  const handleSubmit = async (event) => {
    setLoading(true);

    event.preventDefault();
    // const userDetails = { email, password };
    const url = "https://fuel-api.onrender.com/login";
    // console.log(userDetails);

    try {
      const response = await axios.post(url, {
        email,
        password,
      });
      if (response.data.status === 200) {
        setLoading(false)
        alert("Login Success");
        navigate("/order");
      }
      else {
        setLoading(false)
        alert("Login Failed");
        navigate("/register" );
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <>
      {isLoading ? (
        Loading()
      ) : (
   <> <Header/>
    <LoginContainer>
      <LoginFormCard>
    <LoginWrapper>

      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
       <Link to="/register"><RegisterButton type="button">Register</RegisterButton></Link> 
      </Form>
    </LoginWrapper>
    </LoginFormCard>
    </LoginContainer></>
  )}
  </>
);
};

        

export default Login