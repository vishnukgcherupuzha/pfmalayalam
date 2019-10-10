import React, { Component } from 'react'
import {Switch,Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Epf from './Epf'
import Epfo from './Epfo'
import Pfwithdrawal from './Pfwithdrawal'
import Epfbalance from './Epfbalance'
import Epfstatus from './Epfstatus'
import Pfwithdrawalrules from './Pfwithdrawalrules'
import Ppf from './Ppf'
import Uan from './Uan'
import Nps from './Nps'
import Npscalculator from './Npscalculator'
import Uanregistration from './Uanregistration'
import Uanlogin from './Uanlogin'
import Epfologin from './Epfologin'
import Epfpassbook from './Epfpassbook'
import Epfclaimstatus from './Epfclaimstatus'
import Default from './Default'
class Guidance extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <div className="home-menu">
                            <Switch>
                                <Route path="/guidance/epf" component={Epf} />
                                <Route path="/guidance/epfo" component={Epfo} />
                                <Route path="/guidance/pfwithdrawal" component={Pfwithdrawal} />
                                <Route path="/guidance/epfbalance" component={Epfbalance} />
                                <Route path="/guidance/epfstatus" component={Epfstatus} />
                                <Route path="/guidance/pfwithdrawalrules" component={Pfwithdrawalrules} />
                                <Route path="/guidance/ppf" component={Ppf} />
                                <Route path="/guidance/uan" component={Uan} />
                                <Route path="/guidance/nps" component={Nps} />
                                <Route path="/guidance/npscalculator" component={Npscalculator} />
                                <Route path="/guidance/uanregistration" component={Uanregistration} />
                                <Route path="/guidance/uanlogin" component={Uanlogin} />
                                <Route path="/guidance/epfologin" component={Epfologin} />
                                <Route path="/guidance/epfpassbook" component={Epfpassbook} />
                                <Route path="/guidance/epfclaimstatus" component={Epfclaimstatus} />
                                <Route component={Default}/>
                            </Switch>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
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
                        <div className="home-menu">
                            <nav>
                                <ul>
                                    <li><Link to='/guidance/epf'>ഇപിഎഫ് </Link></li>
                                    <li><Link to='/guidance/epfo'>ഇപിഎഫ്ഓ</Link> </li>
                                    <li><Link to='/guidance/epfbalance'> ഇപിഎഫ് ബാലൻസ് </Link></li>
                                    <li><Link to='/guidance/epfstatus'>പിഎഫ് സ്റ്റാറ്റസ്  </Link> </li>
                                    <li><Link to='/guidance/pfwithdrawal'> പിഎഫ് പിൻവലിക്കൽ </Link> </li>
                                    <li><Link to='/guidance/pfwithdrawalrules'>പിഎഫ് പിൻവലിക്കൽ നിയമങ്ങൾ </Link></li>
                                    <li><Link to='/guidance/ppf'>പിപിഎഫ് </Link></li>
                                    <li><Link to='/guidance/uan'>യൂഎഎൻ  </Link> </li>
                                    <li> <Link to='/guidance/nps'>എൻപിഎസ് </Link></li>
                                    <li><Link to='/guidance/npscalculator'>എൻപിഎസ്  കാൽക്കുലേറ്റർ </Link> </li>
                                    <li><Link to='/guidance/uanregistration'>യൂഎഎൻ രെജിസ്‌ട്രേഷൻ  </Link></li>
                                    <li> <Link to='/guidance/uanlogin'>യൂഎഎൻ ലോഗിൻ</Link> </li>
                                    <li><Link to='/guidance/epfologin'>ഇപിഎഫ്ഓ ലോഗിൻ  </Link></li>
                                    <li><Link to='/guidance/epfpassbook'>ഇപിഎഫ് പാസ്ബുക്ക്  </Link>  </li>
                                    <li><Link to='/guidance/epfclaimstatus'>ഇപിഎഫ് ക്ലെയിം സ്റ്റാറ്റസ് </Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Guidance
