import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
const Header = () => {
    const { user , logOut} = useAuth()

    return (
        <Navbar collapseOnSelect expand="lg" bg='dark' variant='dark ' sticky='top'>
            <Container>
                <Navbar.Brand>Travelers</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav.Link as={HashLink} to='/home#home'>Home</Nav.Link>
                    <Nav.Link as={HashLink} to='/home#services'>Services</Nav.Link>
                    <Nav.Link as={Link} to='/book-now'>Book Now</Nav.Link>

                    {user.email ?
                        <>
                            <Nav.Link as={Link} to='/my-orders'>My Orders</Nav.Link>
                            <Nav.Link as={Link} to='/manage-all-orders'>Manage All Orders</Nav.Link>
                            <Nav.Link as={Link} to='/add'>Add A New Service</Nav.Link>
                            <Nav.Link onClick={logOut}>Log Out</Nav.Link>
                            <Navbar.Text>
                                Signed in as: <a >{user.displayName? user.displayName:user.email}</a>
                            </Navbar.Text>
                        </>
                        :
                        <>
                            <Nav.Link as={Link} to='/login'>Log In</Nav.Link>
                        </>
                    }



                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
