import React from 'react'

function Board() {
  return (
    <div className='board-container'>
       <div className='board-row'>
        <Board></Board>
        <Board></Board>
        <Board></Board>
       </div>
       <div className='board-row'>
        <Board></Board>
        <Board></Board>
        <Board></Board>
       </div>
       <div className='board-row'>
        <Board></Board>
        <Board></Board>
        <Board></Board>
       </div>
    </div>
  )
}

export default Board