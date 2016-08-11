/**
 * Created by zoltanincze on 04/08/2016.
 */
import context from '../../application-context';
import ActionTypes from './actionTypes.js'

export default {
  setFilter(value)    {
    context.dispatch(ActionTypes.FILTER, value)
  },

  getData()   {
    context.dispatch(ActionTypes.GET_DATA, data)
  }

}
