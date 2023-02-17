const app = require("express")();


app.get("/",(req,res)=>{
    res.send("success")
})


app.listen(8080,()=>{
    console.log("the port is running at 8080")
})