import React from 'react'
import { connect } from 'react-redux'
import { fetchPostsAsync, fetchCategoryPostsAsync, sortPosts } from '../../actions/posts'
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
    }

    render() {
        return (
            <div className="App">
                <Header />
                <div className="container">
                    <OrderControls />
                    <HomePostList />
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = ({ categories, posts }) => ({ categories, posts })
const mapDispatchToProps = { fetchPostsAsync, fetchCategoryPostsAsync, sortPosts }
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)