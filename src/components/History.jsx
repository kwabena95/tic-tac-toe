const History = ({ history, moveTo, currentMove }) => {
    return (
        <ul>
            {
                history.map((_, move) => (
                    <li key={move}>
                        <button
                            type='button'
                            onClick={() => moveTo(move)}
                            style={{ fontWeight: move === currentMove ? 'bold' : 'normal' }}
                        >
                            {move === 0 ? 'Go to game start' : `Go to move #${move}`}
                        </button>
                    </li>

                ))
            }
        </ul>
    )
}

export default History
