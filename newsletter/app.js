const express = require('express');
const client = require("@mailchimp/mailchimp_marketing");
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({extended:true}));    
app.use(express.static('public'));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})
//724b037a4bc7940e2f9a573d4cde7484-us11
//7e7f2c3901
app.post("/",function(req,res){
    const fname = req.body.firstname;
    const lname = req.body.lastname;
    const email = req.body.email;

    console.log(fname + lname + email);
    

    client.setConfig({
      apiKey: "724b037a4bc7940e2f9a573d4cde7484-us11",
      server: "us11",
    });


    const run = async () => {
      const response = await client.lists.batchListMembers("7e7f2c3901", {
        members: [
          {
            email_address: email,
            status: "subscribed",
            merge_fields: {
              FNAME: fname,
              LNAME: lname,
            },
          },
        ],
      });
      console.log(response);
      console.log(response.error_count);
      if(response.error_count === 0)
      {
          res.sendfile(__dirname + "/success.html");
      }
      else {
          res.sendFile(__dirname+ "/fail.html");
      }
    };

    run();

})

app.listen(3000,function(){
    console.log("Server started at port 3000");
})