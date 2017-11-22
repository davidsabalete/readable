import React from 'react'
import { connect } from 'react-redux'
import { fetchPostsAsync, fetchCategoryPostsAsync, sortPosts } from '../../actions/posts'
import { resetPost } from '../../actions/post'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import OrderControls from './OrderControls'
import HomePostList from './HomePostList'

class HomePage extends React.Component {

    componentDidMount() {
        this.fetchData()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params !== this.props.match.params) {
            this.fetchData()
        }
    }

    fetchData() {
        const { category } = this.props.match.params
        if (category) {
            this.props.fetchCategoryPostsAsync(category)
        } else {
            this.props.fetchPostsAsync()
        }
        this.props.resetPost()
    }

    render() {
        return (
            <div className="App">
                <Header />
                <div className="container">
                    {this.props.posts.length > 0 && <OrderControls />}
                    <HomePostList />
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = ({ categories, posts, post }) => ({ categories, posts, post })
const mapDispatchToProps = { 
    fetchPostsAsync, 
    fetchCategoryPostsAsync, 
    sortPosts, 
    resetPost 
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)