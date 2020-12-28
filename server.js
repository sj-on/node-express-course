const exp = require('express');
const app = exp();
const bodyP = require('body-parser');
app.use(bodyP.json());

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
    app.get('/users',function(req,res){
        res.json({
            success: true,
            message: 'successfully got users. Nice!',
            users: mockUserData
        })
    })

    app.post('/signin', function(req, res){
        const uname = req.body.username;
        const pass = req.body.password;
        
        const loguname = 'jimmywantsacake';
        const logpass = 'snapesnapeseverussnape';

        if(uname === loguname && pass === logpass){
            res.json({
                success: true,
                message: "You have successfully logged in. Probably."
            })
        }
        else{
            res.json({
                success: false,
                message: "Silly! Wrong Credentials."
            })
        }
    });

app.listen(3000, function(){
    console.log("The server SUCKS.");
});