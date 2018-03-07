import models from './../../../models'
const { Supervisor } = models

function create(req, res) {
  return Supervisor
    .create({
      name: "testsu1",
      mobile: "anksu1",
      hubId: 2
    })
    .then(supervisor => res.status(201).send(supervisor))
    .catch(error => res.status(400).send(error));
}

function find(req, res) {
  return Supervisor
    .findById(1)
    .then(supervisor => res.status(201).send(supervisor))
    .catch(error => res.status(400).send(error));
}

function controller(){
  return {
    create,
    find
  }
}

export default controller()



