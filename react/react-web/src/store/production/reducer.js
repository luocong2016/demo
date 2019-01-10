import {
  PROCLEARSELECTED,
  PROEDITPRODUCTION,
  PROGETPRODUCTION,
  PROTOGGLESELECT
} from '../actionType'

let defaultState = {
  dataList: []
}

export const proData = (state = defaultState, action = {}) => {
  let imuDataList, imuItem

  switch (action.type) {
    case PROGETPRODUCTION:
      return { ...state, ...action }
    case PROTOGGLESELECT:
      imuDataList = Immutable.List(state.dataList)
      imuItem = Immutable.Map(state.dataList[action.index])
      imuItem = imuItem.set('selectStatus', !imuItem.get('selectStatus'))
      imuDataList = imuDataList.set(action.index, imuItem)
      return { ...state, ...{ dataList: imuDataList.toJS() } }
    default:
      return state
  }
}
