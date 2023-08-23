import React from 'react'
import '../styles/home.css'; // Adjust the path as needed

import img1 from '../assets/construction.jpg'
import img2 from '../assets/img2.jpeg'
import img3 from '../assets/img3.jpeg'
import img4 from '../assets/img4.jpeg'
import img5 from '../assets/img5.jpeg'
import img6 from '../assets/img6.jpeg'
import one from '../assets/one.jpeg'
import two from '../assets/two.jpeg'
import ship from '../assets/ship.jpg'

export const Home = () => {
  return (
    <>
    <div id="home">
        <section>
            <div>
                <h1 >ABCD</h1>
                <h1 className='h1'>COMPANY</h1>
            </div>
            <div>
                <button className='btn1'>&larr;</button>
                <button className='btn2'>&rarr;</button>
            </div>
        </section>
        <section className='construction-img'>
        <img src={img1} alt="rghnsrgh" />
        <button className='img-btn'>read more &nbsp;  &rarr; </button>
        </section>
    </div>


    <div className="image-layout">
    <div className="image-containers">
        <section className="left-images">
        <img className="img2" src={img2} alt="Image 1" />
        <img className="img3" src={img4} alt="Image 3" />
        </section>
        <section className="right-image">
        <img className="img4" src={img3} alt="Image 2" />
        </section>
    </div>

      <div className="text-container">
        <h2>About</h2>
        <p>Write your message.  .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <h4>read more</h4>
        <button className='read'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &rarr;</button>
      </div>
      
    </div>


    <div>
        <h1 className='mission'>Mission Statement</h1>
        <div className='info'>
            <section className='one-left'>
            <img className='one' src={one} alt="" />
            <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum fugit modi nesciunt quasi culpa, commodi soluta dolore Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. voluptatum dicta. amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
            </section>
            <section className='two-right'>
            <img className='two' src={two} alt="" />
            <p>Lorem ipsum dolor Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates earum placeat mollitia quisquam, sunt deleniti provident soluta cum officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, iusto? sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat,.</p>
            </section>
        </div>
    </div>

    <div className='our-project'>
        <h1>Our Projects</h1>
        <section className='project'>
            <img className='img5' src={img5} alt="" />
            <div className="image-text">
                <h1>Project <br /> Genesis
                <button>view more &rarr; </button>
                </h1>
            </div>
            {/* <button className='img-tn'>read more &nbsp;  &rarr; </button> */}
            <img className='img6' src={img6} alt="" />
        </section>
    </div>

    </>
    
  )
}
