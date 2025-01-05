import React,{useState} from "react";
//import $ from 'jquery';

import { Container, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

import "./App.css";



const AlbumsByPlayer = {
    
   


    Spotify: [
    {album: "Dream Killer",  url: "https://open.spotify.com/embed/album/7CXmQUZR4UffmF6kUPXE4c?utm_source=generator%22"},
    {album: "Greatest Hits",  url: "https://open.spotify.com/embed/album/2AX3c4d8f0Ho0e2sSSMvl8?utm_source=generator&theme=0"},
    {album: "Child Of Sin",  url: "https://open.spotify.com/embed/album/6XuT1AwDgFeubOvxclVwal?utm_source=generator"},
    {album: "On Sale", url:"https://open.spotify.com/embed/album/38pTPygF39cJxrZ8m3l6Rz?utm_source=generator&theme=0"}
    ],
    Apple: [
        {album:"Dream Killer", url:"https://embed.music.apple.com/us/album/dream-killer/1649279572"},
        {album:"Greatest Hits", url:"https://embed.music.apple.com/us/album/greatest-hits/1496272229"},
        {album:"Child Of Sin", url:"https://embed.music.apple.com/us/album/child-of-sin/1558216718"},
        {album:"On Sale", url:"https://embed.music.apple.com/us/album/on-sale/1682793753"}
    ],
    Amazon: [
        {album:"Dream Killer", url:"https://music.amazon.com/embed/B0BHW2K2KL/?id=KPGVQsbhhV&marketplaceId=ATVPDKIKX0DER&musicTerritory=US"},
        {album:"Greatest Hits", url:"https://music.amazon.com/embed/B0842YWFX1/?id=AJPkRlxdb7&marketplaceId=ATVPDKIKX0DER&musicTerritory=US"},
        {album:"Child Of Sin", url:"https://music.amazon.com/embed/B08YS515B5/?id=RruBCgD46r&marketplaceId=ATVPDKIKX0DER&musicTerritory=US"},
        {album:"On Sale", url:"https://music.amazon.com/embed/B0C2NK8LHS/?id=PVW1KUIbdh&marketplaceId=ATVPDKIKX0DER&musicTerritory=US"}
    ],
    YouTube:[
        {album:"", url:""}
    ]
    }
    

export default AlbumsByPlayer;
