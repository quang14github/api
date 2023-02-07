// Customer
// Personal information
// 1. View information
request = {
  method: "GET",
  url: "account/",
  params: {
    account_id: "1234",
  },
};

response = {
  payload: {
    phone_number: "012132",
    status: "Gold Member",
  },
};

// Product
// 1. view list of products
var request = {
  method: "GET",
  url: "products/list",
  params: {
    category: "shirt",
    sortBy: "name",
    sortOrder: "descending",
  },
};

var response = {
  payload: {
    products: [
      {
        product_id: "1",
        product_title: "T-Shrirt",
        image_url:
          "https://media.kohlsimg.com/is/image/kohls/4426788_Sandalwood_Red?wid=180&hei=180&op_sharpen=1",
        price: 20,
      },
      {
        product_id: "12",
        product_title: "Flannel",
        image_url:
          "https://media.kohlsimg.com/is/image/kohls/4426788_Sandalwood_Red?wid=180&hei=180&op_sharpen=1",
        price: 10,
      },
    ],
  },
};

// 2. View detail of a product

request = {
  method: "GET",
  url: "products/detail",
  params: {
    product_id: "12",
  },
};

response = {
  payload: {
    price: 20,
    image_url:
      "https://media.kohlsimg.com/is/image/kohls/4426788_Sandalwood_Red?wid=180&hei=180&op_sharpen=1",
    available_colors: ["red", "green", "blue"],
    available_sizes: ["S", "M", "L", "XL"],
    stock: 99,
  },
};

// Cart
// 1. Add product to cart
request = {
  method: "POST",
  url: "cart/add",
  params: {
    product_id: "12",
    quantity: 1,
    color: "red",
    size: "M",
  },
};

// 2. View cart items
request = {
  method: "GET",
  url: "cart/view",
};

response = {
  payload: {
    products: [
      {
        product_id: "1",
        product_title: "T-Shrirt",
        image_url:
          "https://media.kohlsimg.com/is/image/kohls/4426788_Sandalwood_Red?wid=180&hei=180&op_sharpen=1",
        price: 20,
        quantity: 1,
        color: "green",
        size: "M",
      },
      {
        product_id: "12",
        product_title: "Flannel",
        image_url:
          "https://media.kohlsimg.com/is/image/kohls/4426788_Sandalwood_Red?wid=180&hei=180&op_sharpen=1",
        price: 10,
        color: "green",
        size: "S",
      },
    ],
    total_original_price: 1000,
  },
};

// 3. Update cart items
request = {
  method: "PUT",
  url: "cart/update",
  params: {
    product_id: "12",
    quantity: "2",
  },
};

// 4. Delete cart items
request = {
  method: "DELETE",
  url: "cart/delete",
  params: {
    product_id: "12",
  },
};

// 5. Apply voucher

request = {
  method: "GET",
  url: "cart/voucher",
  params: {
    voucher_code: "SALE10",
  },
};

response = {
  payload: {
    total_original_price: 1000,
    total_discount_price: 100,
    total_checkout_price: 900,
  },
};

// 6. Checkout cart

request = {
  method: "POST",
  url: "cart/checkout",
  params: {},
};
