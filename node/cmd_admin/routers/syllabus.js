const express = require('express');
const router = express.Router();

const Syllabus = require('../controllers/syllabus/Syllabus');

router.post('/append', Syllabus.append);
router.delete('/remove', Syllabus.remove);
router.put('/update', Syllabus.update);

module.exports = router;