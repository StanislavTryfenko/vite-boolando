import { reactive } from "vue";
import axios from "axios";

export const state = reactive({
products: [],
getProducts() {
    axios.get("http://localhost:3000/products")
        .then(response => {
            this.products = response.data;
            console.log(response);
        })
    }
});