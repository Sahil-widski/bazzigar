"use strict";
exports.id = 836;
exports.ids = [836];
exports.modules = {

/***/ 836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ mobile_app_dark)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/layouts/Dark.jsx
/* eslint-disable @next/next/no-css-tags */






const DarkTheme = ({
  children,
  useSkin,
  mobileappstyle
}) => {
  external_react_default().useEffect(() => {
    window.theme = "dark";
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "stylesheet",
        href: "/css/dark.css"
      }), useSkin ? /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "stylesheet",
        href: "/css/arch-skin-dark.css"
      }) : "", mobileappstyle ? /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "/css/mobile-app-dark.css",
        rel: "stylesheet"
      }) : ""]
    }), children]
  });
};

/* harmony default export */ const Dark = (DarkTheme);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(806);
;// CONCATENATED MODULE: ./src/common/navbar.js

const handleDropdown = e => {
  getSiblings(e.target.parentElement).filter(item => item.classList.contains("show")).map(item => {
    item.classList.remove("show");

    if (item.childNodes[0]) {
      item.childNodes[0].setAttribute("aria-expanded", false);
    }

    if (item.childNodes[1]) {
      item.childNodes[1].classList.remove("show");
    }
  });
  e.target.parentElement.classList.toggle("show");
  e.target.setAttribute("aria-expanded", true);
  e.target.parentElement.childNodes[1].classList.toggle("show");
};
const handleMobileDropdown = e => {
  document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans");
};
;// CONCATENATED MODULE: ./src/components/Navbar-mobile-app/navbar-mobile-app.jsx
/* eslint-disable @next/next/no-img-element */







const NavbarMobileApp = ({
  lr,
  nr,
  theme
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("nav", {
    ref: nr,
    className: `navbar navbar-expand-lg change ${theme === "themeL" ? "light" : ""}`,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "logo",
          children: theme ? theme === "themeL" ? /*#__PURE__*/jsx_runtime_.jsx("img", {
            ref: lr,
            src: app/* darkLogo */.Q1,
            alt: "logo"
          }) : /*#__PURE__*/jsx_runtime_.jsx("img", {
            ref: lr,
            src: app/* lightLogo */.E8,
            alt: "logo"
          }) : /*#__PURE__*/jsx_runtime_.jsx("img", {
            ref: lr,
            src: app/* lightLogo */.E8,
            alt: "logo"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        onClick: handleMobileDropdown,
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "icon-bar",
          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "fas fa-bars"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "collapse navbar-collapse",
        id: "navbarSupportedContent",
        children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
          className: "navbar-nav ml-auto",
          children: /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "nav-item"
          })
        })
      })]
    })
  });
};

/* harmony default export */ const navbar_mobile_app = (NavbarMobileApp);
;// CONCATENATED MODULE: ./src/components/Intro6/intro6.jsx




const Intro6 = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    className: "backgroundBlack mobile-app valign",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-6 valign",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "caption",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
              className: "mb-20",
              children: "Win big at Bazzigar Exchange"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "- Your top destination for online casino profit"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "butons mt-40",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "https://api.whatsapp.com/send?phone=918976471841&text=I want to create ID",
                className: "butn-gr rounded buton",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "Create Id"
                })
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-5 offset-lg-1",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "img"
          })
        })]
      })
    })
  });
};

/* harmony default export */ const intro6 = (Intro6);
;// CONCATENATED MODULE: ./src/components/Services7/services7.jsx




const Services7 = ({
  lightTheme
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "serv-block section-padding",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-5",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "serv-img md-mb50",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/img/mobile-app/app-img/dice.jpeg",
              alt: ""
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-6 offset-lg-1 valign",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "content",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h6", {
              className: "stit mb-30",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "left"
              }), " Live Games"]
            }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
              className: "mb-30",
              children: "We have all live games with us (Teen Patti, Rummy, Snooker, Sports)"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "having a variety of live games such as Teen Patti, Rummy, Snooker, and Sports can be a great way to attract and retain poker players. Each of these games offers a unique experience and appeals to different types of players. Teen Patti, also known as Indian Poker, is a popular card game in India that is similar to 3-card poker. It is a fast-paced and exciting game that can be a great way to attract players who are looking for a new and exciting way to play poker."
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "butons mt-40",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#0",
                className: "butn-gr rounded buton",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "Create Id"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "list-feat mt-40",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  className: "mb-20",
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("i", {
                    className: "icon",
                    children: [" ", /*#__PURE__*/jsx_runtime_.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 448 512",
                      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                        d: "M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"
                      })
                    })]
                  }), " ", "Instant Id"]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  className: "mb-20",
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("i", {
                    className: "icon",
                    children: [" ", /*#__PURE__*/jsx_runtime_.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 448 512",
                      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                        d: "M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"
                      })
                    })]
                  }), " ", "100+ Games"]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("i", {
                    className: "icon",
                    children: [" ", /*#__PURE__*/jsx_runtime_.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 448 512",
                      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                        d: "M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"
                      })
                    })]
                  }), " ", "Fast Withdraw"]
                })]
              })
            })]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row mt-80",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-6 valign",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "content md-mb50",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h6", {
              className: "stit mb-30",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "left"
              }), " Sports Betting"]
            }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
              className: "mb-30",
              children: "Cricket, Football, Basketball and Lots more"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Welcome to Bazzigar Exchange, where sports fans can turn their passion for the game into profit. We offer a wide range of sports betting options for our customers, from football and basketball to tennis and baseball. Our platform is user-friendly, secure and fast. We have a team of experts who are always ready to assist you with any questions you may have. Whether youre a seasoned bettor or new to the game, we have something for everyone. Join Bazzigar Exchange today and experience the thrill of sports betting like never before!"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "butons mt-40",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "https://api.whatsapp.com/send?phone=918976471841&text=I want to create ID",
                className: "butn-bord-red rounded buton",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "Create Id"
                })
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-5 offset-lg-1",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "serv-img",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/img/mobile-app/app-img/satta.jpeg",
              style: {
                height: 500
              },
              alt: ""
            })
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "circle-blur"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "circle-blur two"
    })]
  });
};

/* harmony default export */ const services7 = (Services7);
;// CONCATENATED MODULE: ./src/components/Services8/services8.jsx




const Services8 = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "app-services section-padding bg-gray",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row justify-content-center",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-7 col-md-10",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "s-head text-center mb-80",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h6", {
              className: "stit mb-30",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "left"
              }), " Amazing Games", /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "right"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
              children: "Amazing Games Comes With Amazing Money"
            })]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-4 col-md-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "item mb-30",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "item-tit mb-15",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "icon",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "pe-7s-vector"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "text-tit",
                children: /*#__PURE__*/jsx_runtime_.jsx("h5", {
                  children: "Andar Bahar"
                })
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-4 col-md-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "item mb-30",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "item-tit mb-15",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "icon",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "pe-7s-rocket"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "text-tit",
                children: /*#__PURE__*/jsx_runtime_.jsx("h5", {
                  children: "Rocket Play"
                })
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-4 col-md-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "item mb-30",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "item-tit mb-15",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "icon",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "pe-7s-graph3"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "text-tit",
                children: /*#__PURE__*/jsx_runtime_.jsx("h5", {
                  children: "Share Bazzar"
                })
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-4 col-md-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "item sm-mb50",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "item-tit mb-15",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "icon",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "pe-7s-anchor"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "text-tit",
                children: /*#__PURE__*/jsx_runtime_.jsx("h5", {
                  children: "Triple Fun"
                })
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-4 col-md-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "item sm-mb50",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "item-tit mb-15",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "icon",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "pe-7s-phone"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "text-tit",
                children: /*#__PURE__*/jsx_runtime_.jsx("h5", {
                  children: "Mobile Games"
                })
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-4 col-md-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "item",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "item-tit mb-15",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "icon",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "pe-7s-lock"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "text-tit",
                children: /*#__PURE__*/jsx_runtime_.jsx("h5", {
                  children: "Heigh Security"
                })
              })]
            })
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const services8 = (Services8);
;// CONCATENATED MODULE: ./src/components/Progress/progress.jsx




const Progress = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "app-process section-padding pt-0",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row justify-content-center",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-7 col-md-10",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "s-head text-center mb-80",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h6", {
              className: "stit mb-30",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "left"
              }), " Working Process", /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "right"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
              children: "3 Step to get account"
            })]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-4",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "item text-center md-mb50",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "icon pe-7s-cloud-download"
            }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: "Contact Us"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "step-number",
              children: "Step 01"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-4",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "item text-center md-mb50",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "icon pe-7s-user"
            }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: "We will Create Account"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "step-number",
              children: "Step 02"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-4",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "item text-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "icon pe-7s-phone"
            }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: "Start Playing"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "step-number",
              children: "Step 03"
            })]
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const progress = (Progress);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./src/components/Footer2/footer2.jsx





const Footer2 = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
    className: "app-footer",
    "data-overlay-dark": "0",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-4 col-md-6",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "item-clumn our md-mb50",
            children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#0",
              className: "logo-brand mb-50"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Paise Se Hi Paisa Banega"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-6",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "item-clumn links",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
              className: "title mb-30",
              children: "Contact"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "info",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "Mobile"
              }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#0",
                  children: "+91 8976471841"
                })
              })]
            })]
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "sub-footer",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "row",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-12",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "text-center",
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "\xA9 2022 . All Rights Reserved"
              })
            })
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "circle-blur"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "circle-blur two"
    })]
  });
};

/* harmony default export */ const footer2 = (Footer2);
;// CONCATENATED MODULE: ./src/pages/mobile-app/mobile-app-dark.jsx
/* eslint-disable @next/next/no-page-custom-font */













const MobileAppDark = () => {
  const navbarRef = external_react_default().useRef(null);
  external_react_default().useEffect(() => {
    var navbar = navbarRef.current;

    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap",
        rel: "stylesheet"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Dark, {
      mobileappstyle: true,
      children: [/*#__PURE__*/jsx_runtime_.jsx(navbar_mobile_app, {
        nr: navbarRef
      }), /*#__PURE__*/jsx_runtime_.jsx(intro6, {}), /*#__PURE__*/jsx_runtime_.jsx(services7, {}), /*#__PURE__*/jsx_runtime_.jsx(services8, {}), /*#__PURE__*/jsx_runtime_.jsx(progress, {}), /*#__PURE__*/jsx_runtime_.jsx(footer2, {})]
    })]
  });
};

/* harmony default export */ const mobile_app_dark = (MobileAppDark);

/***/ }),

/***/ 806:
/***/ ((module) => {

module.exports = JSON.parse('{"E8":"/img/logo-dark.jpg","Q1":"/img/logo-dark.jpg","QP":true}');

/***/ })

};
;