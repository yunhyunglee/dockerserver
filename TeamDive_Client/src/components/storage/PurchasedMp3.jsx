

const PurchasedMp3 = ({purchasedMp3}) => {

    return (
        <ul>
        {purchasedMp3.map((mp3, idx) => (
          <li key={idx}>{mp3}</li>
        ))}
      </ul>
    )
}


export {PurchasedMp3}