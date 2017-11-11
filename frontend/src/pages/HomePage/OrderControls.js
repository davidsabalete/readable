import React from 'react'
import { connect } from 'react-redux'
import { sortPosts } from '../../actions/posts'

class OrderControls extends React.Component {

    sort(field) {
        console.log(field)
    }

    render() {
        const { sortPosts } = this.props
        return (
            <div className="order-controls form-group">
                <div className="btn-group order-buttons" role="group">
                    <button 
                        type="button" 
                        className="btn btn-secondary btn-sm" 
                        disabled>
                        Order by:
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-primary btn-sm" 
                        onClick={() => sortPosts('title')}>
                        Title
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-primary btn-sm" 
                        onClick={() => sortPosts('-voteScore')}>
                        Score
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-primary btn-sm" 
                        onClick={() => sortPosts('-timestamp')}>
                        Date (new first)
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-primary btn-sm" 
                        onClick={() => sortPosts('timestamp')}>
                        Date (old first)
                    </button>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
// 	const posts = filter(state.posts, post => !post.deleted)
// 	const { sortByField, sortDirection } = state
// 	return {
// 		posts,
// 		sortByField,
// 		sortDirection
// 	}
// }
// export default connect(mapStateToProps, {
//     fetchPostsAsync,
// 	fetchCategoryPostsAsync,
// 	sortBy,
// 	votePostAsync
// })(OrderControls)
const mapStateToProps = ({ categories, posts }) => ({ categories, posts })
const mapDispatchToProps = {sortPosts}
export default connect(mapStateToProps, mapDispatchToProps)(OrderControls)