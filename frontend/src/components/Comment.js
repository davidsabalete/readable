import React from 'react'
import { connect } from 'react-redux'


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

    componentDidMount() {
        console.log(this.props.post)
        console.log(this.state)
    }


    render () {
        const { id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted } = this.props.comment
        return (
            <div>
                <p>id: {id}</p>
                <p>parentId: {parentId}</p>
                <p>timestamp: {timestamp}</p>
                <p>body: {body}</p>
                <p>author: {author}</p>
                <p>voteScore: {voteScore} </p>
                <p>deleted: {deleted}</p>
                <p>parentDeleted: {parentDeleted}</p>
            </div>
        )
    }
}
const mapStateToProps = ({ post, comments }) => ({ post, comments })
export default connect(mapStateToProps)(Comment)