const exp = require('express');
const app = exp();

const mockUserData=[
    {name:'Jay'},
    {name:'Mark'}
    ]
    app.get('/users', function(req,res){
         res.json({
              success: true,
              message: 'successfully got users. Nice!',
              users: mockUserData
         })
    })

app.listen(3000, function(){
    console.log("The server SUCKS.");
});