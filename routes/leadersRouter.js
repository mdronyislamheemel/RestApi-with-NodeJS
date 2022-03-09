const express = require('express');
const bodyParser = require('body-parser');

//leader router 
const leadersRouter = express.Router();

leadersRouter.use(bodyParser.json());

leadersRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
//get method for leader 
.get((req, res, next) => {
    res.end('Will send all the leaders to you');
})
//post method for leader 
.post((req, res, next) => {
    res.end('Will add the leader: ' + req.body.name + 'with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
})
.delete((req, res, next) => {
    res.end('Deleting all leaders');
});


leadersRouter.route('/:leaderId')
.get((req, res, next) => {
    res.end('Will send details of the leader: ' + req.params.leaderId + ' to you!');
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /leader/' + req.params.leaderId);
})
.put((req, res, next) => {
    res.write('Updating the leader: ' + req.params.leaderId + '\n');
    res.end('Will update the leader: ' + req.body.name +
        ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting leader: ' + req.params.leaderId);
});


module.exports = leadersRouter;
