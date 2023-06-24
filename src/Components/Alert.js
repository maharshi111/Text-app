import React from 'react'

export default function Alert(props) {
    function capitalize(word){
        const lower= word.toLowerCase();
        return word.charAt(0).toUpperCase() + lower.slice(1)//slice method will remove the first element from string that is the 0th index element
    }//this function is written so that we can display 's' of success in upper case
  return (
   props.alert&&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  //props.alert&&<div></div> this syntax means if props.alert is true then it will evaluate the code inside the div block and in case if props.alert is false  or null it will not evaluate or run the code inside  <div>
  )
}
