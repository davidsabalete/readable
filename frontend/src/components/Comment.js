import React from 'react'
import { connect } from 'react-redux'
import FontAwesome from 'react-fontawesome'
import { votePostCommentAsync } from '../actions/comments'
import CommentButtons from './CommentButtons'
import { withRouter } from 'react-router'

const Comment = (props) => (
    <div className="comment">
        <CommentButtons comment={props.comment} />
        <blockquote>
            <p className="date-info">On {new Date(props.comment.timestamp).toString().substr(0, 16)}
                <strong>{props.comment.author}</strong> said:</p>
            <cite>{props.comment.body}</cite>
        </blockquote>

        <div className="commentMetadata">
            <span className="badge badge-pill badge-primary">{props.comment.voteScore} votes </span> {" "}
            <FontAwesome name="thumbs-o-up" onClick={() => {
                props.votePostCommentAsync(props.comment.id, 'upVote', () => {
                    props.history.push(props.match.url)
                })
            }} />{" "}
            <FontAwesome name="thumbs-o-down" onClick={() => {
                props.votePostCommentAsync(props.comment.id, 'downVote', () => {
                    props.history.push(props.match.url)
                })
            }} />
        </div>
    </div>
)

const mapStateToProps = ({ post, comments }) => {
    return {
        post,
        comments
    }
}
const mapDispatchToProps = {
    votePostCommentAsync
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comment))