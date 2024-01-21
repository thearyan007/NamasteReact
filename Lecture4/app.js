import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../Lecture4/assets/Logo-FoodApp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const restroData = [
  {
    info: {
      id: "21742",
      name: "Wow! Momo",
      cloudinaryImageId: "5a148e63e9c54942e37627da1aa156be",
      locality: "Huda Market",
      areaName: "Sector 31",
      costForTwo: "₹300 for two",
      cuisines: [
        "Tibetan",
        "Healthy Food",
        "Asian",
        "Chinese",
        "Snacks",
        "Continental",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4,
      parentId: "1776",
      avgRatingString: "4.0",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "33 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-22 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-ee9c5ac6-3344-4e9f-8775-0a77346a3699",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/wow-momo-huda-market-sector-31-gurgaon-21742",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "486182",
      name: "Chicago Pizza",
      cloudinaryImageId: "kwtd1gah2ad3xf6xrxwh",
      locality: "The Esplanade Mall",
      areaName: "Sector 37",
      costForTwo: "₹350 for two",
      cuisines: [],
      avgRating: 3.5,
      parentId: "60277",
      avgRatingString: "3.5",
      totalRatingsString: "100+",
      sla: {},
      availability: {},
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {},
      aggregatedDiscountInfoV3: {},
      orderabilityCommunication: {},
      differentiatedUi: {},
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-ee9c5ac6-3344-4e9f-8775-0a77346a3699",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/chicago-pizza-the-esplanade-mall-sector-37-gurgaon-486182",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "154653",
      name: "Jagdish Vaishno Dhaba",
      cloudinaryImageId: "seyuhw8itjtlmvm7wscy",
      locality: "Sector 4",
      areaName: "Old Railway Road",
      costForTwo: "₹250 for two",
      cuisines: ["Indian", "North Indian", "Biryani", "Tandoor", "Punjabi"],
      avgRating: 4.3,
      veg: true,
      parentId: "15300",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-21 23:20:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-ee9c5ac6-3344-4e9f-8775-0a77346a3699",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/jagdish-vaishno-dhaba-sector-4-old-railway-road-gurgaon-154653",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "27891",
      name: "Bakingo",
      cloudinaryImageId: "05994df0e49725bd230146c320b8f7aa",
      locality: "Old DLF Colony",
      areaName: "Sector 14",
      costForTwo: "₹300 for two",
      cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
      avgRating: 4.4,
      parentId: "3818",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "32 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-22 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-ee9c5ac6-3344-4e9f-8775-0a77346a3699",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/bakingo-old-dlf-colony-sector-14-gurgaon-27891",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "125878",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Old Railway Road",
      areaName: "Sector 4",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.1,
      parentId: "166",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-22 03:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-ee9c5ac6-3344-4e9f-8775-0a77346a3699",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-old-railway-road-sector-4-gurgaon-125878",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "676065",
      name: "Civil Lines Wala",
      cloudinaryImageId: "3fdf3d7e951ea446d5ffa2e098f39d10",
      locality: "Judiciary Complex",
      areaName: "Civil Lines",
      costForTwo: "₹300 for two",
      cuisines: ["Fast Food"],
      avgRating: 4.5,
      veg: true,
      parentId: "63552",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-21 17:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-ee9c5ac6-3344-4e9f-8775-0a77346a3699",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/civil-lines-wala-judiciary-complex-civil-lines-gurgaon-676065",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "514911",
      name: "KFC",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      locality: "Huda Market",
      areaName: "Sector 37",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4,
      parentId: "547",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-22 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-ee9c5ac6-3344-4e9f-8775-0a77346a3699",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-huda-market-sector-37-gurgaon-514911",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "612059",
      name: "Domino's Pizza",
      cloudinaryImageId: "uxmdoori46ztxe0pfpwf",
      locality: "Sadar Bazar",
      areaName: "Sector 11",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.2,
      parentId: "2456",
      avgRatingString: "4.2",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-22 00:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-ee9c5ac6-3344-4e9f-8775-0a77346a3699",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-sadar-bazar-sector-11-gurgaon-612059",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "651214",
      name: "McDonald's",
      cloudinaryImageId: "ecd32b841549ce6bfd993260a2086c1f",
      locality: "Huda Market",
      areaName: "Sector 77",
      costForTwo: "₹400 for two",
      cuisines: ["American", "Fast Food"],
      avgRating: 4.2,
      parentId: "630",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 39,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "39 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-21 23:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-ee9c5ac6-3344-4e9f-8775-0a77346a3699",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-huda-market-sector-77-gurgaon-651214",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const Header = () => (
  <div className="Header">
    <div className="logo-container">
      <img src={logo} alt="food-app Logo" />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const Restaurants = (props) => {
  const { restData } = props;
  return (
    <div className="restaurant">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          restData.info.cloudinaryImageId
        }
        alt="resto-Image"
      />
      <h2>{restData.info.name}</h2>
      <h4>{restData.info.cuisines.join(", ")}</h4>
      <h4>Rating:{restData.info.avgRating} </h4>
      <h4>{restData.info.areaName}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body-container">
      <div className="search">
        <input
          className="search-bar"
          type="text"
          placeholder="Search..."
        ></input>
        <button type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className="restaurants-container">
        <Restaurants restData={restroData[0]} />
        <Restaurants restData={restroData[1]} />
        <Restaurants restData={restroData[2]} />
        <Restaurants restData={restroData[3]} />
        <Restaurants restData={restroData[4]} />
        <Restaurants restData={restroData[5]} />
      </div>
    </div>
  );
};

const Footer = () => {
  return;
};

const AppLayout = () => (
  <div className="AppLayout">
    <Header />
    <Body />
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
