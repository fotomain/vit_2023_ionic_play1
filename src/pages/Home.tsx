
import MessageListItem from '../components/MessageListItem';

// import MyVideo from "../../src/pages/video1.mp4"


import React, {useEffect, useRef, useState} from 'react';
import { Message, getMessages } from '../data/messages';
import {
  IonContent, IonGrid,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent, IonRow,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';
import Swiper1 from "../components/Swiper1";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";


import "swiper/swiper-bundle.css";

import QRCode from "react-qr-code";

import Radio from '@mui/material/Radio';
import {Divider, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Switch} from "@mui/material";


const Home: React.FC = () => {

  const blur=0
  interface Text_xy_type {
    top?:string,
    left?:string,
    right?:string,
    marginTop?:string,
    fontSize?:string,
    paddingLeft?:string,
    marginLeft?:string,
    marginBottom?:string,
  }


  const text_xy_design1 : Text_xy_type[] =[
      // 000 UP contatcts
      {marginTop: '50%', left: '35%'   , fontSize: '25px', marginLeft:'30pox'},
      // {margin_top: '50%', left: '35%'   , font_size: '25px'},
      // 111 MAIN
      {marginTop: '50%', left: '5%'    , fontSize: '25px'},
      // 222
      {marginTop: '-80%', left: '75%'   , fontSize: '15px'},
  ]


  const text_xy_design2 : Text_xy_type[] =[
      // 000 UP
      {top: '45%', right: '20px' , fontSize: '25px'},
      // 111 MAIN
      {marginTop: '45%', left: '5%'    , fontSize: '30px'},
      // 222
      {marginTop: '45%', left: '65%'   , fontSize: '25px'},
  ]

  // const text_xy_design30 : Text_xy_type[] =[
  //     // 000 UP
  //     {marginTop: '80%', left: '5%'    , fontSize: '15px'},
  //     // 111 MAIN
  //     {marginTop: '50%', left: '5%'   , fontSize: '25px'},
  //     // 222
  //     {marginTop: '80%', left: '75%'   , fontSize: '15px'},
  // ]
  //
  const text_xy_design3 : Text_xy_type[] =[
      // 000 UP
      {marginTop: '80%', left: '5%'    , fontSize: '15px'},
      // 111 MAIN
      {marginBottom: '-200px', left: '5%'   , fontSize: '25px'},
      // 222
      {marginTop: '80%', left: '75%'   , fontSize: '15px'},
  ]


  //=== cccccccccccc
  const [design_number, set_design_number] = useState<number>(3);
  const [text_xy, set_text_xy] = useState(text_xy_design1);

  const [messages, setMessages] = useState<Message[]>([]);

  const [state, setState] = React.useState({
    slides_mirrored: true,
    slides_show_numbers: true,
    slides_show_speed_not_zero: false,
    min_speed_to_show_slides:0.5,
  });


  function handleChange(event:any) {

    console.log("=== handleChange",event.target.value)
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });


  }


  useIonViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 5000);
  };


  useEffect(() => {

    if(design_number==1) {
      set_text_xy(text_xy_design1)
    }
    if(design_number==2) {
      set_text_xy(text_xy_design2)
    }
    if(design_number==3) {
      set_text_xy(text_xy_design3)
    }

    return () => {}

  }, [design_number]);

  useEffect(() => {
    const interval = setInterval(() => {
      if(navigationNextRef) {
        navigationNextRef?.current?.swiper?.slideNext();
      }

    },2*1000);
    return () => clearInterval(interval);
  }, []);


  const data = [
    {
      title1:'blakus 500 m',
      title2:'RIMI vienmer',
      title3:'atlaide 30%',
      video: "https://joy1.videvo.net/videvo_files/video/free/video0467/large_watermarked/_import_615435000f6eb2.81789495_preview.mp4",

    },
    {
      title1:'www.win.lv',
      title2:'ZIEMAS RIEPAS',
      title3:'ŠODIEN -25%',
      video: "https://media.istockphoto.com/id/1370751696/video/futuristic-smart-traffic.mp4?s=mp4-640x640-is&k=20&c=gvjqduw5xHFfvxMjFyLkNvCjTwn10CqCk4qI0s6lX_4="
      // video: "https://joy1.videvo.net/videvo_files/video/free/2013-09/large_watermarked/DiscoLights2Videvo_preview.mp4"

    },
    {
      title1:'tel. 2999888',
      title2:'SPA / PIRTS',
      title3:'-30% no 18:00 ',
      video: "https://joy.videvo.net/videvo_files/video/premium/video0249/large_watermarked/4000-2_05438_preview.mp4"

    },
  ]

  const navigationNextRef = useRef() as any
  const style_mirrored = (!state.slides_mirrored)?'':{
    WebkitTransform:'matrix(-1, 0, 0, 1, 0, 0)'
  }

  return (
      <>
      <div style={{...style_mirrored}} >
        <Swiper
            ref={navigationNextRef}
            style={{marginTop:'1px', height:'300px'}}

            // onInit={(core: SwiperCore) => {
            //   navigationNextRef.current = core.el
            // }}

            spaceBetween={30}
            // centeredSlides={true}
            autoplay={{
              delay: 1000,
              // disableOnInteraction: false,
            }}

            loop

            // pagination={{
            //   clickable: true,
            // }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            // className="mySwiper"
        >
          {data.map((card,index)=>{
            return(
                <SwiperSlide key={`slide${index} `}>
                  {/*<video width="250" height="200" controls >*/}
                  {/*  <source src={MyVideo} type="video/mp4"/>*/}
                  {/*</video>*/}



                  <div
                      key={`div_${index}`}
                      style={{
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'center',
                        alignItems:'center',

                        height:'100%',
                        // height:'140px',
                        // width:'140px',
                        width:'100%',
                        backgroundColor:'darkblue'

                      }}
                  >
                    <video
                        className='flex_video_stream'
                        style={{ zIndex:1,
                          height:'100%',
                          // height:'200px',
                          width:'100%',
                          // width:'200px',

                          objectFit: 'cover',
                          position: 'absolute',
                          top: '0',
                          left: '0',

                          filter: `blur(${blur}px)`, WebkitFilter: `blur(${blur}px)` }}
                        autoPlay
                        loop
                        muted
                        // ref={video}
                        id="video-id"
                        // {/*works!!!*/}
                        src={card.video}

                    >
                      {/* TODO make it accept multiple media types */}
                      <source src={card.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/*=========== TEXTS*/}
                    {/*<div style={{WebkitTransform:'matrix(-1, 0, 0, 1, 0, 0)'}}>*/}
                    <div
                        style={{...text_xy[0],...{
                            // height:'40px', width:'100px',
                            backgroundColor:'yellow',
                            // 000

                            // alignSelf:'start',
                            // top:'60px',
                            // marginTop:text_xy[0].margin_top,
                            // top:text_xy[0].top,
                            // // right:'20%',
                            // right:text_xy[0].right,
                            //
                            // fontSize: text_xy[0].font_size,
                                //'25px',

                            marginLeft:'85px',
                            padding:'5px',
                            color:'red',

                            fontWeight:'bold',


                            zIndex:2,
                            position:'absolute',

                            display:'flex',
                            flexDirection:'row',
                            justifyContent:'center',
                            alignItems:'center',
                        }}}

                    >
                      {card.title1}
                    </div>

                          <div
                              style={{...text_xy[1],...{
                                //  height:'40px', width:'100px',
                                backgroundColor:'yellow',
                            // 111

                              // marginTop:text_xy[1].margin_top,
                              // left:text_xy[1].left,
                              // fontSize: text_xy[1].font_size,
                              //

                              padding:'10px',
                                color:'red',
                                // fontSize:'30px',
                                fontWeight:'bold',

                              position:'absolute',
                              zIndex:2,

                                display:'flex',
                                flexDirection:'row',
                                justifyContent:'center',
                                alignItems:'center',
                            }}}
                          >
                            {(design_number==3)?(card.title2+' '+card.title1):card.title2}
                          </div>

                                  <div
                                      // 222
                                      style={{...text_xy[2],...{
                                          // height:'40px', width:'100px',
                                          backgroundColor:'yellow',

                                        // top:text_xy[2].margin_top,
                                        // left:text_xy[2].left,
                                        // fontSize: text_xy[2].font_size,

                                          padding:'5px',
                                          color:'red',
                                          // fontSize:'25px',

                                          position:'absolute',
                                          zIndex:2,

                                          display:'flex',
                                          flexDirection:'row',
                                          justifyContent:'center',
                                          alignItems:'center',

                                      }}}
                                  >
                                    {card.title3}
                                  </div>
                    {/*</div>*/}
                    {/*TEXTS*/}

                    <QRCode size={40} value="http://facebook.github.io/react/"/>

                  </div> {/*  TEXTS*/}

                </SwiperSlide>
            )
          })}
          {/*<SwiperSlide>Slide 1</SwiperSlide>*/}
          {/*<SwiperSlide>Slide 2</SwiperSlide>*/}
          {/*<SwiperSlide>Slide 3</SwiperSlide>*/}
          {/*<SwiperSlide>Slide 4</SwiperSlide>*/}
          {/*<SwiperSlide>Slide 5</SwiperSlide>*/}
          {/*<SwiperSlide>Slide 6</SwiperSlide>*/}
          {/*<SwiperSlide>Slide 7</SwiperSlide>*/}
          {/*<SwiperSlide>Slide 8</SwiperSlide>*/}
          {/*<SwiperSlide>Slide 9</SwiperSlide>*/}
        </Swiper>

        <div>
          <button onClick={()=>{
            if(navigationNextRef) {
              navigationNextRef?.current?.swiper?.slideNext();
            }
          }}>PRESS</button>
        </div>

      </div>

  <div>
    <Divider style={{marginTop:'10px', marginBottom:'10px'}}/>
    <FormControl component="fieldset" variant="standard">
      <FormLabel component="legend">Slides Show modes</FormLabel>
      <FormGroup>
        <FormControlLabel
            control={
              <Switch checked={state.slides_mirrored} onChange={handleChange} name="slides_mirrored" />
            }
            label="Show mirrored"
        />
        <FormControlLabel
            control={
              <Switch checked={state.slides_show_numbers} onChange={handleChange} name="slides_show_numbers" />
            }
            label="Show slide number"
        />
        <FormControlLabel
            control={
              <Switch checked={state.slides_show_speed_not_zero} onChange={handleChange} name="slides_show_speed_not_zero" />
            }
            label={"Show when speed > "+state.min_speed_to_show_slides+"m/s"}
        />

      </FormGroup>
      <FormHelperText>Be careful {design_number}</FormHelperText>
    </FormControl>

  </div>
</>

);
};

export default Home;
