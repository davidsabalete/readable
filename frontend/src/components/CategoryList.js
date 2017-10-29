import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions/categories'
import { Link } from 'react-router-dom'

class CategoryList extends Component {

	componentDidMount() {
		this.props.fetchCategories()
	}

	renderCategories() {
		const { categories } = this.props
		if (categories) {
			return categories.map(category => {
				return (
					<Link 
						key={category.path} 
						to={'/' + category.name + '/posts'} 
						className="nav-item nav-link">
						{category.name}
					</Link>
				)
			})
		}
	}

	render() {
		
		const { categories } = this.props
		if (!categories) {
			return <div>Fetching categories...</div>
		}
		return (
			<div className="navbar-nav mr-auto">
				<Link 
					key={'/'} 
					to={'/'} 
					className="nav-item nav-link">
					All Posts
				</Link>
				{this.renderCategories()}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { categories: state.categories }
}
export default connect(
	mapStateToProps,
	{ fetchCategories }
)(CategoryList)