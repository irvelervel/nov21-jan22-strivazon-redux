import Button from 'react-bootstrap/Button'
import { FaShoppingCart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

// CartIndicator should now connect to the Redux Store
// so we're going to use the connect() function from react-redux
// we're going to read the length of state.cart.products

// CartIndicatore just needs a mapStateToProps function, because
// we don't need "write access" from here

const mapStateToProps = (state) => ({
  // every key of this object will become a props for CartIndicator
  cartLength: state.cart.products.length,
  // cartLength is now a PROP for CartIndicator!
})

const CartIndicator = ({ cartLength }) => {
  const navigate = useNavigate()

  return (
    <div className="ml-auto mt-2">
      <Button color="primary" onClick={() => navigate('/cart')}>
        <FaShoppingCart />
        <span className="ml-2">{cartLength}</span>
      </Button>
    </div>
  )
}

export default connect(mapStateToProps)(CartIndicator)
