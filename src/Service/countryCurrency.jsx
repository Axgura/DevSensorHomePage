import axios from "axios";

export default class CurrencyLocation {

    getCountryFromIp = async () => {
        try {
          const apiKey = process.env.NEXT_PUBLIC_IPINFO_API_KEY;

          const response = await axios.get('https://ipinfo.io', {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
            },
          });
          const { country } = response.data;
          console.log({ country });
          return country;
        } catch (error) {
          console.error('Error fetching IP information:', error);
          this.handleError(error);
          return null;
        }
      };

    handleError(error) {
         return error;
    }
}