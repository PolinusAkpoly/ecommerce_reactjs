/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 10/12/2023 13:26:28
*/
import React, { FC, useEffect,Fragment } from 'react';
// import Loading from '../Loading/Loading';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Meta } from '../../models/meta';
import { getMeats } from '../../helpers/utils';


interface FooterProps {
  metas: Meta[]
}


const Footer : FC<FooterProps> = ({metas}) =>{


    // const [state, setState] = useState<any>(null)
    // const [loading, setLoading] = useState(true);
    // const [value, setValue] = useState('');

    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

        
      }
      runLocalData()
    },[])

  return (
    <Fragment>
    
      <div className="Footer">
      <footer className="footer_dark">
  <div className="footer_top">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="widget">
            <div className="footer_logo"><a href="#">
                <h2>{getMeats(metas, "site_name")}</h2>
              </a></div>
            <p>{getMeats(metas, "site_description")}</p>
          </div>
          <div className="widget">
            <ul className="social_icons social_white">
            {
            getMeats(metas, "facebook_link") ?

              <li>
                <a target="_blank" href={getMeats(metas, "facebook_link")}><i className="ion-social-facebook" /></a>
              </li>
              :
              null
            }
            {
            getMeats(metas, "youtube_link") ?

            <li>
            <a target="_blank" href={getMeats(metas, "youtube_link") }><i className="ion-social-youtube-outline" /></a>
           </li>
              :
              null
            }
            {
            getMeats(metas, "instagram_link") ?

            <li>
                <a target="_blank" href={getMeats(metas, "instagram_link") }><i className="ion-social-instagram-outline" /></a>
            </li>
              :
              null
            }
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6">
          <div className="widget">
            <h6 className="widget_title">Useful Links</h6>
            <ul className="widget_links">
              <li><a ng-reflect-router-link="/page,a-propos-de-nous-shop" href="/page/a-propos-de-nous-shop">A Propos de nous</a></li>
              <li><a ng-reflect-router-link="/page,nos-services-jstore" href="/page/nos-services-jstore">Nos services</a></li>
              <li><a ng-reflect-router-link="/page,contactez-nous-category" href="/page/contactez-nous-category">Contactez-Nous</a></li>
              <li><a ng-reflect-router-link="/page,nos-partenaires-mudey" href="/page/nos-partenaires-mudey">Nos partenaires</a></li>
              <li><a ng-reflect-router-link="/page,mentions-lgales-espero" href="/page/mentions-lgales-espero">Mentions légales</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6">
          <div className="widget">
            <h6 className="widget_title">Category</h6>
            <ul className="widget_links">
              <li><a href="#">Men</a></li>
              <li><a href="#">Woman</a></li>
              <li><a href="#">Kids</a></li>
              <li><a href="#">Best Saller</a>
              </li>
              <li><a href="#">New Arrivals</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="widget">
            <h6 className="widget_title">My Account</h6>
            <ul className="widget_links">
              <li><Link ng-reflect-router-link="account" to="/account">My Account</Link></li>
              <li><Link  ng-reflect-router-link="terms" to="/terms">Terms</Link></li>
              <li><Link  ng-reflect-router-link="signin" to="/signin">SignIn</Link></li>
              <li><Link  ng-reflect-router-link="signup" to="/signup">Signup</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="widget">
            <h6 className="widget_title">Contact Info</h6>
            <ul className="contact_info contact_info_light">
              <li><i className="ti-location-pin" />
                <p>{getMeats(metas, "site_adress") }</p>
              </li>
              <li><i className="ti-email" /><a href={"mailto:"+ getMeats(metas, "site_email") }>{getMeats(metas, "site_email") }</a>
              </li>
              <li><i className="ti-mobile" />
                <p>{getMeats(metas, "site_phone") }</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="bottom_footer border-top-tran">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <p className="mb-md-0 text-center text-md-start"> {getMeats(metas, "site_copywrite") } </p>
        </div>
        <div className="col-md-6">
          <ul className="footer_payment text-center text-lg-end d-flex gap-2 justify-content-end">
            <li><a href="#"><img src="assets/images/visa.png" alt="visa" /></a></li>
            <li><a href="#"><img src="assets/images/discover.png" alt="discover" /></a>
            </li>
            <li><a href="#"><img src="assets/images/master_card.png" alt="master_card" /></a></li>
            <li><a href="#"><img src="assets/images/paypal.png" alt="paypal" /></a></li>
            <li><a href="#"><img src="assets/images/amarican_express.png" alt="amarican_express" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>

      </div>
    
    </Fragment>
  );
}

export default Footer;