import TypeDate from "../../ChatUtils/TypeDate";
import TypeImage from "../../ChatUtils/TypeImage";
import TypeMessage from "../../ChatUtils/TypeMessage";

const Message = (props: any) => {
  const message = props.message;
  
  if (message.type && message.type.messageType === "image") {
    return TypeImage(message);
  }
  if (message.type && message.type.messageType === "text") {
    return TypeMessage(message);
  }
  if (message.date && message.dateType === "day") {
    return TypeDate(message);
  }
};

export default Message;
