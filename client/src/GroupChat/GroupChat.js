const GroupChat = ({ chat }) => {
    return (
        <div className="sub-pane content-pane">
        <div id="chat-container">
            { chat.map((msg) => (
                <div>
                    <span className="chat-name">{ msg.name }</span>
                    <span className="chat-message">{ msg.message }</span>
                </div>
            ))}
        </div>
    </div>
    )
}

export default GroupChat;