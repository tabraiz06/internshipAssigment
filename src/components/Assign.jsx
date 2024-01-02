import React from 'react'
import data from '../data.json'
import './Assign.css'
import { MdOndemandVideo } from "react-icons/md";
import { PiChatsFill } from "react-icons/pi";
import { FaRupeeSign } from "react-icons/fa";
import About from './About';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Assign = () => {
    return (
        <div>
            <div className="bgholder">
                <div className='textholder'>
                    <h3>{data.instructor.name}</h3>
                    <h2>{data.course.title}</h2>
                </div>

            </div>
            <div className='aboutSection'>
                <div className="about mainabout">About </div>
                <div className="about instructor">Instructor</div>
                <div className="about reviews"> Reviews</div>
                <div className="fee">
                    <h2>Course Fee</h2>
                    <h1><FaRupeeSign /> {data.course.fee.amount}</h1>
                    <h3>What's included:</h3>
                    <p><MdOndemandVideo /><span>5 on-demand videos</span>  </p>
                    <p><MdOndemandVideo /><span>  2 livestream sessions</span> </p>
                    <p><PiChatsFill /> <span>live Q&A sessions with Nityanand Charan Das </span> </p>
                    <p><PiChatsFill /> <span>An active whatsapp community </span> </p>
                    <button>Register Today</button>


                </div>
            </div>
            <div className="cotaint">
                <About />
            </div>

            <div className="aboutinstructor">
                <h2>About the instructor</h2>
                <div className='aboutsection'>
                    <div className='imgholder'><img src="data:image/jpeg;base64,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" alt="" /></div>
                    <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, voluptates nesciunt. Aspernatur animi consequuntur, voluptatibus facere officia dignissimos fugit dolorem recusandae facilis labore voluptatum quibusdam modi architecto. Odit facere porro quae ducimus.</p></div>
                    <div><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem fuga ipsam veritatis dolorem molestias doloremque vel, alias praesentium, id aliquam temporibus nostrum obcaecati aspernatur aliquid architecto, quos tenetur corrupti perspiciatis!</p></div>
                </div>
                <div className="socials">
                    <span><FaFacebookSquare />Facebook</span>
                    <span><FaSquareXTwitter /> Twitter </span>
                    <span><FaYoutube /> Youtube </span>
                    <span><FaInstagram /> Instagram </span>

                </div>
                <div className="testimonials">
                    <h2>{"<"}</h2>
                    <div className="texts">
                        <h1>{data.testimonial.text}</h1>
                        <div className="testimonialHolder">
                            <img src="https://sgrkfcdn.s3.ap-south-1.amazonaws.com/sgrkf/speaker/sangeeta-varma.jpg" alt="" />
                            <div><p>{data.testimonial.reviewer_name}</p>
                                <p>{data.testimonial.reviewer_designation}</p> </div>
                        </div>
                    </div>
                    <h2>{">"}</h2>
                </div>
            </div>

        </div>
    )
}

export default Assign
