import { Text, View, } from "react-native";
import * as React from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { formato } from "../css/Styles";

export default function MapaGoogle() {

    const [markers, SetMarkers] = React.useState([
        {
        latlng:{ 
            latitude:-23.540703894068354, 
            longitude: -46.57493611646595
        },

        title:"Senac Tatuapé",
        description:"Local onde estudo técnico"
    },

    {
        latlng:{ 
            latitude: -23.541132051191443, 
            longitude: -46.575091543018736,
        },

        title:"Casa do Pastel",
        description:"Restaurante e Lanchonete"
    },

    {
        latlng:{ 
            latitude: -23.53966047453694, 
            longitude: -46.57199676397451
        },

        title:"it Burguer",
        description:"Lanchonete"
    },
]);


    return(
        <View style={formato.conteudo}>
           <MapView 
           initialRegion={{
            latitude: -23.540703894068354,
            longitude: -46.57493611646595,
            latitudeDelta: 0.007,
            longitudeDelta: 0.007,
          }}
        style={formato.mapa} >

          {
              markers.map((m,ix)=>(
                  <Marker
                    key={ix}
                    coordinate={m.latlng}
                    title={m.title}
                    description={m.description}
                />
              )) 
              }

            </MapView>
        </View>
    );
}