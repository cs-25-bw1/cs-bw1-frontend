import axiosWithAuth from '../../util/AxiosWithAuth'

import { INIT_START, INIT_SUCCESS, INIT_FAILURE } from './types'

export const initWorld = () => {
  return dispatch => {
    dispatch({ type: INIT_START })
    axiosWithAuth('app')
      .get('/api/adv/init/')
      .then(res => {
        console.log('actions data::::', res.data)
        dispatch({ type: INIT_SUCCESS, payload: res.data })
      })
      .catch(err => {
        dispatch({ type: INIT_FAILURE, payload: err })
      })
  }
}
