import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <span className="footer-logo">
            <span className="footer-accent">&lt;</span>Luis<span className="footer-accent">/&gt;</span>
          </span>
          <span className="footer-copy">© {new Date().getFullYear()} Luis Antonio Olvera</span>
        </div>
        <span className="footer-mono">Hecho con React + Vite ⚡</span>
      </div>
    </footer>
  )
}

export default Footer