const express=require('express');
const app=express();
const port=3000; //Cổng chạy cục bộ

// Middleware để phân tích cú pháp JSON
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Hello World!');
});

// Khởi động server
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});