const { User,Model,Token } = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/config.json')['development']

const UserController = {
    async create(req,res){
        try {
            req.body.role = "user";
            const password = bcrypt.hashSync(req.body.password,10);
            const user = await User.create({...req.body,password:password});
            res.status(201).send({message:"User created",user});
        } catch (error) {
            console.error(error)
            res.send(error)
        }
    },
    async login(req,res){
        try {
            const user = await User.findOne({
                where:{
                    email:req.body.email
                }
            })
            console.log(req.body.password)
            if(!user){
                return res.status(400).send({message:"User or password incorrect"})
            }
            const isMatch = await bcrypt.compareSync(req.body.password,user.password);
            if(!isMatch){
                return res.status(400).send({message:"User or password incorrect"})
            }
            token = jwt.sign({id:user.id},jwt_secret)
            Token.create({token,UserId:user.id})
            res.send({message:"User logged successful" + user.name,user,token})
        } catch (error) {
            console.error(error)
        }
    },
}

module.exports = UserController