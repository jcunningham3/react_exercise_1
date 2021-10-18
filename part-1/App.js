const App = () => (
  <div>
    <FirstComponent />
    <NamedComponent name='Billy Jenkins'/>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));
