module.exports = function(app, db) {



    //declares an ID Object
    var ObjectID = require('mongodb').ObjectID;

    //deletes a record from the collection students
    app.delete('/students/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('students').remove(details, (err, item) => {
          if (err) {
            res.send({'error':'An error has occurred'});
          } else {
            res.send('Student ' + id + ' deleted!');
          } 
        });
      });


    //gets or retrives records from students collection 
    app.get('/students/:id', (req, res) => {

        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('students').findOne(details, (err, item) => {
          if (err) {
            res.send({'error':'An error has occurred'});
          } else {
            res.send(item);
          }
        });
      });

      

    //Inserts record into the students collection on MLab
    app.post('/students', (req, res) => {
      const student = { student_id: req.body.student_id, surname: req.body.surname,firstname:req.body.firstname,othername:req.body.othername,address:req.body.address,gender:req.body.gender,phone_number:req.body.phone_number,state:req.body.state,lga:req.body.lga };
      db.collection('students').insert(student, (err, result) => {
        if (err) { 
          res.send({ 'error': 'An error has occurred' }); 
        } else {
          res.send(result.ops[0]);
        }
      });
    });

    //update records in the collection students
    app.put('/students/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const student = { student_id: req.body.student_id, surname: req.body.surname,firstname:req.body.firstname,othername:req.body.othername,address:req.body.address,gender:req.body.gender,phone_number:req.body.phone_number,state:req.body.state,lga:req.body.lga };
        db.collection('students').update(details, student, (err, result) => {
          if (err) {
              res.send({'error':'An error has occurred'});
          } else {
              res.send(student);
          } 
        });
      });
  };


