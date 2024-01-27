const temp=document.getElementById("password");
const length=8;
const uppercase="GAUTAM"
const lowercase="gautam"
const number="012"

const allchars=uppercase+lowercase+number;

function createpassword(){
    let password="";
    password+=uppercase[Math.floor(Math.random()*uppercase.length)];
    password+=lowercase[Math.floor(Math.random()*lowercase.length)];
    password+=number[Math.floor(Math.random()*number.length)];

    while(length>password.length)
    {
        password+=allchars[Math.floor(Math.random()*allchars.length)];
    }
    temp.value=password;
}
