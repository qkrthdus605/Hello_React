import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true} />
      {/* '={true}'는 생략 가능, 생략 시 true로 간주 */}
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;
