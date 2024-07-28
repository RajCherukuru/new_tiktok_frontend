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

const link ="data:image/jpeg;base64,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"

console.log("this is stance wehave", stance.imagepos);

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
                            <img width={600} height={600} src={link} alt="Positive Narrative" />
                            </div>


                            <div className='flex flex-col gap-4'>
                            <div>Negative Stance</div>
                            <img width={600} height={600} src={link} alt="Negative Narrative" />
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
