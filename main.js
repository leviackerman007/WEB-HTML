const express=require("express")
const fs=require("fs")
const app=express()

const islogin=true;

function isUserLogin(req,res,next){
    if(!islogin){
        return res.status(401).send("User is not logged in")
    }
    next();
}

app.use(express.json())

app.get("/",(req,res)=>{
    console.log(req.headers);
    res.status(200).send("Base url is called")
});

const product=[
    {'id':1,'name':'laptop','price':45000},
    {'id':2,'name':'mobile','price':25000},
    {'id':3,'name':'tablet','price':15000}
];

// app.get('/search',(req,res)=>{
//     const data=req.body.name;
//     res.status(200).send(`Hello, ${data}`);
// })

app.get('/search/:id',(req,res)=>{
    const id=req.params.id;
    if(id>product.length){
        return res.status(400).send(`Product id ${id} is not valid`)
    }else{
        return res.status(200).send(product[id-1]);
    }
})

app.get('/search',(req,res)=>{
    const category=req.query.name;
    if(category){
        const filteredProducts=product.filter(product=>product.name==category);
        if(filteredProducts.length>0){
            return res.status(200).send(`Here is the product ${JSON.stringify(filteredProducts)}`)
        }else{
            return res.status(404).send(`no products found for category ${category}`)
        }
    }
})

app.get("/product", isUserLogin, (req, res) => {
    fs.readFile('2.txt', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send("Error reading product data");
        } else {
            res.status(200).send(data);
        }
    });
});

app.post("/product",(req,res)=>{
    fs.writeFile('2.txt','This is created using fs module',(err)=>{
        if(err){
            res.status(500).send("Error occurred while creating product")
        }else{
            res.status(201).send("Product is created!")
        }
    })
});

app.delete("/product",(req,res)=>{
    fs.unlink('2.txt',(err)=>{
        if(err){
            res.status(500).send("Error occured while deleting product")
        }else{
            res.status(200).send("Product is deleted!")
        }
    })
});

app.put("/product", (req, res) => {
    fs.appendFile('2.txt', ' This is updated content', (err) => {
        if (err) {
            res.status(500).send("Error occurred while updating product");
        } else {
            res.status(200).send("Product is updated!");
        }
    });
});

app.listen(3000, () => {
    console.log("server is running at 3000");
})