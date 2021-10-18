const App = () => (
  <div>
    <Tweet username="BJenkins123" user="Billy Jenkins" date="10/18/2021" message="Hey, this is my fisrt tweet." />
    <Tweet username="JJenkins" user="Jerry Jenkins" date="10/18/2021" message="Hey, this is my fisrt tweet. Just like my brother Billy..." />
    <Tweet username="GJenkins123" user="Gary Jenkins" date="10/18/2021" message="You guys are idiots." />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));
