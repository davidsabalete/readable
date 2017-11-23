import { orderBy } from 'lodash'
import {
  LOAD_POST_COMMENTS,
  VOTE_POST_COMMENT,
  FETCH_NUM_COMMENTS
} from '../actions/comments'

const comments = (state = [], action) => {
  switch (action.type) {
    case LOAD_POST_COMMENTS:
      return orderBy(action.comments, ['timestamp'], ['asc'])
    case VOTE_POST_COMMENT:
      return action.comment
    case FETCH_NUM_COMMENTS:
      return {
        ...state,
        numComments: action.payload,
      }
    default:
      return state
  }
}

export default comments