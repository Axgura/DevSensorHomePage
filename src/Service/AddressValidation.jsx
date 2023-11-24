const key = "AIzaSyBIBT9b_l4j4uYhS1Zx3ZGqhGwd10j8KCI";
import axios from "axios";
 
export default class AddressValidation {
    
    async verifyAddress( address, region) {
       try {

        const result = await axios.post(
            `https://addressvalidation.googleapis.com/v1:validateAddress?key=${key}`,{
                address: {
                    regionCode: region,
                    addressLines: [ address ]
                  }
        });
        
        if(result){
            console.log({ result });
        }
       } catch (error) {
            console.log(error);
       }
    }
}