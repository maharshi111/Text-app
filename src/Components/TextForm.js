
import React,{useState} from 'react'

export default function TextForm(props) {
  const[text,setText] = useState("");
  function handleUPClick( ){
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upper case","success")

  }
  function handleOnChange(event){
    setText(event.target.value);
  }
  function handleDownClick( ){
     setText(text.toLowerCase());
     props.showAlert("converted to lower case","success")
  }

  function special( ){
    const countSpecial = text => {
      const punct = "!,.-?";
      let count = 0;
      for(let i = 0; i < text.length; i++){
         if(!punct.includes(text[i])){
            continue;
         };
         count++;
      };
      return count;
   };
   alert( "The number of special characters are "+countSpecial(text));
 }

 function clearClick( ){
  setText("");
  props.showAlert("Text Cleared!","success")
}
 
  
  // function handleDownClick(event){
  //   event.preventDefault();
  //   setText(event.target.value.toLowerCase())
  // }
  return (
    <>
      
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
          <h1>{props.heading} </h1>
          <div className="mb-3">
          <textarea className="form-control" id="myBox" value= {text} style={{backgroundColor: props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} onChange={handleOnChange} rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleUPClick}>convert to uppercase</button>
          <button className="btn btn-primary mx-1" onClick={handleDownClick} >convert to lowercase</button>
          <button className="btn btn-primary mx-1" onClick={special} >count special charcters</button>
          <button className="btn btn-primary mx-1" onClick={clearClick} >clear</button>
          
      </div>
      <div className={`container my-3  text-${props.mode==='light'?'dark':'light'}`} >{/* my-3 is also a class of bootstrap that means margin in y of 3  and text is a bootstrap property in case if you want to change the font color to white you can also use the method of the above div*/}
         <h2>Your text summary </h2>
         <p>{text.split(" ").length} words and {text.length} characters</p>
         <p>{0.008*text.split(" ").length} minutes of reading</p>
         <h2>preivew</h2>
         <p>{text.length>0?text:"please enter something to preview"}</p>
      </div>
       
      
    </>
  )
}
