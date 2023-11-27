function Person(props) {
    let voteText = props.age >= 18 ? "Go Vote!" : "Go study!";

    let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);

    return (
        <div>
            <p>Learn more information about this person:</p>
            <ul>
                <li>Name: {props.name.slice(0, 6)}</li>
                <li>AgeL {props.age}</li>
                <ul>
                    Hobibies
                    {hobbies}
                </ul>
            </ul>
            <h3>{voteText}</h3>
        </div>
    );
}
