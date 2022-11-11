import React from 'react'
import letTalk from 'views/LetsTalk';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
function LetTalk() {
  return (
    <WithLayout
            component={letTalk}
            layout={Main}
        />
  )
}

export default LetTalk