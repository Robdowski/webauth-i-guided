const router = require('express').Router();

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

const bcrypt = require('bcryptjs')

router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});

router.post('/hash', (req, res) => {
  // Read a password from the body
  // hash the password using bcryptjs
  //return it to the user
  // {password: 'original', hash: 'hashed password'}
  bcrypt.hash(req.body, 'p254134dfa')
  .then(hashed => {
    res.status(200).json({password: req.body, hashed: hashed})
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({message: "There was a problem hashing the password."})
  })

})

module.exports = router;
