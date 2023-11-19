import box from "./img/box.svg";
import box1 from "./img/box-1.svg";
import box2 from "./img/box-2.svg";
import box3 from "./img/box-3.svg";
import shape from "./img/shape.png";
import map from "./img/map.png";
import logo from "./img/logo.jpg"
import shoppingBag from "./img/icon-outlined-other-shop-shopping-bag-11.svg"
import avatar from "./img/avatar-other-main-avatar.svg"
import divider from "./img/divider-2.svg"


const DeliverySelection = () => {
    return (
        <div
            style={{
                position: "relative",
                backgroundColor: "#fff",
                width: "100%",
                height: "860px",
                overflow: "hidden",
                textAlign: "center",
                fontSize: "14px",
                color: "#fff",
                fontFamily: "Nunito",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    width: "100%",
                    top: "3px",
                    right: "-3px",
                    left: "3px",
                    height: "80px",
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
                        <img
                            style={{
                                position: "absolute",
                                width: "100%",
                                right: "0px",
                                bottom: "-0.5px",
                                left: "0px",
                                maxWidth: "100%",
                                overflow: "hidden",
                                height: "1px",
                            }}
                            alt=""
                            src={divider}
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
                            src={shoppingBag}
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
                        <img
                            style={{
                                position: "absolute",
                                top: "calc(50% - 8px)",
                                right: "12px",
                                width: "16px",
                                height: "16px",
                                overflow: "hidden",
                            }}
                            alt=""
                            src="/icon--outlined--action--main--search.svg"
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
                        <img
                            style={{ position: "relative", width: "1px", height: "33px" }}
                            alt=""
                            src="/divider1.svg"
                        />
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
                    top: "121px",
                    left: "148px",
                    fontSize: "36px",
                    letterSpacing: "0.1px",
                    lineHeight: "28px",
                    fontWeight: "600",
                    color: "#000",
                    textAlign: "left",
                    display: "inline-block",
                    width: "284px",
                    height: "31px",
                }}
            >
                Select Courier
            </div>
            <div
                style={{
                    position: "absolute",
                    width: "calc(100% - 1090px)",
                    top: "189.23px",
                    right: "958.22px",
                    left: "131.78px",
                    height: "324px",
                    transform: " rotate(-0.08deg)",
                    transformOrigin: "0 0",
                    textAlign: "left",
                    color: "#2b2b43",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        width: "100%",
                        top: "0px",
                        right: "0px",
                        left: "0px",
                        height: "72px",
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
                                width: "40%",
                                top: "0%",
                                right: "0%",
                                bottom: "0%",
                                left: "0%",
                                borderRadius: "16px",
                                background:
                                    "linear-gradient(-90deg, rgba(52, 66, 147, 0.39), rgba(203, 31, 87, 0.39) 50.1%, rgba(248, 177, 20, 0.39)), #f3f4ff",
                                border: "2px solid #4e60ff",
                                boxSizing: "border-box",
                            }}
                        />
                    </div>
                    <b
                        style={{
                            position: "absolute",
                            width: "calc(100% - 84px)",
                            top: "calc(50% - 20px)",
                            left: "68px",
                            letterSpacing: "0.1px",
                            lineHeight: "20px",
                            display: "inline-block",
                        }}
                    >
                        MC István
                    </b>
                    <div
                        style={{
                            position: "absolute",
                            width: "calc(100% - 84px)",
                            top: "calc(50% + 2px)",
                            left: "68px",
                            fontSize: "13px",
                            letterSpacing: "0.2px",
                            lineHeight: "18px",
                            color: "#545563",
                            display: "inline-block",
                        }}
                    >
                        MÁV
                    </div>
                    <img
                        style={{
                            position: "absolute",
                            top: "calc(50% - 20.07px)",
                            left: "16.02px",
                            width: "40.05px",
                            height: "40.05px",
                        }}
                        alt=""
                        src={box}
                    />
                </div>
                <div
                    style={{
                        position: "absolute",
                        width: "100%",
                        top: "84px",
                        right: "0px",
                        left: "0px",
                        height: "72px",
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
                    <b
                        style={{
                            position: "absolute",
                            width: "calc(100% - 84px)",
                            top: "calc(50% - 20px)",
                            left: "68px",
                            letterSpacing: "0.1px",
                            lineHeight: "20px",
                            display: "inline-block",
                        }}
                    >
                        Józssef
                    </b>
                    <div
                        style={{
                            position: "absolute",
                            width: "calc(100% - 84px)",
                            top: "calc(50% + 2px)",
                            left: "68px",
                            fontSize: "13px",
                            letterSpacing: "0.2px",
                            lineHeight: "18px",
                            color: "#545563",
                            display: "inline-block",
                        }}
                    >
                        Motorbike
                    </div>
                    <img
                        style={{
                            position: "absolute",
                            top: "calc(50% - 20.07px)",
                            left: "16.02px",
                            width: "40.05px",
                            height: "40.05px",
                        }}
                        alt=""
                        src={box1}
                    />
                </div>
                <div
                    style={{
                        position: "absolute",
                        width: "100%",
                        top: "168px",
                        right: "0px",
                        left: "0px",
                        height: "72px",
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
                    <b
                        style={{
                            position: "absolute",
                            width: "calc(100% - 84px)",
                            top: "calc(50% - 20px)",
                            left: "68px",
                            letterSpacing: "0.1px",
                            lineHeight: "20px",
                            display: "inline-block",
                        }}
                    >
                        T-bor
                    </b>
                    <div
                        style={{
                            position: "absolute",
                            width: "calc(100% - 84px)",
                            top: "calc(50% + 2px)",
                            left: "68px",
                            fontSize: "13px",
                            letterSpacing: "0.2px",
                            lineHeight: "18px",
                            color: "#545563",
                            display: "inline-block",
                        }}
                    >
                        E-bike
                    </div>
                    <img
                        style={{
                            position: "absolute",
                            top: "calc(50% - 20.07px)",
                            left: "16.02px",
                            width: "40.05px",
                            height: "40.05px",
                        }}
                        alt=""
                        src={box2}
                    />
                </div>
                <div
                    style={{
                        position: "absolute",
                        width: "100%",
                        top: "252px",
                        right: "0px",
                        left: "0px",
                        height: "72px",
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
                    <b
                        style={{
                            position: "absolute",
                            width: "calc(100% - 84px)",
                            top: "calc(50% - 20px)",
                            left: "68px",
                            letterSpacing: "0.1px",
                            lineHeight: "20px",
                            display: "inline-block",
                        }}
                    >
                        Antonio
                    </b>
                    <div
                        style={{
                            position: "absolute",
                            width: "calc(100% - 84px)",
                            top: "calc(50% + 2px)",
                            left: "68px",
                            fontSize: "13px",
                            letterSpacing: "0.2px",
                            lineHeight: "18px",
                            color: "#545563",
                            display: "inline-block",
                        }}
                    >
                        Tram no. 2
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            top: "calc(50% - 20px)",
                            left: "16px",
                            width: "40px",
                            height: "40px",
                        }}
                    >
                        <img
                            style={{
                                position: "absolute",
                                height: "calc(100% + 0.02px)",
                                width: "calc(100% + 0.02px)",
                                top: "-0.04px",
                                right: "-0.04px",
                                bottom: "0.02px",
                                left: "0.02px",
                                borderRadius: "12px",
                                maxWidth: "100%",
                                overflow: "hidden",
                                maxHeight: "100%",
                                objectFit: "cover",
                            }}
                            alt=""
                            src={box3}
                        />
                    </div>
                </div>
                <img
                    style={{
                        position: "absolute",
                        top: "-79.23px",
                        left: "523.22px",
                        width: "664px",
                        height: "693px",
                        objectFit: "cover",
                    }}
                    alt=""
                    src={map}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "551px",
                    left: "132px",
                    borderRadius: "8px",
                    background:
                        "linear-gradient(-90deg, #344293, #cb1f57 50.1%, #f8b114)",
                    boxShadow: "0px 8px 20px rgba(78, 96, 255, 0.16)",
                    width: "350px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    padding: "12px 16px",
                    boxSizing: "border-box",
                }}
            >
                <b
                    style={{
                        flex: "1",
                        position: "relative",
                        letterSpacing: "0.3px",
                        lineHeight: "20px",
                    }}
                >
                    Confim
                </b>
            </div>
        </div>
    );
};

export default DeliverySelection;
