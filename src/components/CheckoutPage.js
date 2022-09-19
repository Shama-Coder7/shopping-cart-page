import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai'

const CheckoutPage = () => {

  const navigate= useNavigate();
  
  const handleback = () => {
    navigate('/');
  };
  return (
    <div>
        <h1 style={{color: 'green', margin: '15%', fontSize: '30px', fontFamily:'cursive'}}>Thanks for Shopping</h1>

        <h4 style={{ fontSize: '20px', marginLeft: '10%'}} onClick={handleback}><AiOutlineArrowLeft />Back</h4>

    </div>
  )
}

export default CheckoutPage