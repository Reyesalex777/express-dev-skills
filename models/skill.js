const skills = [
    {id: 125222, skill: 'slow learner'},
    {id: 127909, skill: 'Express what'},
    {id: 139606, skill: 'good listener'}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };

  function update (id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
  }

  function deleteOne (id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }

  function create (skill) {
    // Adds the id
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }
  
  function getOne (id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }

  function getAll() {
    return skills;
  }