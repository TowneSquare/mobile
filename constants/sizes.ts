import { SizeConfig } from "../App";

export function widthSize(value:number):number{
 const size =value/4.14;
 return size*SizeConfig.widthMultiplier
}
export function heightSize(value:number):number{
    const size=value/8.96;
    return size*SizeConfig.heightMultiplier
}
export function fontSize(value:number):number{
    const size =value/8.96
    return size*SizeConfig.textMultiplier
}
export function screenHeight(value:number):number{
    return SizeConfig.screenHeight*value
}
export function screenWidth(value:number):number{
    return SizeConfig.screenWidth*value
}