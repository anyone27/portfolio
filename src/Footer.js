const Footer = () => {
	return (
		<div className="footer">
			<div className="github">
				<a
					href="https://github.com/anyone27"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fab fa-github-square"></i>
				</a>
				<a
					href="https://www.linkedin.com/in/joshcallarman/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fab fa-linkedin"></i>
				</a>
			</div>
			<span className="footer-copywrite">
				Copywrite &copy; {new Date().getFullYear()} Josh Callarman
			</span>
		</div>
	);
};

export default Footer;
