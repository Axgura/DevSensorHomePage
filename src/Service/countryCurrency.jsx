import axios from "axios";

export class CurrencyLocation {

    async geoLocations() {
        try {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;
             const response = await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
             if(response && response?.data) {
                console.log(data.countryName);
                return data?.countryName
             } else {
                return "";
             }
        });
        } catch (error) {
            console.log(error);
            return this.handleError(error);
        }
    }

    handleError(error) {
         return error;
    }
}