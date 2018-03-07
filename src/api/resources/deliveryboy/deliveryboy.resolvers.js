import models from './../../../models'
const { Hub, DeliveryBoy } = models

import merge from 'lodash.merge'

const getDeliveryBoy = (_, __, {}) => {
  return {
    id: 2,
    name: 'Del1',
    mobile: '3232323'
  }
}

export const deliveryBoyResolvers = {
  Query: {
    getDeliveryBoy
  }
}
