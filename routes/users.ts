const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req: any, res: { send: (arg0: string) => void; }, next: any) => {
  res.send('respond with a resource');
});

module.exports = router;
