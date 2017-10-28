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
					<li key={category.path} className="nav-item text-capitalize">
						<Link
							to={'/' + category.name + '/posts'}
							className="nav-link"
						>
							{category.name}
						</Link>
					</li>
				)
			})
		}
		return <div>Fetching categories...</div>
	}

	render() {
		return (
			<ul className="nav justify-content-center">
				<li key={'/'} className="nav-item text-capitalize">
					<Link
						to={'/'}
						className="nav-link"
					>
						All
					</Link>
				</li>
				{this.renderCategories()}
			</ul>
		)
	}
}

const mapStateToProps = (state) => {
	const { categories } = state
	return { categories }
}
export default connect(mapStateToProps, {
	fetchCategories
})(CategoryList)