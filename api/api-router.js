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
  const { password } = req.body
  const hash = bcrypt.hashSync(password, 8);
  res.status(200).json({ password, hash })

})

module.exports = router;
