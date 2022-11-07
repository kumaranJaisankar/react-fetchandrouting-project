import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogList: [], isTrue: true}

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const formatData = data.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))
    this.setState({blogList: formatData, isTrue: false})
  }

  render() {
    const {blogList, isTrue} = this.state

    return (
      <div className="blog-list-container">
        {isTrue ? (
          <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
        ) : (
          blogList.map(item => <BlogItem blogData={item} key={item.id} />)
        )}
      </div>
    )
  }
}
export default BlogList
