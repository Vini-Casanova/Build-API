import express from 'express';
import res from 'express/lib/response';

const router = express.Router();

const users = [
    {
      firstName: "Jhon",
      lastName: "Doe",
      age: 25
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 24
    }
]

//all routes in here starts with /users
router.get('/', (req, res) => {
    console.log(users);

    res.send(users);
});

router.post('/', (req, res) => {
    
});

export default router;
