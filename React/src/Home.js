import React, { useCallback } from "react";
import avatar1 from "./img/avatar-other-main-avatar-1.svg";
import avatar2 from "./img/avatar-other-main-avatar-2.svg";
import avatar3 from "./img/avatar-other-main-avatar-3.svg";
import avatar from "./img/avatar-other-main-avatar.svg";
import divider1 from "./img/divider-1.svg";
import broccoli1 from "./img/emoji-broccoli-1.png";
import broccoli2 from "./img/emoji-broccoli-2.png";
import cake1 from "./img/emoji-cake-1.png";
import meat1 from "./img/emoji-meat-1.png";
import pizza11 from "./img/emoji-pizza-11.png";
import pizza4 from "./img/emoji-pizza-4.png";
import pizza7 from "./img/emoji-pizza-7.png";
import pizza9 from "./img/emoji-pizza-9.png";
import sushi6 from "./img/emoji-sushi-6.png";
import sushi7 from "./img/emoji-sushi-7.png";
import sushi from "./img/emoji-sushi.png";
import fagyi from "./img/fagyi.png";
import shoppingBag11 from "./img/icon-outlined-other-shop-shopping-bag-11.svg";
import shoppingBag5 from "./img/icon-outlined-other-shop-shopping-bag-5.png";
import shoppingBag8 from "./img/icon-outlined-other-shop-shopping-bag-8.svg";
import mask1 from "./img/img-mask-1.png";
import mask2 from "./img/img-mask-2.png";
import mask3 from "./img/img-mask-3.png";
import mask4 from "./img/img-mask-4.png";
import mask6 from "./img/img-mask-6.png";
import mask7 from "./img/img-mask-7.png";
import mask8 from "./img/img-mask-8.png";
import mask from "./img/img-mask.png";
import navigationSheet1 from "./img/navigation-horizontal-elements-sheet-white-1.svg";
import shape1 from "./img/shape-1.png";
import logo from "./img/logo.jpg"


const Home = () => {
  const onCardExampleRestaurantClick = useCallback(() => {
    // Please sync "4.1 delivery selection" to the project
  }, []);

  const onCardExampleRestaurant1Click = useCallback(() => {
    // Please sync "4.1 delivery selection" to the project
  }, []);

  const onCardExampleRestaurant2Click = useCallback(() => {
    // Please sync "4.1 delivery selection" to the project
  }, []);

  return (
    <div
      style={{
        position: "center",
        backgroundColor: "#fff",
        width: "90%",
        height: "1500px",
        overflow: "hidden",
        textAlign: "left",
        fontSize: "20px",
        color: "#2b2b43",
        fontFamily: "Nunito",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "calc(100% - 330px)",
          top: "444px",
          left: "165px",
          letterSpacing: "0.1px",
          lineHeight: "28px",
          fontWeight: "600",
          display: "inline-block",
        }}
      >
        Nearby restaurants
      </div>
      <div
        style={{
          position: "absolute",
          width: "330px",
          top: "104px",
          right: "165px",
          left: "165px",
          height: "188px",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 570px)",
            top: "0px",
            right: "0px",
            left: "570px",
            height: "188px",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
              borderRadius: "16px",
              backgroundColor: "#fff3ed",
            }}
          />
          <img
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "290px",
              height: "188px",
              objectFit: "cover",
            }}
            alt=""
            src={mask7}
          />
          <div
            style={{
              position: "absolute",
              width: " 330px",
              top: "24px",
              left: "306px",
              letterSpacing: "0.1px",
              lineHeight: "28px",
              fontWeight: "600",
              display: "inline-block",
            }}
          >
            Big Burgers
          </div>
          <div
            style={{
              position: "absolute",
              width: "calc(100% - 330px)",
              top: "170px",
              left: "306px",
              fontSize: "14px",
              letterSpacing: "0.1px",
              lineHeight: "20px",
              color: "#83859c",
              display: "inline-block",
            }}
          >
            Fooddies
          </div>
          <div
            style={{
              position: "absolute",
              width: "330px",
              top: "60px",
              left: "306px",
              fontSize: "40px",
              letterSpacing: "0.1px",
              lineHeight: "56px",
              fontWeight: "800",
              color: "#fd6d22",
              display: "inline-block",
            }}
          >
            50% OFF
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 570px)",
            top: "0px",
            right: "570px",
            left: "0px",
            height: "188px",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
              borderRadius: "16px",
              backgroundColor: "#f3f4ff",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "calc(100% - 330px)",
              top: "24px",
              left: "306px",
              letterSpacing: "0.1px",
              lineHeight: "28px",
              display: "inline-block",
              fontWeight: "600",
            }}
          >
            Fagyi
          </div>
          <div
            style={{
              position: "absolute",
              width: "calc(100% - 330px)",
              top: "170px",
              left: "306px",
              fontSize: "14px",
              letterSpacing: "0.1px",
              lineHeight: "20px",
              color: "#83859c",
              display: "inline-block",
            }}
          >
            Deserty
          </div>
          <div
            style={{
              position: "absolute",
              width: "330px",
              top: "60px",
              left: "306px",
              fontSize: "40px",
              letterSpacing: "0.1px",
              lineHeight: "56px",
              fontWeight: "800",
              color: "#4e60ff",
              display: "inline-block",
            }}
          >
            20% OFF
          </div>
          <img
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "290px",
              height: "188px",
              objectFit: "cover",
            }}
            alt=""
            src={mask6}
          />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          width: "calc(100% - 330px)",
          top: "324px",
          right: "165px",
          left: "165px",
          height: "80px",
          textAlign: "center",
          fontSize: "13px",
          color: "#545563",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "140px",
            top: "0px",
            right: "950px",
            left: "0px",
            height: "80px",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            }}
          >
            <div
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: "0%",
                right: "0%",
                bottom: "0%",
                left: "0%",
                borderRadius: "16px",
                backgroundColor: "#f8f9ff",
                border: "1px solid #697bff",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "calc(50% - 26px)",
              left: "calc(50% - 12px)",
              width: "24px",
              height: "24px",
            }}
          >
            <img
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: "0%",
                right: "0%",
                bottom: "0%",
                left: "0%",
                maxWidth: "100%",
                overflow: "hidden",
                maxHeight: "100%",
                objectFit: "cover",
              }}
              alt=""
              src={pizza9}
            />
          </div>
          <b
            style={{
              position: "absolute",
              width: "calc(100% - 32px)",
              top: "calc(50% + 10px)",
              left: "16px",
              letterSpacing: "0.1px",
              lineHeight: "18px",
              display: "inline-block",
            }}
          >
            Pizza
          </b>
        </div>
        <div
          style={{
            position: "absolute",
            width: "140px",
            top: "0px",
            right: "760px",
            left: "190px",
            height: "80px",
            color: "#4e60ff",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            }}
          >
            <div
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: "0%",
                right: "0%",
                bottom: "0%",
                left: "0%",
                borderRadius: "16px",
                backgroundColor: "#f3f4ff",
                border: "2px solid #4e60ff",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "calc(50% - 26px)",
              left: "calc(50% - 12px)",
              width: "24px",
              height: "24px",
            }}
          >
            <img
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: "0%",
                right: "0%",
                bottom: "0%",
                left: "0%",
                maxWidth: "100%",
                overflow: "hidden",
                maxHeight: "100%",
                objectFit: "cover",
              }}
              alt=""
              src={pizza11}
            />
          </div>
          <b
            style={{
              position: "absolute",
              width: "calc(100% - 32px)",
              top: "calc(50% + 10px)",
              left: "16px",
              letterSpacing: "0.1px",
              lineHeight: "18px",
              display: "inline-block",
            }}
          >
            Burger
          </b>
        </div>
        <div
          style={{
            position: "absolute",
            width: "140px",
            top: "0px",
            right: "570px",
            left: "380px",
            height: "80px",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            }}
          >
            <div
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: "0%",
                right: "0%",
                bottom: "0%",
                left: "0%",
                borderRadius: "16px",
                backgroundColor: "#fff",
                border: "1px solid #edeef2",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "calc(50% - 26px)",
              left: "calc(50% - 12px)",
              width: "24px",
              height: "24px",
            }}
          >
            <img
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: "0%",
                right: "0%",
                bottom: "0%",
                left: "0%",
                maxWidth: "100%",
                overflow: "hidden",
                maxHeight: "100%",
                objectFit: "cover",
              }}
              alt=""
              src={meat1}
            />
          </div>
          <b
            style={{
              position: "absolute",
              width: "calc(100% - 32px)",
              top: "calc(50% + 10px)",
              left: "16px",
              letterSpacing: "0.1px",
              lineHeight: "18px",
              display: "inline-block",
            }}
          >
            BBQ
          </b>
        </div>
        <div
          style={{
            position: "absolute",
            width: "140px",
            top: "0px",
            right: "380px",
            left: "570px",
            height: "80px",
            color: "#4e60ff",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            }}
          >
            <div
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: "0%",
                right: "0%",
                bottom: "0%",
                left: "0%",
                borderRadius: "16px",
                backgroundColor: "#f3f4ff",
                border: "2px solid #4e60ff",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "calc(50% - 26px)",
              left: "calc(50% - 12px)",
              width: "24px",
              height: "24px",
            }}
          >
            <img
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: "0%",
                right: "0%",
                bottom: "0%",
                left: "0%",
                maxWidth: "100%",
                overflow: "hidden",
                maxHeight: "100%",
                objectFit: "cover",
              }}
              alt=""
              src={sushi7}
            />
          </div>
          <b
            style={{
              position: "absolute",
              width: "calc(100% - 32px)",
              top: "calc(50% + 10px)",
              left: "16px",
              letterSpacing: "0.1px",
              lineHeight: "18px",
              display: "inline-block",
            }}
          >
            Sushi
          </b>
        </div>
        <div
          style={{
            position: "absolute",
            width: "140px",
            top: "0px",
            right: "190px",
            left: "760px",
            height: "80px",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            }}
          >
            <div
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: "0%",
                right: "0%",
                bottom: "0%",
                left: "0%",
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "calc(50% - 26px)",
              left: "calc(50% - 12px)",
              width: "24px",
              height: "24px",
            }}
          >
            <img
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: "0%",
                right: "0%",
                bottom: "0%",
                left: "0%",
                maxWidth: "100%",
                overflow: "hidden",
                maxHeight: "100%",
                objectFit: "cover",
              }}
              alt=""
              src={broccoli1}
            />
          </div>
          <b
            style={{
              position: "absolute",
              width: "calc(100% - 32px)",
              top: "calc(50% + 10px)",
              left: "16px",
              letterSpacing: "0.1px",
              lineHeight: "18px",
              display: "inline-block",
            }}
          >
            Vegan
          </b>
        </div>
        <div
          style={{
            position: "absolute",
            width: "140px",
            top: "0px",
            right: "0px",
            left: "950px",
            height: "80px",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            }}
          >
            <div
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: "0%",
                right: "0%",
                bottom: "0%",
                left: "0%",
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "calc(50% - 26px)",
              left: "calc(50% - 12px)",
              width: "24px",
              height: "24px",
            }}
          >
            <img
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: "0%",
                right: "0%",
                bottom: "0%",
                left: "0%",
                maxWidth: "100%",
                overflow: "hidden",
                maxHeight: "100%",
                objectFit: "cover",
              }}
              alt=""
              src={cake1}
            />
          </div>
          <b
            style={{
              position: "absolute",
              width: "calc(100% - 32px)",
              top: "calc(50% + 10px)",
              left: "16px",
              letterSpacing: "0.1px",
              lineHeight: "18px",
              display: "inline-block",
            }}
          >
            Desserts
          </b>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          width: "calc(100% - 330px)",
          top: "488px",
          right: "165px",
          left: "165px",
          height: "582px",
          fontSize: "18px",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 760px)",
            top: "0px",
            right: "760px",
            left: "0px",
            height: "276px",
            cursor: "pointer",
          }}
          onClick={onCardExampleRestaurantClick}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            }}
          >
            <div
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: "0%",
                right: "0%",
                bottom: "0%",
                left: "0%",
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              width: "calc(100% - 32px)",
              right: "16px",
              bottom: "54px",
              left: "16px",
              height: "46px",
            }}
          >
            <b
              style={{
                position: "absolute",
                width: "calc(100% - 32px)",
                top: "0px",
                left: "0px",
                letterSpacing: "0.1px",
                lineHeight: "24px",
                display: "inline-block",
              }}
            >
              Royal Sushi House
            </b>
            <div
              style={{
                position: "absolute",
                top: "30px",
                left: "18px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "8px",
                fontSize: "12px",
                color: "#83859c",
              }}
            >
              <div
                style={{
                  position: "relative",
                  lineHeight: "16px",
                  fontWeight: "600",
                }}
              >
                30-40 min
              </div>
              <div
                style={{
                  position: "relative",
                  borderRadius: "50%",
                  backgroundColor: "#4e60ff",
                  width: "3px",
                  height: "3px",
                }}
              />
              <div
                style={{
                  position: "relative",
                  lineHeight: "16px",
                  fontWeight: "600",
                }}
              >
                $32 min sum
              </div>
            </div>
          </div>
          <img
            style={{
              position: "absolute",
              height: "160px",
              width: "340px",
              top: "0px",
              right: "0px",
              bottom: "116px",
              left: "0px",
              overflow: "hidden",
              objectFit: "cover",
            }}
            alt=""
            src={mask8}
          />
          <div
            style={{
              position: "absolute",
              top: "236px",
              left: "16px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "8px",
              fontSize: "12px",
              color: "#545563",
            }}
          >
            <div
              style={{
                borderRadius: "100px",
                backgroundColor: "#edeef2",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "4px 10px",
                gap: "8px",
              }}
            >

            </div>
            <div
              style={{
                borderRadius: "100px",
                backgroundColor: "#edeef2",
                display: "none",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "4px 10px",
                gap: "8px",
              }}
            >
              <div
                style={{ position: "relative", width: "12px", height: "12px" }}
              >
              </div>
            </div>
            <div
              style={{
                borderRadius: "100px",
                backgroundColor: "#edeef2",
                display: "none",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "4px 10px",
                gap: "8px",
              }}
            >
            </div>
            <div
              style={{
                borderRadius: "100px",
                backgroundColor: "#edeef2",
                display: "none",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "4px 10px",
                gap: "8px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  lineHeight: "16px",
                  fontWeight: "600",
                }}
              >
                Vegan
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            height: "160px",
            top: "0px",
            right: "0px",
            left: "760px",
            height: "276px",
            cursor: "pointer",
          }}
          onClick={onCardExampleRestaurant1Click}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            }}
          >
            <div
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: "0%",
                right: "0%",
                bottom: "0%",
                left: "0%",
                borderRadius: "16px",
                border: "1px solid #edeef2",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              width: "calc(100% - 32px)",
              right: "16px",
              bottom: "54px",
              left: "16px",
              height: "46px",
            }}
          >
            <b
              style={{
                position: "absolute",
                width: "calc(100% - 32px)",
                top: "0px",
                left: "0px",
                letterSpacing: "0.1px",
                lineHeight: "24px",
                display: "inline-block",
              }}
            >
              Ninja sushi
            </b>
            <div
              style={{
                position: "absolute",
                top: "30px",
                left: "18px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "8px",
                fontSize: "12px",
                color: "#83859c",
              }}
            >
              <div
                style={{
                  position: "relative",
                  lineHeight: "16px",
                  fontWeight: "600",
                }}
              >
                20-40 min
              </div>
              <div
                style={{
                  position: "relative",
                  borderRadius: "50%",
                  backgroundColor: "#4e60ff",
                  width: "3px",
                  height: "3px",
                }}
              />
              <div
                style={{
                  position: "relative",
                  lineHeight: "16px",
                  fontWeight: "600",
                }}
              >
                $40 min sum
              </div>
            </div>
          </div>
          <img
            style={{
              position: "absolute",
              height: "160px",
              width: "340px",
              top: "0px",
              right: "0px",
              bottom: "116px",
              left: "0px",
              overflow: "hidden",
              objectFit: "cover",
            }}
            alt=""
            src={mask4}
          />
          <div
            style={{
              position: "absolute",
              top: "236px",
              left: "16px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "8px",
              fontSize: "12px",
              color: "#545563",
            }}
          >
            <div
              style={{
                borderRadius: "100px",
                backgroundColor: "#edeef2",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "4px 10px",
                gap: "8px",
              }}
            >
            </div>
            <div
              style={{
                borderRadius: "100px",
                backgroundColor: "#edeef2",
                display: "none",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "4px 10px",
                gap: "8px",
              }}
            >
            </div>
            <div
              style={{
                borderRadius: "100px",
                backgroundColor: "#edeef2",
                display: "none",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "4px 10px",
                gap: "8px",
              }}
            >
              <div
                style={{ position: "relative", width: "12px", height: "12px" }}
              >
                <img
                  style={{
                    position: "absolute",
              height: "160px",
              width: "340px",
              top: "0px",
              right: "0px",
              bottom: "116px",
              left: "0px",
              overflow: "hidden",
              objectFit: "cover",
                  }}
                  alt=""
                  src={broccoli2}
                />
              </div>
              <div
                style={{
                  position: "relative",
                  lineHeight: "16px",
                  fontWeight: "600",
                }}
              >
                Vegan
              </div>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "0px",
              right: "0px",
              borderRadius: "0px 16px 0px 16px",
              backgroundColor: "#4e60ff",
              display: "none",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "8px 16px",
              fontSize: "11px",
              color: "#fff",
            }}
          >
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 760px)",
            top: "0px",
            right: "380px",
            left: "380px",
            height: "276px",
            cursor: "pointer",
          }}
          onClick={onCardExampleRestaurant2Click}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            }}
          >
            <div
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: "0%",
                right: "0%",
                bottom: "0%",
                left: "0%",
                borderRadius: "16px",
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              width: "calc(100% - 32px)",
              right: "16px",
              bottom: "54px",
              left: "16px",
              height: "46px",
            }}
          >
            <b
              style={{
                position: "absolute",
                width: "calc(100% - 32px)",
                top: "0px",
                left: "0px",
                letterSpacing: "0.1px",
                lineHeight: "24px",
                display: "inline-block",
              }}
            >{`Burgers & Pizza`}</b>
            <div
              style={{
                position: "absolute",
                top: "30px",
                left: "18px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "8px",
                fontSize: "12px",
                color: "#83859c",
              }}
            >
              <div
                style={{
                  position: "relative",
                  lineHeight: "16px",
                  fontWeight: "600",
                }}
              >
                40-60 min
              </div>
              <div
                style={{
                  position: "relative",
                  borderRadius: "50%",
                  backgroundColor: "#4e60ff",
                  width: "3px",
                  height: "3px",
                }}
              />
              <div
                style={{
                  position: "relative",
                  lineHeight: "16px",
                  fontWeight: "600",
                }}
              >
                $24 min sum
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "2px",
                right: "0px",
                width: "20px",
                height: "20px",
                textAlign: "center",
                fontSize: "10px",
                color: "#fff",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-8px",
                  width: "16px",
                  height: "16px",
                }}
              >
              </div>
            </div>
          </div>
          <img
            style={{
              position: "absolute",
              height: "160px",
              width: "340px",
              top: "0px",
              right: "0px",
              bottom: "116px",
              left: "0px",
              overflow: "hidden",
              objectFit: "cover",
            }}
            alt=""
            src={mask3}
          />
          <div
            style={{
              position: "absolute",
              top: "236px",
              left: "16px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "8px",
              fontSize: "12px",
              color: "#545563",
            }}
          >
            <div
              style={{
                borderRadius: "100px",
                backgroundColor: "#edeef2",
                display: "none",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "4px 10px",
                gap: "8px",
              }}
            >
            </div>
            <div
              style={{
                borderRadius: "100px",
                backgroundColor: "#edeef2",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "4px 10px",
                gap: "8px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  lineHeight: "16px",
                  fontWeight: "600",
                }}
              >
                Burger
              </div>
            </div>
            <div
              style={{
                borderRadius: "100px",
                backgroundColor: "#edeef2",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "4px 10px",
                gap: "8px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  lineHeight: "16px",
                  fontWeight: "600",
                }}
              >
                Pizza
              </div>
            </div>
            <div
              style={{
                borderRadius: "100px",
                backgroundColor: "#edeef2",
                display: "none",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "4px 10px",
                gap: "8px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  lineHeight: "16px",
                  fontWeight: "600",
                }}
              >
                Vegan
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 760px)",
            top: "306px",
            right: "760px",
            left: "0px",
            height: "276px",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            }}
          >
            <div
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: "0%",
                right: "0%",
                bottom: "0%",
                left: "0%",

              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              width: "calc(100% - 32px)",
              right: "16px",
              bottom: "54px",
              left: "16px",
              height: "46px",
            }}
          >
            <b
              style={{
                position: "absolute",
                width: "calc(100% - 32px)",
                top: "0px",
                left: "0px",
                letterSpacing: "0.1px",
                lineHeight: "24px",
                display: "inline-block",
              }}
            >
              Sushi master
            </b>
            <div
              style={{
                position: "absolute",
                top: "30px",
                left: "18px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "8px",
                fontSize: "12px",
                color: "#83859c",
              }}
            >
              <div
                style={{
                  position: "relative",
                  lineHeight: "16px",
                  fontWeight: "600",
                }}
              >
                60-70 min
              </div>
              <div
                style={{
                  position: "relative",
                  borderRadius: "50%",
                  backgroundColor: "#4e60ff",
                  width: "3px",
                  height: "3px",
                }}
              />
              <div
                style={{
                  position: "relative",
                  lineHeight: "16px",
                  fontWeight: "600",
                }}
              >
                $49 min sum
              </div>
            </div>
            <img
              style={{
                position: "absolute",
                top: "2px",
                right: "0px",
                width: "20px",
                height: "20px",
                overflow: "hidden",
              }}
              alt=""
              src={shoppingBag11}
            />
          </div>
          <img
            style={{
              position: "absolute",
              height: "160px",
              width: "340px",
              top: "0px",
              right: "0px",
              bottom: "116px",
              left: "0px",
              overflow: "hidden",
              objectFit: "cover",
            }}
            alt=""
            src={mask2}
          />
          <div
            style={{
              position: "absolute",
              top: "236px",
              left: "16px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "8px",
              fontSize: "12px",
              color: "#545563",
            }}
          >
            <div
              style={{
                borderRadius: "100px",
                backgroundColor: "#edeef2",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "4px 10px",
                gap: "8px",
              }}
            >
            </div>
            <div
              style={{
                borderRadius: "100px",
                backgroundColor: "#edeef2",
                display: "none",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "4px 10px",
                gap: "8px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  lineHeight: "16px",
                  fontWeight: "600",
                }}
              >
                Burger
              </div>
            </div>
            <div
              style={{
                borderRadius: "100px",
                backgroundColor: "#edeef2",
                display: "none",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "4px 10px",
                gap: "8px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  lineHeight: "16px",
                  fontWeight: "600",
                }}
              >
                Pizza
              </div>
            </div>
            <div
              style={{
                borderRadius: "100px",
                backgroundColor: "#edeef2",
                display: "none",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "4px 10px",
                gap: "8px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  lineHeight: "16px",
                  fontWeight: "600",
                }}
              >
                Vegan
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 760px)",
            top: "306px",
            right: "380px",
            left: "380px",
            height: "276px",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            }}
          >
            <div
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: "0%",
                right: "0%",
                bottom: "0%",
                left: "0%",
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              width: "calc(100% - 32px)",
              right: "16px",
              bottom: "54px",
              left: "16px",
              height: "46px",
            }}
          >
            <b
              style={{
                position: "absolute",
                width: "calc(100% - 32px)",
                top: "0px",
                left: "0px",
                letterSpacing: "0.1px",
                lineHeight: "24px",
                display: "inline-block",
              }}
            >
              Japanese sushi
            </b>
            <div
              style={{
                position: "absolute",
                top: "30px",
                left: "18px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "8px",
                fontSize: "12px",
                color: "#83859c",
              }}
            >
              <div
                style={{
                  position: "relative",
                  lineHeight: "16px",
                  fontWeight: "600",
                }}
              >
                30-50 min
              </div>
              <div
                style={{
                  position: "relative",
                  borderRadius: "50%",
                  backgroundColor: "#4e60ff",
                  width: "3px",
                  height: "3px",
                }}
              />
              <div
                style={{
                  position: "relative",
                  lineHeight: "16px",
                  fontWeight: "600",
                }}
              >
                $104 min sum
              </div>
            </div>
          </div>
          <img
            style={{
              position: "absolute",
              height: "160px",
              width: "340px",
              top: "0px",
              right: "0px",
              bottom: "116px",
              left: "0px",
              overflow: "hidden",
              objectFit: "cover",
            }}
            alt=""
            src={mask1}
          />
          <div
            style={{
              position: "absolute",
              top: "236px",
              left: "16px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "8px",
              fontSize: "12px",
              color: "#545563",
            }}
          >
            <div
              style={{
                borderRadius: "100px",
                backgroundColor: "#edeef2",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "4px 10px",
                gap: "8px",
              }}
            >
            </div>
            <div
              style={{
                borderRadius: "100px",
                backgroundColor: "#edeef2",
                display: "none",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "4px 10px",
                gap: "8px",
              }}
            >
            </div>
            <div
              style={{
                borderRadius: "100px",
                backgroundColor: "#edeef2",
                display: "none",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "4px 10px",
                gap: "8px",
              }}
            >
            </div>
            <div
              style={{
                borderRadius: "100px",
                backgroundColor: "#edeef2",
                display: "none",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "4px 10px",
                gap: "8px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  lineHeight: "16px",
                  fontWeight: "600",
                }}
              >
                Vegan
              </div>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "0px",
              right: "0px",
              borderRadius: "0px 16px 0px 16px",
              backgroundColor: "#4e60ff",
              display: "none",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "8px 16px",
              fontSize: "11px",
              color: "#fff",
            }}
          >
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 760px)",
            top: "306px",
            right: "0px",
            left: "760px",
            height: "276px",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            }}
          >
            <div
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: "0%",
                right: "0%",
                bottom: "0%",
                left: "0%",
                borderRadius: "16px",
                backgroundColor: "#fff",
                border: "1px solid #edeef2",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              width: "calc(100% - 32px)",
              right: "16px",
              bottom: "54px",
              left: "16px",
              height: "46px",
            }}
          >
            <b
              style={{
                position: "absolute",
                width: "calc(100% - 32px)",
                top: "0px",
                left: "0px",
                letterSpacing: "0.1px",
                lineHeight: "24px",
                display: "inline-block",
              }}
            >
              Kobe
            </b>
            <div
              style={{
                position: "absolute",
                top: "30px",
                left: "18px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "8px",
                fontSize: "12px",
                color: "#83859c",
              }}
            >
              <div
                style={{
                  position: "relative",
                  lineHeight: "16px",
                  fontWeight: "600",
                }}
              >
                20-30 min
              </div>
              <div
                style={{
                  position: "relative",
                  borderRadius: "50%",
                  backgroundColor: "#4e60ff",
                  width: "3px",
                  height: "3px",
                }}
              />
              <div
                style={{
                  position: "relative",
                  lineHeight: "16px",
                  fontWeight: "600",
                }}
              >
                $57 min sum
              </div>
            </div>
          </div>
          <img
            style={{
              position: "absolute",
              height: "160px",
              width: "340px",
              top: "0px",
              right: "0px",
              bottom: "116px",
              left: "0px",
              overflow: "hidden",
              objectFit: "cover",
            }}
            alt=""
            src={mask}
          />
          <div
            style={{
              position: "absolute",
              top: "236px",
              left: "16px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "8px",
              fontSize: "12px",
              color: "#545563",
            }}
          >
            <div
              style={{
                borderRadius: "100px",
                backgroundColor: "#edeef2",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "4px 10px",
                gap: "8px",
              }}
            >
            </div>
            <div
              style={{
                borderRadius: "100px",
                backgroundColor: "#edeef2",
                display: "none",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "4px 10px",
                gap: "8px",
              }}
            >
            </div>
            <div
              style={{
                borderRadius: "100px",
                backgroundColor: "#edeef2",
                display: "none",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "4px 10px",
                gap: "8px",
              }}
            >
            </div>
            <div
              style={{
                borderRadius: "100px",
                backgroundColor: "#edeef2",
                display: "none",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "4px 10px",
                gap: "8px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  lineHeight: "16px",
                  fontWeight: "600",
                }}
              >
                Vegan
              </div>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "0px",
              right: "0px",
              borderRadius: "0px 16px 0px 16px",
              backgroundColor: "#4e60ff",
              display: "none",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "8px 16px",
              fontSize: "11px",
              color: "#fff",
            }}
          >
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "1440px",
          height: "80px",
          textAlign: "center",
          fontSize: "14px",
          color: "#fff",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            }}
          >
            <div
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
                backgroundColor: "#fff",
              }}
            />
          </div>
          <img
            style={{
              position: "absolute",
              top: "calc(50% - 27px)",
              right: "162px",
              width: "54px",
              height: "54px",
              objectFit: "cover",
            }}
            alt=""
            src={avatar}
          />
          <div
            style={{
              position: "absolute",
              top: "calc(50% - 24px)",
              right: "230px",
              width: "48px",
              height: "48px",
              fontSize: "10px",
            }}
          >
            <div
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
                borderRadius: "16px",
                backgroundColor: "#f3f4ff",
              }}
            />
            <img
              style={{
                position: "absolute",
                top: "calc(50% - 10px)",
                left: "calc(50% - 10px)",
                width: "20px",
                height: "20px",
                overflow: "hidden",
              }}
              alt=""
              src={shoppingBag11}
            />
            <div
              style={{
                position: "absolute",
                top: "-4px",
                right: "-4px",
                width: "20px",
                height: "20px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  top: "0px",
                  right: "0px",
                  bottom: "0px",
                  left: "0px",
                  borderRadius: "8px",
                  backgroundColor: "#4e60ff",
                }}
              />
              <b
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  left: "calc(50% - 8px)",
                  lineHeight: "14px",
                  display: "inline-block",
                  width: "16px",
                }}
              >
                4
              </b>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "calc(50% - 20px)",
              left: "292px",
              width: "224px",
              height: "40px",
              overflow: "hidden",
              textAlign: "left",
              color: "#83859c",
            }}
          >
            <div
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
                borderRadius: "12px",
                backgroundColor: "#edeef2",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: "calc(100% - 60px)",
                top: "calc(50% - 10px)",
                left: "12px",
                letterSpacing: "0.1px",
                lineHeight: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Search
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "calc(50% - 16px)",
              right: "302px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "20px",
              textAlign: "right",
              color: "#2b2b43",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "28px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "6px 0px",
                }}
              >
                <b
                  style={{
                    position: "relative",
                    letterSpacing: "0.1px",
                    lineHeight: "20px",
                  }}
                >
                  Restaurants
                </b>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "6px 0px",
                }}
              >
                <b
                  style={{
                    position: "relative",
                    letterSpacing: "0.1px",
                    lineHeight: "20px",
                  }}
                >
                  Deals
                </b>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "6px 0px",
              }}
            >
              <b
                style={{
                  position: "relative",
                  letterSpacing: "0.1px",
                  lineHeight: "20px",
                }}
              >
                My orders
              </b>
            </div>
          </div>
          <img
            style={{
              position: "absolute",
              top: "calc(50% - 20px)",
              left: "165px",
              width: "79px",
              height: "40px",
              overflow: "hidden",
              objectFit: "cover",
            }}
            alt=""
            src={logo}
          />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "1400px",
          background:
            "linear-gradient(180deg, #384292, rgba(204, 32, 87, 0.53) 51.56%, rgba(248, 175, 21, 0.23))",
          width: "1150px",
          height: "1100px",
          overflow: "hidden",
        }}
      />
    </div>
  );
};

export default Home;
