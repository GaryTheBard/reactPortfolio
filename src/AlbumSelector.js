import Dropdown from 'react-bootstrap/Dropdown';
import React ,{useState, useEffect} from 'react';

var items = ["Greatest Hits", "Child Of Sin", "Dream Killer", "On Sale"];
const AlbumSelector=({callback,myNumber}) =>{


    function setItem(item)
    {
      setCurrentItem(item);
      callback(item);
    }

    function getItem(item)
    {
      alert(item);
      return item;
    }

    const [item, setCurrentItem] = useState("");
 
    
  return (
    <Dropdown>
    <Dropdown.Toggle variant="success"> {item? item: "Select Album"}</Dropdown.Toggle>
    <Dropdown.Menu> 
      {items.map((item) => (
        <Dropdown.Item  onClick={() => setItem(item)}>
          {item}
        </Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
  );
}

export default AlbumSelector;