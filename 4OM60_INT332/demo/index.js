import express from 'express';

const app=express();
app.get("/", (req, res) => {
    res.send("Hello Docker ");
});

app.listen(3000,()=>{
    console.log("Server is listen at port 3000");
})