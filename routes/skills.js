var express = require('express');
var router = express.Router();
var skillsCtrlr = require('../controller/skills');

// All actual paths starth with "/skills"
 
// GET /skills
router.get('/', skillsCtrlr.index);
// GET /skills/new <-- define BEFORE show route
router.get('/new', skillsCtrlr.new)
// GET /skills/:id
router.get('/:id', skillsCtrlr.show);
// GET /skills/:id/edit
router.get('/:id/edit', skillsCtrlr.edit);
// POST /skills
router.post('/', skillsCtrlr.create);
// DELETE /skills/:id
router.delete('/:id', skillsCtrlr.delete);
// PUT /skills/:id
router.put('/:id', skillsCtrlr.update);

module.exports = router;
