const exp = require('express');
const app = exp();

const mockUserData=[
    {name:'Jay'},
    {name:'Mark'}
    ]
    app.get('/users/:id',function(req,res){
        console.log(req.params.id)
        res.json({
            success: true,
            message: 'got one user',
            user: req.params.id
        })
    })

app.listen(3000, function(){
    console.log("The server SUCKS.");
});