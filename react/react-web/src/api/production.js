import request from '../utils/request'

export function getProduction(params = {}) {
  return request({
    method: 'get',
    url: `/shopro/data/record/${params.type}`
  })
}
