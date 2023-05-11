const App = () => (
    <div>
        {[{id: 1, username: 'BobIsC00l', name:'Bob', date:'05/11/23', message:'I rock!'},
        {id: 2, username:'FieldMouse', name:'Sugar', date: '05/14/23', message:'I am from the future, Bob is ill'},
        {id: 3, username: 'RobotFlight', name:'Ted', date: '05/11/23', message:'Playing hookey today! Yeehaw'}]
            .map((t) => (<Tweet key={t.id} username={t.username} name={t.name} date={t.date} message={t.message}/>))}
    </div>
)

ReactDOM.render(<App/>, document.getElementById('root'))