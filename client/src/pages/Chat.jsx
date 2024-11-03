import { useContext } from "react";
import {Container , Stack} from "react-bootstrap" 
import ChatBox from "../components/chat/ChatBox";
import { ChatContext } from "../context/ChatContext";

import UserChat from "../components/chat/UserChat";
import {AuthContext} from "../context/AuthContext";
import PotensialChats from "../components/chat/PotensialChats";




const Chat = () => {
    const {user} = useContext(AuthContext);
    const {userChats,
        isUserChatsLoading,
        userChatsError,
        updateCurrentChat
    } = useContext(ChatContext);

        //console.log("UserChats",userChats);
    return (<Container>
            <PotensialChats/>
            {userChats?.length < 1 ? null : (
                <Stack direction="horizontal" gap={4} className="align-items-start">
                    <Stack className="messsages-box flex-grow-0 pe-3" gap={3}>
                    {isUserChatsLoading && <p>Loading chats ...</p>}
                    {userChats?.map((chat,index)=>{
                        return(
                            <div key={index} onClick={()=>{
                                updateCurrentChat(chat)
                            }}>
                                <UserChat chat={chat} user={user}/>
                            </div>
                        );
                    })}
                    </Stack>
                    <ChatBox/>
                </Stack>
            )

            }
    </Container>);
}
 
export default Chat;