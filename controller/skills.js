const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
};

function update (req, res) {
  req.body.done = !!req.body.done;
  Skill.update(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`);
}

function edit (req, res) {
  const skill = Skill.getOne(req.params.id);
  res.render('skills/edit', {
    title: 'Edit Skill', 
    skill
  })
}

function deleteSkill (req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function create (req, res) {
  Skill.create(req.body);
  res.redirect('/skills');
}

function newSkill (req, res) {
  res.render('skills/new', { title: 'New Skill' });
}

function show (req, res) {
    console.log('banana', req.params.id)
  res.render('skills/show', {
    skills: Skill.getOne(req.params.id),
    title: 'Skill Details'
  });
}

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll(),
      title: 'All skills'
    });
  }