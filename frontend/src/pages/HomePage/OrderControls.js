import React from 'react'
import { connect } from 'react-redux'
import { sortPosts } from '../../actions/posts'
import FontAwesome from 'react-fontawesome'

class OrderControls extends React.Component {

    render() {
        const { sortPosts } = this.props
        return (
            <div className="order-controls form-group">
                <div className=" order-buttons" role="group">
                    <button 
                        type="button" 
                        className="btn btn-secondary btn-sm" 
                        disabled>
                        Order by:
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-primary btn-pill btn-sm" 
                        onClick={() => sortPosts('title')}>
                        <FontAwesome name="quote-right" aria-hidden="true" /> 
                        {' '} 
                        Title
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-primary btn-sm" 
                        onClick={() => sortPosts('-voteScore')}>
                        <FontAwesome name="star-o" aria-hidden="true" /> 
                        {' '} 
                        Score
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-primary btn-sm" 
                        onClick={() => sortPosts('-timestamp')}>
                        <FontAwesome name="calendar-plus-o" aria-hidden="true" /> 
                        {' '} 
                        Date (new first)
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-primary btn-sm" 
                        onClick={() => sortPosts('timestamp')}>
                        <FontAwesome name="calendar-minus-o" aria-hidden="true" /> 
                        {' '} 
                        Date (old first)
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ categories, posts }) => ({ categories, posts })
const mapDispatchToProps = {sortPosts}
export default connect(mapStateToProps, mapDispatchToProps)(OrderControls)