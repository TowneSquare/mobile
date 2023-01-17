import { Dimensions, TouchableWithoutFeedback, Keyboard} from "react-native";
export const height = Dimensions.get("window").height;
export const width = Dimensions.get("window").width;
export const searchFilterFunction=(word:string, arg:[])=>{
    if(word){
        const newData=arg?.filter((item:any)=>{
            const itemData=item.name?item.name.toUpperCase():"".toUpperCase();
            const textData=word.toUpperCase();
            return itemData.indexOf(textData)> -1
        });
        return newData
    } else return null
    
}
