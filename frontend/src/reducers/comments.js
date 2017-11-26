import { orderBy } from 'lodash'
import {
  LOAD_POST_COMMENTS,
  VOTE_POST_COMMENT,
  FETCH_NUM_COMMENTS,
  EDIT_POST_COMMENT,
  FETCH_COMMENT
} from '../actions/constants'

const comments = (state = [], action) => {
  switch (action.type) {
    case LOAD_POST_COMMENTS:
      return orderBy(action.comments, ['voteScore'], ['desc'])
    case VOTE_POST_COMMENT:
      const { comment } = action
      return {
        ...state,
        [comment.id]: comment
      }
    case FETCH_NUM_COMMENTS:
      return {
        ...state,
        numComments: action.payload,
      }
    case EDIT_POST_COMMENT:
    case FETCH_COMMENT:
      return action.comment
    default:
      return state
  }
}

export default comments