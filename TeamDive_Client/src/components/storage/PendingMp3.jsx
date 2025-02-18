

const PendingMp3 = ({pendingMp3}) => {
    return (
        <ul>
        {pendingMp3.map((mp3, idx) => (
          <li key={idx}>{mp3}</li>
        ))}
      </ul>
    )
}