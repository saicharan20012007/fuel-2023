import {useState} from "react"
import axios from 'axios'

import {Container,Form,Label, Input,Select, Button  } from "./UserOrderStyledComponents"

const OrderFuelDashboard = () => {
    const [state, setState] = useState("");
    const [district, setDistrict] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [fueltype, setFueltype] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [deliverydate, setDeliverydate] = useState("");
    const [deliveryTime, setDeliveryTime] = useState("");
    const [paymentmethod, setPaymentmethod] = useState("");
    // const [cardNumber, setCardNumber] = useState("");
  
    const handleSubmit = async (e) => {
    
      e.preventDefault();
      try {
        const res = await axios.post('https://fuel-api.onrender.com/api/orders', {
          state,
          district,
          city,
          address,
          fueltype,
          quantity,
          deliverydate,
          paymentmethod,
        });
        console.log(res.data);
        // Reset form fields
        setState('');
        setDistrict('');
        setCity('');
        setAddress('');
        setFueltype('');
        setQuantity(0);
        setDeliverydate('');
        setPaymentmethod('');
        alert("Order Placed successfully")
      } catch (err) {
        console.log(err);
        alert("Order Placed Failed")
      }

    };

      // console.log(cardNumber)
      // handle order confirmation
    
  
    return (
      <Container>
        <h1>Order Fuel</h1>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="state">State</Label>
          <Select id="state" value={state} onChange={(e) => setState(e.target.value)}>
            <option value="">Select State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
          </Select>
          <Label htmlFor="district">District</Label>
          <Select id="district" value={district} onChange={(e) => setDistrict(e.target.value)}>
            <option value="">Select District</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Thiruvananthapuram">Thiruvananthapuram</option>
          </Select>
          <Label htmlFor="city">City</Label>
          <Input id="city" type="text" value={city} onChange={(e) => setCity(e.target.value)} />
          <Label htmlFor="address">Address</Label>
          <Input id="address" type="text" value={address} onChange ={(e) => setAddress(e.target.value)} />
            <Label htmlFor="fuelType">Fuel Type</Label>
            <Select id="fuelType" value={fueltype} onChange={(e) => setFueltype(e.target.value)}>
            <option value="">Select Fuel Type</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            </Select>
            <Label htmlFor="quantity">Quantity</Label>
            <Input id="quantity" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            <Label htmlFor="deliveryDate">Delivery Date</Label>
            <Input id="deliveryDate" type="date" value={deliverydate} onChange={(e) => setDeliverydate(e.target.value)} />
            <Label htmlFor="deliveryTime">Delivery Time</Label>
            <Input id="deliveryTime" type="time" value={deliveryTime} onChange={(e) => setDeliveryTime(e.target.value)} />
            <Label htmlFor="paymentMethod">Payment Method</Label>
            <Select id="paymentMethod" value={paymentmethod} onChange={(e) => setPaymentmethod(e.target.value)}>
            <option value="">Select Payment Method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="UPI">UPI</option>
            <option value="Net Banking">Net Banking</option>
            </Select>
            {/* {paymentMethod === "Credit Card" || paymentMethod === "Debit Card" ? (
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input id="cardNumber" type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
            ) : null} */}
            <Button type="submit" onClick={handleSubmit}>Confirm Order</Button>
            </Form>
            </Container>
            );
            };
        
export default OrderFuelDashboard;