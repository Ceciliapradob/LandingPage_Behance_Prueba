// src/components/BlogCards.jsx
import blog1 from '../../assets/blog1.jpg';
import blog2 from '../../assets/blog2.jpg';
import blog3 from '../../assets/blog3.jpg';
import './Blog.css'

const blogPosts = [
  {
    id: 1,
    title: 'T-shirt design is the part of design',
    tag: 'CANADA',
    time: '2 min read',
    image: blog1,
  },
  {
    id: 2,
    title: 'The services provide for design',
    tag: 'DEVELOPMENT',
    time: '2 hour read',
    image: blog2,
  },
  {
    id: 3,
    title: 'Mobile app landing design & app maintain',
    tag: 'APPLICATION',
    time: '5 min read',
    image: blog3,
  },
];

export default function BlogCards() {
  return (
    <section className="py-16 px-4 text-center">
      <p className="text-pink-600 font-semibold text-sm uppercase">Visit my blog and keep your feedback</p>
      <h2 className="text-4xl font-bold mt-2 mb-10">My Blog</h2>
      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto px-10">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl overflow-hidden h-93 shadow-md hover:shadow-lg transition-shadow duration-300 relative"
          >
            <img src={post.image} alt={post.title}  className="w-11/12 h-56 object-cover rounded-xl -mb-2 mx-auto px-2 py-2 img"/>
            <div className="p-5 text-left">
              <div className="flex justify-between text-xs text-pink-600 font-semibold mb-2">
                <span>{post.tag}</span>
                <span className="text-gray-500 font-normal">{post.time}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
