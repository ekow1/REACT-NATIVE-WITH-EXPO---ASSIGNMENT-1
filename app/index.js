import { StyleSheet, Text, View , Image , TouchableOpacity} from "react-native";
import {Ionicons , MaterialIcons} from "@expo/vector-icons"

// import profile from "profile.jpg";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={[styles.titleBar , styles.shadowProp ]} > 
      <Ionicons name="ios-arrow-back" size={24} color="#fff" ></Ionicons>
      <Text style={styles.titleText}>Edit Profile</Text>
      <Ionicons name="ellipsis-vertical" size={24} color="#fff"></Ionicons>
      
      </View>

      <View style={{alignSelf : 'center'}} >

        <View style={styles.profileImage} >
          <Image source={ require( './assets/ekow.jpg')}  style={styles.image} />

        </View>
        <View style={styles.icon} >
          
        <Ionicons name="ios-camera-outline" size={18} color="#fff" ></Ionicons>

        </View>

      

      </View>




      <View  style={styles.profileDetail}>

        <View>

          <Text style={styles.line1}>School</Text>

          <View style={styles.line2}>

            <Text style={styles.lineText}>Codetrain</Text>
          
          </View>
          
        </View>

        <View>

          <View style={styles.line3}>

          <Text style={styles.line1}>Email</Text>
          <Ionicons name="add-outline" size={25} color="#008F8C" ></Ionicons>
          
          </View>

          <Text style={[ styles.line2 , styles.lineText] }>ekowfirmino@yahoo.com</Text>
          
        </View>


        <View>

          <Text style={[styles.line1 , styles.line4]}>Name</Text>

          <View style={styles.line2}>

            <Text style={styles.lineText}>Enoch Ekow Enu</Text>
          
          </View>

          
          
        </View>


        <View>

          <Text style={[styles.line1 , styles.line4]}>Nickname</Text>

          <View style={styles.line2}>

            <Text style={styles.lineText}>Unavailable</Text>
          
          </View>
          
        </View>



        <View>

          <View style={styles.line3}>

          <Text style={[styles.line1 , styles.line4]}>Emergency Contact</Text>
          <Ionicons name="phone-portrait-outline" size={20} color="#008F8C" ></Ionicons>
          
          </View>

          <Text style={[ styles.line2 , styles.lineText] }>+233-593-344-313</Text>
          
        </View>


        <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Update Profile</Text>
      </TouchableOpacity>


        </View>
        
     


       
        


    </View>



    
    
  );
}

const styles = StyleSheet.create({
  
  container : {
    flex : 1,
    backgroundColor : "#fff",
    

  },

  titleBar:{
    flexDirection : "row",
    justifyContent : "space-between",
   
    paddingHorizontal : 20,
    marginVertical : 50,
    backgroundColor : "#008F8C",
    paddingVertical : 10,
   

  },

  titleText:{
    color : "#fff",
    fontSize : 18,
    fontWeight : "700",


  },

  profileImage :{

    width : 150,
    height : 150,
    overflow : "hidden"

  },

  image :{
    flex :1,
    width : undefined,
    height : undefined,
    borderRadius : 100,
    resizeMode : "center",
 
  },

  icon:{
    backgroundColor : "#008F8C",
    position : "absolute",
    height : 35,
    width : 35,
    borderRadius : 30,
    justifyContent: "center", 
    alignItems : "center",
    bottom : 20,
    right : -3,
    
  },

  profileDetail: {

  
    flexDirection : "column",
    marginHorizontal : 40,
    marginVertical : 60,
    columnGap: 10,
    gap : 30,

  },


  line1: {

    fontSize : 15,
    color : "#000",
    fontWeight : '700',
    marginBottom : 1,


  },

  line2 :{

    flexDirection : "row",
    justifyContent : "space-between",
    borderBottomColor : "grey",
    borderBottomWidth : 0.5,

  },

  line3 : {

    flexDirection : "row",
    justifyContent : "space-between",
      
    

  },

  line4 : {

    color : "#008F8C",
  
  },

  lineText :{
    fontSize : 22,
    fontWeight : "bold",
    
    
  },

  texticon : {

    fontWeight : '300',

  },

  button: {
    alignItems: 'center',
    backgroundColor: '#008F8C',
    padding: 18,
    borderRadius : 20,
    marginHorizontal : 70,
    marginTop : 30 ,
    
    
  },

  buttonText : {
    color : '#fff',
    fontWeight : 'bold',
    fontSize : 18,

  }
});
