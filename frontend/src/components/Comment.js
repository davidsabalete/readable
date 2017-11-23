import React from 'react'
import { connect } from 'react-redux'
import FontAwesome from 'react-fontawesome'
import { votePostCommentAsync } from '../actions/comments'


class Comment extends React.Component {
    state = {
        id: '',
        parentId: '',
        timestamp: '',
        body: '',
        author: '',
        voteScore: 0,
        deleted: false,
        parentDeleted: false
    }

    refresh() {
		const {url} = this.props.match
		this.props.history.push(url)
    }
    
    componentDidMount() {
        console.log(this.props.post)
        console.log(this.state)
    }


    render () {
        const { id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted } = this.props.comment
        const { votePostCommentAsync } = this.props 
        return (
            <div className="comment">
                <blockquote>
                    <p>On {new Date(timestamp).toString().substr(0, 16)} <strong>{author}</strong> said:</p>
                    <cite>{body}</cite>
                </blockquote>

                <div className="commentMetadata">
                    <span className="badge badge-pill badge-primary">{voteScore} votes </span> {" "}
                    <FontAwesome name="thumbs-o-up" onClick={() => { 
						votePostCommentAsync(id, 'upVote')
						// this.refresh()
					 }} />{" "}
					<FontAwesome name="thumbs-o-down" onClick={() => {
						votePostCommentAsync(id, 'downVote')
						// this.refresh()
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
const mapStateToProps = ({ post, comments }) => ({ post, comments })
const mapDispatchToProps = {
    votePostCommentAsync
}
export default connect(mapStateToProps, mapDispatchToProps)(Comment)