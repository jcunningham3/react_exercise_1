const App = () => (
  <div>
    <Person name="Billy Jenkins" age={43} hobbies={["Walking in the park.", "Observing others covertly.", "A glass of wine at dusk."]}/>
    <Person name="Jerry Jenkins" age={16} hobbies={["Walking in the park.", "Observing others covertly.", "A glass of wine at dusk."]}/>
    <Person name="Gary Jenkins" age={24} hobbies={["Walking in the park.", "Observing others covertly.", "A glass of wine at dusk."]}/>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));
