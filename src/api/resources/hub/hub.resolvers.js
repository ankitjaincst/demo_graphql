import models from './../../../models'
const { Hub, DeliveryBoy } = models

import merge from 'lodash.merge'

const getHub = (_, { id } , {}) => {
  // return {
  //   id: 2,
  //   address: "test",
  //   location_name: "loca",
  //   createdAt: "23232",
  //   updateAt: "2323232",
  // }

  return Hub
    .findById(id)
    .then(hub => hub)

}

const updateHub = async (_, {id, input}, {user}) => {
  throw new Error("I dont like this")
  const hub = await Hub.findById(id)
  return hub.update(input).then(hub => hub)
}

export const hubResolvers = {
  Query: {
    getHub
  },
  Hub: {
    friends: (hub, args) => {
      return ["frn1", "frn2"]
    },
    deliverBoys: (hub, args) => {

      return DeliveryBoy
        .findAll({
        where: {
          hubId: hub.id
        }
      })
        .then(deliverBoys => deliverBoys)

    }
  },
  Mutation: {
    updateHub
  }
}
