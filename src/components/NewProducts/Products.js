import { ref, list } from 'firebase/storage'
import {storage} from "../../firebase/storage";

export default class Products {
    getProducts = async () => {
        const listRef = ref(storage, 'images')

        const listData = await list(listRef)
        return listData.items
    }
}
