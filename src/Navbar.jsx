import React, { useState } from 'react'
import { links, social } from './data'
import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'


export default function Navbar() {
    // console.table(links)
    const [showLinks, setShowLinks] = useState(false)
    return (
        
            <Nav>
                <NavHeader>
                    <h1>#LOGO</h1>
                    <NavToggler onClick={() => setShowLinks(!showLinks)}><FaBars color='87CEEB' size={20} /></NavToggler>
                </NavHeader>
                {
                    showLinks && (
                    <LinksContainer>
                        <ul>
                            {
                                links.map((item) => {
                                    const { id, url, text } = item
                                    return (
                                        <Link key={id}>
                                            <a href={url}>{text}</a>
                                        </Link>
                                    )
                                })
                            }
                        </ul>
                    </LinksContainer>

                    )
                }
                <SocialIconsDiv>
                    {
                        social.map((socialIcon) => {
                            const { id, url, icon } = socialIcon
                            return (
                                <li key={id}>
                                    <a href={url}>{icon}</a>
                                </li>
                            )
                        })
                    }
                </SocialIconsDiv>
            </Nav>
        
    )
}

const Nav = styled.nav`
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    @media screen and (min-width: 800px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`
const NavHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`
const LinksContainer = styled.div`
    ul {
        @media screen and (min-width: 800px) {
            display: flex;
            list-style-type: none;
        }
    }
`

const Link = styled.li`
    a{
        text-decoration: none;
        color: black;
        padding: 12px;
        display: block;
    }
    a:hover{
        color: #87CEEB;
    }
`

const NavToggler = styled.button`
    transition: all 0.3s linear;
    border: none;
    background: transparent;
    cursor: pointer;
    :hover {
        transform: rotate(90deg)
    }
    @media screen and (min-width: 800px) {
        display: none;
    }
`
const SocialIconsDiv = styled.ul`
    display: none;
    list-style-type: none;
    li{
        margin-left: 10px;
    }
    @media screen and (min-width: 800px) {
        display: flex;
    }
`
