import React ,{useState, useEffect} from 'react';

const AlbumLinks=({getLink}) =>{


    function getLink()
    {
        alert("Here is a link");
    }

    function returnLink(platform,album)
    {
        alert(albumLinks.find(platform,album));
        return albumLinks.find(platform,album);
    }


    var albumLinks = [
        {
            "Platform": "Spotify",
            "Greatest Hits": "https://open.spotify.com/embed/album/2AX3c4d8f0Ho0e2sSSMvl8?utm_source=generator&theme=0",
            "Child Of Sin": "https://open.spotify.com/embed/album/2AX3c4d8f0Ho0e2sSSMvl8?utm_source=generator&theme=0",
            "Dream Killer": "https://open.spotify.com/embed/album/7CXmQUZR4UffmF6kUPXE4c?utm_source=generator%22",
            "On Sale": "https://open.spotify.com/embed/album/38pTPygF39cJxrZ8m3l6Rz?utm_source=generator&theme=0"
        },
        {
            "firstName": "Harry",
            "lastName": "Potter",
            "number": "0994372684",
            "likes": ["Hogwarts", "Magic", "Hagrid"]
        },
        {
            "firstName": "Sherlock",
            "lastName": "Holmes",
            "number": "0487345643",
            "likes": ["Intriguing Cases", "Violin"]
        },
        {
            "firstName": "Kristian",
            "lastName": "Vos",
            "number": "unknown",
            "likes": ["Javascript", "Gaming", "Foxes"]
        }
    ];


}

export default AlbumLinks;