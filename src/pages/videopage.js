import React, { useEffect, useState } from 'react'
import { Custombutton } from '../components/custombutton'
import ReactPlayer from 'react-player';
import { Videocard } from '../components/videocard';
import { TikTokEmbed } from 'react-social-media-embed';
import CountryFlag from 'react-country-flag';
import { Videocardtwo } from '../components/videocardtwo';





export const Videopage = (props) => {

  const[objects, setObjects]= useState([]);
  const [narrativeObj, setNarrativeObj]= useState([]);

  const setReply=props.setReply;
  const setLike=props.setLike;
  const setRetweet= props.setRetweet;
  const setStance= props.setStance;

  const [name, setName]= useState("NONE")
  const [flag, setFlag]= useState("NONE");


  const [isCheckedVideo, setIsCheckedVideo] = useState(false);
  const [isCheckedImage, setIsCheckedImage] = useState(false);



  const[filter, setFilter]= useState("AGREEMENT");
  const [narrativeFilter, setNarrativefilter]= useState("NONE");
  const backendUrl = process.env.REACT_APP_REACT_BACKEND_API;

console.log("backend url", backendUrl)



    async function fetchData() {
        try {

          console.log("this is the filter we are sending", filter);
          let response;
          if(filter !== "NONE" && narrativeFilter == "NONE"){
           response = await fetch(`${backendUrl}/api/v1/topic?filter=${filter}&narrativeFilter=${narrativeFilter}&name=${name}&flag=${flag}&isCheckedVideo=${isCheckedVideo}&isCheckedImage=${isCheckedImage}`);

          }
          else{
            response = await fetch(`${backendUrl}/api/v1/topic?filter=${filter}&narrativeFilter=${narrativeFilter}&name=${name}&flag=${flag}&isCheckedVideo=${isCheckedVideo}&isCheckedImage=${isCheckedImage}`);

          }
          console.log("this is how the response looks like")

          const {tweets, reply, retweets, likes, stance} = await response.json();
          // console.log(tweets);

          // console.log("this is how the body looks like")
          // console.log(videoInfo); 
          setObjects(tweets);
          
            setStance(stance[0]);
          
          setReply(reply);
          setLike(likes);
          setRetweet(retweets);

          // props.setTotalLikes(total[0]);
          // props.setTotalComments(total[1]);
          // props.setTotalShares(total[2]);
          // props.setTotalVideos(total[3]);

        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      }
            


      useEffect(()=>{
        fetchData();
      },[filter, narrativeFilter, isCheckedImage, isCheckedVideo, name, flag])



    //   const NUCLEAR = ["NONE", "Nuclear Tensions: Global Powers on the Brink"];
    //   const NAZISM = ["NONE", "Russia's Battle Against Nazism for Humanity", "Nazism in the Ukraine Conflict", "Nazism and the Bandera Ideology in Ukraine Conflict"];
    //   const CIVILIANS = ["NONE", "Civilians Impacted by Ukrainian Attacks in Crimea and Sevastopol"];
    //   const MERCENARIES = ["NONE", "Foreign Mercenaries in the Ukraine are Eliminated", "Mercenaries and Atrocities in Ukraine", "Laurent Brayard warns French Mercenaries in Ukraine"];
    //   const CORRUPT = ["NONE", "West is Corrupt and Causes Death in Ukraine Conflict", "Biden Family's Foreign Influence and Corruption"];
    //   const CONFLICT = ["NONE", "US has Double Standards in Global Conflicts", "US Rejects Peace Deal Despite Americans Desire"];
    //   const AGREEMENT = ["NONE", "Global Push for Ceasefire", "Swiss Peace Summit Highlights Divisions Over Ukraine War", "China's Advocacy for a Political Settlement in the Ukraine Crisis", "Key Nations Refuse to Sign Final Declaration"];
    //   const AID = ["NONE", "So-Called 'Humanitarian' Aid in Global Conflicts"];
    //   const CRIME = ["NONE", "Ukraine's Unit No. 110: Horrifying Crimes Against Humanity"];
    //   const ALLIANCE = ["NONE", "NATO will Punish China"];
    //   const DIPLOMACY = ["NONE", "Diplomatic Efforts for Peace in Nizhny Novgorod"];
    // const NONE= ["NONE"]

    const nf=[
      "NONE",
      'Nuclear Tensions: Global Powers on the Brink',
      "Russia's Battle Against Nazism for Humanity",
      'Civilians Impacted by Ukrainian Attacks in Crimea and Sevastopol',
      'Nazism in the Ukraine Conflict',
      'Foreign Mercenaries in the Ukraine are Eliminated',
      'West is Corrupt and Causes Death in Ukraine Conflict',
      'US has Double Standards in Global Conflicts',
      'Mercenaries and Atrocities in Ukraine',
      'Nazism and the Bandera Ideology in Ukraine Conflict',
      "Biden Family's Foreign Influence and Corruption",
      'US Rejects Peace Deal Despite Americans Desire',
      'Global Push for Ceasefire',
      "So-Called 'Humanitarian' Aid in Global Conflicts",
      'Swiss Peace Summit Highlights Divisions Over Ukraine War',
      "China's Advocacy for a Political Settlement in the Ukraine Crisis",
      "Ukraine's Unit No. 110: Horrifying Crimes Against Humanity",
      'NATO will Punish China',
      'Laurent Brayard warns French Mercenaries in Ukraine',
      'Diplomatic Efforts for Peace in Nizhny Novgorod',
      'Key Nations Refuse to Sign Final Declaration'
    ]



    // const [dynamic, setDynamic]= useState(NONE)

     // if (selectedFilter === "NUCLEAR") {
        //   setDynamic(NUCLEAR);
        // } else if (selectedFilter === "NAZISM") {
        //   setDynamic(NAZISM);
        // } else if (selectedFilter === "CIVILIANS") {
        //   setDynamic(CIVILIANS);
        // } else if (selectedFilter === "MERCENARIES") {
        //   setDynamic(MERCENARIES);
        // } else if (selectedFilter === "CORRUPT") {
        //   setDynamic(CORRUPT);
        // } else if (selectedFilter === "CONFLICT") {
        //   setDynamic(CONFLICT);
        // } else if (selectedFilter === "AGREEMENT") {
        //   setDynamic(AGREEMENT);
        // } else if (selectedFilter === "AID") {
        //   setDynamic(AID);
        // } else if (selectedFilter === "CRIME") {
        //   setDynamic(CRIME);
        // } else if (selectedFilter === "ALLIANCE") {
        //   setDynamic(ALLIANCE);
        // } else if (selectedFilter === "DIPLOMACY") {
        //   setDynamic(DIPLOMACY);
        // } else {
        //   setDynamic(NONE);
        // }


      const handleFilterChange = async (e) => {
        const selectedFilter = e.target.value;
        setFilter(selectedFilter);
        setNarrativefilter("NONE");
        setName("NONE");
        setFlag("NONE")


    }

    const handleNarrativeChange = async (e) => {
      const selectedFilter = e.target.value;
      setNarrativefilter(selectedFilter);
      setFilter("NONE");
      setName("NONE");
      setFlag("NONE")


  }


  const handleNameChange = async (e) => {
    const selectedFilter = e.target.value;
    setName(selectedFilter);
}

const handleFlagChange = (e)=>{
  const selectedFilter = e.target.value;
    setFlag(selectedFilter);
}

console.log(isCheckedImage, isCheckedVideo)

      

    const topics = [
      "AGREEMENT", "NONE", "AID", "ALLIANCE", "ARMED FORCES", "ATTACKS", "BASES", "CIVILIANS", 
      "CONFLICT", "CORRUPTION", "COVID", "CRIME", "DEFENSE", "DEMOCRACY", "DIPLOMACY", 
      "DRONES", "ECONOMY", "ENVIRONMENT", "FAMILY", "GOVERNMENT", "HISTORY", 
      "INFRASTRUCTURE", "INTEL", "INTERNATIONAL", "JUSTICE", "LIFE", "MEDIA", 
      "MERCENARIES", "MISSILES", "NATION", "NAZISM", "NUCLEAR", "PEACE", "RELIGION", 
      "RESOURCES", "ROCKETS", "SAFETY", "SANCTIONS", "SENTIMENT", "SPACE", "TERROR", 
      "TRUTH", "WAR", "WEAPONS", 
    ];

    const flags=["NONE", "russia", "usa", "china", "france", "israel", "ukraine", "eu", ]

    const names = [
      'NONE',
      'joe_biden',
      'vladimir_putin',
      'volodymyr_zelenskyy',
      'jens_stoltenberg',
      'lin_jian',
      'xi_jingping',
      'dmitry_medvedev',
      'jackson_hinkle',
      'antony_blinken',
      'donald_trump',
      'sergey_viktorovich',
      'sergei_shoigu',
      'olaf_scholz',
      'wang_yi',
      'viktor_orban',
      'maria_zakharova',
      'wu_qian',
      'justin_trudeau',
      'emmanuel_macron',
      'jake_sullivan',
      'diana_panchenko',
      'melissa_biden',
      'hunter_biden',
      'mao_zedong',
      'von_derLeyen',
      'charles_michel',
      'kim_jong',
      'lloyd_austin',
      'petr_pavel',
      'john_kirby'
    ];

    // const names = [
    //     'NONE',
    //   "vladimir_putin",
    //   "lin_jian",
    //       'justin_trudeau',

    //   "jackson_hinkle",
    //   "diana_panchenko",
    //   "emmanuel_macron",
    //   "kim_jong",
    //   "joe_biden",
    //   "maria_zakharova",
    //   "dmitry_medvedev",
    //   "sergey_viktorovich",
    //   "donald_trump",
    //   "volodymyr_zelenskyy",
    //   "jens_stoltenberg",
    //   "wang_yi",
    //   "xi_jingping",
    //   "jen_stoltenberg"
    // ];
    
    
    


  return (
    <div className='w-11/12 mx-auto overflow-auto bg-white'>


        <div className='flex flex-col gap-4 mb-4 font-semibold '>


          
            <div className='flex flex-row gap-3'>


              <select value={filter} onChange={(e) => handleFilterChange(e)} className='bg-white text-black p-2 rounded-lg text-xl border-2 border-black'>
                {topics.map((topic, index) => (
                  <option key={index} value={topic}>{topic}</option>
                ))}
              </select>





                <select value={narrativeFilter} onChange={(e) => handleNarrativeChange(e)} className='bg-white text-black p-2 rounded-lg text-xl border-2 border-black'>

              { nf.map((d, index)=>(
                  <option key={index} value={d}>{d}</option>
                ))}

              </select> 


              <select value={name} onChange={(e) => handleNameChange(e)} className='bg-white text-black p-2 rounded-lg text-xl border-2 border-black'>
                {names.map((name, index) => (
                  <option key={index} value={name}>{name}</option>
                ))}
              </select>
            </div>








      <div className='flex flex-row gap-4'>

      <select value={flag} onChange={(e) => handleFlagChange(e)} className='bg-white text-black p-2 rounded-lg text-xl border-2 border-black'>
                {flags.map((name, index) => (
                  <option key={index} value={name}>{name}</option>
                ))}
              </select>


      <label>
            <input
              type="checkbox"
              checked={isCheckedVideo}
              onChange={()=>setIsCheckedVideo((prevState) => !prevState)}
            />
            Videos
          </label>

          <label>
            <input
              type="checkbox"
              checked={isCheckedImage}
              onChange={()=> setIsCheckedImage((prevState) => !prevState)}
            />
            Images
          </label>
      </div>

      









                {/* <button className={` ${color=="all" ? "bg-gray-900 text-white" : " bg-white text-black"} p-2 rounded-lg text-xl border-2 border-black`}
                onClick={()=>(setColor("all"))}>
                All
                </button>

                <button className={` ${color=="Africa" ? "bg-gray-900 text-white" : " bg-white text-black"} p-2 rounded-lg text-xl border-2 border-black`}
                onClick={()=>(setColor("Africa"))}>
                Africa
                </button>


                <button className={` ${color=="SCS" ? "bg-gray-900 text-white" : " bg-white text-black"} p-2 rounded-lg text-xl border-2 border-black`}
                onClick={()=>(setColor("SCS"))}>
                South China Sea
                </button>

                

                <button className={` ${color=="Eastern Pacific" ? "bg-gray-900 text-white" : " bg-white text-black"} p-2 rounded-lg text-xl border-2 border-black`}
                onClick={()=>(setColor("Eastern Pacific"))}>
                Eastern Pacific
                </button>

                <button className={` ${color=="ECS" ? "bg-gray-900 text-white" : " bg-white text-black"} p-2 rounded-lg text-xl border-2 border-black`}
                onClick={()=>(setColor("ECS"))}>
                East China Sea
                </button> */}



      {/* 
                

                <div  style={{ width: '100px' }}>
                  <CountryFlag style={{ width: '100px', height:'50px' }}  countryCode="GH" svg />
                </div>

                <div  style={{ width: '100px' }}>
                  <CountryFlag style={{ width: '100px', height:'50px' }}  countryCode="US" svg />
                </div>

                <div  style={{ width: '100px' }}>
                  <CountryFlag style={{ width: '100px', height:'50px' }}  countryCode="AR" svg />
                </div>

                <div  style={{ width: '100px' }}>
                  <CountryFlag style={{ width: '100px', height:'50px' }}  countryCode="EC" svg />
                </div>

                <div  style={{ width: '100px' }}>
                  <CountryFlag style={{ width: '100px', height:'50px' }}  countryCode="JP" svg />
                </div>

                <div  style={{ width: '100px' }}>
                  <CountryFlag style={{ width: '100px', height:'50px' }}  countryCode="KR" svg />
                </div>

                <div  style={{ width: '100px' }}>
                  <CountryFlag style={{ width: '100px', height:'50px' }}  countryCode="CN" svg />
                </div>

                <div  style={{ width: '100px' }}>
                  <CountryFlag style={{ width: '100px', height:'50px' }}  countryCode="ID" svg />
                </div>

                <div  style={{ width: '100px' }}>
                  <CountryFlag style={{ width: '100px', height:'50px' }}  countryCode="PH" svg />
                </div>

                <div  style={{ width: '100px' }}>
                  <CountryFlag style={{ width: '100px', height:'50px' }}  countryCode="TW" svg />
                </div>

                <div  style={{ width: '100px' }}>
                  <CountryFlag style={{ width: '100px', height:'50px' }}  countryCode="VN" svg />
                </div>

                */}



        </div>


        <div>

        </div>


       

        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 '>
            

         
        {/* { filter != "NONE" && narrativeFilter =="NONE" ?

         

          :

          narrativeObj.map((obj, index) => (
            <Videocard key={index} obj={obj} name={name}  isCheckedVideo={isCheckedVideo} isCheckedImage={isCheckedImage} />
          ))
          
        } */}

      {objects.map((obj, index) => (
          <Videocardtwo key={index} obj={obj} name={name} isCheckedImage={isCheckedImage} isCheckedVideo={isCheckedVideo} />
        ))}

          

        </div>


    </div>
  )
}
