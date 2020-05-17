import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import subham from '../images/subham.jpg';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { TimelineLite, Power2 } from 'gsap';

const intro = "{ name: 'Subham Agarwal', interest: 'JavaScript' }";
export function Home() {
  let container = useRef(null);
  let image = useRef(null);
  let para = useRef(null);
  let btn = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".image-container::after");
  console.log(imageReveal);

  let tl = new TimelineLite();

  useEffect(() => {
    tl.to(container, 0, { css: { visibility: 'visible' } })
      .to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut })
      .to(para, 0.9, { opacity: 1, ease: Power2.easeInOut }).to(btn, 0.4, { opacity: 1, ease: Power2.easeInOut })
  })
  return (
    <div className="App">
      <header ref={el => container = el} className="App-header">
        <div className="image-container">
          <img ref={el => image = el} src={subham} alt="self" className="App-logo" />
        </div>

        <p ref={el => para = el}>
          <code>const intro = {intro}</code>
        </p>
        {/* <div className="my-nav">
          <Link className="App-link" to="/work">Work</Link>
          <Link className="App-link" to="/blogs">Blogs</Link>
        </div> */}
        <div ref={el => btn = el} className="button-container">
          <Link to="/work"><button className="read-more">WORK</button></Link>
          <Link to="/blogs"><button className="read-more">BLOGS</button></Link>
        </div>

      </header>
    </div>
  )
}