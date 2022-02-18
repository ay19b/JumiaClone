import React from 'react'
import Category from './category'

const Categories=()=> {
    return(
      <>
      <Category cag="Supermarket" more="/Supermarket"/>
      <Category cag="Fashion" more="/Fashion" />
      <Category cag="appliance" more="/appliance"/>
      <Category cag="Sports" more="/Sports"/>
      <Category cag="computing" more="/computing"/>
      </>
    )
}
export default Categories;