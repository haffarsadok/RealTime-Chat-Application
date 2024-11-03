import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";

const PotensialChats = () => {
    const { user } = useContext(AuthContext)
    const { potensialChats, createChat, onlineUsers } = useContext(ChatContext);
    //console.log("potensial chats ",potensialChats)
    return (
        <>
            <div className="all-users">
                {potensialChats && potensialChats.map((u, index) => {
                    return (
                        <div className="single-user" key={index} onClick={() => createChat(user._id, u._id)}>
                            {u.name}
                            <span className={
                                onlineUsers?.some((user) => user?.userId === u?._id) ?
                                    "user-online" : ""}></span>
                        </div>
                    );

                })}
            </div>
        </>
    );
};

export default PotensialChats;