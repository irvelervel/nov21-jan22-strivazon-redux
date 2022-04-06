import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { FaShoppingCart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { useState } from 'react'
import { setUsernameAction } from '../redux/actions'

// CartIndicator should now connect to the Redux Store
// so we're going to use the connect() function from react-redux
// we're going to read the length of state.cart.products

// CartIndicatore just needs a mapStateToProps function, because
// we don't need "write access" from here

const mapStateToProps = (state) => ({
  // every key of this object will become a props for CartIndicator
  cartLength: state.cart.products.length,
  // cartLength is now a PROP for CartIndicator!
  username: state.user.name,
})

const mapDispatchToProps = (dispatch) => ({
  setUsername: (name) => {
    dispatch(setUsernameAction(name))
  },
})

const CartIndicator = ({ cartLength, username, setUsername }) => {
  const navigate = useNavigate()
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    console.log(e)
    e.preventDefault()
    // here I want to submit my username to the redux store!
    setUsername(name)
  }

  return (
    <div className="ml-auto mt-2">
      {username ? (
        <>
          <span className="mr-3">Hello {username}!</span>
          <Button color="primary" onClick={() => navigate('/cart')}>
            <FaShoppingCart />
            <span className="ml-2">{cartLength}</span>
          </Button>
        </>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Login from here!"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
        </Form>
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIndicator)
