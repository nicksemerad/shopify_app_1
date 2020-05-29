import React, { useState, useContext } from 'react';
import { Dropdown, Text } from "atomize";
import { ShopContext } from '../context/shopContext';

const DropdownTest = () => {

  const [ showDropdown, setDropdown ] = useState(false);
  const { 
    fetchProductWithId,  
    product 
    } = useContext(ShopContext);

  return(
    <Dropdown
      w="fit-content"
      isOpen={showDropdown}
      onClick={() => setDropdown({ showDropdown: !showDropdown })}
      menu={
        product.variants.map( v => (
        <Text>{v.title}</Text>
        ))
      }
    >
      Size
    </Dropdown>
  )
}

export default DropdownTest;