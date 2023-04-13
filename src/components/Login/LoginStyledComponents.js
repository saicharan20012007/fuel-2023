import styled from 'styled-components'


export const LoginContainer = styled.div`
height:700px;
background-image:url("https://www.customtruck.com/wp-content/uploads/2020/05/shutterstock_505525018-scaled.jpg");
padding:200px;
background-size:cover;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;`


export const LoginFormCard = styled.div`
height:400px !important;
width:600px;

background-color:white;
border-radius:7px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const UserInput = styled.input`
height:60px;
font-size:18px;
padding:5px;
padding-left:15px;
margin:10px;`

export const UserLabel = styled.label`
font-size:20px;
font-weight:400px;
color:black;
`
export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 5px;
  width: 250px;
  height:20px;
  border-line:solid;
  border-radius: 5px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
`;
export const RegisterButton = styled.button`
  padding: 10px;
  margin: 5px;
  width: 250px;
  border-radius: 5px;
  border: none;
  background-color: orange;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0062cc;
  }
`;


export const Button = styled.button`
  padding: 10px;
  margin: 5px;
  width: 250px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0062cc;
  }
`;

export const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40vh;
`;