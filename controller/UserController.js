const { User,Model,Token, Sequelize } = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { transporter } = require('../config/nodemailer');
const { jwt_secret } = require('../config/config.json')['development']
const { Op } = Sequelize

const UserController = {
    async create(req,res,next){
        try {
            const password = bcrypt.hashSync(req.body.password,10);
            console.log(password)
            const user = await User.create({
                ...req.body,
                password:password,
                confirmed:false,
                role:"user"
            });//aqui falla
            const emailToken = jwt.sign({email:req.body.email},jwt_secret,{expiresIn:'48h'})
            const url = 'http://localhost:3000/users/confirm/'+emailToken
            await transporter.sendMail({
                to:req.body.email,
                subject:"Confirm you registration",
                html:`<h3>Wellcome you are one step away from registering<h3>
                <a href='${url}'>Click for confirm you registration<a>`,
            });
            res.status(201).send({message:"User created",user});
        } catch (error) {
            error.origin = 'User';
            next(error)
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
            if(!user.confirmed){
                return res.status(400).send({message:"Have to confirm your email"})
            }
            token = jwt.sign({id:user.id},jwt_secret)
            Token.create({token,UserId:user.id})
            res.send({message:"User logged successful" + user.name,user,token})
        } catch (error) {
            console.error(error)
        }
    },
    async logout(req,res){
        try {
            await Token.destroy({
                where:{
                    [Op.and]:[
                        {UserId:req.user.id},
                        {token:req.headers.authorization}
                    ]
                }
            });
            res.send({message:"Successfully disconnected"})
        } catch (error) {
            console.log(error)
            res.status(500).send({message:"Where was a problem trying to log out"})
        }
    },
    async confirm(req,res){
        try {
            const token = req.params.emailToken
            const payload = jwt.verify(token,jwt_secret)
            await User.update({confirmed:true},{
                where:{
                    email:payload.email
                }
            })
            res.status(201).send('User confirmed successfully')
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = UserController