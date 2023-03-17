const mysql = require("mysql");
const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    database: "tutorial_mng_sys",
    password: "password123"
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    else {
        console.log("connected to mysql");
    }
})
// db.query("CALL getStudents(95000);",(error,result)=>{
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log(result)
//     }
// });