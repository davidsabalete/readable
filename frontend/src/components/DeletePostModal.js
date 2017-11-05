import { deletePost } from '../actions/post'
import { hideModal } from '../actions/modal'
import Modal from './Modal'

const DeletePostModal = ({ post, dispatch }) => (
    <Modal 
        dangerText={`Delete post ${post.title}`}
        onDangerClick={() => 
            dispatch(deletePost(post.id))
                .then(() => dispatch(hideModal()))}
    />
    
)

export default connect(
    (state, ownProps) => ({
        post: state.postsById[ownProps.postId]
    })
)(DeletePostModal)