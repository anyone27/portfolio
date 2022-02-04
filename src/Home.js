const Home = () => {
    return (
        <div className="home-page">
            <h1>Home</h1>

            <h3>Hello, my name is Josh Callarman and I am a Web Developer based in the UK.</h3>

            <h2>Showcase</h2>

            <a href="http://noughtsandcrosses.joshcallarman.com" target="_blank" rel="noopener noreferrer">
                <div className="projects">
                    <div className="project-image">
                        <img src="noughtsandcrosses.jpg" alt="logo"/>
                    </div>
                    <div className="project-desc">
                        <h3 className="project-title">Noughts & Crosses (Tic-Tac-Toe)</h3>
                        <p>A game of noughts and crosses made using ReactJS</p>
                    </div>
                </div>
            </a>


        </div>
    );
}

export default Home
