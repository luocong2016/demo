import {
  HOMESAVEFORMDATA,
  HOMESAVEIMG,
  HOMECLEARDATA
} from '../containers/actionType'

export const saveFormData = (value, dataType) => ({
  type: HOMESAVEFORMDATA,
  value,
  dataType
})

export const saveImg = path => ({
  type: HOMESAVEIMG,
  path
})

export const clearData = () => ({
  type: HOMECLEARDATA
})
