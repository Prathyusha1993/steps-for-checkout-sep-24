import logo from './logo.svg';
import './App.css';
import CheckoutStepper from './components/CheckoutStepper';

const CHECKOUT_STEPS = [
  {
    name: 'Customer Info',
    Component: () => <div>Provide your contact details.</div>
  },
  {
    name: 'Shipping Info',
    Component: () => <div>Enter your shipping details.</div>
  },
  {
    name: 'Payment',
    Component: () => <div>Complete your payment for your order.</div>
  },
  {
    name: 'Delivered',
    Component: () => <div>Your order has been delivered.</div>
  },
]

const App = () => {
  return (
    <div className="App">
      <h1>Checkout</h1>
      <CheckoutStepper stepsConfig={CHECKOUT_STEPS} />
    </div>
  );
}

export default App;
