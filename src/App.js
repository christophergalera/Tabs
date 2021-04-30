import React from 'react';
import './App.css';
import Tabs from './Components/Tabs'

function App() {
  return (
    <div className="App" >
      <Tabs tabItems={[
        {label: "Tab 1", content: "Tab 1 content is showing here.", callback() {
          console.log(this.label, "was clicked");
        }},
        {label: "Tab 2", content: "Tab 2 content is showing here.", callback() {
          console.log(this.label, "was clicked");
        }},
        {label: "Tab 3", content: "Tab 3 content is showing here.", callback() {
          console.log(this.label, "was clicked");
        }}
        ]} />
    </div>
  );
}

export default App;
