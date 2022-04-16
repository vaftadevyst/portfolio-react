import React from 'react'
import './Testimonial.css'
import 'swiper/css'
import 'swiper/css/pagination'
import python from '../../img/python.png'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination} from 'swiper'

const Testimonial = () => {
    const clients=[
        {
            img: python,
            heading: "Sales Data Analysis",
            url: "https://medium.com/@abizaregi21/sales-data-analysis-with-python-part-ii-f09ddf134f9d",
            review:
            "visualize sales data and predict future sales data based on past data",
        },
        {
            img: python,
            heading: "Churn Customer Prediction",
            url: "https://medium.com/@abizaregi21/predicting-exited-churn-for-bank-customers-7d02a72ce510",
            review:
            "predict potential customer churn based on historical data from customers",
        },
        {
            img: python,
            heading: "Bank Customer Segmentation",
            url: "https://medium.com/@abizaregi21/bank-customer-segmentation-with-kmeans-d9cf95e297c9",
            review:
            "visualize bank customer data and segment bank customers based on age and balance",
        },
        {
            img: python,
            heading: "Analysis of Return Rate",
            url: "https://medium.com/@abizaregi21/analysis-of-return-rate-stock-208e40b32979",
            review:
            "visualize the return rate of a stock in the stock market and compare it with other stocks",
        },

    ]
  return (
    <div className="t-wrapper" id='Testimonials'>
        <div className="t-heading">
            <span>My Blogs</span>
            <span> About Data Science</span>
            <div className="blur t-blur1" style={{background: "#ABF1FF94"}}></div>
            <div className="blur t-blur2" style={{background: "#edd0ff"}}></div>
        </div>

        {/* slider */}
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable: true}}
        >
            {clients.map((client, index)=>{
                return (
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={client.img} alt="" />
                            <div className="t-content">
                                <span>{client.heading}</span>
                                <span>{client.review}</span>
                                <a target='_blank' href={client.url}><button className='button b-button'>Read More</button></a>
                            </div>
                            
                        </div>
                    </SwiperSlide>
                );
                })}
        </Swiper>
    </div>
  )
}

export default Testimonial