function App() {
    return (
        <div>
            <Tweet
              name="Zaedyn Oliver"
              username="meeps"
              date={new Date().toDateString()}
              message="Waaaaahhhh!"
              />
            <Tweet
              name="Kaedyn Jordan"
              username="bubs"
              date={new Date().toDateString()}
              message="Let's play Fortnite!"
              />
            <Tweet
              name="Jaelyn Rianne"
              username="Joogs"
              date={new Date().toDateString()}
              message="coffeeeee!"
              />
        </div>
    );
}