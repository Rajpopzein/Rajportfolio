import './Chatbot.css'
import mars from '../../assets/pngimg.com - mars_planet_PNG20.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faMeteor, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

const ChatbotScreen = ({ trigger }) => {
    const [chatdata, setchatdata] = useState([])
    const [message,setmessage] = useState({
        "recipient_id":"user",
        "message":"hi"
    })
    const [click_message,setClick_message] = useState({
        "recipient_id":"user",
        "message":""
    })
    const [loading, setLoading] = useState(false);
    const chat_bot_call = (message) =>{
        setLoading(true)
        axios.post("https://zara-chatbot.onrender.com/webhooks/rest/webhook", {
            message: message
            }).then((e)=>{ 
                setTimeout(() => {
                e?.data?.map((datas)=>(
                    setchatdata((prev)=>[...prev, datas])
                ))
                setLoading(false)
                },1200)
            }).catch((e)=>{console.error(e)})
    }
    var initial = 0

    const chatWindowRef = useRef(null);

    useEffect(()=>{
        if(trigger && initial === 0 && message?.message?.trim().length > 0){
            setLoading(true)
            setTimeout(() => {
                chat_bot_call(message.message)
            }, 1500);
            setmessage({...message, message:""})
        }
        initial = initial + 1
    },[trigger])

    useEffect(() => {
        if (chatWindowRef.current) {
            chatWindowRef.current.scrollTo({
                top: chatWindowRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [chatdata]);

    const handle_submit = (e) =>{
        e.preventDefault();
         if(message.message.length !== 0){
            setchatdata((prev)=>[...prev,message]); 
            chat_bot_call(message.message); 
         }
         setmessage({...message, message:""})
    }

    const handle_internal_button = async(e)=>{
        const new_msg =  click_message
        new_msg.message = e?.title
        setClick_message(new_msg);
        if(click_message.message.length !== 0){
            setchatdata((prev)=>[...prev,click_message]); 
            chat_bot_call(e.payload); 
         }
         setmessage({...click_message, message:""})
    }

    return (
        <div className={trigger ? "chatbot_main chat_bot_active" : "chatbot_main"}>
            <div className='chatbot_header'>
                <p>Lunar Lander <FontAwesomeIcon icon={faMeteor} className='marsimage' /></p>
                <FontAwesomeIcon icon={faMeteor} className='marsimage1' />
                <FontAwesomeIcon icon={faMeteor} className='marsimage2' />
                <FontAwesomeIcon icon={faMeteor} className='marsimage3' />
                <p className='subtext_chatbot'>Your personal assistent</p>
            </div>
            <div className='chatbot_body' ref={chatWindowRef}>
                {chatdata.map((item, index)=>(
                    <div className='bot_chat_text_div' key={index}>
                        <div className={item?.recipient_id === "user"?'user_chat_text' :'bot_chat_text'}>
                            <p>{item?.recipient_id === "user"? item?.message:item?.text}
                                {item?.image && <img src={item?.image}/> }
                            </p>
                            {item?.buttons && <div className='btn_div_int'>
                                {item?.buttons?.map((item, index)=>(
                                <div className='btn_chabot_intraction' key={index} onClick={()=>handle_internal_button(item)}>
                                    {item?.title}
                                </div>
                            ))}
                                </div>}</div>
                        
                    </div>
                ))}
                {loading && <div className="loader">
                    <p className='loader_icon'>...</p>
                    </div>}
            </div>
            <div className='chatbot_footer'>
                <form>
                    <input className='chat_input' value={message?.message} placeholder='Type here...' onChange={(e)=>{setmessage({...message, message:e.target.value})}}/>
                    <button className='send_btn_icn' onClick={(e) => {handle_submit(e)}}><FontAwesomeIcon icon={faPaperPlane} /></button>
                </form>
            </div>
        </div>
    )
}
export default ChatbotScreen