import React from 'react';
// 리액트를 불러옴

function Hello({color, name}){
  return <div style={{ color }}>안녕하세요 {name} </div>
}

Hello.defaultProps = {
  name: '이름없음'
}
// Hello라는 컴포넌트를 내보내겠다는 의미. 다른 컴포넌트에서 불러와 사용할 수 있음
export default Hello;