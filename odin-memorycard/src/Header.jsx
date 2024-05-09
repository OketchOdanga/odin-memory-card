
// displays the scoreboard.
// eslint-disable-next-line react/prop-types
export default function Header({currentscore,highScore}) {
    return (
       <section>
          <div className="current-score">Current Score: {currentscore}</div>
          <div className="highscore">Highscore: {highScore}</div>
        </section>
    )
}