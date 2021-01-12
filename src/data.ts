interface ProductsData {
  categoryHeading: string;
  categoryLink: string;
  products: {
    _id: string;
    name: string;
    imgUrl: string;
    category: string;
    brandName: string;
    priceActual: number;
    priceDiscounted?: number;
    discountPercentage?: number;
    reviewCount?: number;
  }[];
}

export const viewedRelatedProductsData: ProductsData = {
  categoryHeading: "Related to items you've viewed",
  categoryLink: "/",
  products: [
    {
      _id: "1",
      name: "Camelbak Chute Vacuum Stainless - Cascade",
      imgUrl:
        "https://www.camelbak.com/dw/image/v2/BDBJ_PRD/on/demandware.static/-/Sites-camelbak-master-catalog/default/dwfead3505/images/large/1517005012C_V1.jpg?sw=590&sh=650&sm=fit",
      category: "Bottle",
      brandName: "Camelbak",
      priceActual: 4000,
      priceDiscounted: 2999,
      discountPercentage: 75,
      reviewCount: 50,
    },
    {
      _id: "2",
      name: "Camelbak Chute Vacuum Stainless - Cascade",
      imgUrl: "https://m.media-amazon.com/images/I/41kaOFDXzSL._AC_SY200_.jpg",
      category: "Gaming Accessories",
      brandName: "Sony",
      priceActual: 4000,
      priceDiscounted: 2999,
      discountPercentage: 75,
      reviewCount: 50,
    },
    {
      _id: "3",
      name: "Camelbak Chute Vacuum Stainless - Cascade",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/appcore/phone/12phone/AMZ_FamiyStripe_iPhone_12ProMax.png",
      category: "Cell Phone",
      brandName: "Apple",
      priceActual: 4000,
      priceDiscounted: 2999,
      discountPercentage: 75,
      reviewCount: 50,
    },
    {
      _id: "4",
      name: "Camelbak Chute Vacuum Stainless - Cascade",
      imgUrl: "https://m.media-amazon.com/images/I/61nwVjadYAL._AC_UY218_.jpg",
      category: "Tvs",
      brandName: "Microsoft",
      priceActual: 4000,
      priceDiscounted: 2999,
      discountPercentage: 75,
      reviewCount: 10,
    },
    {
      _id: "5",
      name: "Camelbak Chute Vacuum Stainless - Cascade",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SX679_.jpg",
      category: "Laptops & Computers",
      brandName: "Samsung",
      priceActual: 4000,
      priceDiscounted: 2999,
      discountPercentage: 75,
      reviewCount: 50,
    },
    {
      _id: "6",
      name: "Camelbak Chute Vacuum Stainless - Cascade",
      imgUrl:
        "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/rv_6_62939-153636.png",
      category: "Kitchen Appliances",
      brandName: "Samsung",
      priceActual: 4000,
      priceDiscounted: 2999,
      discountPercentage: 75,
      reviewCount: 50,
    },
    {
      _id: "7",
      name: "Camelbak Chute Vacuum Stainless - Cascade",
      imgUrl:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6355/6355745_sd.jpg;maxHeight=640;maxWidth=550",
      category: "Major Appliances",
      brandName: "Samsung",
      priceActual: 4000,
      priceDiscounted: 2999,
      discountPercentage: 75,
      reviewCount: 50,
    },
    {
      _id: "8",
      name: "Camelbak Chute Vacuum Stainless - Cascade",
      imgUrl:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6420/6420838_sd.jpg",
      category: "Cell Phone",
      brandName: "Samsung",
      priceActual: 4000,
      priceDiscounted: 2999,
      discountPercentage: 75,
      reviewCount: 50,
    },
  ],
};

export const topSellingProductsData: ProductsData = {
  categoryHeading: "Top selling products",
  categoryLink: "/",
  products: [
    {
      _id: "1",
      name: "Camelbak Chute Vacuum Stainless - Cascade",
      imgUrl:
        "https://www.camelbak.com/dw/image/v2/BDBJ_PRD/on/demandware.static/-/Sites-camelbak-master-catalog/default/dwfead3505/images/large/1517005012C_V1.jpg?sw=590&sh=650&sm=fit",
      category: "Bottle",
      brandName: "Camelbak",
      priceActual: 4000,
      priceDiscounted: 2999,
      discountPercentage: 75,
      reviewCount: 50,
    },
    {
      _id: "2",
      name: "Camelbak Chute Vacuum Stainless - Cascade",
      imgUrl: "https://m.media-amazon.com/images/I/41kaOFDXzSL._AC_SY200_.jpg",
      category: "Gaming Accessories",
      brandName: "Sony",
      priceActual: 4000,
      priceDiscounted: 2999,
      discountPercentage: 75,
      reviewCount: 50,
    },
    {
      _id: "3",
      name: "Camelbak Chute Vacuum Stainless - Cascade",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/appcore/phone/12phone/AMZ_FamiyStripe_iPhone_12ProMax.png",
      category: "Cell Phone",
      brandName: "Apple",
      priceActual: 4000,
      priceDiscounted: 2999,
      discountPercentage: 75,
      reviewCount: 50,
    },
    {
      _id: "4",
      name: "Camelbak Chute Vacuum Stainless - Cascade",
      imgUrl: "https://m.media-amazon.com/images/I/61nwVjadYAL._AC_UY218_.jpg",
      category: "Tvs",
      brandName: "Microsoft",
      priceActual: 4000,
      priceDiscounted: 2999,
      discountPercentage: 75,
      reviewCount: 10,
    },
    {
      _id: "5",
      name: "Camelbak Chute Vacuum Stainless - Cascade",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SX679_.jpg",
      category: "Laptops & Computers",
      brandName: "Samsung",
      priceActual: 4000,
      priceDiscounted: 2999,
      discountPercentage: 75,
      reviewCount: 50,
    },
    {
      _id: "6",
      name: "Camelbak Chute Vacuum Stainless - Cascade",
      imgUrl:
        "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/rv_6_62939-153636.png",
      category: "Kitchen Appliances",
      brandName: "Samsung",
      priceActual: 4000,
      priceDiscounted: 2999,
      discountPercentage: 75,
      reviewCount: 50,
    },
    {
      _id: "7",
      name: "Camelbak Chute Vacuum Stainless - Cascade",
      imgUrl:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6355/6355745_sd.jpg;maxHeight=640;maxWidth=550",
      category: "Major Appliances",
      brandName: "Samsung",
      priceActual: 4000,
      priceDiscounted: 2999,
      discountPercentage: 75,
      reviewCount: 50,
    },
    {
      _id: "8",
      name: "Camelbak Chute Vacuum Stainless - Cascade",
      imgUrl:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6420/6420838_sd.jpg",
      category: "Cell Phone",
      brandName: "Samsung",
      priceActual: 4000,
      priceDiscounted: 2999,
      discountPercentage: 75,
      reviewCount: 50,
    },
  ],
};

export const featuredProductsData: ProductsData = {
  categoryHeading: "Featured products",
  categoryLink: "/",
  products: [
    {
      _id: "1",
      name: "Camelbak Chute Vacuum Stainless - Cascade",
      imgUrl:
        "https://www.camelbak.com/dw/image/v2/BDBJ_PRD/on/demandware.static/-/Sites-camelbak-master-catalog/default/dwfead3505/images/large/1517005012C_V1.jpg?sw=590&sh=650&sm=fit",
      category: "Bottle",
      brandName: "Camelbak",
      priceActual: 4000,
      priceDiscounted: 2999,
      discountPercentage: 75,
      reviewCount: 50,
    },
    {
      _id: "2",
      name: "Camelbak Chute Vacuum Stainless - Cascade",
      imgUrl: "https://m.media-amazon.com/images/I/41kaOFDXzSL._AC_SY200_.jpg",
      category: "Gaming Accessories",
      brandName: "Sony",
      priceActual: 4000,
      priceDiscounted: 2999,
      discountPercentage: 75,
      reviewCount: 50,
    },
    {
      _id: "3",
      name: "Camelbak Chute Vacuum Stainless - Cascade",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/appcore/phone/12phone/AMZ_FamiyStripe_iPhone_12ProMax.png",
      category: "Cell Phone",
      brandName: "Apple",
      priceActual: 4000,
      priceDiscounted: 2999,
      discountPercentage: 75,
      reviewCount: 50,
    },
    {
      _id: "4",
      name: "Camelbak Chute Vacuum Stainless - Cascade",
      imgUrl: "https://m.media-amazon.com/images/I/61nwVjadYAL._AC_UY218_.jpg",
      category: "Tvs",
      brandName: "Microsoft",
      priceActual: 4000,
      priceDiscounted: 2999,
      discountPercentage: 75,
      reviewCount: 10,
    },
    {
      _id: "5",
      name: "Camelbak Chute Vacuum Stainless - Cascade",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SX679_.jpg",
      category: "Laptops & Computers",
      brandName: "Samsung",
      priceActual: 4000,
      priceDiscounted: 2999,
      discountPercentage: 75,
      reviewCount: 50,
    },
    {
      _id: "6",
      name: "Camelbak Chute Vacuum Stainless - Cascade",
      imgUrl:
        "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/rv_6_62939-153636.png",
      category: "Kitchen Appliances",
      brandName: "Samsung",
      priceActual: 4000,
      priceDiscounted: 2999,
      discountPercentage: 75,
      reviewCount: 50,
    },
    {
      _id: "7",
      name: "Camelbak Chute Vacuum Stainless - Cascade",
      imgUrl:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6355/6355745_sd.jpg;maxHeight=640;maxWidth=550",
      category: "Major Appliances",
      brandName: "Samsung",
      priceActual: 4000,
      priceDiscounted: 2999,
      discountPercentage: 75,
      reviewCount: 50,
    },
    {
      _id: "8",
      name: "Camelbak Chute Vacuum Stainless - Cascade",
      imgUrl:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6420/6420838_sd.jpg",
      category: "Cell Phone",
      brandName: "Samsung",
      priceActual: 4000,
      priceDiscounted: 2999,
      discountPercentage: 75,
      reviewCount: 50,
    },
  ],
};

export const imgLinks: string[] = [
  "/images/Holiday_Dash.jpg",
  "/images/we_Ship.jpg",
  "/images/start_on_your_holiday_list_earlier.jpg",
  "/images/shop_computer_and_accessories.jpg",
  "/images/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg",
  "/images/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg",
  "/images/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg",
  "/images/Fuji_TallHero_Click_here_to_shop.jpg",
  "/images/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg",
];

export const categories: { name: string; url: string }[] = [
  {
    name: "TVs",
    url:
      "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/GL-54667-ghp-img-icons-tv-197308.png;maxWidth=220",
  },
  {
    name: "Laptops & Computers",
    url: "https://m.media-amazon.com/images/I/41kaOFDXzSL._AC_SY200_.jpg",
  },
  {
    name: "Tablets & E-Readers",
    url:
      "https://images-na.ssl-images-amazon.com/images/G/01/appcore/phone/12phone/AMZ_FamiyStripe_iPhone_12ProMax.png",
  },
  {
    name: "Video Games, Consoles & VR",
    url:
      "https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SX679_.jpg",
  },
  {
    name: "Cell Phones",
    url:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6420/6420838_sd.jpg",
  },
  {
    name: "Major Appliances",
    url:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6355/6355745_sd.jpg;maxHeight=640;maxWidth=550",
  },
  {
    name: "TVs",
    url:
      "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/rv_6_62939-153636.png",
  },
  {
    name: "TVs",
    url:
      "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/rv_6_62939-153636.png",
  },
  {
    name: "TVs",
    url:
      "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/GL-54667-ghp-img-icons-tv-197308.png;maxWidth=220",
  },
  {
    name: "TVs",
    url:
      "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/GL-54667-ghp-img-icons-tv-197308.png;maxWidth=220",
  },
  {
    name: "TVs",
    url:
      "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/GL-54667-ghp-img-icons-tv-197308.png;maxWidth=220",
  },
  {
    name: "TVs",
    url:
      "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/GL-54667-ghp-img-icons-tv-197308.png;maxWidth=220",
  },
  {
    name: "TVs",
    url:
      "https://www.camelbak.com/dw/image/v2/BDBJ_PRD/on/demandware.static/-/Sites-camelbak-master-catalog/default/dwc9396867/images/large/1515701060C_V1.jpg?sw=188&sh=240&sm=fit",
  },
  {
    name: "TVs",
    url:
      "https://www.camelbak.com/dw/image/v2/BDBJ_PRD/on/demandware.static/-/Sites-camelbak-master-catalog/default/dwc9396867/images/large/1515701060C_V1.jpg?sw=188&sh=240&sm=fit",
  },
  {
    name: "TVs",
    url:
      "https://www.camelbak.com/dw/image/v2/BDBJ_PRD/on/demandware.static/-/Sites-camelbak-master-catalog/default/dwc9396867/images/large/1515701060C_V1.jpg?sw=188&sh=240&sm=fit",
  },
  {
    name: "TVs",
    url:
      "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/GL-54667-ghp-img-icons-tv-197308.png;maxWidth=220",
  },
  {
    name: "TVs",
    url:
      "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/GL-54667-ghp-img-icons-tv-197308.png;maxWidth=220",
  },
  {
    name: "TVs",
    url:
      "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/GL-54667-ghp-img-icons-tv-197308.png;maxWidth=220",
  },
];

export const categoriesMenuMainData: { _id: string; category: string }[] = [
  {
    _id: "1",
    category: "Appliances",
  },
  {
    _id: "2",
    category: "TV & Home Theater",
  },
  {
    _id: "3",
    category: "Computers & Tablets",
  },
  {
    _id: "4",
    category: "Cameras, Camcorders & Drones",
  },
  {
    _id: "5",
    category: "Cell Phones",
  },
  {
    _id: "6",
    category: "Audio",
  },
  {
    _id: "7",
    category: "Video Games",
  },
  {
    _id: "8",
    category: "Movies & Music",
  },
  {
    _id: "9",
    category: "Car Electronics & GPS",
  },
  {
    _id: "10",
    category: "Wearable Technology",
  },
  {
    _id: "11",
    category: "Health, Fitness & Personal Care",
  },
  {
    _id: "12",
    category: "Sustainable Living",
  },
  {
    _id: "13",
    category: "Home, Furniture & Office",
  },
  {
    _id: "14",
    category: "Smart Home, Security & WIFI",
  },
  {
    _id: "15",
    category: "Toys, Games & Collectibles",
  },
];

export const appliancesCategoriesMenu: string[] = [
  "Major Kitchen Appliances",
  "Small Kitchen Appliances",
  "Luxury Kitchen Appliances",
  "Washers & Dryers",
  "Vacuum & Floor Care",
  "Heating, Cooling & Air Quality",
  "Microwave Oven",
  "Washing Machine",
];
