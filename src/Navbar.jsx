import React from 'react'
import { links, social } from './data'


export default function Navbar() {
    console.table(links)
    return (
        <nav>
            <ul>
                {
                    links.map((item) => {
                        const {id, url, text} = item
                        return <li key={id}>{text}</li>
                    })
                }
            </ul>
        </nav>
    )
}