import './Blog.css';
import './../hooks/useDateTime';

const Blog = (props) => {

    const { blogs } = props;

    return (

        <div>
            {blogs && blogs.map(blog => (
                <div key={blog.id} className="blog-container">
                    <h4 className="blog-title">{blog.title}</h4>
                    <p className="blog-author">{blog.author}</p>
                    <p className="blog-body">{blog.body}</p>
                    <span className="timestamp">Created: {blog.timestamp}</span>
                </div>
            ))}
        </div>

    );
}

export default Blog;