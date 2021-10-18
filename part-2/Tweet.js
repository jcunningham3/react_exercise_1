const Tweet = (props) => {
  return (
    <div>
      <h5>{props.username}</h5>
      <h5>{props.user}</h5>
      <h5>{props.date}</h5>
      <h3><b>{props.message}</b></h3>
      <br />
    </div>
  )
}
