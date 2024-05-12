
// displays the scoreboard.
// eslint-disable-next-line react/prop-types
export default function Header({currentscore,highscore}) {
    return (
       <section className="header">
           <h2>POKEMON GAME</h2>
          <div className="wrapper_header">
            <div className="current-score">Current Score: {currentscore}</div>
            <div className="highscore">Highscore: {highscore}</div>
          </div>

        </section>
    )
}