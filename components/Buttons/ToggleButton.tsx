import React, { useRef, useState } from 'react'
// import PropTypes from 'prop-types'
// Toggle.propTypes = {
//   onChange: PropTypes.func,
//   value: PropTypes.string,
//   name: PropTypes.string,
//   checked: PropTypes.bool
// }
export default function Toggle(props) {
    const [toggle, setToggle] = useState(props.checked);
    function handleToggle() {
    if (props.onChange) props.onChange()
    setToggle(!toggle)
  }
  return (
    <>
      <input
        name={props.name}
        className='toggle-checkbox'
        type='checkbox'
        defaultChecked={props.value}
        value={toggle}
      />
      <span
        onClick={handleToggle}
        className={(toggle ? 'toggled toggle-switch' : 'toggle-switch') + " bg-purple-800" + " border-0"}
      >
        <span className='toggle bg-white transition duration-1000'></span>
      </span>
    </>
  )
}