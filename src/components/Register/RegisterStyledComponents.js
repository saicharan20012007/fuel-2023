import styled from 'styled-components'

export const RegistrationContainer = styled.div`
height:700px;
background-image:url("https://www.customtruck.com/wp-content/uploads/2020/05/shutterstock_505525018-scaled.jpg");
padding:200px;
background-size:cover;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;`
export const RegistrationWrapper = styled.div`
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
  border-radius: 5px;
  border: none;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
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
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;
export const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40vh;
`;