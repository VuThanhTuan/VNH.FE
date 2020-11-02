import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import clientRoutes from './routes';
import HomePage from '../Home';
import SideBar from '../SideBar/Sidebar';
import '../../../assets/client/css/bootstrap.css';
import '../../../assets/client/css/styles.css';
import '../../../assets/client/css/magnific-popup.css';
import '../../../assets/client/css/swiper.css';

// const switchRoutes = (
//   <Switch>
//     {clientRoutes.map((prop, key) => (
//       <Route path={prop.path} component={prop.component} key={key} />
//     ))}
//     {/* <Redirect from="/" to="/trang-chu" /> */}
//   </Switch>
// );

// function ClientLayout() {
//   return (
//     <div>
//       {/* Side Bar */}
//       <SideBar />
//       <div>
//         <Switch>
//           <Route path="/" component={HomePage} />
//         </Switch>
//       </div>

//       {/* Footer */}
//     </div>
//   );
// }

function ClientLayout() {

  //Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "../../../assets/client/js/scripts.js";
    document.body.appendChild(script1);
    return () => {
      document.body.removeChild(script1);
    }
  }, []);


  return (
    <div data-spy="scroll" data-target=".fixed-top">

      {/* <div className="spinner-wrapper">
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </div> */}




      <nav className="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">
        <a className="navbar-brand logo-image" href="index.html"><img src="images/logo.svg" alt="alternative" /></a>


        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-awesome fas fa-bars"></span>
          <span className="navbar-toggler-awesome fas fa-times"></span>
        </button>


        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#header">HOME <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#intro">INTRO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#services">SERVICES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#callMe">CALL ME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#projects">PROJECTS</a>
            </li>


            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle page-scroll" href="#about" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">ABOUT</a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="terms-conditions.html"><span className="item-text">TERMS CONDITIONS</span></a>
                <div className="dropdown-items-divide-hr"></div>
                <a className="dropdown-item" href="privacy-policy.html"><span className="item-text">PRIVACY POLICY</span></a>
              </div>
            </li>


            <li className="nav-item">
              <a className="nav-link page-scroll" href="#contact">CONTACT</a>
            </li>
          </ul>
          <span className="nav-item social-icons">
            <span className="fa-stack">
              <a href="#your-link">
                <span className="hexagon"></span>
                <i className="fab fa-facebook-f fa-stack-1x"></i>
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <span className="hexagon"></span>
                <i className="fab fa-twitter fa-stack-1x"></i>
              </a>
            </span>
          </span>
        </div>
      </nav>



      <header id="header" className="header">
        <div className="header-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-container">
                  <h1>BUSINESS <span id="js-rotating">TEMPLATE, SERVICES, SOLUTIONS</span></h1>
                  <p className="p-heading p-large">Aria is a top consultancy company specializing in business growth using online marketing and conversion optimization tactics</p>
                  <a className="btn-solid-lg page-scroll" href="#intro">DISCOVER</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>


      <div id="intro" className="basic-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="text-container">
                <div className="section-title">INTRO</div>
                <h2>We Offer Some Of The Best Business Growth Services In Town</h2>
                <p>Launching a new company or developing the market position of an existing one can be quite an overwhelming processs at times.</p>
                <p className="testimonial-text">"Our mission here at Aira is to get you through those tough moments relying on our team's expertise in starting and growing companies."</p>
                <div className="testimonial-author">Louise Donovan - CEO</div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="image-container">
                <img className="img-fluid" src="images/intro-office.jpg" alt="alternative" />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="cards-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">

              <div className="card">
                <span className="fa-stack">
                  <span className="hexagon"></span>
                  <i className="fas fa-binoculars fa-stack-1x"></i>
                </span>
                <div className="card-body">
                  <h4 className="card-title">Environment Analysis</h4>
                  <p>The starting point of any success story is knowing your current position in the business environment</p>
                </div>
              </div>

              <div className="card">
                <span className="fa-stack">
                  <span className="hexagon"></span>
                  <i className="fas fa-list-alt fa-stack-1x"></i>
                </span>
                <div className="card-body">
                  <h4 className="card-title">Development Planning</h4>
                  <p>After completing the environmental analysis the next stage is to design and  plan your development strategy</p>
                </div>
              </div>

              <div className="card">
                <span className="fa-stack">
                  <span className="hexagon"></span>
                  <i className="fas fa-chart-pie fa-stack-1x"></i>
                </span>
                <div className="card-body">
                  <h4 className="card-title">Execution & Evaluation</h4>
                  <p>In this phase you will focus on executing the actions plan and evaluating the results after each marketing campaign</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


      <div id="services" className="cards-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">SERVICES</div>
              <h2>Choose The Service Package<br /> That Suits Your Needs</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">

              <div className="card">
                <div className="card-image">
                  <img className="img-fluid" src="images/services-1.jpg" alt="alternative" />
                </div>
                <div className="card-body">
                  <h3 className="card-title">Off The Ground Off The Ground</h3>
                  <p>Perfect for fresh ideas or young startups, this package will help get the business off the ground</p>
                  <ul className="list-unstyled li-space-lg">
                    <li className="media">
                      <i className="fas fa-square"></i>
                      <div className="media-body">Environment and competition</div>
                    </li>
                    <li className="media">
                      <i className="fas fa-square"></i>
                      <div className="media-body">Designing the marketing plan</div>
                    </li>
                  </ul>
                  <p className="price">Starting at <span>$199</span></p>
                </div>
                <div className="button-container">
                  <a className="btn-solid-reg page-scroll" href="#callMe">DETAILS</a>
                </div>
              </div>


              <div className="card">
                <div className="card-image">
                  <img className="img-fluid" src="images/services-2.jpg" alt="alternative" />
                </div>
                <div className="card-body">
                  <h3 className="card-title">Accelerated Growth</h3>
                  <p>Use this service pack to give your company the necessary impulse to become an industry leader</p>
                  <ul className="list-unstyled li-space-lg">
                    <li className="media">
                      <i className="fas fa-square"></i>
                      <div className="media-body">Business strategy planning</div>
                    </li>
                    <li className="media">
                      <i className="fas fa-square"></i>
                      <div className="media-body">Taking the planned actions</div>
                    </li>
                  </ul>
                  <p className="price">Starting at <span>$299</span></p>
                </div>
                <div className="button-container">
                  <a className="btn-solid-reg page-scroll" href="#callMe">DETAILS</a>
                </div>
              </div>

              <div className="card">
                <div className="card-image">
                  <img className="img-fluid" src="images/services-3.jpg" alt="alternative" />
                </div>
                <div className="card-body">
                  <h3 className="card-title">Market Domination</h3>
                  <p>You already are a reference point in your industry now you need to learn about acquisitions</p>
                  <ul className="list-unstyled li-space-lg">
                    <li className="media">
                      <i className="fas fa-square"></i>
                      <div className="media-body">Maintaining the leader status</div>
                    </li>
                    <li className="media">
                      <i className="fas fa-square"></i>
                      <div className="media-body">Acquisitions the right way</div>
                    </li>
                  </ul>
                  <p className="price">Starting at <span>$299</span></p>
                </div>
                <div className="button-container">
                  <a className="btn-solid-reg page-scroll" href="#callMe">DETAILS</a>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>




      <div id="details" className="accordion">
        <div className="area-1">
        </div><div className="area-2">


          <div className="accordion-container" id="accordionOne">
            <h2>Accelerate Business Growth To Improve Revenue Numbers</h2>
            <div className="item">
              <div id="headingOne">
                <span data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" role="button">
                  <span className="circle-numbering">1</span><span className="accordion-title">How Can Aria Help Your Business</span>
                </span>
              </div>
              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionOne">
                <div className="accordion-body">
                  At Aria solutions, we’ve taken the consultancy concept one step further by offering a full service management organization with expertise.
                        </div>
              </div>
            </div>

            <div className="item">
              <div id="headingTwo">
                <span className="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" role="button">
                  <span className="circle-numbering">2</span><span className="accordion-title">Great Strategic Business Planning</span>
                </span>
              </div>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionOne">
                <div className="accordion-body">
                  Aria partners with businesses to business growth and development ideas including environment analysis, plan execution and evaluation.
                        </div>
              </div>
            </div>

            <div className="item">
              <div id="headingThree">
                <span className="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" role="button">
                  <span className="circle-numbering">3</span><span className="accordion-title">Online Marketing Campaigns</span>
                </span>
              </div>
              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionOne">
                <div className="accordion-body">
                  An awesome online marketing plan won't save your bad product but paired with a good product, the sky is the limit for what can be achieved.
                        </div>
              </div>
            </div>
          </div>


        </div>
      </div>



      <div className="tabs">
        <div className="area-1">
          <div className="tabs-container">

            <ul className="nav nav-tabs" id="ariaTabs" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="nav-tab-1" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true"><i className="fas fa-th"></i> Business</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="nav-tab-2" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false"><i className="fas fa-th"></i> Expertise</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="nav-tab-3" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false"><i className="fas fa-th"></i> Quality</a>
              </li>
            </ul>

            <div className="tab-content" id="ariaTabsContent">


              <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
                <h4>Business Services For Companies</h4>
                <p>Aria provides the most innovative and customized business services in the industry. Our <a className="green page-scroll" href="#services">Services</a> section shows how flexible we are for all types of budgets.</p>


                <div className="progress-container">
                  <div className="title">Business Development 100%</div>
                  <div className="progress">
                    <div className="progress-bar first" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className="title">Opportunity Spotting 76%</div>
                  <div className="progress">
                    <div className="progress-bar second" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className="title">Online Marketing 90%</div>
                  <div className="progress">
                    <div className="progress-bar third" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>


              </div>


              <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
                <ul className="list-unstyled li-space-lg first">
                  <li className="media">
                    <div className="media-bullet">1</div>
                    <div className="media-body"><strong>High quality</strong> is on top of our list when it comes to the way we deliver the services</div>
                  </li>
                  <li className="media">
                    <div className="media-bullet">2</div>
                    <div className="media-body"><strong>Maximum impact</strong> is what we look for in our actions</div>
                  </li>
                  <li className="media">
                    <div className="media-bullet">3</div>
                    <div className="media-body"><strong>Quality standards</strong> are important but meant to be exceeded</div>
                  </li>
                </ul>
                <ul className="list-unstyled li-space-lg last">
                  <li className="media">
                    <div className="media-bullet">4</div>
                    <div className="media-body"><strong>We're always looking</strong> for industry leaders to help them win their market position</div>
                  </li>
                  <li className="media">
                    <div className="media-bullet">5</div>
                    <div className="media-body"><strong>Evaluation</strong> is a key aspect of this business and important</div>
                  </li>
                  <li className="media">
                    <div className="media-bullet">6</div>
                    <div className="media-body"><strong>Ethic</strong> procedures ar alwasy at the base of everything we do</div>
                  </li>
                </ul>
              </div>


              <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab-3">
                <p><strong>We strive to achieve</strong> 100% customer satisfaction for both types of customers: hiring companies and job seekers. Types of customers: <a className="green" href="#your-link">with huge potential</a></p>
                <p><strong>Our goal is to help</strong> your company achieve its full potential and establish long term stability for <a className="green" href="#your-link">the stakeholders</a></p>
                <ul className="list-unstyled li-space-lg">
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">It's easy to get a quotation, just call our office anytime</div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">We'll get back to you with an initial estimate soon</div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">Get ready to see results even after only 30 days</div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">Ask for a quote and start improving your business</div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">Just fill out the form and we'll call you right away</div>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div><div className="area-2"></div>
      </div>



      <div className="slider">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Read Our Customer Testimonials</h2>
              <p className="p-heading">Our clients are our partners and we can not imagine a better future for our company without helping them reach their objectives</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">

              <div className="slider-container">
                <div className="swiper-container card-slider">
                  <div className="swiper-wrapper">

                    <div className="swiper-slide">
                      <div className="card">
                        <img className="card-image" src="images/testimonial-1.jpg" alt="alternative" />
                        <div className="card-body">
                          <div className="testimonial-text">The guys from Aria helped with getting my business off the ground and turning into a profitable company.</div>
                          <div className="testimonial-author">Jude Thorn - Founder</div>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="card">
                        <img className="card-image" src="images/testimonial-2.jpg" alt="alternative" />
                        <div className="card-body">
                          <div className="testimonial-text">I purchased the Growth Accelerator service pack a few years ago and I renewed the contract each year. </div>
                          <div className="testimonial-author">Marsha Singer - Marketer</div>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="card">
                        <img className="card-image" src="images/testimonial-3.jpg" alt="alternative" />
                        <div className="card-body">
                          <div className="testimonial-text">Aria's CEO personally attends client meetings and gives his feedback on business growth strategies.</div>
                          <div className="testimonial-author">Roy Smith - Developer</div>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="card">
                        <img className="card-image" src="images/testimonial-4.jpg" alt="alternative" />
                        <div className="card-body">
                          <div className="testimonial-text">At the beginning I thought the prices are a little high for what they offer but they over deliver each and every time.</div>
                          <div className="testimonial-author">Ronald Spice - Owner</div>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="card">
                        <img className="card-image" src="images/testimonial-5.jpg" alt="alternative" />
                        <div className="card-body">
                          <div className="testimonial-text">I recommend Aria to every business owner or growth leader that wants to take his company to the next level.</div>
                          <div className="testimonial-author">Lindsay Rune - Manager</div>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="card">
                        <img className="card-image" src="images/testimonial-6.jpg" alt="alternative" />
                        <div className="card-body">
                          <div className="testimonial-text">My goals for using Aria's services seemed high when I first set them but they've met them with no problems.</div>
                          <div className="testimonial-author">Ann Black - Consultant</div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


      <div id="callMe" className="form-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container">
                <div className="section-title">CALL ME</div>
                <h2 className="white">Have Us Contact You By Filling And Submitting The Form</h2>
                <p className="white">You are just a few steps away from a personalized offer. Just fill in the form and send it to us and we'll get right back with a call to help you decide what service package works.</p>
                <ul className="list-unstyled li-space-lg white">
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">It's very easy just fill in the form so we can call</div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">During the call we'll require some info about the company</div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">Don't hesitate to email us for any questions or inquiries</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">


              <form id="callMeForm" data-toggle="validator" data-focus="false">
                <div className="form-group">
                  <input type="text" className="form-control-input" id="lname" name="lname" required />
                  <label className="label-control" htmlFor="lname">Name</label>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control-input" id="lphone" name="lphone" required />
                  <label className="label-control" htmlFor="lphone">Phone</label>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                  <input type="email" className="form-control-input" id="lemail" name="lemail" required />
                  <label className="label-control" htmlFor="lemail">Email</label>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                  <select className="form-control-select" id="lselect" required>
                    <option className="select-option" value="">Interested in...</option>
                    <option className="select-option" value="Off The Ground">Off The Ground</option>
                    <option className="select-option" value="Accelerated Growth">Accelerated Growth</option>
                    <option className="select-option" value="Market Domination">Market Domination</option>
                  </select>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group checkbox white">
                  <input type="checkbox" id="lterms" value="Agreed-to-Terms" name="lterms" required />I agree with Aria's stated <a className="white" href="privacy-policy.html">Privacy Policy</a> and <a className="white" href="terms-conditions.html">Terms & Conditions</a>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                  <button type="submit" className="form-control-submit-button">CALL ME</button>
                </div>
                <div className="form-message">
                  <div id="lmsgSubmit" className="h3 text-center hidden"></div>
                </div>
              </form>


            </div>
          </div>
        </div>
      </div>


      <div id="projects" className="filter">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">PROJECTS</div>
              <h2>Projects That We're Proud Of</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">

              <div className="button-group filters-button-group">
                <a className="button is-checked" data-filter="*"><span>SHOW ALL</span></a>
                <a className="button" data-filter=".design"><span>DESIGN</span></a>
                <a className="button" data-filter=".development"><span>DEVELOPMENT</span></a>
                <a className="button" data-filter=".marketing"><span>MARKETING</span></a>
                <a className="button" data-filter=".seo"><span>SEO</span></a>
              </div>
              <div className="grid">
                <div className="element-item development">
                  <a className="popup-with-move-anim" href="#project-1"><div className="element-item-overlay"><span>Online Banking</span></div><img src="images/project-1.jpg" alt="alternative" /></a>
                </div>
                <div className="element-item development">
                  <a className="popup-with-move-anim" href="#project-2"><div className="element-item-overlay"><span>Classic Industry</span></div><img src="images/project-2.jpg" alt="alternative" /></a>
                </div>
                <div className="element-item design development marketing">
                  <a className="popup-with-move-anim" href="#project-3"><div className="element-item-overlay"><span>BoomBap Audio</span></div><img src="images/project-3.jpg" alt="alternative" /></a>
                </div>
                <div className="element-item design development marketing">
                  <a className="popup-with-move-anim" href="#project-4"><div className="element-item-overlay"><span>Van Moose</span></div><img src="images/project-4.jpg" alt="alternative" /></a>
                </div>
                <div className="element-item design development marketing seo">
                  <a className="popup-with-move-anim" href="#project-5"><div className="element-item-overlay"><span>Joy Moments</span></div><img src="images/project-5.jpg" alt="alternative" /></a>
                </div>
                <div className="element-item design marketing seo">
                  <a className="popup-with-move-anim" href="#project-6"><div className="element-item-overlay"><span>Spark Events</span></div><img src="images/project-6.jpg" alt="alternative" /></a>
                </div>
                <div className="element-item design marketing">
                  <a className="popup-with-move-anim" href="#project-7"><div className="element-item-overlay"><span>Casual Wear</span></div><img src="images/project-7.jpg" alt="alternative" /></a>
                </div>
                <div className="element-item design marketing">
                  <a className="popup-with-move-anim" href="#project-8"><div className="element-item-overlay"><span>Zazoo Apps</span></div><img src="images/project-8.jpg" alt="alternative" /></a>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>



      <div id="project-1" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="row">
          <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
          <div className="col-lg-8">
            <img className="img-fluid" src="images/project-1.jpg" alt="alternative" />
          </div>
          <div className="col-lg-4">
            <h3>Online Banking</h3>
            <hr className="line-heading" />
            <h6>Strategy Development</h6>
            <p>Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current needs</p>
            <p>By offering the best professional services and quality products in the market. Don't hesitate and get in touch with us.</p>
            <div className="testimonial-container">
              <p className="testimonial-text">Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current requirements.</p>
              <p className="testimonial-author">General Manager</p>
            </div>
            <a className="btn-solid-reg" href="#your-link">DETAILS</a> <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
          </div>
        </div>
      </div>



      <div id="project-2" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="row">
          <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
          <div className="col-lg-8">
            <img className="img-fluid" src="images/project-2.jpg" alt="alternative" />
          </div>
          <div className="col-lg-4">
            <h3>Classic Industry</h3>
            <hr className="line-heading" />
            <h6>Strategy Development</h6>
            <p>Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current needs</p>
            <p>By offering the best professional services and quality products in the market. Don't hesitate and get in touch with us.</p>
            <div className="testimonial-container">
              <p className="testimonial-text">Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current requirements.</p>
              <p className="testimonial-author">General Manager</p>
            </div>
            <a className="btn-solid-reg" href="#your-link">DETAILS</a> <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
          </div>
        </div>
      </div>

      <div id="project-3" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="row">
          <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
          <div className="col-lg-8">
            <img className="img-fluid" src="images/project-3.jpg" alt="alternative" />
          </div>
          <div className="col-lg-4">
            <h3>BoomBap Audio</h3>
            <hr className="line-heading" />
            <h6>Strategy Development</h6>
            <p>Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current needs</p>
            <p>By offering the best professional services and quality products in the market. Don't hesitate and get in touch with us.</p>
            <div className="testimonial-container">
              <p className="testimonial-text">Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current requirements.</p>
              <p className="testimonial-author">General Manager</p>
            </div>
            <a className="btn-solid-reg" href="#your-link">DETAILS</a> <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
          </div>
        </div>
      </div>



      <div id="project-4" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="row">
          <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
          <div className="col-lg-8">
            <img className="img-fluid" src="images/project-4.jpg" alt="alternative" />
          </div>
          <div className="col-lg-4">
            <h3>Van Moose</h3>
            <hr className="line-heading" />
            <h6>Strategy Development</h6>
            <p>Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current needs</p>
            <p>By offering the best professional services and quality products in the market. Don't hesitate and get in touch with us.</p>
            <div className="testimonial-container">
              <p className="testimonial-text">Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current requirements.</p>
              <p className="testimonial-author">General Manager</p>
            </div>
            <a className="btn-solid-reg" href="#your-link">DETAILS</a> <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
          </div>
        </div>
      </div>

      <div id="project-5" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="row">
          <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
          <div className="col-lg-8">
            <img className="img-fluid" src="images/project-5.jpg" alt="alternative" />
          </div>
          <div className="col-lg-4">
            <h3>Joy Moments</h3>
            <hr className="line-heading" />
            <h6>Strategy Development</h6>
            <p>Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current needs</p>
            <p>By offering the best professional services and quality products in the market. Don't hesitate and get in touch with us.</p>
            <div className="testimonial-container">
              <p className="testimonial-text">Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current requirements.</p>
              <p className="testimonial-author">General Manager</p>
            </div>
            <a className="btn-solid-reg" href="#your-link">DETAILS</a> <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
          </div>
        </div>
      </div>


      <div id="project-6" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="row">
          <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
          <div className="col-lg-8">
            <img className="img-fluid" src="images/project-6.jpg" alt="alternative" />
          </div>
          <div className="col-lg-4">
            <h3>Spark Events</h3>
            <hr className="line-heading" />
            <h6>Strategy Development</h6>
            <p>Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current needs</p>
            <p>By offering the best professional services and quality products in the market. Don't hesitate and get in touch with us.</p>
            <div className="testimonial-container">
              <p className="testimonial-text">Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current requirements.</p>
              <p className="testimonial-author">General Manager</p>
            </div>
            <a className="btn-solid-reg" href="#your-link">DETAILS</a> <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
          </div>
        </div>
      </div>

      <div id="project-7" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="row">
          <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
          <div className="col-lg-8">
            <img className="img-fluid" src="images/project-7.jpg" alt="alternative" />
          </div>
          <div className="col-lg-4">
            <h3>Casual Wear</h3>
            <hr className="line-heading" />
            <h6>Strategy Development</h6>
            <p>Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current needs</p>
            <p>By offering the best professional services and quality products in the market. Don't hesitate and get in touch with us.</p>
            <div className="testimonial-container">
              <p className="testimonial-text">Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current requirements.</p>
              <p className="testimonial-author">General Manager</p>
            </div>
            <a className="btn-solid-reg" href="#your-link">DETAILS</a> <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
          </div>
        </div>
      </div>


      <div id="project-8" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="row">
          <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
          <div className="col-lg-8">
            <img className="img-fluid" src="images/project-8.jpg" alt="alternative" />
          </div>
          <div className="col-lg-4">
            <h3>Zazoo Apps</h3>
            <hr className="line-heading" />
            <h6>Strategy Development</h6>
            <p>Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current needs</p>
            <p>By offering the best professional services and quality products in the market. Don't hesitate and get in touch with us.</p>
            <div className="testimonial-container">
              <p className="testimonial-text">Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current requirements.</p>
              <p className="testimonial-author">General Manager</p>
            </div>
            <a className="btn-solid-reg" href="#your-link">DETAILS</a> <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
          </div>
        </div>
      </div>



      <div className="basic-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Our Team Of Consultants</h2>
              <p className="p-heading">We're only as strong and as knowledgeable as our team. So here are the men and women which help customers meet goals and grow companies</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">


              <div className="team-member">
                <div className="image-wrapper">
                  <img className="img-fluid" src="images/team-1.png" alt="alternative" />
                </div>
                <p className="p-large">John Whitelong</p>
                <p className="job-title">General Manager</p>
                <span className="social-icons">
                  <span className="fa-stack">
                    <a href="#your-link">
                      <span className="hexagon"></span>
                      <i className="fab fa-facebook-f fa-stack-1x"></i>
                    </a>
                  </span>
                  <span className="fa-stack">
                    <a href="#your-link">
                      <span className="hexagon"></span>
                      <i className="fab fa-twitter fa-stack-1x"></i>
                    </a>
                  </span>
                </span>
              </div>

              <div className="team-member">
                <div className="image-wrapper">
                  <img className="img-fluid" src="images/team-2.png" alt="alternative" />
                </div>
                <p className="p-large">Veronique Smith</p>
                <p className="job-title">Business Developer</p>
                <span className="social-icons">
                  <span className="fa-stack">
                    <a href="#your-link">
                      <span className="hexagon"></span>
                      <i className="fab fa-facebook-f fa-stack-1x"></i>
                    </a>
                  </span>
                  <span className="fa-stack">
                    <a href="#your-link">
                      <span className="hexagon"></span>
                      <i className="fab fa-twitter fa-stack-1x"></i>
                    </a>
                  </span>
                </span>
              </div>

              <div className="team-member">
                <div className="image-wrapper">
                  <img className="img-fluid" src="images/team-3.png" alt="alternative" />
                </div>
                <p className="p-large">Chris Zimerman</p>
                <p className="job-title">Online Marketer</p>
                <span className="social-icons">
                  <span className="fa-stack">
                    <a href="#your-link">
                      <span className="hexagon"></span>
                      <i className="fab fa-facebook-f fa-stack-1x"></i>
                    </a>
                  </span>
                  <span className="fa-stack">
                    <a href="#your-link">
                      <span className="hexagon"></span>
                      <i className="fab fa-twitter fa-stack-1x"></i>
                    </a>
                  </span>
                </span>
              </div>

              <div className="team-member">
                <div className="image-wrapper">
                  <img className="img-fluid" src="images/team-4.png" alt="alternative" />
                </div>
                <p className="p-large">Mary Villalonga</p>
                <p className="job-title">Community Manager</p>
                <span className="social-icons">
                  <span className="fa-stack">
                    <a href="#your-link">
                      <span className="hexagon"></span>
                      <i className="fab fa-facebook-f fa-stack-1x"></i>
                    </a>
                  </span>
                  <span className="fa-stack">
                    <a href="#your-link">
                      <span className="hexagon"></span>
                      <i className="fab fa-twitter fa-stack-1x"></i>
                    </a>
                  </span>
                </span>
              </div>


            </div>
          </div>
        </div>
      </div>



      <div id="about" className="counter">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xl-6">
              <div className="image-container">
                <img className="img-fluid" src="images/about.jpg" alt="alternative" />
              </div>
            </div>
            <div className="col-lg-7 col-xl-6">
              <div className="text-container">
                <div className="section-title">ABOUT</div>
                <h2>We're Passionate About Delivering Growth Services</h2>
                <p>Our goal is to provide the right business growth services at the appropriate time so companies can benefit from the created momentum and thrive for a long period of time</p>
                <ul className="list-unstyled li-space-lg">
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">Everything we recommend has direct positive impact</div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">You will become an important partner of our company</div>
                  </li>
                </ul>


                <div id="counter">
                  <div className="cell">
                    <div className="counter-value number-count" data-count="231">1</div>
                    <div className="counter-info">Happy<br />Users</div>
                  </div>
                  <div className="cell">
                    <div className="counter-value number-count" data-count="121">1</div>
                    <div className="counter-info">Issues<br />Solved</div>
                  </div>
                  <div className="cell">
                    <div className="counter-value number-count" data-count="159">1</div>
                    <div className="counter-info">Good<br />Reviews</div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>



      <div id="contact" className="form-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container">
                <div className="section-title">CONTACT</div>
                <h2>Get In Touch Using The Form</h2>
                <p>You can stop by our office for a cup of coffee and just use the contact form below for any questions and inquiries</p>
                <ul className="list-unstyled li-space-lg">
                  <li className="address"><i className="fas fa-map-marker-alt"></i>22nd Innovative Street, San Francisco, CA 94043, US</li>
                  <li><i className="fas fa-phone"></i><a href="tel:003024630820">+81 720 22 126</a></li>
                  <li><i className="fas fa-phone"></i><a href="tel:003024630820">+81 720 22 128</a></li>
                  <li><i className="fas fa-envelope"></i><a href="mailto:office@aria.com">office@aria.com</a></li>
                </ul>
                <h3>Follow Aria On Social Media</h3>

                <span className="fa-stack">
                  <a href="#your-link">
                    <span className="hexagon"></span>
                    <i className="fab fa-facebook-f fa-stack-1x"></i>
                  </a>
                </span>
                <span className="fa-stack">
                  <a href="#your-link">
                    <span className="hexagon"></span>
                    <i className="fab fa-twitter fa-stack-1x"></i>
                  </a>
                </span>
                <span className="fa-stack">
                  <a href="#your-link">
                    <span className="hexagon"></span>
                    <i className="fab fa-pinterest fa-stack-1x"></i>
                  </a>
                </span>
                <span className="fa-stack">
                  <a href="#your-link">
                    <span className="hexagon"></span>
                    <i className="fab fa-instagram fa-stack-1x"></i>
                  </a>
                </span>
                <span className="fa-stack">
                  <a href="#your-link">
                    <span className="hexagon"></span>
                    <i className="fab fa-linkedin-in fa-stack-1x"></i>
                  </a>
                </span>
                <span className="fa-stack">
                  <a href="#your-link">
                    <span className="hexagon"></span>
                    <i className="fab fa-behance fa-stack-1x"></i>
                  </a>
                </span>
              </div>
            </div>
            <div className="col-lg-6">


              <form id="contactForm" data-toggle="validator" data-focus="false">
                <div className="form-group">
                  <input type="text" className="form-control-input" id="cname" required />
                  <label className="label-control" htmlFor="cname">Name</label>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                  <input type="email" className="form-control-input" id="cemail" required />
                  <label className="label-control" htmlFor="cemail">Email</label>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                  <textarea className="form-control-textarea" id="cmessage" required />
                  <label className="label-control" htmlFor="cmessage">Your message</label>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group checkbox">
                  <input type="checkbox" id="cterms" value="Agreed-to-Terms" required />I agree with Aria's stated <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms-conditions.html">Terms Conditions</a>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                  <button type="submit" className="form-control-submit-button">SUBMIT MESSAGE</button>
                </div>
                <div className="form-message">
                  <div id="cmsgSubmit" className="h3 text-center hidden"></div>
                </div>
              </form>


            </div>
          </div>
        </div>
      </div>




      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="text-container about">
                <h4>Few Words About Aria</h4>
                <p className="white">We're passionate about delivering the best business growth services for companies just starting out as startups or industry players that have established their market position a long tima ago.</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="text-container">
                <h4>Links</h4>
                <ul className="list-unstyled li-space-lg white">
                  <li>
                    <a className="white" href="#your-link">startupguide.com</a>
                  </li>
                  <li>
                    <a className="white" href="terms-conditions.html">Terms & Conditions</a>
                  </li>
                  <li>
                    <a className="white" href="privacy-policy.html">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="text-container">
                <h4>Tools</h4>
                <ul className="list-unstyled li-space-lg">
                  <li>
                    <a className="white" href="#your-link">businessgrowth.com</a>
                  </li>
                  <li>
                    <a className="white" href="#your-link">influencers.com</a>
                  </li>
                  <li className="media">
                    <a className="white" href="#your-link">optimizer.net</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="text-container">
                <h4>Partners</h4>
                <ul className="list-unstyled li-space-lg">
                  <li>
                    <a className="white" href="#your-link">unicorns.com</a>
                  </li>
                  <li>
                    <a className="white" href="#your-link">staffmanager.com</a>
                  </li>
                  <li>
                    <a className="white" href="#your-link">association.gov</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="p-small">Copyright © 2020 <a href="https://inovatik.com">Template by Inovatik</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ClientLayout;
