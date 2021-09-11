import React from 'react'
import './footer.css'
import Log from '../../images/log.png'
import Ban from '../../images/ban.jpg'


export default function Footer() {
    return (
        <div className="footer">
            <div className="item-footer">
                <img src={Log} />
            </div>
            <div className="item-footer">
                <h3>NEW TO JUMIA?</h3>
                <span>Subscribe to our communications to receive our best offers!</span>
                <div className="input-inf">
                    <div className="input">
                      <i class="fas fa-envelope"></i>
                      <input placeholder="Enter"/>
                    </div>
                    <div className="btns">
                      <button>MEN</button>
                      <button>WOMEN</button>
                    </div>
                    
                </div>
            </div>
            
              <div className="item-footer">
                  <img src={Ban} />
                  <h3>JUMIA IN YOUR POCKET!</h3>
                  <span>Download our free app</span>
              </div>
        </div>
    )
}
