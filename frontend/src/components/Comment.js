import React from 'react'
import { connect } from 'react-redux'
import FontAwesome from 'react-fontawesome'
import { votePostCommentAsync } from '../actions/comments'
import CommentButtons from './CommentButtons'


class Comment extends React.Component {

    refresh() {
		const {url} = this.props.match
		this.props.history.push(url)
    }
    
    componentDidMount() {
        // console.log(this.props.post)
    }

    render () {
        const { comment, votePostCommentAsync } = this.props
        const { id, timestamp, body, author, voteScore } = comment
        return (
            <div className="comment">
                <CommentButtons comment={this.props.comment} />
                <blockquote>
                    <p className="date-info">On {new Date(timestamp).toString().substr(0, 16)} <strong>{author}</strong> said:</p>
                    <cite>{body}</cite>
                </blockquote>

                <div className="commentMetadata">
                    <span className="badge badge-pill badge-primary">{voteScore} votes </span> {" "}
                    <FontAwesome name="thumbs-o-up" onClick={() => { 
						votePostCommentAsync(id, 'upVote', () => {
                            // this.refresh()
                        })
					 }} />{" "}
					<FontAwesome name="thumbs-o-down" onClick={() => {
						votePostCommentAsync(id, 'downVote', () => {
                            // this.refresh()
                        })
                    }} />
                </div>                    
                {/* <p>parentId: {parentId}</p>
                <p>timestamp: {timestamp}</p>
                <p>author: {author}</p>
                <p>voteScore: {voteScore} </p>
                <p>deleted: {deleted}</p>
                <p>parentDeleted: {parentDeleted}</p> */}
            </div>
        )
    }
}
const mapStateToProps = ({ post, comments }) => {
    return { 
        post, 
        comments 
    }
}
const mapDispatchToProps = {
    votePostCommentAsync
}
export default connect(mapStateToProps, mapDispatchToProps)(Comment)