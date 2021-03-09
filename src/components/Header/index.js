import React from 'react'
import { Link } from 'react-router-dom'
import {Container, Menu} from './index.styles'

const Header = () => {
    return(
        <Menu>
            <Container>
                <Link to="/">
                <h3>historical crypto</h3>
                </Link>
            </Container>
            <Container>
                <Link to="/about">
                <h4>about</h4>
                </Link>
            </Container>
        </Menu>
    )
} 

export default Header