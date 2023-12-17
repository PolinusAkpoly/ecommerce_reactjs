/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 11/12/2023 00:49:20
*/
import React, { FC, useEffect,Fragment, useState } from 'react';
// import Loading from '../Loading/Loading';
import './Slider.css';
import { getDatasByPage } from '../../api/entity';
import { RequestResponse } from '../../models/requestResponse';
import { Slide } from '../../models/Slider';


interface SliderProps {
 
}


const Slider : FC<SliderProps> = () =>{


    const [sliders, setSliders] = useState<Slide[]>([])
    // const [loading, setLoading] = useState(true);
    // const [value, setValue] = useState('');


    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {
        const data: RequestResponse = await getDatasByPage("slide", 1, 5)

        if (data.isSuccess) {
          const results: Slide[] = (data.results as Slide[])
          setSliders(results)
          
          
        }
        
        // setLoading(false)
      }
      runLocalData()
    },[])

  return (
    <Fragment>
    
    <div className="banner_section slide_medium shop_banner_slider staggered-animation-wrap">
    <div id="carouselExampleControls" data-bs-ride="carousel" className="carousel slide carousel-fade light_arrow">
      <div className="carousel-inner">
        {
           sliders.length ?
          sliders.map((slider: Slide, index: number)=>{
            return  <div className={index === 0 ?  "carousel-item active background_bg" : "carousel-item background_bg"}
             key={index} data-img-src={slider.imageUrl} style={{backgroundImage: `url(${slider.imageUrl})` }}>
            <div className="banner_slide_content">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 col-9">
                    <div className="banner_content overflow-hidden">
                      <h5  data-animation="slideInLeft" data-animation-delay="0.5s" className="mb-3 staggered-animation font-weight-light animated slideInLeft" style={{animationDelay: '0.5s', opacity: '50%' }}> {slider.description}</h5>
                      <h2  data-animation="slideInLeft" data-animation-delay="1s" className="staggered-animation animated slideInLeft" style={{ animationDelay: '0.5s', opacity:'' }}>{slider.title}</h2><a data-animation="slideInLeft" data-animation-delay="1.5s" className="btn btn-fill-out rounded-0 staggered-animation text-uppercase animated slideInLeft" href={slider.button_link} target='_blank' style={{ animationDelay: '1.5s', opacity: ''}}>{slider.button_text}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          })
          :
          null
        }

      </div><a href="#carouselExampleControls" role="button" data-bs-slide="prev" className="carousel-control-prev"><i className="ion-chevron-left" /></a><a href="#carouselExampleControls" role="button" data-bs-slide="next" className="carousel-control-next"><i className="ion-chevron-right" /></a>
    </div>
  </div>
    
    </Fragment>
  );
}

export default Slider;