import { useState } from 'react'

function CalcButton({label,onClick,variant='default'}){
  return(
    <button onClick={onClick} style={{
      width:"50px",
      height:"50px",
      margin:"5px",
      borderRadius:"20px",
      fontSize:"14px",
      backgroundColor:"#4b5563",
      color:"white",
      cursor:"pointer"
    }}>
      {label}
    </button>
  );
}

const rows=[
  ["C","<-"],
  [7,8,9,"*"],
  [4,5,6,"-"],
  [1,2,3,"+"],
  [".",0,"/","="]
];

function Calculator() {
  const [display,setDisplay]=useState('0')
  const handleClick=(value)=>{
    if(display==='0'){
      return setDisplay(value.toString())
    }
    setDisplay(display+value)
  }

  const handleClear=()=>{
    setDisplay('0')
  }

  const handleDelete=()=>{
    if(display.length===1){
      return setDisplay('0')
    }
    const newDisplay=display.slice(0,-1)
    setDisplay(newDisplay)
  }

  const handleEquals=()=>{
    try{
      const result=Function(`return ${display}`)();
      setDisplay(result.toString())
    }catch{
      setDisplay('Error')
    }
  }

return(
   <>
    <div style={{
      textAlign:'center',marginTop:'50px'}}>

    <h1>Calculator Pro Max 😎</h1>
       <div style={{
         display:'inline-block',
         padding:'20px',
         backgroundColor:"#313235ff",
         borderRadius:'10px',
         boxShadow:"0 4px 10px rgba(0,0,0,0.2)",
         textAlign:'center',
         color:'white'
        }}>
        <h2 style={{
          marginBottom:"20px",
          padding:"10px",
          backgroundColor:"#1e1e1eff",
          borderRadius:"5px",
          minWidth:"100px",
          textAlign:"right",
          fontSize:"24px",
          }}>{display}</h2>
        
        {rows.map((row,i)=>(
          <div key={i}>
            {row.map((label)=>(
              <CalcButton key={label} label={label} onClick={()=>{
                if (label==='C') return handleClear();
                if (label==='<-') return handleDelete();
                if (label==='=') return handleEquals();
                handleClick(label);
              }}
              />
            ))}
          </div>
        ))
        }
       </div>
    </div>
  </>
  )
}

export default Calculator
