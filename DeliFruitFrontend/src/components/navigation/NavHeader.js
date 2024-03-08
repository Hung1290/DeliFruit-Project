import React from 'react';
import './nav.scss'
import { Link, useHistory, useLocation } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../redux/actions/userActions';

const NavHeader = () => {
    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)

    const handleLogout = async () => {
        dispatch(userLogout())
        history.push('/login')
    }

    const handleAdmin = () => {
        history.push('/admin')
    }

    if (location.pathname === '/login' || location.pathname === '/register') {
        return <></>
    } else {
        return (
            <div className='nav-container'>
                <div className='nav-header fixed-top'>
                    <Navbar bg='header' expand='lg'>
                        <Container>
                            <Navbar.Brand href="/">
                                <img
                                    className='img-logo'
                                    src='https://delifruit.vn/wp-content/uploads/2022/11/logo.png'
                                />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="/" exact className='nav-link'>Trang chủ</Nav.Link>
                                    <Nav.Link href="/fruit-basket" className='nav-link'>Giỏ trái cây</Nav.Link>
                                    <Nav.Link href="/fruit" className='nav-link'>Trái cây</Nav.Link>
                                </Nav>
                                <Nav>
                                    {
                                        user && user.isAuthenticated === true
                                            ?
                                            <>
                                                <Nav.Item className='nav-link'>
                                                    Welcome {user.userInfor.username} !
                                                </Nav.Item>
                                                <NavDropdown title="Settings" id="basic-nav-dropdown">
                                                    <NavDropdown.Item>
                                                        <span onClick={() => handleAdmin()}>Admin</span></NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <NavDropdown.Item>
                                                        <span onClick={() => handleLogout()}>Log out</span>
                                                    </NavDropdown.Item>
                                                </NavDropdown>
                                            </>
                                            :
                                            <Link className='nav-link' to='/login'>
                                                Login
                                            </Link>
                                    }
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
        );
    }
}

export default NavHeader;