import React from 'react'
import { Container } from 'react-bootstrap';
import SidebarSearchHook from '../../../CustomHooks/Search/SidebarSearchHook';
import SideFilterByBrand from './SideFilterByBrand';
import SideFilterByCategory from './SideFilterByCategory';
import SideFilterByPrice from './SideFilterByPrice';

const SideFilterContainer = () => {
  const [category, vendor, clickCategory, clickBrand] = SidebarSearchHook()
  return (
    <>
    <Container>
        <SideFilterByPrice />
        <SideFilterByCategory category={category} clickCategory={clickCategory}/>
        <SideFilterByBrand vendor={vendor} clickBrand={clickBrand}/>
    </Container>
    </>
  )
}

export default SideFilterContainer