import React, { Component } from 'react'
import image1 from '../image2.jpg'
import image2 from '../image1.png'
import image3 from '../image3.jpg'
import {Link} from 'react-router-dom'
class Home extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="home-menu">
                                <h3><Link to='/guidance/pfwithdrawal'>പി എഫ് ഓൺലൈൻ ആയി പിൻവലിക്കാം</Link></h3>
                                <img src={image1} className="img-fluid" alt="" />
                                <p>ഇ എം പി എം അംഗങ്ങളെ വിരമിക്കലിനായി ലാഭിക്കാൻ സഹായിക്കുന്ന ഒരു സേവിംഗ്സ് സ്കീമാണ് എംപ്ലോയി പ്രൊവിഡന്റ് ഫണ്ട് (ഇപിഎഫ്).
                                        കാലാവധി പൂർത്തിയാകുമ്പോൾ, ഒരു ഇപിഎഫ് അക്കൗണ്ടിലെ ശേഖരിച്ച ഫണ്ടുകൾ ഒരു റിട്ടയർമെന്റ് കോർപ്പസായി ഒരു സാധാരണ
  							വരുമാനത്തിന്റെ അഭാവത്തിൽ സുഖപ്രദമായ ജീവിതം നയിക്കാൻ ജീവനക്കാരന് ഉപയോഗിക്കാം.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <Link to='/guidance/pfwithdrawalrules'>
                                <div className="home-menu">
                                    <h5>ഓൺലൈൻ ആയി പി എഫ് പിൻവലിക്കുമ്പോൾ അറിഞ്ഞിരിക്കേണ്ട കാര്യങ്ങൾ </h5>
                                </div>
                            </Link>
                            <Link to='/guidance/epfpassbook'>
                                <div className="home-menu">
                                    <h5>പി എഫ് ബാലൻസ്,ക്ലെയിം സ്റ്റാറ്റസ് എന്നിവ ഓൺലൈൻ ആയി ചെക്ക് ചെയ്യാം </h5>
                                </div>
                            </Link>
                            <Link to='/'>
                                <div className="home-menu">
                                    <img src={image2} className="img-fluid" alt="" />
                                </div>
                            </Link>
                            <Link to='/guidance/uanregistration'>
                                <div className="home-menu">
                                    <h5>യൂഎഎൻ ഓൺലൈൻ ആയി കണ്ടുപിടിക്കാനും ആക്ടിവേറ്റ് ചെയ്യാനും സാധിക്കുന്നു  </h5>
                                </div>
                            </Link>
                            <Link to='/guidance/epfstatus'>
                                <div className="home-menu">
                                    <h5>ഇ പി എഫ് സ്റ്റാറ്റസ് അറിയുക എന്നത് വളരെ എളുപ്പം, ഇ പി എഫ് സ്റ്റാറ്റസ് അറിയാനുള്ള ഉപാധികൾ</h5>
                                </div>
                            </Link>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="home-menu">
                                <nav>
                                    <ul>
                                        <li><a href="https://www.epfindia.gov.in/" target="_blank" rel="noopener noreferrer">EPFO OFFICIAL WEBSITE  <i className="fa fa-external-link"></i></a></li>
                                        <li><a href="https://passbook.epfindia.gov.in/MemberPassBook/Login" target="_blank" rel="noopener noreferrer"> മെമ്പർ പാസ്ബുക്ക് & ക്ലെയിം സ്റ്റാറ്റസ് <i className="fa fa-external-link"></i></a></li>
                                        <li><a href="https://unifiedportal-mem.epfindia.gov.in/memberinterface/" target="_blank" rel="noopener noreferrer">മെമ്പർ യൂ.എ.എൻ/ഓൺലൈൻ സർവീസ് <i className="fa fa-external-link"></i></a></li>
                                        <li><a href="https://epfigms.gov.in/" target="_blank" rel="noopener noreferrer">നിങ്ങളുടെ പരാതി  രേഖപ്പെടുത്തുക <i className="fa fa-external-link"></i></a></li>
                                        <li><a href="https://web.umang.gov.in/web/#/" target="_blank" rel="noopener noreferrer" >ഇപിഎഫ്ഒ - മൊബൈൽ അപ്ലിക്കേഷൻ <i className="fa fa-external-link"></i></a></li>
                                        <li><a href="https://mis.epfindia.gov.in/PensionPaymentEnquiry/enquiry.jsp" target="_blank" rel="noopener noreferrer">പെൻഷനറുടെ പോർട്ടൽ <i className="fa fa-external-link"></i></a></li>
                                        <li><a href="https://unifiedportal-mem.epfindia.gov.in/memberinterface/" target="_blank" rel="noopener noreferrer">ഒരു എംപ്ലോയീ - ഒരു ഇപിഎഫ് അക്കൗണ്ട് <i className="fa fa-external-link"></i></a></li>
                                        <li><a href="https://www.epfindia.gov.in/site_docs/PDFs/MiscPDFs/InterestRate_OnPFAccumulationsSince1952.pdf" target="_blank" rel="noopener noreferrer">പലിശാ നിരക്ക് <i className="fa fa-external-link"></i></a></li>
                                        <li><a href="https://www.epfindia.gov.in/site_docs/PDFs/MiscPDFs/ContributionRate.pdf" target="_blank" rel="noopener noreferrer">സംഭാവന നിരക്ക്  <i className="fa fa-external-link"></i></a></li>
                                        <li><a href="epfforms.html" target="_blank" rel="noopener noreferrer">ഡൗൺലോഡ് EPF FORMs(FORM 10G,19,10C etc)</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <Link to='/'>
                                <div className="home-menu">
                                    <img src={image3} className="img-fluid" alt="" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Home
