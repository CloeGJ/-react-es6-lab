import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './UserList';

function App() {
  // Step 3: ES6+ examples
  const names = ['Alice', 'Bob', 'Charlie'];
  const doubled = names.map(name => name.length * 2);
  console.log('Doubled lengths:', doubled);

  const person = { name: 'Alice', age: 25 };
  const { name, age } = person;
  console.log('Destructured:', name, age);

  // Step 4: React component with props
  const users = ['Alice', 'Bob', 'Charlie'];

  return (
    <div>
      <h1>React ES6 Lab</h1>
      <UserList users={users} />
    </div>
  );
}

export default App;
