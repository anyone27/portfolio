const Footer = () => {
    return (
        <div className="footer">
            <div className="github">
                <div className="github-light">
                    <a href="https://github.com/anyone27" target="_blank" rel="noopener noreferrer"><img src="/images/GitHub-Mark-32px.png" alt="GitHub Logo" /></a>
                </div>
                <div className="github-dark">
                    <a href="https://github.com/anyone27" target="_blank" rel="noopener noreferrer"><img src="/images/GitHub-Mark-Light-32px.png" alt="GitHub Logo" /></a>
                </div>
            </div>
            <span className="footer-copywrite">Copywrite &copy; { new Date().getFullYear() } Josh Callarman</span>
        </div>
    );
}
 
export default Footer;