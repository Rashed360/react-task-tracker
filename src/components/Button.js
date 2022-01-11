import PropTypes from 'prop-types'

const Button = ({ text, color, onClick }) => {
  const btnStyle = { backgroundColor: color }
  return (
    <button style={btnStyle} onClick={onClick} className="btn">
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: 'steelBlue',
  text: 'Button',
}

Button.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
