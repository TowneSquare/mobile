import React, { FC,useState } from 'react'
import { FlatList, SafeAreaView, Pressable, Image, View,Dimensions, Text } from 'react-native'
import { sizes } from '../../../utils';
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
import { collection } from "../../../controller/UserController";
import { appColor, images } from '../../../constants';
import { useAppDispatch } from '../../../controller/hooks';
import { updateCollectionIsSelected } from '../../../controller/UserController';
import { useAppSelector } from "../../../controller/hooks";


const Collection:FC<{
    collectionData:collection[] | undefined
    name:string,
    collectionId:number
}> = ({collectionData, name, collectionId}) => {
    const [numColumns, setnumColumns] = useState(3)
    const [selectedId, setSelectedId] = useState<boolean>(false)
    const dispatch = useAppDispatch();
    const NFTCollections = useAppSelector((state) => state.USER.NFTCollections);
    const COLLECTION_DATA = NFTCollections.find(c => c.id == collectionId).collections

    const CollectionImage:FC<{
      item: collection
     }> = ({ item }) => {

      const handle_select = () => {
        if(item.isSelected == true){
          return dispatch(updateCollectionIsSelected({collectionId:item.id, isSelected:false}))
        }
         dispatch(updateCollectionIsSelected({collectionId:item.id, isSelected:true}));
      }
      
    return (
      <View
        style={{
          flex: 1,
         margin:10
        }}
      >
        <Pressable
          style={{
            justifyContent: "space-around",
            position:"relative"
          }}
          onPress={() => {
           handle_select()
          }}
        >
          <View>
            <Image
            source={item.image}
            style={{
              width: size.getWidthSize(100),
              height: size.getHeightSize(100),
              borderRadius:10,
              marginBottom:10,
              position: "relative"
            }}
           
          />
          </View>
           {
            item.isSelected && (
                <View style={{
                backgroundColor: appColor.kSecondaryColor,
              width: size.getWidthSize(100),
              height: size.getHeightSize(100),
              justifyContent:"center",
              alignItems:"center",
              borderRadius:10,
              position:"absolute",
              opacity:0.7
           }}>
                <Image source={images.tick} style={{
            }}/>
           </View>
            )
           }
        </Pressable>
        <View>
            <Text style={{
                color:appColor.kWhiteColor,
                fontFamily:"Outfit-Regular"
            }}>{name}</Text>
            <Text style={{
                color:appColor.kWhiteColor,
                fontFamily:"Outfit-Regular"
            }}>#{item?.id}</Text>
        </View>
      </View>
    );
  };

  return (
    
       <>
       {collectionData &&  <FlatList
            key={numColumns}
            data={COLLECTION_DATA}
            renderItem={({ item }) => <CollectionImage item={item} />}
            keyExtractor={(item) => item.id.toString()}
            numColumns={numColumns}
            style={{
               
            }}
            extraData={selectedId}
        />}
       </>
    
  )
}

export default Collection