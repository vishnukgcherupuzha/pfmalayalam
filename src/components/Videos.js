import React, { Component } from 'react'
import iframe from 'react-iframe'
class Videos extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8 embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item"
                    src="https://www.youtube.com/embed/NbLUpN9rIwk"
                     name="player" frameBorder="0" allow="accelerometer;
                     autoplay; encrypted-media; gyroscope; picture-in-picture" 
                     display="initial"
                     position="relative"
                     allowFullScreen>
                     </iframe>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="home-menu">
                           <a href="https://www.youtube.com/embed/xNqcVXFnFDQ" target="player">
                           <div className="home-menu">
                             How to withdraw PF online Malayalam(PART #1) in 2019 | PF ഓൺലൈനിൽ എങ്ങനെയാണ് പിൻവലിക്കേണ്ടത് മലയാളം</div></a>
                            <a href="https://www.youtube.com/embed/E3zMVk7RgOU" target="player">
                            <div className="home-menu">
                             How to check PF Passbook, Claim status and Reject reason | Malayalam | July 28th, 2019</div></a>
                             <a href="https://www.youtube.com/embed/om5od4Bx_yU" target="player">
                            <div className="home-menu">
                            TDS on PF withdrawal | Know about PF tax deduction 2019</div></a>
                             <a href="https://www.youtube.com/embed/NbLUpN9rIwk" target="player">
                            <div className="home-menu">
                            How to withdraw PF online Malayalam (PART #2) in 2019 | PF ഓൺലൈനിൽ എങ്ങനെയാണ് പിൻവലിക്കേണ്ടത് മലയാളം</div></a>
                             <a href="https://www.youtube.com/embed/uBX1yMKGjFQ" target="player">
                            <div className="home-menu">
                            What is UAN and how to find it? 2019 | എന്താണ് UAN, അത് എങ്ങനെ കണ്ടെത്താം? | Malayalam | Vishnu KG</div></a>
                             <a href="https://www.youtube.com/embed/_w71h7mfqcM" target="player">
                            <div className="home-menu">
                            How to transfer PF amount | 2019 | How to check previous Employer PF balance  | Malayalam</div></a>
                             <a href="https://www.youtube.com/embed/jhlrX25t-pI" target="player">
                            <div className="home-menu">
                            PF GRIEVANCE | HOW TO FILL PF GRIEVANCE | VISHNU KG CHERUPUZHA</div></a>
                             <a href="https://www.youtube.com/embed/t2zHljf_C-U" target="player">
                            <div className="home-menu">
                            How to Locate PF Office | Find Establishment code | PF Trust or EPF Exempted Establishments</div></a>
                             <a href="https://www.youtube.com/embed/ta22vUf-f6o" target="player">
                            <div className="home-menu">
                            Unable to see form 10c & form 19 | 2019 | Vishnu KG Cherupuzha</div></a>
                             <a href="https://www.youtube.com/embed/yABnys92xUA" target="player">
                            <div className="home-menu">
                            How to modify basic information on EPF site 2019 | How to update contact details in EPF site</div></a>
                             
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Videos
