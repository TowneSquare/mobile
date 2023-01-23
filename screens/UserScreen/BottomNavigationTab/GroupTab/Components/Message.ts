import TypeDate from "../../../../ChatScreen/ChatUtils/TypeDate";
import TypeImage from "../../../../ChatScreen/ChatUtils/TypeImage";
import TypeText from "./TypeText";
const GroupMessage = (props:any) => {
  const message = props.message;
  console.log(message);
  if (message.type && message.type.messageType === "image") {
    return null;
  }
  if (message.type && message.type.messageType === "text") {
    return TypeText(message);
  }
  if (message.date && message.dateType === "day") {
    return TypeDate(message);
  }
};
export default GroupMessage;
