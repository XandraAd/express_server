const express= require('express');



const handleHomePageRequest=(req,res)=> {
    console.log("Hi, homepage Request received");
    const url=req.url;
    res.send("<h1>This is the home page</h1>"
        )
}

const handleLoginRequest=(req,res)=> {
    console.log("Hi, login Request received");
    
    res.send("<h1>This is the Login page</h1>"
        )
}

const handleSignUpRequest=(req,res)=> {
    console.log("Hi, sign up Request received");
    
    res.send("<h1>This is the Sign up page</h1>"
        )
}

const handleProfileRequest=(req,res)=> {
    console.log("Hi, profile Request received");
    
    res.send("<h1>This is the Profile page</h1>"
        )
}


const server = express();
server.get("/",handleHomePageRequest);
server.post("/login",handleLoginRequest);
server.put("/signup", handleSignUpRequest);
server.delete("/profile", handleProfileRequest);
//server.use(handleAllRequests)






server.listen(4040,'localhost', ()=>console.log("server is up and running, ready to accept request"))