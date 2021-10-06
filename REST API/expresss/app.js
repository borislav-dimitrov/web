const express = require('express');
const app = express();

app.use(express.json()); 



const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];

// app.get();
// app.post();
// app.put();
// app.delete();


// GET examples
app.get('/', (req, res) => {
    res.send('Hello World !!!');
});

app.get('/api/courses', (req, res) => {
    // res.send([1,2,3]);
    res.send(courses);
});

app.get('/api/courses/get/:id', (req, res) => {
    // res.send(req.params.id);
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course){
        res.status(404).send(`The course with ID - ${req.params.id} was not found`)// 404 : not found
        return;
    }
    res.send(course);
});

app.get('/api/courses/:year/:month', (req, res) => {
    //res.send(req.params);
    res.send(req.query); // ? params which are not required
});




// POST example
app.post('/api/courses/post', (req, res) => {

    // always validate the input
    const validate = fullValidation(req.body, res);
    if(!validate) return;

    // add new course
    const course = {
        id: courses.length + 1, 
        name: req.body.name
    };

    courses.push(course);

    // return new course
    res.send(course);
})


// PUT example

app.put('/api/courses/put/:id', (req, res) => {
    // Look up the course
    // If not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course){
        res.status(404).send(`The course with ID - ${req.params.id} was not found`)// 404 : Not Found
        return;
    }

    // Validate
    // If indvalid, return 400
    const validate = fullValidation(req.body, res);
    if(!validate) return;
    
    // Update course
    course.name = req.body.name;
    // Return the updated course
    res.send(course);
});


// DELETE example

app.delete('/api/courses/del/:id', (req,res) => {
    // Look up the course
    // Not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) res.status(404).send(`The course with ID - ${req.params.id} was not found`)// 404 : Not Found

    // Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    // Returne the same course
    res.send(course);

});

//#region Validation
function fullValidation(course, res){
    const validate = validateCourse(course);
    const { validation } = validateCourse(course); // destructure object ( get just 1 element from object )


    if(!validation){
        res.status(validate.stat).send(validate.err);
        return false;
    } else {
        return true;
    }
}

function validateCourse(course){
    let minLength = 3;
    
    
    let errMsg;
    let status;

    if ( !course.name ){
        // 400 Bad Request
        // res.status(400).send(`Name is required and should be minimum ${minLength} characters`)
        status = 400;
        errMsg = 'name: is required';
        return {validation: false, stat: status, err: errMsg};
    } else if ( course.name.length < minLength ){
        status = 400;
        errMsg = `Name should be minimum ${minLength} characters`;
        return {validation: false, stat: status, err: errMsg};
    } else {
        return {validation: true, stat: 200, err: ''};
    }


}
//#endregion


// env var port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}....`));