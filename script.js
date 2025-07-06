const products = [
  { name: "Smartphone", category: "electronics", price: 699, rating: 4.5, image: "https://via.placeholder.com/150", description: "Latest smartphone with advanced features." },
  { name: "Bluetooth Speaker", category: "electronics", price: 99, rating: 4.3, image: "https://via.placeholder.com/150", description: "Portable speaker with high-quality sound." },
  { name: "Laptop", category: "electronics", price: 1099, rating: 4.8, image: "https://via.placeholder.com/150", description: "Powerful laptop for work and gaming." },
  { name: "LED TV", category: "electronics", price: 499, rating: 4.4, image: "https://via.placeholder.com/150", description: "Crystal clear display with smart features." },
  { name: "Jeans", category: "clothing", price: 39, rating: 4.2, image: "https://via.placeholder.com/150", description: "Comfortable and stylish denim jeans." },
  { name: "T-Shirt", category: "clothing", price: 15, rating: 4.1, image: "https://via.placeholder.com/150", description: "Casual cotton t-shirt for everyday wear." },
  { name: "Leather Jacket", category: "clothing", price: 129, rating: 4.6, image: "https://via.placeholder.com/150", description: "Premium leather jacket for a bold look." },
  { name: "Sneakers", category: "clothing", price: 89, rating: 4.5, image: "https://via.placeholder.com/150", description: "Trendy and comfortable sneakers." },
  { name: "Office Chair", category: "furniture", price: 159, rating: 4.3, image: "https://via.placeholder.com/150", description: "Ergonomic office chair for comfort." },
  { name: "Wooden Table", category: "furniture", price: 259, rating: 4.4, image: "https://via.placeholder.com/150", description: "Durable wooden table for home or office." },
  { name: "Bookshelf", category: "furniture", price: 199, rating: 4.2, image: "https://via.placeholder.com/150", description: "Spacious bookshelf for organizing books." },
  { name: "Tennis Racket", category: "sports", price: 79, rating: 4.5, image: "https://via.placeholder.com/150", description: "Lightweight racket for performance play." },
  { name: "Football", category: "sports", price: 29, rating: 4.1, image: "https://via.placeholder.com/150", description: "Durable football for training and matches." },
  { name: "Yoga Mat", category: "sports", price: 25, rating: 4.3, image: "https://via.placeholder.com/150", description: "Non-slip yoga mat for all levels." },
  { name: "Running Shoes", category: "sports", price: 69, rating: 4.6, image: "https://via.placeholder.com/150", description: "Comfortable shoes for running and gym." },
];

const productContainer = document.getElementById("productContainer");
const categoryFilter = document.getElementById("categoryFilter");
const sortOption = document.getElementById("sortOption");

function displayProducts(productList) {
  productContainer.innerHTML = "";
  productList.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="price">₹${product.price}</p>
      <p class="rating">⭐ ${product.rating}</p>
    `;

    card.addEventListener("click", () => {
  console.log("Clicked:", product.name);
  localStorage.setItem("selectedProduct", JSON.stringify(product));
  window.location.href = "Product-detail.html";
});


    productContainer.appendChild(card);
  });
}

function filterAndSortProducts() {
  let filteredProducts = [...products];

  const selectedCategory = categoryFilter.value;
  if (selectedCategory !== "all") {
    filteredProducts = filteredProducts.filter(p => p.category === selectedCategory);
  }

  const sortValue = sortOption.value;
  if (sortValue === "price-low-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortValue === "price-high-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortValue === "rating-high-low") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filteredProducts);
}

categoryFilter.addEventListener("change", filterAndSortProducts);
sortOption.addEventListener("change", filterAndSortProducts);

// Initial Display
displayProducts(products);
