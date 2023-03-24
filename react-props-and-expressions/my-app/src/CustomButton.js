function CustomButton ({text, color, widthSize, heightSize = 100}) {
  return (
    <button
      style={{
        backgroundColor: color,
        width: widthSize,
        height: heightSize
        }}>
      {text}
    </button>
  )
}
export default CustomButton;
