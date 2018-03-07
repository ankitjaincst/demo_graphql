import models from './../../../models'
const { Hub, DeliveryBoy } = models

function create(req, res) {
  return Hub
    .create({
      address: "test",
      location_name: "ank",
    })
    .then(hub => res.status(201).send(hub))
    .catch(error => res.status(400).send(error));
}

function find(req, res) {
  return Hub
    .findAll({
      include: [{
        model: DeliveryBoy,
        as: 'deliveryBoys',
      }],
    })
    .then(hubs => res.status(201).send(hubs))
    .catch(error => res.status(400).send(error));
}

function controller(){
 return {
   create,
   find
 }
}

export default controller()



