const Home = () => {
	return (
		<div className="home-page">
			<h1>Home</h1>

			<h3>
				Hello, my name is Josh Callarman and I am a Web Developer based in the
				UK.
			</h3>

			<p>
				The source code for all of these projects is available on my{' '}
				<a
					href="http://github.com/anyone27"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub
				</a>
			</p>

			<h2>Showcase</h2>

			<a
				href="https://podcastchart.joshcallarman.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="projects">
					<div className="project-image">
						<img src="/images/podcastcharts.webp" alt="logo" />
					</div>
					<div className="project-desc">
						<h3 className="project-title">Podcast Charts</h3>
						<p>
							A React app which fetches and displays the top 10 Podcasts from a
							selected Genre
						</p>
					</div>
				</div>
			</a>

			<a
				href="https://oandx.joshcallarman.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="projects">
					<div className="project-image">
						<img src="/images/OandX.webp" alt="logo" />
					</div>
					<div className="project-desc">
						<h3 className="project-title">Noughts & Crosses (Tic-Tac-Toe)</h3>
						<p>A game of noughts and crosses made using ReactJS</p>
						<p>
							Created based on a FreeCodeCamp tutorial which I then split into
							reusable components, removed the "time travel" feature and added
							custom player names and a score system
						</p>
					</div>
				</div>
			</a>
		</div>
	);
};

export default Home;
