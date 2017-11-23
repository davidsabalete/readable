import { orderBy } from 'lodash'
import {
  LOAD_POST_COMMENTS,
  VOTE_POST_COMMENT
} from '../actions/comments'

const comments = (state = [], action) => {
  switch (action.type) {
    case LOAD_POST_COMMENTS:
      return orderBy(action.comments, ['timestamp'], ['asc'])
    case VOTE_POST_COMMENT:
      return action.comment
    default:
      return state
  }
}

export default comments