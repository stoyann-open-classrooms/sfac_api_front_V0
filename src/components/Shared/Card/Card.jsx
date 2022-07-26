import PropTypes from 'prop-types'
import './styles/Card.css'
import NoPics from "../../Assets/no_picture.png";

function Card({ children, image, item}) {
  return (
    <div
     
      className= 'card'
    >
      <div className="card-cover">
        {image ? (
          <img
              className="card-cover-img"
              src={`http://localhost:5000/${image}`}
              alt={image}
            />

        ) : (

          <img className="card-cover-img" src={NoPics} alt="" />
        )}
      </div>
      <div className='card-body' >

      {children}
      </div>
    </div>
  )
}

Card.defaultProps = {
  reverse: false,
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
}

export default Card
