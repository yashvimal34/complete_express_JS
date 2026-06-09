import express from 'express';
const app = express();

const PORT = 8000

// app.get('/student', (req, res) => {
//     res.send("All Students Data")
// });

// app.post('/student', (req, res) => {
//     res.send("Student Data Inserted")
// });

// app.put('/student', (req, res) => {
//     res.send("Update Student Data")
// });

// app.delete('/student', (req, res) => {
//     res.send("Student Data Deleted")
// });

/* Challenge
    Refactor above as we are using same code again and again.
*/

app.route('/student')
    .get((req, res) => res.send("All Students!!!"))
    .post((req, res) => res.send("Data Inserted!!!"))
    .put((req, res) => res.send("Update Data!!!"))
    .delete((req, res) => res.send("Delete Data!!!"))

app.listen(PORT, () => {console.log("server started")})