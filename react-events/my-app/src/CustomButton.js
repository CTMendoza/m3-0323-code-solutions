function CustomButton ({text, color, size, onCustomClick}) {

return (
  <button onClick={() => onCustomClick(text)} style={{
    backgroundColor: color,
    width: size,
  }}>
    {text}
  </button>
)
}

export default CustomButton;
