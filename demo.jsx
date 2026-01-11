export const menuData = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    cards: [
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            text: "Pizza Hut",
            headerStyling: {
              textColor: "text_Highest_Emphasis",
              textVariant: "header_H3_Black",
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab",
            tabs: [
              {
                id: "Order Online",
                title: "Order Online",
              },
              {
                id: "Dineout",
                title: "Dineout",
                cta: "https://swiggy.com/menu/651011/dineout",
              },
            ],
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "651011",
              name: "Pizza Hut",
              city: "Kolkata",
              slugs: {
                restaurant: "pizza-hut-new-market-esplanade",
                city: "kolkata",
              },
              uniqueId: "e51e6528-4859-48c8-8fed-e84c17dc2d76",
              cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/8ffc3f24-e540-4aba-aefc-af2f6bfc4085_651011.JPG",
              locality: "New Market Area",
              areaName: "New Market",
              costForTwo: "35000",
              costForTwoMessage: "₹350 for two",
              cuisines: ["Pizzas"],
              avgRating: 4.4,
              feeDetails: {
                restaurantId: "651011",
                fees: [{}],
              },
              parentId: "721",
              avgRatingString: "4.4",
              totalRatingsString: "2.1K+ ratings",
              sla: {
                restaurantId: "651011",
                deliveryTime: 32,
                minDeliveryTime: 30,
                maxDeliveryTime: 35,
                lastMileTravel: 2.5,
                serviceability: "SERVICEABLE",
                stressFactor: 1,
                rainMode: "RAIN_MODE_NONE",
                longDistance: "LONG_DISTANCE_NOT_LONG_DISTANCE",
                zoneId: 148,
                slaString: "30-35 MINS",
                lastMileTravelString: "2.5 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2025-12-29 01:00:00",
                visibility: true,
                opened: true,
                restaurantClosedMeta: {},
              },
              aggregatedDiscountInfo: {
                header: "50% off",
                shortDescriptionList: [
                  {
                    meta: "50% off",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "Get every item @ 59",
                    discountType: "FinalPrice",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "50% off",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "Get every item @ 59",
                    discountType: "FinalPrice",
                    operationType: "RESTAURANT",
                  },
                ],
                visible: true,
              },
              badges: {},
              slugString: "pizza-hut-new-market-esplanade",
              multiOutlet: true,
              isOpen: true,
              labels: [
                {
                  title: "Timings",
                  message: "null",
                },
                {
                  title: "Address",
                  message:
                    "4, Ground Floor, Surendra Nath Banerjee Road, New Market Area,Taltala, Kolkata Municipal Corporation, Kolkata, West Bengal",
                },
                {
                  title: "Cuisines",
                  message: "Pizzas",
                },
              ],
              logo: "Brand logo/PizzaHut",
              totalRatings: 2100,
              aggregatedDiscountInfoV2: {
                header: "50% off",
                shortDescriptionList: [
                  {
                    meta: "50% off",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "Get every item @ 59",
                    discountType: "FinalPrice",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "50% off",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "Get every item @ 59",
                    discountType: "FinalPrice",
                    operationType: "RESTAURANT",
                  },
                ],
              },
              type: "F",
              nudgeBanners: [
                {
                  priority: 3,
                  discountInfo: {
                    discountType: "FinalPrice",
                    value: 99,
                  },
                  unlockedMessage: "Deal of the Day unlocked!",
                  minItemCount: 1,
                  maxItemCount: 1,
                  type: "SILD",
                  nudgeTagInfo: {
                    title: "Deal of the Day",
                    fontName: "FONT_NAME_CONDENSED_BOLD",
                  },
                  logoCtx: {},
                  movComputationType: "MOV_COMPUTATION_TYPE_DISCOUNTED_PRICE",
                },
              ],
              headerBanner: {
                url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/651011",
              },
              ratingSlab: "RATING_SLAB_5",
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {},
              },
              hasBestsellerItems: true,
              cartOrderabilityNudgeBanner: {
                parameters: {},
                presentation: {},
              },
              latLong: "22.56280394,88.35259646",
              backgroundImageOverlayInfo: {},
              featuredSectionInfo: {},
              requestContexts: ["enable_ecosaver", "99store"],
            },
            analytics: {},
          },
          relevance: {
            type: "RELEVANCE_TYPE_CHECK_ORDERABILITY_AND_SHOW_MENU_OFFER_NUDGE",
            sectionId: "MENU_ITEM_CART_UPDATE_POP_CROUTON",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            layout: {
              rows: 1,
              columns: 5,
              horizontalScrollEnabled: true,
              itemSpacing: 12,
              lineSpacing: 10,
              widgetPadding: {},
              containerStyle: {
                containerPadding: {
                  left: 10,
                  right: 10,
                  bottom: 16,
                },
              },
            },
            id: "offerCollectionWidget_UX4",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                offers: [
                  {
                    info: {
                      header: "FLAT 50% OFF",
                      offerTagColor: "#E46D47",
                      offerIds: ["a91e649f-e88e-428a-bbba-733157366e21"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "NO CODE REQUIRED",
                      description: "ON SELECT ITEMS",
                      offerType: "offers",
                      restId: "651011",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                      primaryDescription: "NO CODE REQUIRED",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "ITEMS AT ₹59",
                      offerTag: "DEAL OF DAY",
                      offerTagColor: "#E46D47",
                      offerIds: ["50795c25-5d0d-446a-8777-d8e68942c994"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      description: "ON SELECT ITEMS |",
                      offerType: "offers",
                      restId: "651011",
                      offerLogo: "offers/DealRush_Offer_Icon.png",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "FLAT ₹100 OFF",
                      offerTag: "FLAT DEAL",
                      offerTagColor: "#E46D47",
                      offerIds: ["d87a84d1-895f-48fe-a3e5-db2e4cd19650"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE FLAT100",
                      description: "ABOVE ₹199",
                      offerType: "offers",
                      restId: "651011",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                      primaryDescription: "USE FLAT100",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "FLAT ₹400 OFF",
                      offerTag: "DEFAULT",
                      offerTagColor: "#E46D47",
                      offerIds: ["23f4e2ea-d36f-4481-b4ca-0891e5eb67f3"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE FLAT400",
                      description: "ABOVE ₹1999",
                      offerType: "offers",
                      restId: "651011",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                      primaryDescription: "USE FLAT400",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "20% OFF UPTO ₹130",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2025/12/5/2b8e3bf0-4c0e-42b4-8c6b-2932fbd44c70_BankofBarodaMenuLogo.png",
                      offerIds: ["b3a3d88b-8ef7-4d7e-aa8b-982fc54feb32"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE BOBDC130",
                      description: "ABOVE ₹499",
                      offerType: "offers",
                      restId: "651011",
                      offerLogo:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2025/12/5/2b8e3bf0-4c0e-42b4-8c6b-2932fbd44c70_BankofBarodaMenuLogo.png",
                      descriptionTextColor: "#7302060C",
                      primaryDescription: "USE BOBDC130",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                ],
                habitMilestoneInfo: {
                  callout: {},
                },
                loyaltyDiscoverPresentationInfo: {
                  logoCtx: {},
                },
              },
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
    isQCLink: false,
  },
  tid: "742fe72f-f6a9-4538-89ad-b3b13e78095a",
  sid: "ot612782-2e05-423e-8db9-226a1810bdd1",
  deviceId: "3f524821-92b5-dfbd-a5a0-29c7f7344470",
  csrfToken: "KPfq158Vidg2-ax6bzuiPnHguCNHuZXHDsgNNGJc",
};

