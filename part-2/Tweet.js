const Tweet = ({username, name, date, message}) => (
    <div>
        <h1>{username}</h1>
        <h2>{name}, {date}</h2>
        <p>{message}</p>
    </div>
)