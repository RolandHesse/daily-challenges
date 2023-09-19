import { getProductById } from "@/services/productServices.js";

export default function handler(request, response) {
  const routerId = request.query.id;
  const product = getProductById(routerId);

  if (!product) {
    return response.status(404).json({ status: "Not found" });
  }

  response.status(200).json(product);
}
