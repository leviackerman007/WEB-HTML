function Card({name,description,img,price,quantity}) {
    return (
        <div style={{
            backgroundColor:"#2a3032ff", 
            display:"flex",
            gap:"10px", 
            flexDirection:"column", 
            alignItems:"center", 
            padding:"10px", 
            borderRadius:"30px", 
            width:"100%", 
            margin:"10px"}}>
            
            <div style={{width:"33%"}}>
                <h1>{name}</h1>
                <p>{description}</p>
                <div style={{
                    width:"200px",
                    height:"200px",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    overflow:"hidden",
                    backgroundColor:"#fff",
                    borderRadius:"30px",
                }}>
                    <img 
                        src={img} 
                        alt={name} 
                        style={{
                            width:"100%",
                            height:"100%",
                            objectFit:"contain",
                        }} />
                </div>
                <p>Price: ${price}</p>
                <p>Available Quantity: {quantity}</p>
            </div>
        </div>
    )
}

export default Card;