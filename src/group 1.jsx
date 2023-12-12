import React from 'react';
import GroupMembersList from './GroupMembersList';

const App = () => {
  const members = [
    { name: 'John Doe' },
    { name: 'Jane Smith' },
    { name: 'Bob Johnson' }
  ];

  return (
    <div>
      <h1>Group Members</h1>
      <GroupMembersList members={members} />
    </div>
  );
};

export default App;