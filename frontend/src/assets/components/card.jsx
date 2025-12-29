function Card({name,description,img,price,quantity}) {
    return (
        <div style={{backgroundColor:"red", display:"flex" ,gap:"10px", flexDirection:"column", alignItems:"center", padding:"10px", borderRadius:"10px", width:"100%", margin:"10px"}}>
            <div style={{width:"33%"}}>
                <h1>{name}</h1>
                <p>{description}</p>
                <img src={img} alt={name} height={100} width={100} />
                <p>Price: ${price}</p>
                <p>Available Quantity: {quantity}</p>
            </div>
        </div>
    )
}

export default Card;