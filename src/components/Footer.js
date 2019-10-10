import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
           <footer className="footer bg-dark-nav">
               Concept and Designed By Vishnu KG Cherupuzha
               <nav>
    				  <a href="https://www.youtube.com/c/vishnukgcherupuzha" target="_blank" rel="noopener noreferrer" className="fa fa-youtube-square"></a>
    				  <a href="https://www.facebook.com/vishnukgcherupuzha/"target="_blank" rel="noopener noreferrer" className="fa fa-facebook-official"></a>
    				  <a href="https://twitter.com/VKGCherupuzha"target="_blank" rel="noopener noreferrer" className="fa fa-twitter-square"></a>
    				  <a href="https://www.linkedin.com/in/vishnukgcherupuzha/"target="_blank" rel="noopener noreferrer" className="fa fa-linkedin-square"></a>
    				  <a href="https://www.instagram.com/vishnukgcherupuzha/" target="_blank" rel="noopener noreferrer" className="fa fa-instagram"></a>
    			</nav>
           </footer>
        )
    }
}

export default Footer
