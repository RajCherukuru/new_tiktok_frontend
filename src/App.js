import logo from './logo.svg';
import './App.css';
import { NavLink, Route, Router, Routes } from 'react-router-dom';
import { Custombutton } from './components/custombutton';
import { Videopage } from './pages/videopage';
import { Accounts } from './pages/accounts';
import image from './images/logo.png'
import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



function App() {

    const [color, setColor]= useState("videos");

    const [totallikes, setTotalLikes]= useState(0);
    const [totalShares, setTotalShares]= useState(0);
    const [totalComments, setTotalComments]= useState(0);
    const [totalVideos, setTotalVideos]= useState(0);


  const [reply, setReply]= useState(0);
  const [retweet, setRetweet]= useState(0);
  const [like, setLike]= useState(0);

  const [stance, setStance]= useState({});
  let pos;
  let neg;
  if (stance.length >0){
    pos=stance.imagepos
    neg=stance.imageneg
  }

// console.log("this is stance wehave", stance.imagepos);

  return (


    <div className=" h-[100vh] bg-white text-black overflow-auto">


      <div className='header border-b p-4 flex justify-between mb-3 '>

          
          <img className='rounded-full' src={image} width={150} height={80}/>
          

          {/* <input type='text' placeholder='Search' className='w-4/12  bg-gray-900 rounded-full'>

          </input> */}


          {/* <Custombutton text="Upload"/> */}
          <div></div>


      </div>








      <div className='h-[90%] flex gap-2'>





          <div className='  w-2/12 flex flex-col gap-5'>



              {/* <nav className='navbar p-4 flex flex-col text-2xl font-extrabold border-b'>

                  <NavLink to="/"  >
                      <button className={`${color=="videos"? "text-red-900" : " "} rounded-xl`} onClick={()=>{setColor("videos")}}>Videos</button>
                  </NavLink>

                  <NavLink to="/accounts" >
                      <button className={`${color=="accounts"? "text-red-900" : " "}`} onClick={()=>{setColor("accounts")}} >Accounts</button>
                  </NavLink>

              </nav> */}


              <div className='text-2xl font-bold p-4 flex flex-col gap-8'>

              <div className='flex flex-col gap-3'>
                  <div>
                    <Popup trigger={<button>Stances</button>} modal nested>
                      {close => (
                        <div className='modal'>
                          <div className='flex flex-col gap-8'>

                            <div className='flex flex-col gap-4'>
                            <div>Postive Stance</div>
                            <img width={600} height={600} src={`https://1225507153-tiktok.s3.amazonaws.com/media-russia%26china/${pos}`} alt="Positive Narrative" />
                            </div>


                            <div className='flex flex-col gap-4'>
                            <div>Negative Stance</div>
                            <img width={600} height={600} src={`https://1225507153-tiktok.s3.amazonaws.com/media-russia%26china/${neg}`}  alt="Negative Narrative" />
                            </div>
                          </div>
                          <div>
                            <button onClick={() => close()}>
                              
                            </button>
                          </div>
                        </div>
                      )}
                    </Popup>
                  </div>
                </div>


                  



              <div className='flex flex-col gap-1 justify-center items-center border border-black border-2 p-2'>



                    <div>
                    REPLY
                    </div>
                    <div>
                    {reply.toLocaleString('en-US')}
                    </div>
                    
                  </div>



                  <div className='flex flex-col gap-1 justify-center items-center border border-black border-2 p-2'>

                    <div>
                    LIKES
                    </div>
                    <div>
                    {like.toLocaleString('en-US')}
                    </div>
                     
                  </div>

                  <div className='flex flex-col gap-1 justify-center items-center border border-black border-2 p-2'>

                    <div>
                    RETWEETS
                    </div>
                    <div>
                    {retweet.toLocaleString('en-US')}
                    </div>
                     
                  </div>


                  {/* <div className='flex flex-col gap-1 justify-center items-center border border-black border-2 p-2'>

                    <div>
                    SHARES
                    </div>
                    <div>
                    {totalShares.toLocaleString('en-US')}
                    </div>
                     
                  </div> */}


                  


              </div>




          </div>






        <div className=' w-10/12'>

               <Routes>

                  <Route path="/" element={<Videopage setReply={setReply} setLike={setLike} setRetweet={setRetweet} setStance={setStance}  />} />
                  <Route path="/accounts" element={<Accounts/>}></Route>

               </Routes>


        </div>





      </div>


      









     
    </div>



  );
}

export default App;
