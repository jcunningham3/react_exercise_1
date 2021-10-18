const Person = (props) => {
  // vote response
  let vote_res = "";
  if(props.age >= 18) {
    vote_res = "Please go vote!";
  }
  else {
    vote_res = "You must be 18"
  }

  //name length
  let name = props.name;
  if(name.length > 8){
    name = name.slice(0, 8)
  }
  return (
    <div>
      <p>Learn some information about this person</p>
      <h3> name: {name} </h3>
      <h3> age: {props.age} </h3>
      <h5> Can Vote? {vote_res} </h5>
      <h3>Hobbies</h3>
      <ul>{props.hobbies.map(h =>
        (
          <li>
            <b>{h}</b>
          </li>
        )
      )}</ul>
      <br/>
    </div>
  );
}
