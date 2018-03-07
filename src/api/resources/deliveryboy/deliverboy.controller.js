import models from './../../../models'
const { DeliveryBoy, Hub } = models

function create(req, res) {
  return DeliveryBoy
    .create({
      name: "test1",
      mobile: "ank1",
      hubId: 2
    })
    .then(deliveryboy => res.status(201).send(deliveryboy))
    .catch(error => res.status(400).send(error));
}

function find(req, res) {
  return DeliveryBoy
    .findAll({
      include: [{
        model: Hub,
        as: 'hub',
      }],
    })
    .then(deliveryboy => res.status(201).send(deliveryboy))
    .catch(error => res.status(400).send(error));
}

function controller(){
  return {
    create,
    find
  }
}

export default controller()



