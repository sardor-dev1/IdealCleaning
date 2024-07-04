import request from "./config";
const orders = {
  get_orders: (params) => request.get("/order/all", { params }),
  post_order: (data) => request.post("/order", data),
  delete_order: (id) => request.delete(`/order?id=${id}`),
  update_service: (data) => request.put("/order", data),
};

export default orders;
