import React, { useCallback, useState } from "react";
import logo from "./img/logo.jpg"
import eye from "./img/eye.png"
import Home from "./Home"

const Login = ({onLogin}) => {
  const onButtonContainedAccentClick = useCallback(() => {

  }, []);
  const [username, setUsername] = useState("");

  function handleLogin() {
    var loggedInUsername = ""
    setUsername(loggedInUsername)
    onLogin(true, loggedInUsername);
  }

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#fff",
        width: "100%",
        height: "1500px",
        overflow: "hidden",
        textAlign: "left",
        fontSize: "14px",
        color: "#2b2b43",
        fontFamily: "Nunito",
      }}
    >
      <img
        style={{
          position: "absolute",
          top: "20px",
          left: "165px",
          width: "79px",
          height: "40px",
          objectFit: "cover",
        }}
        alt=""
        src={logo}
      />
      <b
        style={{
          position: "absolute",
          top: "188px",
          left: "165px",
          fontSize: "60px",
          letterSpacing: "0.1px",
          lineHeight: "82px",
          display: "inline-block",
          width: "350px",
        }}
      >
        Login
      </b>
      <div
        style={{
          position: "absolute",
          top: "286px",
          left: "165px",
          letterSpacing: "0.1px",
          lineHeight: "20px",
          color: "#545563",
          display: "inline-block",
          width: "350px",
        }}
      >
        Sign in with your data that you entered during your registration.
      </div>
      <div
        style={{
          position: "absolute",
          top: "358px",
          left: "165px",
          width: "350px",
          height: "84px",
          color: "#83859c",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "calc(100% - 40px)",
            width: "100%",
            top: "20px",
            right: "0px",
            bottom: "20px",
            left: "0px",
            borderRadius: "8px",
            border: "1px solid #c7c8d2",
            boxSizing: "border-box",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 24px)",
            top: "32px",
            left: "12px",
            letterSpacing: "0.1px",
            lineHeight: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          name@example.com
        </div>
        <div
          style={{
            position: "absolute",
            width: "100%",
            top: "0px",
            left: "0px",
            fontSize: "12px",
            lineHeight: "16px",
            fontWeight: "600",
            color: "#545563",
            display: "inline-block",
          }}
        >
          Email
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "450px",
          left: "165px",
          width: "350px",
          height: "84px",
          color: "#83859c",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "calc(100% - 40px)",
            width: "100%",
            top: "20px",
            right: "0px",
            bottom: "20px",
            left: "0px",
            borderRadius: "8px",
            border: "1px solid #c7c8d2",
            boxSizing: "border-box",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 52px)",
            top: "32px",
            left: "12px",
            letterSpacing: "0.1px",
            lineHeight: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          min. 8 characters
        </div>
        <img
          style={{
            position: "absolute",
            top: "calc(50% - 10px)",
            right: "12px",
            width: "20px",
            height: "20px",
            overflow: "hidden",
          }}
          alt=""
          src={eye}
        />
        <div
          style={{
            position: "absolute",
            width: "100%",
            top: "0px",
            left: "0px",
            fontSize: "12px",
            lineHeight: "16px",
            fontWeight: "600",
            color: "#545563",
            display: "inline-block",
          }}
        >
          Password
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "542px",
          left: "165px",
          width: "350px",
          height: "20px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "calc(50% - 10px)",
            left: "0px",
            width: "20px",
            height: "20px",
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
              borderRadius: "4px",
              border: "2px solid #c7c8d2",
              boxSizing: "border-box",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "calc(100% - 32px)",
            top: "0px",
            left: "32px",
            letterSpacing: "0.1px",
            lineHeight: "20px",
            display: "inline-block",
          }}
        >
          Keep me logged in
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "602px",
          left: "165px",
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
          cursor: "pointer",
          textAlign: "center",
          color: "#fff",
        }}
        onClick={onButtonContainedAccentClick}
      >
        <button
          style={{
            flex: "1",
            position: "relative",
            letterSpacing: "0.3px",
            lineHeight: "20px",
            background: "none",
            border: "none",
          }}
          onClick={() => handleLogin()}
        >
          Login
        </button>
      </div>
      <div
        style={{
          position: "absolute",
          top: "662px",
          left: "165px",
          width: "350px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "12px 16px",
          boxSizing: "border-box",
          textAlign: "center",
          color: "#4e60ff",
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
          Forgot password
        </b>
      </div>
      <div
        style={{
          position: "absolute",
          top: "800px",
          left: "165px",
          lineHeight: "20px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          width: "350px",
          color: "#545563",
        }}
      >
        <span style={{ lineBreak: "anywhere", width: "100%" }}>
          <span
            style={{ letterSpacing: "0.1px" }}
          >{`Don’t have an account? `}</span>
          <b style={{ letterSpacing: "0.3px", color: "#4e60ff" }}>Sign up</b>
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          width: "calc(100% - 640px)",
          top: "0px",
          right: "0px",
          left: "640px",
          height: "860px",
          display: "none",
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
            backgroundColor: "#697bff",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "48px",
            left: "calc(50% - 305px)",
            boxShadow: "0px 0px 80px rgba(49, 57, 120, 0.3)",
            width: "313px",
            height: "437px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "calc(100% - 0.59px)",
              width: "100%",
              top: "0px",
              right: "0px",
              bottom: "0.59px",
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
                borderRadius: "14.31px",
                backgroundColor: "#fff",
                border: "0.9px solid #edeef2",
                boxSizing: "border-box",
              }}
            />
          </div>
          <b
            style={{
              position: "absolute",
              top: "14.31px",
              left: "14.31px",
              fontSize: "11.63px",
              letterSpacing: "0.09px",
              lineHeight: "16.1px",
              display: "inline-block",
              width: "284.38px",
              height: "16.1px",
            }}
          >
            Overall rating
          </b>
          <div
            style={{
              position: "absolute",
              top: "32.19px",
              left: "14.31px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "10.73px",
              fontSize: "17.89px",
              color: "#4e60ff",
            }}
          >
            <div
              style={{
                position: "relative",
                letterSpacing: "0.09px",
                lineHeight: "25.04px",
                fontWeight: "600",
                display: "inline-block",
                width: "25.93px",
                height: "25.04px",
                flexShrink: "0",
              }}
            >
              4.2
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "7.15px",
                fontSize: "10px",
                color: "#83859c",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "0.89px",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    width: "12.52px",
                    height: "12.52px",
                    overflow: "hidden",
                    flexShrink: "0",
                  }}
                  alt=""
                  src="/icon--outlined--action--main--star.svg"
                />
                <img
                  style={{
                    position: "relative",
                    width: "12.52px",
                    height: "12.52px",
                    overflow: "hidden",
                    flexShrink: "0",
                  }}
                  alt=""
                  src="/icon--outlined--action--main--star1.svg"
                />
                <img
                  style={{
                    position: "relative",
                    width: "12.52px",
                    height: "12.52px",
                    overflow: "hidden",
                    flexShrink: "0",
                  }}
                  alt=""
                  src="/icon--outlined--action--main--star2.svg"
                />
                <img
                  style={{
                    position: "relative",
                    width: "12.52px",
                    height: "12.52px",
                    overflow: "hidden",
                    flexShrink: "0",
                  }}
                  alt=""
                  src="/icon--outlined--action--main--star3.svg"
                />
                <img
                  style={{
                    position: "relative",
                    width: "12.52px",
                    height: "12.52px",
                    overflow: "hidden",
                    flexShrink: "0",
                  }}
                  alt=""
                  src="/icon--outlined--action--main--star4.svg"
                />
              </div>
              <b style={{ position: "relative", lineHeight: "14px" }}>
                3 votes
              </b>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "16.1px",
              right: "14.01px",
              borderRadius: "7.15px",
              border: "0.9px solid #4e60ff",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "10.731429100036621px 14.308571815490723px",
              textAlign: "center",
              color: "#4e60ff",
            }}
          >
            <b
              style={{
                position: "relative",
                letterSpacing: "0.3px",
                lineHeight: "20px",
              }}
            >
              Leave review
            </b>
          </div>
          <img
            style={{
              position: "absolute",
              width: "100%",
              top: "71.54px",
              right: "0px",
              left: "0px",
              maxWidth: "100%",
              overflow: "hidden",
              height: "0px",
            }}
            alt=""
            src="/divider.svg"
          />
          <div
            style={{
              position: "absolute",
              width: "calc(100% - 28.62px)",
              top: "135.93px",
              right: "14.31px",
              left: "14.31px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "14.31px",
            }}
          >
            <div
              style={{
                width: "284.38px",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "10.73px",
              }}
            >
              <img
                style={{
                  position: "relative",
                  width: "32.19px",
                  height: "32.19px",
                }}
                alt=""
                src="/avatar--circled--woman--01.svg"
              />
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "3.58px",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "10.73px",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "1.79px",
                    }}
                  >
                    <b
                      style={{
                        alignSelf: "stretch",
                        position: "relative",
                        letterSpacing: "0.1px",
                        lineHeight: "20px",
                      }}
                    >
                      Savannah Miles
                    </b>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "7.15px",
                        fontSize: "10px",
                        color: "#83859c",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "0.89px",
                        }}
                      >
                        <img
                          style={{
                            position: "relative",
                            width: "12.52px",
                            height: "12.52px",
                            overflow: "hidden",
                            flexShrink: "0",
                          }}
                          alt=""
                          src="/icon--outlined--action--main--star5.svg"
                        />
                        <img
                          style={{
                            position: "relative",
                            width: "12.52px",
                            height: "12.52px",
                            overflow: "hidden",
                            flexShrink: "0",
                          }}
                          alt=""
                          src="/icon--outlined--action--main--star6.svg"
                        />
                        <img
                          style={{
                            position: "relative",
                            width: "12.52px",
                            height: "12.52px",
                            overflow: "hidden",
                            flexShrink: "0",
                          }}
                          alt=""
                          src="/icon--outlined--action--main--star7.svg"
                        />
                        <img
                          style={{
                            position: "relative",
                            width: "12.52px",
                            height: "12.52px",
                            overflow: "hidden",
                            flexShrink: "0",
                          }}
                          alt=""
                          src="/icon--outlined--action--main--star8.svg"
                        />
                        <img
                          style={{
                            position: "relative",
                            width: "12.52px",
                            height: "12.52px",
                            overflow: "hidden",
                            flexShrink: "0",
                          }}
                          alt=""
                          src="/icon--outlined--action--main--star9.svg"
                        />
                      </div>
                      <b style={{ position: "relative", lineHeight: "14px" }}>
                        10 days ago
                      </b>
                    </div>
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      position: "relative",
                      letterSpacing: "0.1px",
                      lineHeight: "20px",
                    }}
                  >
                    Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad,
                    ei doming aperiam delicata est.
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    padding: "7.154285907745361px 0px",
                    gap: "17.89px",
                    fontSize: "12px",
                    color: "#545563",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "7.15px",
                    }}
                  >
                    <img
                      style={{
                        position: "relative",
                        width: "14.31px",
                        height: "14.31px",
                        overflow: "hidden",
                        flexShrink: "0",
                      }}
                      alt=""
                      src="/icon--outlined--action--thumb--thumb-up-filled.svg"
                    />
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "16px",
                        fontWeight: "600",
                      }}
                    >
                      14
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "7.15px",
                      color: "#83859c",
                    }}
                  >
                    <img
                      style={{
                        position: "relative",
                        width: "14.31px",
                        height: "14.31px",
                        overflow: "hidden",
                        flexShrink: "0",
                      }}
                      alt=""
                      src="/icon--outlined--action--thumb--thumb-down.svg"
                    />
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "16px",
                        fontWeight: "600",
                      }}
                    >
                      4
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              style={{
                alignSelf: "stretch",
                position: "relative",
                maxWidth: "100%",
                overflow: "hidden",
                height: "0px",
                flexShrink: "0",
              }}
              alt=""
              src="/divider1.svg"
            />
            <div
              style={{
                width: "284.38px",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "10.73px",
              }}
            >
              <img
                style={{
                  position: "relative",
                  width: "32.19px",
                  height: "32.19px",
                }}
                alt=""
                src="/avatar--circled--man--01.svg"
              />
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "3.58px",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "10.73px",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "1.79px",
                    }}
                  >
                    <b
                      style={{
                        alignSelf: "stretch",
                        position: "relative",
                        letterSpacing: "0.1px",
                        lineHeight: "20px",
                      }}
                    >
                      Jacob Jones
                    </b>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "7.15px",
                        fontSize: "10px",
                        color: "#83859c",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "0.89px",
                        }}
                      >
                        <img
                          style={{
                            position: "relative",
                            width: "12.52px",
                            height: "12.52px",
                            overflow: "hidden",
                            flexShrink: "0",
                          }}
                          alt=""
                          src="/icon--outlined--action--main--star10.svg"
                        />
                        <img
                          style={{
                            position: "relative",
                            width: "12.52px",
                            height: "12.52px",
                            overflow: "hidden",
                            flexShrink: "0",
                          }}
                          alt=""
                          src="/icon--outlined--action--main--star11.svg"
                        />
                        <img
                          style={{
                            position: "relative",
                            width: "12.52px",
                            height: "12.52px",
                            overflow: "hidden",
                            flexShrink: "0",
                          }}
                          alt=""
                          src="/icon--outlined--action--main--star12.svg"
                        />
                        <img
                          style={{
                            position: "relative",
                            width: "12.52px",
                            height: "12.52px",
                            overflow: "hidden",
                            flexShrink: "0",
                          }}
                          alt=""
                          src="/icon--outlined--action--main--star13.svg"
                        />
                        <img
                          style={{
                            position: "relative",
                            width: "12.52px",
                            height: "12.52px",
                            overflow: "hidden",
                            flexShrink: "0",
                          }}
                          alt=""
                          src="/icon--outlined--action--main--star14.svg"
                        />
                      </div>
                      <b style={{ position: "relative", lineHeight: "14px" }}>
                        1 days ago
                      </b>
                    </div>
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      position: "relative",
                      letterSpacing: "0.1px",
                      lineHeight: "20px",
                    }}
                  >
                    Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad,
                    ei doming aperiam delicata est.
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    padding: "7.154285907745361px 0px",
                    gap: "17.89px",
                    fontSize: "12px",
                    color: "#83859c",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "7.15px",
                    }}
                  >
                    <img
                      style={{
                        position: "relative",
                        width: "14.31px",
                        height: "14.31px",
                        overflow: "hidden",
                        flexShrink: "0",
                      }}
                      alt=""
                      src="/icon--outlined--action--thumb--thumb-up.svg"
                    />
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "16px",
                        fontWeight: "600",
                      }}
                    >
                      8
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "7.15px",
                    }}
                  >
                    <img
                      style={{
                        position: "relative",
                        width: "14.31px",
                        height: "14.31px",
                        overflow: "hidden",
                        flexShrink: "0",
                      }}
                      alt=""
                      src="/icon--outlined--action--thumb--thumb-down1.svg"
                    />
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "16px",
                        fontWeight: "600",
                      }}
                    >
                      3
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              width: "calc(100% - 164.65px)",
              top: "82.27px",
              right: "82.33px",
              left: "82.33px",
              borderRadius: "7.15px",
              backgroundColor: "#fff",
              border: "0.9px solid #c7c8d2",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              padding:
                "7.154285907745361px 7.154285907745361px 7.154285907745361px 10.731429100036621px",
              gap: "7.15px",
              fontSize: "13px",
              color: "#83859c",
            }}
          >
            <div
              style={{
                position: "relative",
                lineHeight: "18px",
                fontWeight: "600",
              }}
            >
              <span>{`Sort by: `}</span>
              <span style={{ color: "#2b2b43" }}>Newest first</span>
            </div>
            <img
              style={{
                position: "relative",
                width: "14.31px",
                height: "14.31px",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src="/icon--outlined--directions--chevron--down.svg"
            />
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "430px",
            left: "calc(50% - 335px)",
            boxShadow: "0px 0px 80px rgba(49, 57, 120, 0.4)",
            width: "618px",
            height: "132px",
            fontSize: "18px",
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
                borderRadius: "13.55px",
                backgroundColor: "#fff",
                border: "0.8px solid #edeef2",
                boxSizing: "border-box",
              }}
            />
          </div>
          <b
            style={{
              position: "absolute",
              width: "calc(100% - 347.1px)",
              top: "calc(50% - 45.72px)",
              left: "182.86px",
              letterSpacing: "0.1px",
              lineHeight: "24px",
              display: "inline-block",
            }}
          >
            Nigiri set
          </b>
          <div
            style={{
              position: "absolute",
              width: "calc(100% - 347.1px)",
              top: "calc(50% - 22.01px)",
              left: "182.86px",
              fontSize: "13px",
              letterSpacing: "0.2px",
              lineHeight: "18px",
              color: "#83859c",
              display: "inline-block",
            }}
          >
            Ea his sensibus eleifend, mollis iudicabit omittantur id mel. Et cum
            ignota euismod corpora, et saepe.
          </div>
          <div
            style={{
              position: "absolute",
              width: "calc(100% - 347.1px)",
              top: "calc(50% + 18.62px)",
              left: "182.86px",
              fontSize: "24px",
              letterSpacing: "0.1px",
              lineHeight: "32px",
              fontWeight: "800",
              display: "inline-block",
            }}
          >
            $ 16.80
          </div>
          <img
            style={{
              position: "absolute",
              height: "calc(100% - 27.09px)",
              top: "13.55px",
              bottom: "13.55px",
              left: "13.55px",
              maxHeight: "100%",
              width: "152.38px",
              objectFit: "cover",
            }}
            alt=""
            src="/img-mask@2x.png"
          />
          <div
            style={{
              position: "absolute",
              right: "13.55px",
              bottom: "20.32px",
              width: "112.41px",
              height: "67.73px",
              textAlign: "center",
              fontSize: "14px",
              color: "#4e60ff",
            }}
          >
            <div
              style={{
                position: "absolute",
                right: "0px",
                bottom: "0px",
                borderRadius: "6.77px",
                backgroundColor: "#f3f4ff",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "10.158905029296875px 13.545206069946289px",
                gap: "6.77px",
              }}
            >
              <img
                style={{
                  position: "relative",
                  width: "13.55px",
                  height: "13.55px",
                  overflow: "hidden",
                  flexShrink: "0",
                }}
                alt=""
                src="/icon--outlined--suggested--symbol-.svg"
              />
              <b
                style={{
                  position: "relative",
                  letterSpacing: "0.3px",
                  lineHeight: "20px",
                }}
              >
                Add to cart
              </b>
            </div>
            <div
              style={{
                position: "absolute",
                right: "25.4px",
                bottom: "50.79px",
                width: "60.95px",
                height: "16.93px",
                overflow: "hidden",
                color: "#2b2b43",
              }}
            >
              <b
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "22.01px",
                  letterSpacing: "0.1px",
                  lineHeight: "20px",
                  display: "inline-block",
                  width: "16.93px",
                }}
              >
                1
              </b>
              <img
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "44.02px",
                  width: "16.93px",
                  height: "16.93px",
                }}
                alt=""
                src="/circular-button--filled-light-small--gray--default.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  width: "16.93px",
                  height: "16.93px",
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
                    borderRadius: "6.77px",
                    backgroundColor: "#edeef2",
                    opacity: "0.5",
                  }}
                />
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 5.08px)",
                    left: "calc(50% - 5.08px)",
                    width: "10.16px",
                    height: "10.16px",
                    overflow: "hidden",
                    opacity: "0.5",
                  }}
                  alt=""
                  src="/icon--outlined--suggested--symbol-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <b
          style={{
            position: "absolute",
            top: "630px",
            left: "calc(50% - 240px)",
            fontSize: "32px",
            letterSpacing: "0.1px",
            lineHeight: "42px",
            display: "flex",
            color: "#fff",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            width: "480px",
          }}
        >
          Leave reviews for all meals
        </b>
        <div
          style={{
            position: "absolute",
            top: "688px",
            left: "calc(50% - 240px)",
            letterSpacing: "0.1px",
            lineHeight: "20px",
            color: "#fff",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "480px",
          }}
        >
          Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo
          probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.
        </div>
        <div
          style={{
            position: "absolute",
            top: "80px",
            left: "calc(50% + 35px)",
            boxShadow:
              "-40.00000762939453px 70.00000762939453px 80px rgba(49, 57, 120, 0.3)",
            width: "294px",
            height: "278.88px",
            fontSize: "15.12px",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "calc(100% + 0.12px)",
              width: "100%",
              top: "0px",
              right: "0px",
              bottom: "-0.12px",
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
                borderRadius: "13.44px",
                backgroundColor: "#fff",
                border: "0.8px solid #edeef2",
                boxSizing: "border-box",
              }}
            />
          </div>
          <b
            style={{
              position: "absolute",
              width: "calc(100% - 26.88px)",
              top: "174.72px",
              left: "13.44px",
              letterSpacing: "0.08px",
              lineHeight: "20.16px",
              display: "inline-block",
            }}
          >
            Roll set
          </b>
          <div
            style={{
              position: "absolute",
              width: "calc(100% - 26.88px)",
              top: "198.24px",
              left: "13.44px",
              fontSize: "10.92px",
              letterSpacing: "0.17px",
              lineHeight: "15.12px",
              color: "#83859c",
              display: "inline-block",
            }}
          >
            Ea his sensibus eleifend, mollis iudicabit omittantur id mel. Et cum
            ignota euismod corpora, et saepe.
          </div>
          <div
            style={{
              position: "absolute",
              width: "calc(100% - 67.2px)",
              bottom: "13.2px",
              left: "13.44px",
              fontSize: "20.16px",
              letterSpacing: "0.08px",
              lineHeight: "26.88px",
              fontWeight: "800",
              display: "inline-block",
            }}
          >
            $ 22.56
          </div>
          <img
            style={{
              position: "absolute",
              right: "13.44px",
              bottom: "13.32px",
              width: "26.88px",
              height: "26.88px",
              overflow: "hidden",
            }}
            alt=""
            src="/circular-button--filled-light--accent--default.svg"
          />
          <img
            style={{
              position: "absolute",
              height: "calc(100% - 127.56px)",
              width: "calc(100% - 26.88px)",
              top: "13.44px",
              right: "13.44px",
              bottom: "114.12px",
              left: "13.44px",
              maxWidth: "100%",
              overflow: "hidden",
              maxHeight: "100%",
              objectFit: "cover",
            }}
            alt=""
            src="/img-mask1@2x.png"
          />
        </div>
        <img
          style={{
            position: "absolute",
            top: "768px",
            left: "calc(50% - 28px)",
            width: "56px",
            height: "8px",
          }}
          alt=""
          src="/dots.svg"
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "620px",
          background:
            "linear-gradient(180deg, #384292, rgba(204, 32, 87, 0.53) 51.56%, rgba(248, 175, 21, 0.23))",
          width: "15000px",
          height: "1500px",
        }}
      />
    </div>
  );
};

export default Login;
