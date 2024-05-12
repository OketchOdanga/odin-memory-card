
// displays the scoreboard.
// eslint-disable-next-line react/prop-types
export default function Header({currentscore,highscore}) {
    return (
       <section className="header">
          <div className="current-score">Current Score: {currentscore}</div>
          <div className="highscore">Highscore: {highscore}</div>
        </section>
    )
}