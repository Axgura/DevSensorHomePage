import axios from "axios";
const URL = "http://localhost:4001" // || process.env.NEXT_PUBLIC_DABINX;

export default class Checkout {
    async orderDevSensor(region, data) {
        if(region == "NG") {
            console.log({ region });
            const result = await this.usePayStack(data);
            return {
                method:"paystack",
                result
            };
        } else {
            const result = await this.useStripe(data);
            console.log(result);
            return {
                method:"stripe",
                result
            };
        }
    }

    async usePayStack(data) {
        const { data: response } = await axios.post(URL + "/user/order-single-product", data);
            if(response && response?.data){
                return response
            }else{
                return null;
            }
    }

    async useStripe(data) {
        const { data: response } = await axios.post(URL + "/user/order-single-product-stripe", data);
            if(response && response?.data){
                console.log({ response });
                return response
            }else{
                return null;
            }
    }

    handleError(AxiosError){
        alert(AxiosError);
    }
}