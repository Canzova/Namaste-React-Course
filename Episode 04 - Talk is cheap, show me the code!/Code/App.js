import React from "react";
import ReactDOM from "react-dom/client";
import QuickEats from "./images/QuickEats.png";
// import alpha from "./images/Alpha-Biryani.avif";
const root = ReactDOM.createRoot(document.getElementById("root"));

// !For Icons
import { FaHome } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { IoFastFoodSharp } from "react-icons/io5";
import { BiSolidLogInCircle } from "react-icons/bi";

// For inline css
const headerStyle = {
  background: "#f0f0f0",
};
const Header = () => {
  return (
    <div className="header">
      {/* <div className="header" style={headerStyle}> */}
      <div className="logo-container">
        <img className="logo" src={QuickEats} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <a href="#">
            <li>
              <FaHome />
              <span>Home</span>
            </li>
          </a>
          <a href="#">
            <li>
              <BiSolidOffer />
              <span>Offers</span>
            </li>
          </a>
          <a href="#">
            <li>
              <IoMdHelpCircle />
              <span>Help</span>
            </li>
          </a>
          <a href="#">
            <li>
              <BiSolidLogInCircle />
              <span>Sign In</span>
            </li>
          </a>
          <a href="#">
            <li>
              <IoFastFoodSharp />
              <span>Cart</span>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

const RestCard = (props) => {
  const { restInfo } = props;
  const { name, avgRating, cuisines, cloudinaryImageId } = restInfo?.info;
  const { deliveryTime } = restInfo?.info.sla;
  return (
    <div className="rest-card">
      <div className="rest-img-container">
        <img
          className="rest-img"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt=""
        />
      </div>
      <div className="rest-content">
        <h3>{name}</h3>
        <h5>
          {avgRating + "🌟"} <span>{deliveryTime + " mins"}</span>
        </h5>
        <div className="cuisines">{cuisines.join(", ")}</div>
      </div>
    </div>
  );
};

const restList = [
  {
    info: {
      id: "101059",
      name: "Manohar Dairy and Restaurant",
      cloudinaryImageId: "yhnrql8wxgu8sgqjczos",
      locality: "Hamidia Road",
      areaName: "Hamidia Road",
      costForTwo: "₹300 for two",
      cuisines: [
        "Sweets",
        "Beverages",
        "Desserts",
        "Snacks",
        "Chaat",
        "Street Food",
        "Chinese",
        "Bakery",
        "North Indian",
        "South Indian",
      ],
      avgRating: 4.6,
      veg: true,
      parentId: "7052",
      avgRatingString: "4.6",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-14 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
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
          textExtendedBadges: {},
        },
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
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/manohar-dairy-and-restaurant-hamidia-road-bhopal-101059",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "703152",
      name: "Indian Coffee House",
      cloudinaryImageId: "d088b6ece631fd100ead7b0cdaf93047",
      locality: "Batallion Hall and Cafeteria",
      areaName: "Police Headquarters",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Thalis", "Indian", "Fast Food", "Chinese"],
      avgRating: 4.3,
      parentId: "106448",
      avgRatingString: "4.3",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-14 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
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
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/indian-coffee-house-batallion-hall-and-cafeteria-police-headquarters-bhopal-703152",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "386982",
      name: "Manohar Dairy",
      cloudinaryImageId: "onrthurhbk4ztdnbbpwh",
      areaName: "10 no market",
      costForTwo: "₹350 for two",
      cuisines: [
        "Chaat",
        "Snacks",
        "Sweets",
        "Desserts",
        "Beverages",
        "Street Food",
        "Bakery",
      ],
      avgRating: 4.6,
      veg: true,
      parentId: "250194",
      avgRatingString: "4.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 47,
        lastMileTravel: 7.9,
        serviceability: "SERVICEABLE",
        slaString: "47 mins",
        lastMileTravelString: "7.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-14 22:10:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
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
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/manohar-dairy-10-no-market-bhopal-386982",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "92816",
      name: "Idli & More",
      cloudinaryImageId: "yti6qdbmzawis39mjfni",
      locality: "Hoshangabad Road",
      areaName: "Arera Colony",
      costForTwo: "₹250 for two",
      cuisines: ["South Indian", "Chinese", "Italian", "Beverages", "Indian"],
      avgRating: 4.4,
      parentId: "371274",
      avgRatingString: "4.4",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 47,
        lastMileTravel: 7.4,
        serviceability: "SERVICEABLE",
        slaString: "47 mins",
        lastMileTravelString: "7.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-14 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
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
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹175 OFF",
        subHeader: "ABOVE ₹449",
        discountTag: "FLAT DEAL",
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
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/idli-and-more-hoshangabad-road-arera-colony-bhopal-92816",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "84400",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Maharana Pratap Nagar",
      areaName: "Maharana Pratap Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.1,
      parentId: "166",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 39,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "39 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-15 03:00:00",
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
        header: "60% OFF",
        subHeader: "UPTO ₹120",
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
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-maharana-pratap-nagar-bhopal-84400",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "566245",
      name: "Faasos' Signature Wraps & Rolls",
      cloudinaryImageId: "c583ca6ce40b426797a78ae2ac91f2ec",
      locality: "Courtyard By Marriot",
      areaName: "Maharana Pratap Nagar",
      costForTwo: "₹350 for two",
      cuisines: [
        "Fast Food",
        "Snacks",
        "North Indian",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.2,
      parentId: "340366",
      avgRatingString: "4.2",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 6,
        serviceability: "SERVICEABLE",
        slaString: "43 mins",
        lastMileTravelString: "6.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-14 23:59:00",
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
        header: "50% OFF",
        subHeader: "UPTO ₹100",
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
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/faasos-signature-wraps-and-rolls-courtyard-by-marriot-maharana-pratap-nagar-bhopal-566245",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "263733",
      name: "Pure Veg Meals by Lunchbox",
      cloudinaryImageId: "qv2jbeieltor1lgurvg0",
      locality: "Chetak Bridge",
      areaName: "Maharana Pratap Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Biryani", "North Indian", "Desserts", "Beverages"],
      avgRating: 4.3,
      veg: true,
      parentId: "21938",
      avgRatingString: "4.3",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 6,
        serviceability: "SERVICEABLE",
        slaString: "43 mins",
        lastMileTravelString: "6.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-14 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
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
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
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
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/pure-veg-meals-by-lunchbox-chetak-bridge-maharana-pratap-nagar-bhopal-263733",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "593426",
      name: "Bhopal Baking Co. Arera colony",
      cloudinaryImageId: "06c2647a9e13e17b8611ff6dfb914c65",
      locality: "Arera Colony",
      areaName: "Arera Colony",
      costForTwo: "₹600 for two",
      cuisines: ["Bakery", "Italian", "Burgers", "Pizzas"],
      avgRating: 4.2,
      parentId: "354805",
      avgRatingString: "4.2",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 47,
        lastMileTravel: 7.7,
        serviceability: "SERVICEABLE",
        slaString: "47 mins",
        lastMileTravelString: "7.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-14 10:00:00",
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
        header: "50% OFF",
        subHeader: "UPTO ₹100",
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
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/bhopal-baking-co-arera-colony-arera-colony-bhopal-593426",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "106673",
      name: "Bhopal Udipi Restaurant",
      cloudinaryImageId: "zjvbljmeakcsffkky6hp",
      locality: "Dwarka Nagar",
      areaName: "Dwarka Nagar",
      costForTwo: "₹250 for two",
      cuisines: [
        "South Indian",
        "North Indian",
        "Chinese",
        "Fast Food",
        "Street Food",
      ],
      avgRating: 4.1,
      veg: true,
      parentId: "45152",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "35 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-14 23:59:00",
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
        header: "₹100 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
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
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/bhopal-udipi-restaurant-dwarka-nagar-bhopal-106673",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "441544",
      name: "Iyer Tiffen Centre",
      cloudinaryImageId: "g3jc71nkgnkumzzv0c1v",
      locality: "Sarvadham",
      areaName: "Kolar Road",
      costForTwo: "₹120 for two",
      cuisines: ["South Indian", "Indian", "Fast Food", "Snacks"],
      avgRating: 4.7,
      veg: true,
      parentId: "266069",
      avgRatingString: "4.7",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 55,
        lastMileTravel: 9.4,
        serviceability: "SERVICEABLE",
        slaString: "50-60 mins",
        lastMileTravelString: "9.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-14 21:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
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
          textExtendedBadges: {},
        },
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
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/iyer-tiffen-centre-sarvadham-kolar-road-bhopal-441544",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "78526",
      name: "Daawat 24*7 - Hotel Tilak",
      cloudinaryImageId: "c10jq9uwcicxa9lcdk2t",
      locality: "Maharana Pratap Nagar",
      areaName: "Maharana Pratap Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "Thalis", "Biryani", "Chinese", "Snacks"],
      avgRating: 4,
      parentId: "67529",
      avgRatingString: "4.0",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 6.3,
        serviceability: "SERVICEABLE",
        slaString: "43 mins",
        lastMileTravelString: "6.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-15 02:00:00",
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
        header: "60% OFF",
        subHeader: "UPTO ₹120",
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
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/daawat-24-7-hotel-tilak-maharana-pratap-nagar-bhopal-78526",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "106687",
      name: "Chappan Bhog",
      cloudinaryImageId: "km4kmsqfzcryn9wpisg8",
      locality: "Malviya Nagar",
      areaName: "New Market",
      costForTwo: "₹300 for two",
      cuisines: [
        "Sweets",
        "Desserts",
        "Chaat",
        "Snacks",
        "Beverages",
        "Bakery",
      ],
      avgRating: 4.5,
      veg: true,
      parentId: "58043",
      avgRatingString: "4.5",
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
        nextCloseTime: "2024-02-14 21:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
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
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
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
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/chappan-bhog-malviya-nagar-new-market-bhopal-106687",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "107521",
      name: "Mughal Darbar",
      cloudinaryImageId: "eeeylbrnliju2q8oqykq",
      locality: "Railway Colony",
      areaName: "Nadra Bus Stand",
      costForTwo: "₹250 for two",
      cuisines: ["Mughlai", "Tandoor", "Snacks", "Fast Food"],
      avgRating: 4,
      parentId: "8892",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-15 05:00:00",
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
        header: "₹100 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
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
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mughal-darbar-railway-colony-nadra-bus-stand-bhopal-107521",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "716555",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      cloudinaryImageId: "7e526a0c0ed3cd56eefac3d318c78977",
      locality: "Sanjay Nagar",
      areaName: "MP Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      avgRating: 4.5,
      veg: true,
      parentId: "582",
      avgRatingString: "4.5",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 6,
        serviceability: "SERVICEABLE",
        slaString: "43 mins",
        lastMileTravelString: "6.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-14 22:00:00",
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
        header: "60% OFF",
        subHeader: "UPTO ₹120",
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
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-sanjay-nagar-mp-nagar-bhopal-716555",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "79807",
      name: "Sweet Truth - Cake and Desserts",
      cloudinaryImageId: "78408969d316991befba0a6eca303e1c",
      locality: "Chetak Bridge",
      areaName: "Maharana Pratap Nagar",
      costForTwo: "₹450 for two",
      cuisines: ["Snacks", "Bakery", "Desserts", "Beverages"],
      avgRating: 4.5,
      parentId: "4444",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 6,
        serviceability: "SERVICEABLE",
        slaString: "43 mins",
        lastMileTravelString: "6.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-14 23:59:00",
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
        header: "60% OFF",
        subHeader: "UPTO ₹110",
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
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-chetak-bridge-maharana-pratap-nagar-bhopal-79807",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "79803",
      name: "Faasos - Wraps, Rolls & Shawarma",
      cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
      locality: "Courtyard By Marriot",
      areaName: "Maharana Pratap Nagar",
      costForTwo: "₹200 for two",
      cuisines: [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.3,
      parentId: "21809",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 6,
        serviceability: "SERVICEABLE",
        slaString: "43 mins",
        lastMileTravelString: "6.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-14 23:59:00",
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
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
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
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-courtyard-by-marriot-maharana-pratap-nagar-bhopal-79803",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "79809",
      name: "LunchBox - Meals and Thalis",
      cloudinaryImageId: "stsshngtxye3e68yecvf",
      locality: "Chetak Bridge",
      areaName: "Maharana Pratap Nagar",
      costForTwo: "₹200 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Punjabi",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.3,
      parentId: "4925",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 6,
        serviceability: "SERVICEABLE",
        slaString: "43 mins",
        lastMileTravelString: "6.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-14 23:59:00",
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
        header: "ITEMS",
        subHeader: "AT ₹159",
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
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-chetak-bridge-maharana-pratap-nagar-bhopal-79809",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "453062",
      name: "Annapurna Marathi Restaurant",
      cloudinaryImageId: "ad6ec89889b4a947c7780ad9600c2289",
      locality: "Danapani Road",
      areaName: "Habibganj",
      costForTwo: "₹160 for two",
      cuisines: ["Snacks", "Maharashtrian", "Desserts", "North Indian"],
      avgRating: 4.5,
      veg: true,
      parentId: "272440",
      avgRatingString: "4.5",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 55,
        lastMileTravel: 9.4,
        serviceability: "SERVICEABLE",
        slaString: "50-60 mins",
        lastMileTravelString: "9.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-14 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
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
          textExtendedBadges: {},
        },
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
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/annapurna-marathi-restaurant-danapani-road-habibganj-bhopal-453062",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "80278",
      name: "Gaagar New Market",
      cloudinaryImageId: "nhaax0gshegi6khog5th",
      areaName: "New Market",
      costForTwo: "₹300 for two",
      cuisines: [
        "Sweets",
        "Beverages",
        "Desserts",
        "Chaat",
        "South Indian",
        "North Indian",
      ],
      avgRating: 4.5,
      veg: true,
      parentId: "85526",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-14 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
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
          textExtendedBadges: {},
        },
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
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/gaagar-new-market-new-market-bhopal-80278",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "140197",
      name: "Gupta Ji Ke Shudh Shakahari Bhojnalaya",
      cloudinaryImageId: "etbbiz5ztmcczx5cxy39",
      locality: "Navbahar Colony",
      areaName: "Jhangirabad",
      costForTwo: "₹200 for two",
      cuisines: ["Thalis", "North Indian", "Indian", "Punjabi", "Snacks"],
      avgRating: 4.1,
      veg: true,
      parentId: "91759",
      avgRatingString: "4.1",
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
        nextCloseTime: "2024-02-15 04:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
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
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
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
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/gupta-ji-ke-shudh-shakahari-bhojnalaya-navbahar-colony-jhangirabad-bhopal-140197",
      type: "WEBLINK",
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <h2>Search</h2>
      </div>
      <div className="rest-container">
        {restList.map((resturant) => {
          return <RestCard key={restList.info?.id} restInfo={resturant} />;
        })}
      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
root.render(<Applayout />);
