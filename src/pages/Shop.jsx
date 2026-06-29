import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Shop() {
const [searchParams] = useSearchParams();

const products = [




  {
    id: 1,
    name: "Red Rose Bouquet",
    price: 999,
    category: "Bouquet",
    image:
     "https://images.pexels.com/photos/22604232/pexels-photo-22604232.jpeg"
  },

  {
    id: 2,
    name: "Pink Rose Bouquet",
    price: 1299,
    category: "Bouquet",
    image:
      "https://images.pexels.com/photos/27358301/pexels-photo-27358301.jpeg",
  },

  {
    id: 3,
    name: "White Lily Bouquet",
    price: 1499,
    category: "Bouquet",
    image:
      "https://images.pexels.com/photos/28038077/pexels-photo-28038077.jpeg",
  },

  {
    id: 4,
    name: "Sunflower Bouquet",
    price: 1199,
    category: "Bouquet",
    image:
      "https://images.pexels.com/photos/32300948/pexels-photo-32300948.jpeg",
  },

  {
    id: 5,
    name: "Tulip Flower Bouquet",
    price: 1399,
    category: "Bouquet",
    image:
      "https://images.pexels.com/photos/37116667/pexels-photo-37116667.jpeg",
  },

  {
    id: 6,
    name: "Orchid Luxury Bouquet",
    price: 1799,
    category: "Bouquet",
    image:
      "https://images.pexels.com/photos/33058125/pexels-photo-33058125.jpeg",
  },

  // WEDDING PRODUCTS

  {
    id: 7,
    name: "Wedding Garland",
    price: 2499,
    category: "Wedding",
    image:
      "https://images.pexels.com/photos/35008069/pexels-photo-35008069.jpeg",
  },

  {
    id: 8,
    name: "Royal Mandap Decoration",
    price: 14999,
    category: "Wedding",
    image:
      "https://images.pexels.com/photos/30184621/pexels-photo-30184621.jpeg",
  },

  {
    id: 9,
    name: "Bride Entry Decoration",
    price: 7999,
    category: "Wedding",
    image:
      "https://images.pexels.com/photos/29492598/pexels-photo-29492598.jpeg",
  },

  {
    id: 10,
    name: "Wedding Stage Decoration",
    price: 19999,
    category: "Wedding",
    image:
      "https://images.pexels.com/photos/31045373/pexels-photo-31045373.jpeg",
  },

  {
    id: 11,
    name: "Wedding Reception Flowers",
    price: 9999,
    category: "Wedding",
    image:
      "https://images.pexels.com/photos/35985203/pexels-photo-35985203.jpeg",
  },

  {
    id: 12,
    name: "Couple Entry Decoration",
    price: 6999,
    category: "Wedding",
    image:
      "https://images.pexels.com/photos/25745095/pexels-photo-25745095.jpeg",
  },

  // CAR DECORATIONS

  {
    id: 13,
    name: "Luxury Wedding Car Decoration",
    price: 3999,
    category: "Car Decor",
    image:
      "https://images.pexels.com/photos/14745477/pexels-photo-14745477.jpeg",
  },

  {
    id: 14,
    name: "Premium Floral Car Decor",
    price: 4599,
    category: "Car Decor",
    image:
      "https://images.pexels.com/photos/37723506/pexels-photo-37723506.jpeg",
  },

  {
    id: 15,
    name: "Rose Car Decoration",
    price: 4999,
    category: "Car Decor",
    image:
      "https://images.pexels.com/photos/25052928/pexels-photo-25052928.jpeg",
  },

  // EVENT DECORATIONS

  {
    id: 16,
    name: "Birthday Decoration",
    price: 2999,
    category: "Event",
    image:
      "https://images.pexels.com/photos/17931469/pexels-photo-17931469.jpeg",
  },

  {
    id: 17,
    name: "Anniversary Decoration",
    price: 3499,
    category: "Event",
    image:
      "https://images.pexels.com/photos/33210256/pexels-photo-33210256.jpeg",
  },

  {
    id: 18,
    name: "Baby Shower Decoration",
    price: 4499,
    category: "Event",
    image:
      "https://images.pexels.com/photos/36856108/pexels-photo-36856108.jpeg",
  },

  {
    id: 19,
    name: "Engagement Decoration",
    price: 5999,
    category: "Event",
    image:
      "https://images.pexels.com/photos/26623743/pexels-photo-26623743.jpeg",
  },

  {
    id: 20,
    name: "Corporate Event Decoration",
    price: 8999,
    category: "Event",
    image:
      "https://images.pexels.com/photos/16930510/pexels-photo-16930510.jpeg",
  },

  {
    id: 21,
    name: "Romantic Candle Dinner Setup",
    price: 4999,
    category: "Event",
    image:
      "https://images.pexels.com/photos/30750211/pexels-photo-30750211.jpeg",
  },

  // TEMPLE FLOWERS

  {
    id: 22,
    name: "Temple Lotus Pack",
    price: 799,
    category: "Temple",
    image:
      "https://images.pexels.com/photos/34020112/pexels-photo-34020112.jpeg",
  },

  {
    id: 23,
    name: "Pooja Flower Basket",
    price: 599,
    category: "Temple",
    image:
      "https://images.pexels.com/photos/34473108/pexels-photo-34473108.jpeg",
  },

  {
    id: 24,
    name: "Marigold Flower Pack",
    price: 499,
    category: "Temple",
    image:
      "https://images.pexels.com/photos/8819252/pexels-photo-8819252.jpeg",
  },

  // VALENTINE SPECIAL

  {
    id: 25,
    name: "Valentine Rose Box",
    price: 2999,
    category: "Special",
    image:
      "https://images.pexels.com/photos/29400307/pexels-photo-29400307.jpeg",
  },

  {
    id: 26,
    name: "Heart Shape Flower Arrangement",
    price: 3499,
    category: "Special",
    image:
      "https://images.pexels.com/photos/25052914/pexels-photo-25052914.jpeg",
  },

  // PREMIUM DECOR

  {
    id: 27,
    name: "Luxury Hall Decoration",
    price: 24999,
    category: "Premium",
    image:
      "https://images.pexels.com/photos/17023053/pexels-photo-17023053.jpeg",
  },

  {
    id: 28,
    name: "Flower Wall Decoration",
    price: 9999,
    category: "Premium",
    image:
      "https://images.pexels.com/photos/18901458/pexels-photo-18901458.jpeg",
  },

  {
    id: 29,
    name: "Luxury Table Decoration",
    price: 5999,
    category: "Premium",
    image:
      "https://images.pexels.com/photos/16935995/pexels-photo-16935995.jpeg",
  },

  {
    id: 30,
    name: "Royal Entrance Decoration",
    price: 14999,
    category: "Premium",
    image:
      "https://images.pexels.com/photos/33485965/pexels-photo-33485965.jpeg",
  },
  
  // FESTIVAL DECORATIONS

  {
    id: 31,
    name: "Diwali Flower Decoration",
    price: 3999,
    category: "Festival",
    image:
      "https://images.pexels.com/photos/34473412/pexels-photo-34473412.jpeg",
  },

  {
    id: 32,
    name: "Ganpati Decoration",
    price: 6999,
    category: "Festival",
    image:
      "https://images.pexels.com/photos/18598380/pexels-photo-18598380.jpeg",
  },

  {
    id: 33,
    name: "Navratri Flower Setup",
    price: 5499,
    category: "Festival",
    image:
      "https://images.pexels.com/photos/32664903/pexels-photo-32664903.jpeg",
  },

  // FLOWER BASKETS

  {
    id: 34,
    name: "Premium Flower Basket",
    price: 1599,
    category: "Basket",
    image:
      "https://images.pexels.com/photos/37280225/pexels-photo-37280225.jpeg",
  },

  {
    id: 35,
    name: "Luxury Rose Basket",
    price: 1999,
    category: "Basket",
    image:
      "https://images.pexels.com/photos/12598862/pexels-photo-12598862.jpeg",
  },

  {
    id: 36,
    name: "Mixed Flower Basket",
    price: 1799,
    category: "Basket",
    image:
      "https://images.pexels.com/photos/15801491/pexels-photo-15801491.jpeg",
  },

  // ROOM DECOR

  {
    id: 37,
    name: "Romantic Bedroom Decoration",
    price: 7999,
    category: "Room Decor",
    image:
      "https://images.pexels.com/photos/25052912/pexels-photo-25052912.jpeg",
  },

  {
    id: 38,
    name: "Hotel Room Flower Decoration",
    price: 8999,
    category: "Room Decor",
    image:
      "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg",
  },

  {
    id: 39,
    name: "Proposal Decoration Setup",
    price: 11999,
    category: "Room Decor",
    image:
      "https://images.pexels.com/photos/36836185/pexels-photo-36836185.jpeg",
  },

  // OFFICE & CORPORATE

  {
    id: 40,
    name: "Office Flower Decoration",
    price: 9999,
    category: "Corporate",
    image:
      "https://images.pexels.com/photos/6400255/pexels-photo-6400255.jpeg",
  },

  {
    id: 41,
    name: "Corporate Stage Setup",
    price: 14999,
    category: "Corporate",
    image:
      "https://images.pexels.com/photos/16120243/pexels-photo-16120243.jpeg",
  },

  // ARTIFICIAL FLOWERS

  {
    id: 42,
    name: "Artificial Rose Set",
    price: 1299,
    category: "Artificial",
    image:
      "https://images.pexels.com/photos/36744333/pexels-photo-36744333.jpeg",
  },

  {
    id: 43,
    name: "Artificial Flower Wall",
    price: 6999,
    category: "Artificial",
    image:
      "https://images.pexels.com/photos/18319372/pexels-photo-18319372.jpeg",
  },

  // GIFT PRODUCTS

  {
    id: 44,
    name: "Flower Gift Box",
    price: 2499,
    category: "Gift",
    image:
      "https://images.pexels.com/photos/32397347/pexels-photo-32397347.jpeg",
  },

  {
    id: 45,
    name: "Chocolate Flower Combo",
    price: 2999,
    category: "Gift",
    image:
      "https://images.pexels.com/photos/34299986/pexels-photo-34299986.jpeg",
  },

  {
    id: 46,
    name: "Rose Teddy Combo",
    price: 3499,
    category: "Gift",
    image:
      "https://images.pexels.com/photos/30592588/pexels-photo-30592588.jpeg",
  },

  // FLOWER JEWELLERY

  {
    id: 47,
    name: "Haldi Flower Jewellery",
    price: 2499,
    category: "Jewellery",
    image:
      "https://images.pexels.com/photos/33078539/pexels-photo-33078539.jpeg",
  },

  {
    id: 48,
    name: "Bride Flower Jewellery Set",
    price: 3999,
    category: "Jewellery",
    image:
      "https://images.pexels.com/photos/33078521/pexels-photo-33078521.jpeg",
  },

  // SPECIAL FLOWER PRODUCTS

  {
    id: 49,
    name: "Flower Ceiling Decoration",
    price: 14999,
    category: "Luxury",
    image:
      "https://images.pexels.com/photos/19655361/pexels-photo-19655361.jpeg",
  },

  {
    id: 50,
    name: "Royal Wedding Entry Gate",
    price: 24999,
    category: "Luxury",
    image:
      "https://images.pexels.com/photos/33417236/pexels-photo-33417236.jpeg",
  },

  // FARM FLOWERS

  {
    id: 51,
    name: "Fresh Jasmine Flowers",
    price: 499,
    category: "Flowers",
    image:
      "https://images.pexels.com/photos/29155321/pexels-photo-29155321.jpeg",
  },

  {
    id: 52,
    name: "Fresh Lavender Flowers",
    price: 799,
    category: "Flowers",
    image:
      "https://images.pexels.com/photos/207518/pexels-photo-207518.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },

  {
    id: 53,
    name: "Fresh Daisy Bouquet",
    price: 999,
    category: "Flowers",
    image:
      "https://images.pexels.com/photos/23947828/pexels-photo-23947828.jpeg",
  },

  // HALDI DECOR

  {
    id: 54,
    name: "Haldi Ceremony Decoration",
    price: 12999,
    category: "Haldi",
    image:
      "https://images.pexels.com/photos/12153938/pexels-photo-12153938.jpeg",
  },

  {
    id: 55,
    name: "Yellow Flower Haldi Setup",
    price: 9999,
    category: "Haldi",
    image:
      "https://images.pexels.com/photos/36943247/pexels-photo-36943247.jpeg",
  },

  // MEHENDI DECOR

  {
    id: 56,
    name: "Mehendi Decoration",
    price: 14999,
    category: "Mehendi",
    image:
      "https://images.pexels.com/photos/32866203/pexels-photo-32866203.jpeg",
  },

  {
    id: 57,
    name: "Traditional Mehendi Setup",
    price: 16999,
    category: "Mehendi",
    image:
      "https://images.pexels.com/photos/31032216/pexels-photo-31032216.jpeg",
  },

  // RECEPTION PRODUCTS

  {
    id: 58,
    name: "Reception Flower Stage",
    price: 24999,
    category: "Reception",
    image:
      "https://images.pexels.com/photos/33914530/pexels-photo-33914530.jpeg",
  },

  {
    id: 59,
    name: "Luxury Reception Decoration",
    price: 29999,
    category: "Reception",
    image:
      "https://images.pexels.com/photos/33852463/pexels-photo-33852463.jpeg",
  },

  // FLOWER ARCH

  {
    id: 60,
    name: "Wedding Flower Arch",
    price: 11999,
    category: "Decoration",
    image:
      "https://images.pexels.com/photos/14703685/pexels-photo-14703685.jpeg",
  },

  {
    id: 61,
    name: "Garden Entry Arch",
    price: 8999,
    category: "Decoration",
    image:
      "https://images.pexels.com/photos/32994505/pexels-photo-32994505.jpeg",
  },

  // HANGING FLOWERS

  {
    id: 62,
    name: "Ceiling Hanging Flowers",
    price: 15999,
    category: "Luxury",
    image:
      "https://images.pexels.com/photos/16120199/pexels-photo-16120199.jpeg",
  },

  {
    id: 63,
    name: "Crystal Flower Chandelier",
    price: 19999,
    category: "Luxury",
    image:
      "https://images.pexels.com/photos/13045665/pexels-photo-13045665.jpeg",
  },

  // DINING DECOR

  {
    id: 64,
    name: "Romantic Dinner Decoration",
    price: 6999,
    category: "Dining",
    image:
      "https://images.pexels.com/photos/34546068/pexels-photo-34546068.jpeg",
  },

  {
    id: 65,
    name: "Luxury Table Flower Decor",
    price: 4999,
    category: "Dining",
    image:
      "https://images.pexels.com/photos/32994465/pexels-photo-32994465.jpeg",
  },

  // ANNIVERSARY SPECIAL

  {
    id: 66,
    name: "25th Anniversary Decoration",
    price: 11999,
    category: "Anniversary",
    image:
      "https://images.pexels.com/photos/14457447/pexels-photo-14457447.jpeg",
  },

  {
    id: 67,
    name: "Golden Anniversary Setup",
    price: 14999,
    category: "Anniversary",
    image:
      "https://images.pexels.com/photos/7826296/pexels-photo-7826296.jpeg",
  },

  // PHOTO SHOOT DECOR

  {
    id: 68,
    name: "Pre Wedding Decoration",
    price: 9999,
    category: "Photoshoot",
    image:
      "https://images.pexels.com/photos/27635420/pexels-photo-27635420.jpeg",
  },

  {
    id: 69,
    name: "Flower Photoshoot Setup",
    price: 7999,
    category: "Photoshoot",
    image:
      "https://images.pexels.com/photos/23947594/pexels-photo-23947594.jpeg",
  },

  // BABY EVENTS

  {
    id: 70,
    name: "Naming Ceremony Decoration",
    price: 6999,
    category: "Baby Event",
    image:
      "https://images.pexels.com/photos/36976741/pexels-photo-36976741.jpeg",
  },

  {
    id: 71,
    name: "Baby Welcome Decoration",
    price: 8999,
    category: "Baby Event",
    image:
      "https://images.pexels.com/photos/11883322/pexels-photo-11883322.jpeg",
  },

  // GARDEN DECOR

  {
    id: 72,
    name: "Garden Wedding Setup",
    price: 34999,
    category: "Garden",
    image:
      "https://images.pexels.com/photos/4695337/pexels-photo-4695337.jpeg",
  },

  {
    id: 73,
    name: "Outdoor Flower Decoration",
    price: 19999,
    category: "Garden",
    image:
      "https://images.pexels.com/photos/20199364/pexels-photo-20199364.jpeg",
  },

  // NIGHT DECOR

  {
    id: 74,
    name: "Night Wedding Lighting Decor",
    price: 24999,
    category: "Night Event",
    image:
      "https://images.pexels.com/photos/10994594/pexels-photo-10994594.jpeg",
  },

  {
    id: 75,
    name: "Luxury Night Reception Setup",
    price: 29999,
    category: "Night Event",
    image:
      "https://images.pexels.com/photos/37331161/pexels-photo-37331161.jpeg",
  },
  
{
  id: 76,
  name: "Beach Wedding Decoration",
  price: 45999,
  category: "Luxury Wedding",
  image:
    "https://images.pexels.com/photos/169196/pexels-photo-169196.jpeg",
}
];

const categories = [
  "All",
  ...new Set(products.map((product) => product.category)),
];

const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
const [selectedCategory, setSelectedCategory] = useState("All");
const [sortBy, setSortBy] = useState("featured");

useEffect(() => {
  setSearchTerm(searchParams.get("search") || "");
}, [searchParams]);

const filteredProducts = (() => {
  const query = searchTerm.trim().toLowerCase();

  return products
    .filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return a.id - b.id;
    });
})();


  return (

    <div
      className="bg-light pv-page-soft"
      style={{
        minHeight: "100vh",
        paddingTop: "120px",
        paddingBottom: "60px",
      }}
    >

      {/* HEADER */}

      <div className="container">

        <div className="text-center mb-5">

          <h1
            className="fw-bold"
            style={{
              fontSize: "clamp(2.5rem,5vw,4rem)",
            }}
          >
            Our Flower Collection
          </h1>

          <p
            className="text-muted fs-5"
            style={{
              maxWidth: "700px",
              margin: "auto",
            }}
          >
            Premium floral products and event decorations
            crafted beautifully for every celebration.
          </p>

        </div>

        <div className="pv-shop-toolbar shadow-lg mb-5">
          <div className="row g-3 align-items-center">
            <div className="col-lg-5">
              <label className="form-label fw-semibold">
                Search products
              </label>
              <div className="input-group">
                <span className="input-group-text border-0">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="search"
                  className="form-control p-3"
                  placeholder="Search bouquets, wedding decor, haldi..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <label className="form-label fw-semibold">
                Category
              </label>
              <select
                className="form-select p-3"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-lg-3 col-md-6">
              <label className="form-label fw-semibold">
                Sort by
              </label>
              <select
                className="form-select p-3"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </div>

            <div className="col-lg-1 d-flex align-items-end">
              <div className="pv-result-count w-100 text-center">
                {filteredProducts.length}
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCTS */}


<div className="row g-4">

  {filteredProducts.map((product) => (

    <ProductCard
      key={product.id}
      product={product}
    />

  ))}

  {filteredProducts.length === 0 && (
    <div className="col-12">
      <div className="text-center pv-empty-state shadow-lg">
        <i className="bi bi-search display-4"></i>
        <h2 className="fw-bold mt-3">
          No products found
        </h2>
        <p className="text-muted mb-0">
          Try another search or choose a different category.
        </p>
      </div>
    </div>
  )}

</div>

              </div>

            
          

        </div>

      

    

  );
}

export default Shop;
