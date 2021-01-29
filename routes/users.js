const express = require('express');

const router = express.Router();

const uuid = require('uuid');
function uuidv4(){
    return uuid.v4();
};

let users = []

router.get('/',(req,res)=>{
    res.send(users);

})

router.post ('/',(req,res)=>{
    const user = req.body;

    // TO create a new object
    const UserWithId = { ...user , id : uuidv4() }
    users.push(UserWithId);
    res.send(users);
    // res.send(`User with the name ${user.firstname} Added to the database `)
})

router.get('/:id',(req,res)=>{
    const { id } = req.params
    const foundUser = users.find((user) =>{
        user.id === id ;
    })
    res.send(foundUser);
})
// To delete A user
router.delete('/:id',(req,res)=>{
    const { id } = req.params ;

    users = users.filter((user) => user.id !== id);

    res.send(`User with User Id ${ id } deleted from the database .`)
})

// To update a user

router.patch('/:id', (req,res)=>{
    const { id } = req.params
    const { firstname , lastname , age } = req.body

    const user = users.find((user) => user.id === id);

    if(firstname){
        user.firstname = firstname ;
    }

    if(lastname){
        user.lastname = lastname ;
    }

    if(age){
        user.age = age ;
    }

    res.send(`User with the id ${ id } has been updated `)
})

module.exports= router;