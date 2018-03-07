import models from './../../../models'
const { Hub, Supervisor } = models

import merge from 'lodash.merge'

const getSupervisor = (_, __, {}) => {
  return {
    id: 2,
    name: 'Del1',
    mobile: '3232323'
  }
}

export const supervisorResolvers = {
  Query: {
    getSupervisor
  }
}