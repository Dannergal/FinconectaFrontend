import './PaginaComponent.css'
import CoinCapComponent from './CoinCapComponent'

function PaginaComponent() {

    return (
       <>
    <header>
        <h1>My Website</h1>
    </header>
    
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    
    <main>
        <section id="home">
            <h2>Home Section</h2>
            <p>Welcome to our website!</p>
            <CoinCapComponent />
        </section>
        
        <section id="about">
            <h2>About Section</h2>
            <p>Learn more about us.</p>
        </section>
        
        <section id="services">
            <h2>Services Section</h2>
            <p>Check out what we offer.</p>
        </section>
        
        <section id="contact">
            <h2>Contact Section</h2>
            <p>Get in touch with us.</p>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2024 My Website. All rights reserved.</p>
    </footer>   
       </>
    );
}

export default PaginaComponent