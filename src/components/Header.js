import PropTypes from 'prop-types'   // shorthand "impt"

// you can also "deconstruct" the props passed
// as in function Header({ text })

function Header(props) {
  return (
    <header style={{backgroundColor: "rgba(0,0,0,0.2)"}}>
        <div className="container">
            <h2>{props.text}</h2>
        </div>    
    </header>
  )
}

Header.defaultProps = {
    text: 'Default Header',
}

// force the property passed to be string and required
// type-checking errors will only be logged to the console
// If you use TypeScript, you don't need PropTypes for type-checking
Header.propTypes = {
    text: PropTypes.string.isRequired
}

export default Header
