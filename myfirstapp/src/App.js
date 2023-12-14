// Note :
// Date() is a build-in object.
// Date.currDate.toLocaleDateString() to get date text.
// Data.currDate.toLocaleTimeString() to get time text.
function App(props) {
  const currDate = new Date();

  return (
    <div>
      <h1>I am Boonthicha Sae-jia</h1>
      <h2>Today is {currDate.toLocaleDateString()} and the time now is {currDate.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App;