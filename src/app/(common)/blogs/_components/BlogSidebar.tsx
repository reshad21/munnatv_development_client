import SearchBlog from './SearchBlog'
import BlogCategory from './BlogCategory'
import LatestBlogs from './LatestBlogs'

const BlogSidebar = () => {
  return (
    <div className='flex flex-col gap-7'>
        <SearchBlog />
        <BlogCategory />
        <LatestBlogs />
    </div>
  )
}

export default BlogSidebar