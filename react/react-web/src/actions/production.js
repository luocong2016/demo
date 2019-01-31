import {
  PROCLEARSELECTED,
  PROEDITPRODUCTION,
  PROGETPRODUCTION,
  PROTOGGLESELECT
} from '../actionType'

import { getProduction } from '../api/production'

export const getProData = () => {
  return async dispatch => {
    try {
      let result = await getProduction()

      result.map(item => {
        item.selectStatus = true
        item.selectNum = 0
        return item
      })

      dispatch({
        type: PROGETPRODUCTION,
        dataList: result
      })
    } catch (err) {
      console.error(err)
    }
  }
}

export const togSelectPro = index => ({
  type: PROTOGGLESELECT,
  index
})

export const editoPro = (index, selectNum) => ({
  type: PROEDITPRODUCTION,
  index,
  selectNum
})

export const clearSelected = () => ({
  type: PROCLEARSELECTED
})
