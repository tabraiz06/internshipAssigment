import React from 'react'
import data from '../data.json'

const About = () => {
    return (
        <div className='containt'>
            <h3>About the course</h3>
            <p> {data.course.about.html_content}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat animi veritatis qui incidunt, cupiditate reprehenderit quod corporis similique aspernatur, nesciunt eum accusantium, cum facilis culpa! Molestiae quia adipisci incidunt nisi.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias perspiciatis ullam esse nulla possimus iure molestias, delectus ab obcaecati accusantium non unde quia ad animi adipisci blanditiis iste impedit rerum quam aliquid iusto beatae nam. Perferendis eaque quidem error id consectetur adipisci ipsum optio voluptates tempora, dolores fuga cumque nulla.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, mollitia maxime? Consequuntur porro, ut itaque a dolorem nemo reprehenderit sed labore, veritatis id laboriosam necessitatibus ad provident repellat praesentium voluptatem quos distinctio eligendi temporibus?</p>
            <div className="expect">
                <h2>what to expect from the course</h2>
                <ul>
                    <li >
                        Learn to mange your relationships
                    </li>
                    <li>
                        Better communication
                    </li>
                    <li>
                        Time management
                    </li>
                    <li>
                        Forgiveness
                    </li>
                </ul>
            </div>
            <div className="keytopics">
                <h2>Key topics covered</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere cupiditate fugiat ab quaerat at esse sit itaque asperiores velit mollitia laboriosam deleniti quae reiciendis consequuntur magnam dolor libero doloremque commodi dolore cumque corporis molestiae, nisi tenetur maxime! Deleniti ex nisi consectetur voluptate aut quod similique consequuntur deserunt, veniam dolorem placeat voluptatem libero!</p>
                <ul>
                    <li>
                    <span className='keytopic'>10 written and audio sessions</span> guiding you in decoding the language of numbers so that you can easily receive their insights and messages.
                    </li>
                    <li>
                    <span className='keytopic'>Intuitive exercises and homework</span>  walk you through the energies and values of numbers and number sequences so you can become your own authority.
                    </li>
                    <li>
                    <span className='keytopic'>A Handy reference</span>  to numerical meanings, so you can uncover your soul's gifts, challenges, lessons, and purpose – and receive spiritual guidance along your path.
                    </li>
                    <li>
                    <span className='keytopic'>Expert techniques</span> for manifestation offer simple ways to use numbers to co-create with the universe.
                    </li>
                </ul>
            </div>
           
        </div>
    )
}

export default About
