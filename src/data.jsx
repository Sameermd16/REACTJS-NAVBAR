import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube} from 'react-icons/fa'

export const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
  },
  {
    id: 4,
    url: "/contact",
    text: "contact",
  },
  {
    id: 5,
    url: "/profile",
    text: "profile",
  },
];

export const social = [
    {
        id: 1,
        url: 'https://www.twitter.com',
        icon: <FaTwitter />
    },
    {
        id: 2, 
        url: 'https://www.linkedin.com',
        icon: <FaLinkedin />
    },
    {
        id: 3,
        url: 'https://www.facebook.com',
        icon: <FaFacebook />
    },
    {
        id: 4,
        url: 'https://www.youtube.com',
        icon: <FaYoutube />
    }
]