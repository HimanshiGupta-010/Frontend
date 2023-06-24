import axios from "axios";

const ITEM_BASE_REST_API_URL = "http://localhost:8080/items";

class ItemServices {
  getAllItems() {
    return axios.get(ITEM_BASE_REST_API_URL);
  }

  createItem(Item) {
    return axios.post(ITEM_BASE_REST_API_URL, Item);
  }

  getItemById(ItemId) {
    return axios.get(ITEM_BASE_REST_API_URL + "/" + ItemId);
  }

  updateItem(ItemId, Item) {
    return axios.put(ITEM_BASE_REST_API_URL + "/" + ItemId, Item);
  }

  deleteItem(ItemId) {
    return axios.delete(ITEM_BASE_REST_API_URL + "/" + ItemId);
  }
}

export default new ItemServices();