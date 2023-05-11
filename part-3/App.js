const App = () => (
    <div>
        {[{id: 1, name:'Bob', age:45, hobbies:['Golfing', 'Grilling', 'Chilling']},
        {id: 2, name:'Sugar', age:2, hobbies:['Eating Cheese', 'Hiding', 'Running']},
        {id: 3, name:'Texas Ranger', age:24, hobbies:['Horseback Riding', 'Bein a Cowboy', 'Romance Novels']}]
            .map((p) => (<Person key={p.id} name={p.name} age={p.age} hobbies={p.hobbies}/>))}
    </div>
)

ReactDOM.render(<App/>, document.getElementById('root'))