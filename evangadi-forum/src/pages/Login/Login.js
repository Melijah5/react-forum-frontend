import React, {useState, useEffect} from 'react'
import {Form, Button, Row, Col, Container} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {Link,redirect, useLocation, useNavigate} from 'react-router-dom'
import FormContainer from '../../components/FormContainer'
// import BackgroundImage from '../../asset/image/10003.svg'
import './Login.css'
import {login} from '../../actions/useActions'

function Login() {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const  [email, setEmail] = useState('')
    const  [password, setPassword] = useState('')

    const redirect = location.search ? location.search.split('=')[1] : '/'
    const userLogin = useSelector(state => state.userLogin)
    const {error, loading, userInformation} = userLogin

    useEffect(() => {
        if(userInformation){
            navigate(redirect)
        }
    }, [navigate,redirect, userInformation])

    const submitHandler = (e)=>{
        e.preventDefault()
            dispatch(login(email, password))
        
    }
  return (
   
    <Row ><Col xs={12} md={6} xl={6} py-3 >
    <FormContainer>
         <h1>Join the network</h1>
         {/* {error && <Message variant='danger'>{error}</Message>}
         {loading && <Loader />} */}
         <Form onSubmit={submitHandler}>
            <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>Sign In</Button>
         </Form>

         <Row className='py-3'>
            <Col>
            New Customer? <Link to={redirect ? `/register?redirect=${redirect}`: '/redirect'}>
                Register
                </Link>
            </Col>
         </Row>
    </FormContainer>
    </Col>
    <Col>
    <h1>Evangadi Networks</h1>
    <p>No matter what stage of life you are in, whether you’re just starting elementary school or being promoted to CEO of a Fortune 500 company, you have much to offer to those who are trying to follow in your footsteps.</p>
    <p>Wheather you are willing to share your knowledge or you are just looking to meet mentors of your own, please start by joining the network here.</p>
    
    </Col>
    
    </Row>
   
  )
}

export default Login