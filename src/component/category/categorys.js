import React from 'react'
import Category from './category'

const Categories=()=> {
    return(
      <>
      <Category cag="Supermarket" more="/Supermarket"/>
      <Category cag="Health beauty" more="/beauty"/>
      <Category cag="Home & office" more="/office"/>
      <Category cag="Fashion" more="/Fashion" />
      <Category cag="appliance" more="/appliance"/>
      <Category cag="Sports" more="/Sports"/>
      <Category cag="Phones and Tablets" more="/telephone"/>
      </>
    )
}
export default Categories;