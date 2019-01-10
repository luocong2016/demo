import {
  HOMESAVEFORMDATA,
  HOMESAVEIMG,
  HOMECLEARDATA
} from '../../containers/actionType'

/*
  orderSum 金额
  name 姓名
  phoneNo 手机号
  imgpath 图片路径
*/

let defaultState = {
  orderSum: '',
  name: '',
  phoneNo: '',
  imgpath: ''
}

export const fromData = (state = defaultState, action = {}) => {
  switch (action.type) {
    case HOMESAVEFORMDATA:
      return { ...state, ...{ [action.datatype]: action.value } }
    case HOMESAVEIMG:
      return { ...state, ...{ imgpath: action.path } }
    case HOMECLEARDATA:
      return { ...state, ...defaultState }
    default:
      return state
  }
}

