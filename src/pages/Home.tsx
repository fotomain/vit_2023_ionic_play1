



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
import {
    Button,
    Divider,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    FormLabel,
    Switch, TextField
} from "@mui/material";


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
  // const [text_input_value1, set_text_input_value1] = useState<string>('NEW_');
  const [design_number, set_design_number] = useState<number>(3);
  const [text_xy, set_text_xy] = useState(text_xy_design1);

  const [messages, setMessages] = useState<Message[]>([]);

  const [state, setState] = React.useState({
        slides_mirrored: true,
        slides_show_numbers: true,
        slides_show_speed_not_zero: false,
        min_speed_to_show_slides:0.5,
        text_input_value1:'NEW_'
  });


  function  handleChange(event:any) {

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

    },5*1000);
    return () => clearInterval(interval);
  }, []);



  const [slides_data_array, set_slides_data_array] = useState([
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
  );

  const navigationNextRef = useRef() as any
  const style_mirrored = (!state.slides_mirrored)?'':{
    WebkitTransform:'matrix(-1, 0, 0, 1, 0, 0)'
  }

  //========== fffffffffff

    const update_fetch = async (t_params?:any) => {

        const form = new FormData();
        form.append('app_token', "165a16f84351861f#@$%&^$%$!@d681fds165189");

        var ii;
        for (ii=0; ii<t_params.length; ii++) {
            // form.append(par[ii].key, par[ii].value);
            console.log("================================ ")
            console.log(t_params[ii][0])
            console.log(t_params[ii][1])
            form.append(t_params[ii][0],t_params[ii][1])
        }


        fetch('http://site33.komuvsenado.com/myphp/page_update.php?p1=2',
            {method: "POST", body: form}
        ).then(res => res.text())
            .then(text => {
                console.log("=== UpdsateSelf OK!")
                console.log(text)
            })
            .catch(text => {
                console.log("=== UpdsateSelf error")
                console.log(text)
            });
    }

  const doDataSelect = async (event?:any) => {

    console.log("=== doDataSelect")
    const p_whatToSelect='cat_project_task_actions'
    const form = new FormData();
    form.append('app_token', "165a16f84351861f#@$%&^$%$!@d681fds165189");
    form.append('p_whatToSelect', p_whatToSelect );

    await fetch('http://site33.komuvsenado.com/myphp/page_select.php?p1=2',
        { method: "POST", body:form }
    ).then(res => res.text())
        .then(text => {
          console.log("=== fetch page_select OK!")
          // console.log(text)

          console.log(typeof text)
          var response_arr = JSON.parse(text)
          console.log(response_arr['rows'])

          const rows = response_arr['rows']
          // rows.length
          const new_data=[]

          for (var i = 0; i < 3; i++){
            console.log('========= row ',i)
            console.log(rows[i].text1)
            console.log(rows[i].text2)
            console.log(rows[i].text3)
            new_data.push(
                {
                  title1: rows[i].text1,
                  title2: rows[i].text2,
                  title3: rows[i].text3,
                  video: slides_data_array[i].video,
                }
            )

            set_slides_data_array(new_data)


          }

          // set_textsArray(response_arr['rows'])
          //
          // const rows = response_arr['rows']
          // var t_rows_on_screen=[,];
          // for (var i = 0; i < rows.length; i++){
          //   t_rows_on_screen["'"+rows.project_task_action_guid+"'",'text1'] = rows[i].text1
          //   t_rows_on_screen["'"+rows.project_task_action_guid+"'",'text2'] = rows[i].text2
          //   t_rows_on_screen["'"+rows.project_task_action_guid+"'",'text3'] = rows[i].text3
          // }
          // set_Rows_on_screen(t_rows_on_screen)

        })
        .catch(text => {
          console.log("=== SelectSelf error")
          console.log(text)
        });

  }

    const [needToSelectData,set_needToSelectData] = useState('')
  useEffect( ()=>{

    const timer = setTimeout(()=>{
      console.log('=== needToSelectData', needToSelectData)
      doDataSelect()
      set_needToSelectData(Date.now().toString())
    },5000)

    return ()=>clearTimeout( timer )

  },[needToSelectData])

  return (
      <>
      <div>
        <Swiper
            ref={navigationNextRef}
            style={{marginTop:'1px', height:'300px'}}

            // onInit={(core: SwiperCore) => {
            //   navigationNextRef.current = core.el
            // }}

            spaceBetween={30}
            // centeredSlides={true}
            // autoplay={{
            //   delay: 1000,
            //   disableOnInteraction: false,
            // }}

            loop

            // pagination={{
            //   clickable: true,
            // }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            // className="mySwiper"
        >
          {slides_data_array.map((card,index)=>{
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
                        style={{...style_mirrored,...text_xy[0],...{
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
                              style={{...style_mirrored,...text_xy[1],...{
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
                            {(design_number==3)?(card.title2+' '+card.title1+' '+card.title3):card.title2}
                          </div>

                                  <div
                                      // 222
                                      style={{...style_mirrored,...text_xy[2],...{
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




          <Divider style={{marginTop:'10px', marginBottom:'10px'}}/>
          <Button
              variant="contained"
                  onClick={(e)=>{
                    const t_params=[]

                    t_params.push(['p_dd_table_name', "cat_project_task_actions"])
                    t_params.push(['p_dd_guid_field_name',"project_task_action_guid"])
                    t_params.push(['p_dd_from_where_take_value',"take_value_from_value"])
                    t_params.push(['p_dd_table_field_value_type',"text"])

                          t_params.push(['p_dd_guid_field_value', "33368308-4955-11"])
                          t_params.push(['p_dd_table_field_name', "text1"])
                          t_params.push(['p_dd_table_field_value', state.text_input_value1 + slides_data_array[1].title1])

                          update_fetch(t_params)

                          t_params.push(['p_dd_guid_field_value', "33368308-4955-11"])
                          t_params.push(['p_dd_table_field_name', "text2"])
                          t_params.push(['p_dd_table_field_value', state.text_input_value1 + slides_data_array[1].title2])

                          update_fetch(t_params)

                          t_params.push(['p_dd_guid_field_value', "33368308-4955-11"])
                          t_params.push(['p_dd_table_field_name', "text3"])
                          t_params.push(['p_dd_table_field_value', state.text_input_value1 + slides_data_array[1].title3])

                          update_fetch(t_params)

                          t_params.push(['p_dd_guid_field_value', "2e35abb6-4955-11"])
                          t_params.push(['p_dd_table_field_name', "text1"])
                          t_params.push(['p_dd_table_field_value', slides_data_array[0].title1])

                          update_fetch(t_params)

                          t_params.push(['p_dd_guid_field_value', "2e35abb6-4955-11"])
                          t_params.push(['p_dd_table_field_name', "text2"])
                          t_params.push(['p_dd_table_field_value', slides_data_array[0].title2])

                          update_fetch(t_params)

                          t_params.push(['p_dd_guid_field_value', "2e35abb6-4955-11"])
                          t_params.push(['p_dd_table_field_name', "text3"])
                          t_params.push(['p_dd_table_field_value', slides_data_array[0].title3])

                          update_fetch(t_params)





                          t_params.push(['p_dd_guid_field_value', "4157c3db-4955-11"])
                          t_params.push(['p_dd_table_field_name', "text1"])
                          t_params.push(['p_dd_table_field_value', slides_data_array[2].title1])

                          update_fetch(t_params)

                          t_params.push(['p_dd_guid_field_value', "4157c3db-4955-11"])
                          t_params.push(['p_dd_table_field_name', "text2"])
                          t_params.push(['p_dd_table_field_value', slides_data_array[2].title2])

                          update_fetch(t_params)

                          t_params.push(['p_dd_guid_field_value', "4157c3db-4955-11"])
                          t_params.push(['p_dd_table_field_name', "text3"])
                          t_params.push(['p_dd_table_field_value', slides_data_array[2].title3])

                          update_fetch(t_params)

                  }}
          >Update 1</Button>


            <div>
                <Divider style={{marginTop:'10px', marginBottom:'10px'}}/>
                <TextField
                    id="id_html1_1"
                    // ref={ref1_1}
                    label={"enter Text1 - it changes online"}
                    // label={momentData.text1_1?momentData.text1_1:"enter Text1 - it changes online"}
                    variant="outlined"

                    // InputLabelProps={{ shrink: true  }}
                    // InputLabelProps={{ shrink: null!=ref1.value?.toString() }}
                    // inputProps={dd_data['text1_1']} //.push({row_index:999})
                    // inputProps={action_text1_1_dd_data} //.push({row_index:999})
                    //=== inputProps={{ step222: 300, step333: 333,  }}
                    //=== inputProps={{
                    //     mask:  [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
                    // }} // ''==inputValue.toString()
                    // value = {(''!=inputValue1_1.toString())?inputValue1_1.target.value:''}
                    //=== see use [inputValue]
                    // onChange={(event) =>set_inputValue1_1(event)}
                    name={'text_input_value1'}
                    // value = {Rows_on_screen['2e35abb6-4955-11','text1']}
                    // defaultValue = {Rows_on_screen['2e35abb6-4955-11','text1']}
                    value = {state.text_input_value1}
                    onChange={(event)=>{

                        setState({
                            ...state,
                            [event.target.name]: event.target.value,
                        });
                        }
                    }
                    // onChange={onChange1}
                />
            </div>


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

        <Divider style={{marginTop:'10px', marginBottom:'10px'}}/>
        <Button
            variant="contained"
            onClick={()=>{
              if(navigationNextRef) {
                navigationNextRef?.current?.swiper?.slideNext();
              }
            }}
        >
          Next Slide
        </Button>
</>

);
};

export default Home;
