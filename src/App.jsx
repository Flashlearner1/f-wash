import pic1 from './pic1.jpg.png.png';
import pic2 from './pic2.jpg.png.png';
import pic3 from './pic3.jpg.png.png';
import pic4 from './pic4.jpg.png.png';
import pic5 from './pic5.jpg.png.png';
import pic6 from './pic6.jpg.png.png';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="Onboarding">
        <div className="hero-section">
          <header className='navbar'>
            <div className="head">
                <div className="logo100">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/Flow-logo-square1.png?20170412105647" alt="" width={40}/>
                  <span>Flow Laundry</span>
                </div>
                
              

              <div className="navigation">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Our location</a></li>
                  <li><a href="#">Contact us</a></li>
                </ul>
                <div className="Download">
                  <button>Download Now</button>
                  </div>
                
              </div>
            </div>

            
          </header>

          <div className="main-container">
            <div className="what">
              <h1>A Better You Start <br />With Clean Clothes</h1>
              <p>Laundry & dry cleaning picked up and delivered to your door, hassle free and <br /> Affordable dry cleaning and delivered to your home and office</p>
              <button className='Explore'>Explore more</button>
            </div>
            
            <div className="yes">
              <div className="first">
                <img src={pic2} className="App-logo2" alt="logo" width={300}/>
                <img src={pic1} className="App-logo1" alt="logo" width={140}/>
              </div>

              <div className="second">
                <img src={pic4} className="App-logo4" alt="logo" width={188}/>
                <img src={pic5} className="App-logo5" alt="logo" width={260}/>
              </div>
              <img src={pic3} className="App-logo3" alt="logo" width={350} />
            </div>


          </div>
        </div>

        <div className="main-container10">
          <div className="left-main-container10">
            <h1>ABOUT FLOW <br />LAUNDRY</h1>
            <span>
            <img src={pic5} className="App-logo5" alt="logo" width={400} height={350}/>
            </span>
          </div>

          <div className="right-main-container10">
            <p>Flow Laundry is one of the best Laundry Platform in Germany. <br />
              It has partnered up with the top laundry experts of the <br /> 
              country and provides you with a FREE Pick-up and Delivery. <br />
              With our website, mobile app and Hotline number, you can <br />schedule and order and we will
              take it from there.
            </p>
          </div>
        </div>
        <div className='main-container2'>
          <div className="location">
            <div className="head2">
              <h1>Our Location</h1>
              <p>Good Laundry room makes life easier</p>
            </div>


            <div className="frame">
              <div className="left-frame">
                <h2>Acme Place, 8, Adedoyin avenue, <br /> Poka, Epe, Lagos State.</h2>
                <h3>08102204446</h3>
                <h3>honbanji@gmail.com</h3>
              </div>
              <div className="right-frame">
                <img src={pic6} className='local-img' alt="local-img" />
              </div>
            </div>
          </div>
        </div>


        <div className='main-container4'>
            <div className="rectangle6">
              <h1>Contact Us</h1>
              <form className='forms'>
                <input type="text" placeholder='Enter Full name' className='full-name' />
                <input type="email" placeholder='Enter Email Address'  className='email'/>
                <input type="text"  placeholder='Your Message' className='message'/>
              </form>

              <div className="submit">
                <button type="submit">Submit</button>
              </div>
            </div>
        </div>
        

        <div class="footer-body">
          <div class="Rack">
            <div class="Company">
              <div className="logo100">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/Flow-logo-square1.png?20170412105647" alt="" width={40}/>
                <span>Flow Laundry</span>
              </div>
              <span>
                <p>sayhello@flowlaundry.com</p>
              </span>
            </div>
              
            <div class="Services">
              <h4>Navigation</h4>
                <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Features</li>
                  <li>FAQ</li>
                </ul>
            </div>

            <div class="Services">
              <h4>Support Us</h4>
                <ul>
                  <li>Contact Us</li>
                  <li>Support Center</li>
                  <li>Security</li>
                  <li>Privacy and Policy</li>
                </ul>
            </div>

            <div class="Services">
              <h4>Partner</h4>
                <ul>
                  <li>Our Partners</li>
                  <li>Community</li>
                  <li>Customers</li>
                  <li>Investors</li>
                </ul>
            </div>
          </div>



            <div class="copyright">
              <p>2023 copyright. All Right Reserved</p>

            <div class="socials">
              <div className="icon">
                <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-youtube" aria-hidden="true"></i></a>
              </div>

            </div>
            </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
