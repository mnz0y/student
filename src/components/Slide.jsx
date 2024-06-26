import React,{useState}from 'react'
import { Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import About from './About';
import Works from './Works';
import data from '../workdata'

const Slide = () => {
  const [info, setInfo] = useState(data);
  const [active, setActive] = useState([true,false,false,false,false]);
  

  return (
    <Swiper
      direction={'vertical'}
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination]}
      className="mySwiper">

      {/* 문단1 */}
      <SwiperSlide id='#home' style={{ background: '#01B23A' }}>
        {
          ({ isActive }) => (
            <div className={isActive? 'title start' : 'title'}>
              <div className="first"><span>P</span><span>O</span><span>R</span><span>T</span><span>F</span><span>O</span><span>L</span><span>I</span><span>O</span></div>
              <div className="second"><span>W</span><span>E</span><span>B</span><span>&nbsp;</span><span>P</span><span>U</span><span>B</span><span>L</span><span>I</span><span>S</span><span>H</span><span>E</span><span>R</span><span>&nbsp;</span></div>
            </div>
          )
        }
      </SwiperSlide>
      {/* 문단2 */}
      <SwiperSlide id='about'>
      {
          ({ isActive }) => (
            <>
            <img src={process.env.PUBLIC_URL+"img/Group2.png"} alt="emojiIcon" className={isActive? 'greenImg1 green1' : 'greenImg1'} />
            <h2>Hello! I’m
              <span>C</span>
              <span>H</span>
              <span>O</span>
              <span>M</span>
              <span>I</span>
              <span>N</span>
              <span>J</span>
              <span>I</span><br />
              Who will be a Web Publisher with endless Possibilties
            </h2>
            <img src="img/Group3.png" alt="emojiIcon" className={isActive? 'greenImg2 green2' : 'greenImg2'} />
            </>
          )
        }
       
      </SwiperSlide>
      {/* 문단3 */}
      <SwiperSlide>
        <div className="textbox">
          <div className="leftside">
            <h2><i>@M_NZY</i></h2>
            <p>다양한 환경에 반응할 수 있도록 <i>UI </i> 와 <i>UX</i> 를 구현하고
              누구나 동등하게 웹사이트를 이용할 수 있도록 노력하는 웹 퍼블리셔가 되겠습니다. </p>
          </div>
          <About />
        </div>
      </SwiperSlide>
      {/* 문단4 */}
      <SwiperSlide id='works'>
        {
          info.map((info, i)=>
          <Works info={info} key={i} active={active} i={i} />
        )
        }
         <div className="btnGroup">
          <div className='btnTab' onClick={()=>{
             setActive([true,false,false,false,false])
          }}>DEUS</div>
          <div className='btnTab' onClick={()=>{
             setActive([false,true,false,false,false])
          }}>KYOBO</div>
          <div className='btnTab' onClick={()=>{
           setActive([false,false,true,false,false])
          }}>PIZZA</div>
          <div className='btnTab' onClick={()=>{
            setActive([false,false,false,true,false])
          }}>TOUR</div>
          <div className='btnTab' onClick={()=>{
            setActive([false,false,false,false,true])
          }}>WINE</div>
        </div>
        <div className="click"><img src={process.env.PUBLIC_URL+"img/click.png"} alt="clickme" /></div>
      </SwiperSlide>

      {/* 문단5 */}
      <SwiperSlide id='contact' style={{ background: '#01B23A' }}>
      {
          ({ isActive }) => (
            <>
            <div className="animated-title">
          <div className={isActive? 'text-top show1' : 'text-top'}>
            <div>
              <span>Thank You For Watching</span>
              <span>CONTACT</span>
            </div>
          </div>
          <div className={isActive? 'text-bottom show2' : 'text-bottom'}>
            <div>Email : minji6035@naver.com</div>
          </div>
        </div>
          <div className="copyright">
          <small>본 사이트는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.</small><br />
          <b>©2024 mnzy.  All rights reserved.</b></div>
            </>
          )
        }
      </SwiperSlide>
    </Swiper>
  )
}

export default Slide