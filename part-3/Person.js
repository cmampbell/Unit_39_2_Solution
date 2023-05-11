const Person = ({name, age, hobbies}) => (
    <div>
        <p>Learn some information about this Person</p>
        <h4>Name: {name.length > 8 ? name.slice(0, 8) : name}</h4>
        <h4> Age: {age}</h4>
        <p>{age >= 18 ? 'Please go vote!' : 'you must be 18'}</p>
        <ul>
            {hobbies.map(h => (<li>{h}</li>))}
        </ul>
    </div>
)