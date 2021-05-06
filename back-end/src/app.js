const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.get('/',(req,res,next)=>{
    const {email} = req.query;
    const profiles = [
        {
            name:'sdsdsd',
            email:'sdsdsd@gmail.com',
            age:15,
        },
        {
            name:'fhfhfhgfgh',
            email:'fghfgh@gmail.com',
            age:25,
        },
    ];
    const profile = profiles.find(p => p.email === email)
    if(!Object.keys(profile).length>0) return res.status(404).json({message: "Người dùng không tồn tại"})
    return res.status(200).send({profile})
});

app.post('/',(req,res,next)=>{
    console.log(`req.body`,req.body);
    res.status(201).json({message:"Đăng ký tài khoản thành công"});
});

app.listen(PORT, ()=> console.log(`Server is running on ${PORT}`));
