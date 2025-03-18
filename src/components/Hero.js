import React from 'react'
import '../styles/Blake.css'
import Image from '../assets/images/header-pic-min.bc4b25f8.png'
import Image2 from '../assets/images/download.png'
import Image3 from '../assets/images/download (1).png'
import Image4 from '../assets/images/download (2).png'
import Image5 from '../assets/images/download (3).png'
import Image6 from '../assets/images/download (4).png'
import Image7 from '../assets/images/download (9).png'
import Image8 from '../assets/images/download (10).png'
import Image9 from '../assets/images/download (11).png'
import Image10 from '../assets/images/source-code.ecc52abc.png'
import Image11 from '../assets/images/fund-min.eb3bc0fb.png'
import Image12 from '../assets/images/precious.2c847493.png'
import Image13 from '../assets/images/bryan-team-background.c067d8be.png'
import Image14 from '../assets/images/ephy-dami.c7f4b16f.png'

function Hero() {
    return (
        <div>
            <section className="hero-section">
                <div className="up">
                    <div className="upper-hero-section">
                        <div className="left-hero-section">
                            <h1><span style={{ color: '#dca424' }}>Build</span> with Blake</h1>
                            <p>Enjoy custom software development by our experienced and software engineers. Frontend, backend,
                                database and server solutions for mobile apps, web applications and desktop.
                            </p>
                            <button>BUILD NOW</button>
                        </div>

                        <div className="right-hero-section">
                            <img src={Image} alt="" />
                        </div>
                    </div>
                </div>

                <div className="low-hero-section">
                    <div className="low-left">
                        <h1><span style={{ color: '#2f327d' }}>Build With</span> Harvoxx</h1>
                        <p>
                            We have all the necessary structure and resources to build and deploy quality and innovative
                            products to clients. As a brand we help you bring your ideas to reality by leveraging the power of
                            technology.
                        </p>
                        <button>BUILD WITH US</button>
                    </div>

                    <div className="low-right">
                        <div className="faq1">
                            <img src={Image2} alt="" />
                            <h3>Strong Team</h3>
                            <p>We’ve got a strong team of developers</p>
                        </div>
                        <div className="faq2">
                            <img src={Image3} alt="" />
                            <h3>Efficient Technologies</h3>
                            <p>We use the best and latest technologies to build for you</p>
                        </div>
                        <div className="faq3">
                            <img src={Image4} alt="" />
                            <h3>Timely Delivery</h3>
                            <p>We set and beat timelines for every stage of development</p>
                        </div>
                        <div className="faq4">
                            <img src={Image5} alt="" />
                            <h3>Effective Communication</h3>
                            <p>We communicate with every client consistently and clearly, throughout every stage of development</p>
                        </div>
                    </div>
                </div>

                <div className="lower-hero-section">
                    <div className="guaranteed">
                        <h1>Guaranteed <span style={{ color: '#dca424' }}>Happiness</span> in 4 steps</h1>
                        <p>We have a four-step development process: We Listen, We Build, We Deploy and You‘re Happy.</p>
                    </div>

                    <div className="steps">
                        <div className="step">
                            <img src={Image6} alt="" />
                            <div className="step1">
                                <h3>We Listen</h3>
                                <p>First, we pay attention to understand what you want to build.</p>
                            </div>
                        </div>
                        <div className="step">
                            <img src={Image7} alt="" />
                            <div className="step1">
                                <h3>We Build</h3>
                                <p>Then we set up a team of developers to build, bringing your dream to life.</p>
                            </div>
                        </div>
                        <div className="step">
                            <img src={Image8} alt="" />
                            <div className="step1">
                                <h3>We Deploy</h3>
                                <p>After building and testing, we will deploy an efficiently working product to you.</p>
                            </div>
                        </div>
                        <div className="step">
                            <img src={Image9} alt="" />
                            <div className="step1">
                                <h3>You're Happy</h3>
                                <p>Now, your product is live; You are HAPPY. That's why we are trusted.</p>
                            </div>
                        </div>
                    </div>

                    <div className="btn">
                        <button>BUILD WITH US</button>
                    </div>
                </div>

                 <div className="lowest-hero-section">
                    <div className="trusted">
                        <h1>Why we are trusted</h1>
                    </div>

                    <div className="source1">
                        <div className="left-source">
                            <h1>Source Code <span style={{ color: '#dca424' }}>Is All Yours</span></h1>
                            <p>We build it, but you own it. Yes, it’s all yours, once we are done developing and deploying your
                                product, we hand over the complete source to you. So, you have 100% ownership and control.</p>
                        </div>
                        <div className="right-source">
                            <img src={Image10} alt="" />
                        </div>
                    </div>

                    <div className="source2">
                        <div className="left-source">
                            <img src={Image11} alt="" />
                        </div>
                        <div className="right-source">
                            <h1>We Stick With You <span style={{ color: '#dca424' }}>All The Way</span></h1>
                            <p>If you decide to continue working with us for maintenance and updates, or take the project
                                internal, we will be more than happy to serve you. We will follow all the way, because we
                                believe that the success of your product is our success.</p>
                        </div>
                    </div>

                    <div className="source1">
                        <div className="left-source">
                            <h1>What Happens In Vegas, <span style={{ color: '#dca424' }}>Stays In Vegas</span></h1>
                            <p>We do not allow intruders or third parties; we keep everything in-house. Every member of the
                                Build-With-Harvoxx team and our product managers and everyone connected in between are all our
                                own verified and trained team member. They understand the rule and they play by the rule. That
                                is why, we deliver quality to our clients and on time too.</p>
                        </div>
                        <div className="right-source">
                            <img src={Image12} alt="" />
                        </div>
                    </div>

                   <div className="source2">
                        <div className="left-source">
                            <img src={Image13} alt="" />
                        </div>
                        <div className="right-source">
                            <h1>We Are Right <span style={{ color: '#dca424' }}>Down The Road</span></h1>
                            <p>To us, Face-to-Face problem solving, plays a key role in getting a successful project. We know
                                you trust us, so we want to be more than a name on your phone screen. We want you to know where
                                we are and to meet our team. By being your next-door neighbor, we know you can hold us
                                accountable. If you are not so close, we explore technological tools to help bring you so close
                                to us while we work on your project.</p>
                        </div>
                    </div>

                    <div className="source1">
                        <div className="left-source">
                            <h1>Transparency And <span style={{ color: '#dca424' }}>Commitment</span></h1>
                            <p>We have a reputation to protect. We have built a long-time collaboration and we want to earn your
                                trust and keep it. We earn and sustain your trust through our commitment to absolute
                                transparency. We stay as an open book about us, our processes, our work, and your project. We
                                will consistently provide you updates on the status of your project, budget, timelines etc.
                                Constant updates will be at your disposal.</p>
                        </div>
                        <div className="right-source">
                            <img src={Image14} alt="" />
                        </div>
                    </div>

                    <div className="btn">
                        <button>BUILD WITH US</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
