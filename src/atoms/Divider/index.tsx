const Divider = ({ height = 2, color = '', ...rest }) => {
  return <hr style={{ backgroundColor: color, height: `${height}px` }} {...rest} />
}

export default Divider;