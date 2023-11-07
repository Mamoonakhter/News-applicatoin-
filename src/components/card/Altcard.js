import React from 'react'


const Altcard = () => {
  return (
    <div className="blog-card alt">
        <div className="meta">
          <div
            className="photo"
            style={{
              backgroundImage:
                "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)",
            }}
          />
          <ul className="details">
            <li className="author">
              <a href="#">Jane Doe</a>
            </li>
            <li className="date">July. 15, 2015</li>
            <li className="tags">
              <ul>
                <li>
                  <a href="#">Learn</a>
                </li>
                <li>
                  <a href="#">Code</a>
                </li>
                <li>
                  <a href="#">JavaScript</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>Mastering the Language</h1>
          <h2>Java is not the same as JavaScript</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
            dolorum architecto obcaecati enim dicta praesentium, quam nobis!
            Neque ad aliquam facilis numquam. Veritatis, sit.
          </p>
          <p className="read-more">
            <a href="#">Read More</a>
          </p>
        </div>
      </div>
  )
}

export default Altcard