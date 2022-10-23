const React = require('react')
const Def = require('./default')

function index (data) {
  let postsFormatted = data.posts.map((post) => {
    return (
      <div key="1" className='col-sm-6'>
        <h2 className='text-center'>
            <a href={`/places/${post.id}`}>
              {post.name}
            </a>
          </h2>
        <p className='text-center'>
          {post.cuisines}
        </p>
        <img src={post.pic} alt={post.name} className='center' width="100%" height="50%"/>
        <p className='text-center'>
          Located in {post.city}, {post.state}
        </p>
      </div>
    )
  })
  return (
    <Def>
        <main>
            <h1>PLACES INDEX PAGE</h1>
            <div className='row'>
              {postsFormatted}
            </div>
        </main>
    </Def>
)
}

module.exports = index
