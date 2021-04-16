function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

var styles = {"instagramItems":"_2R-kh","instagramItem":"_wPDyp","instagramImg":"_vzTHL","instagramIcon":"_3xnQP","errorMessage":"_3lhLL"};

var InstagramFeed = /*#__PURE__*/function (_Component) {
  _inheritsLoose(InstagramFeed, _Component);

  function InstagramFeed(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      feeds: [],
      isError: '',
      isLoaded: false
    };
    return _this;
  }

  var _proto = InstagramFeed.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var url = "https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url&&access_token=" + this.props.token;
    fetch(url).then(function (response) {
      return response.json();
    }).then(function (data) {
      if (data.hasOwnProperty('error')) {
        _this2.setState({
          isLoaded: true,
          isError: true
        });
      } else {
        _this2.setState({
          isLoaded: true,
          feeds: data.data,
          isError: false
        });
      }
    })["catch"](function (error) {
      console.error('Error:', error);

      _this2.setState({
        isLoaded: true,
        isError: true,
        error: error
      });
    });
  };

  _proto.render = function render() {
    var _this$state = this.state,
        isError = _this$state.isError,
        isLoaded = _this$state.isLoaded,
        feeds = _this$state.feeds;

    if (isError) {
      return /*#__PURE__*/React__default.createElement("div", {
        className: styles.errorMessage
      }, /*#__PURE__*/React__default.createElement("p", null, " the access token is not valid"));
    } else if (!isLoaded) {
      return /*#__PURE__*/React__default.createElement("div", null, " Loading... ");
    } else {
      console.log(feeds);
      return /*#__PURE__*/React__default.createElement("div", {
        className: styles.instagramItems
      }, feeds.slice(0, this.props.counter).map(function (feed, index) {
        if (feed.media_type === 'IMAGE' || feed.media_type === 'CAROUSEL_ALBUM') {
        console.log(feeds);
        return /*#__PURE__*/React__default.createElement("div", {
          key: index,
          className: styles.instagramItem
        }, /*#__PURE__*/React__default.createElement("a", {
          key: index,
          href: feed.permalink,
          className: "ig-instagram-link",
          target: "_blank",
          rel: "noreferrer"
        }, feed.media_type === 'IMAGE' || feed.media_type === 'CAROUSEL_ALBUM' ? /*#__PURE__*/React__default.createElement("img", {
          className: styles.instagramImg,
          key: index,
          src: feed.media_url,
          alt: "description"
        }) : /*#__PURE__*/React__default.createElement("video", {
          className: styles.instagramImg,
          key: index,
          src: feed.media_url,
          type: "video/mp4/vid"
        }), /*#__PURE__*/React__default.createElement("div", {
          className: styles.instagramIcon
        }, /*#__PURE__*/React__default.createElement("div", {
          className: "instagram-count-item"
        }, /*#__PURE__*/React__default.createElement("span", {
          className: "icon"
        }, /*#__PURE__*/React__default.createElement("svg", {
          height: "18",
          viewBox: "0 0 512 512",
          width: "18"
        }, /*#__PURE__*/React__default.createElement("path", {
          fill: "currentColor",
          d: "m256 386c-71.683 0-130-58.317-130-130 7.14-172.463 252.886-172.413 260 .001 0 71.682-58.317 129.999-130 129.999zm0-220c-49.626 0-90 40.374-90 90 4.944 119.397 175.074 119.362 180-.001 0-49.625-40.374-89.999-90-89.999zm236 346h-472c-11.046 0-20-8.954-20-20v-472c0-11.046 8.954-20 20-20h472c11.046 0 20 8.954 20 20v472c0 11.046-8.954 20-20 20zm-452-40h432v-432h-432zm372-392c-11.046 0-20 8.954-20 20 0 11.046 8.954 20 20 20 11.046 0 20-8.954 20-20 0-11.046-8.954-20-20-20z"
        })))))));
      }}));
    }
  };

  return InstagramFeed;
}(React.Component);

module.exports = InstagramFeed;
//# sourceMappingURL=index.js.map
