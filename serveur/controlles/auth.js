const User = require('../model/User');
const { createJwt, attachCookiesToResponse } = require('../utiles/jwt');
const createTokenUser = require('../utiles/createTokenUser');
const jwt=require('jsonwebtoken');
const { validationResult } = require('express-validator');

// let register = async (req,res)=>{
//     const { name, email, password } = req.body;
//     if (!name || !password || !email) {
//         return res.status(400).json({ 
//             msg: 'fill all the credentials',
//          })
//     }
//     const emailExist  = await User.findOne({email});
//     if(emailExist){
//         return res.status(400).json({ msg: 'email already exist' });
//     }


//     // check if he is the first user , if he is the first user , then make him admin
//     const isFirstAccount = (await User.countDocuments({})) === 0;


//     // ternary operator
//     const role = isFirstAccount ? 'admin' : 'user';

//     // create the user
//     const user =  await User.create({name,email,password,role:'admin'});


//     // create the user token  that contains the user id and name and role
//     // const userForToken = createTokenUser(user);

//     // create the jwt token
//     // let token =  createJwt(userForToken);
//     // attachCookiesToResponse({res,user:userForToken});
//     const token=await  jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,{
//         expiresIn: process.env.JWT_LIFETIME,
//       });
//     res.status(200).json({ msg: 'user created',token });
// }
let login  = async  (req,res)=>{    
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ msg: 'fill all the credentials' })
        }

        const user  = await User.findOne({email});
        if(!user){
            return res.status(400).json({ msg: 'no user found' })
        }
        if (!user.comparePassword(password)) {
            return res.status(400).json({ msg: 'incorrect password' })
        }    


        // create the user token  that contains the user id and name and role
        const token=await  jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,{
            expiresIn: process.env.JWT_LIFETIME,
          });   
        res.status(200).json({ msg : "user logged in Successfully ", token:token ,user:user})

    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'something went wrong',error })
        
    } 
}

// const logout = async (req, res) => {
//  try {
//     // removing the cookie
//     res.cookie('token', 'logout', {
//         httpOnly: true,
//         expires: new Date(Date.now() + 1000),
//       });
//       res.status(StatusCodes.OK).json({ msg: 'user logged out!' });
//  } catch (error) {
//         console.log(error);
//         return res.status(500).json({ msg: 'something went wrong',error })
//  }
// };


const  register = async (req, res) => {

    try {

        const errors = validationResult(req)

        if (!errors.isEmpty()) {

            res.status(400).json({ msg: errors.array() })
        } else {
            const { name, age, email, password } = req.body
            const existeUser = await User.findOne({ email: email })


            if (existeUser) {
                res.status(400).json({ msg: "User already existe plz login " })
            } else {


                const newUser = await User.create({ name, age, email, password, role:'user' }); // Or 'user' for regular users
                console.log(newUser)
                const token = await jwt.sign({ id: newUser._id, role: newUser.role }, process.env.JWT_SECRET, { expiresIn: "7d" });
                res.status(201).json({ msg: "Resister Done!", token })
                const isFirstAccount = (await User.countDocuments({})) === 0;



                const role = isFirstAccount ? 'admin' : 'user';
            }
        }
    }
    catch (error) {
        res.status(500).json({ msg: "somthing is wrong" })
        console.log(error)
    }
}
// const login = async (req, res) => {

//     try {

//         const { email, password } = req.body
//         const existeUser = await User.findOne({ email: email })

//         if (!existeUser) {
//             res.status(400).json({ msg: "Make sur to register first ! " })
//         } else {
//             const token = await jwt.sign({ id: newUser._id, role: newUser.role }, process.env.JWT_SECRET, { expiresIn: "7d" });

//             res.status(201).json({ msg: "login done ! ", token })



//     }
//     } catch (error) {
//     res.status(500).json({ msg: "somthing is wrong " })
//     console.log(error)
// }

// }









module.exports = {
    login,
    register,
    // logout
}