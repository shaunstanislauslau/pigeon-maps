webpackJsonp([0],{0:function(e,t,o){e.exports=o(1)},1:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=o(2),a=n(r),i=o(166),l=n(i),u=o(167),s=n(u);o(172),a.default.render(l.default.createElement(s.default,null),document.getElementById("root"))},167:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=o(166),s=n(u),c=o(168),h=n(c),f=function(e){function t(e){r(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.zoomIn=function(){o.setState({zoom:Math.min(o.state.zoom+1,18)})},o.zoomOut=function(){o.setState({zoom:Math.max(o.state.zoom-1,1)})},o.handleBoundsChange=function(e){var t=e.center,n=e.zoom;o.setState({center:t,zoom:n})},o.state={center:[50.879,4.6997],zoom:12},o}return i(t,e),l(t,[{key:"render",value:function(){var e=this.state,t=e.center,o=e.zoom;return s.default.createElement("div",null,s.default.createElement(h.default,{center:t,zoom:o,onBoundsChanged:this.handleBoundsChange,width:600,height:400},s.default.createElement(c.Overlay,{position:[50.879,4.6997],offset:[15,31]},s.default.createElement("img",{src:"https://www.apprentus.com/images/map/pin-green-large@2x.png",width:29,height:34,alt:""})),s.default.createElement(c.Overlay,{position:[50.874,4.6947],offset:[15,31]},s.default.createElement("img",{src:"https://www.apprentus.com/images/map/pin-green-large@2x.png",width:29,height:34,alt:""}))),s.default.createElement("div",null,s.default.createElement("button",{onClick:this.zoomOut},"Zoom Out"),s.default.createElement("button",{onClick:this.zoomIn},"Zoom In")," ",o))}}]),t}(u.Component);t.default=f},168:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Overlay=void 0;var r=o(169),a=n(r),i=o(171),l=n(i);t.Overlay=l.default,t.default=a.default},169:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t,o){var n="undefined"!=typeof window&&window.devicePixelRatio>=2;return"https://maps.wikimedia.org/osm-intl/"+o+"/"+e+"/"+t+(n?"@2x":"")+".png"}function u(e,t){return e/Math.pow(2,t)*360-180}function s(e,t){var o=Math.PI-2*Math.PI*e/Math.pow(2,t);return 180/Math.PI*Math.atan(.5*(Math.exp(o)-Math.exp(-o)))}function c(e,t){var o=(0,m.default)(e);return[t.clientX-o.x,t.clientY-o.y]}Object.defineProperty(t,"__esModule",{value:!0});var h=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),f=o(166),d=n(f),p=o(170),m=n(p),v=100,_=50,M=function(e,t){return(e+180)/360*Math.pow(2,t)},g=function(e,t){return(1-Math.log(Math.tan(e*Math.PI/180)+1/Math.cos(e*Math.PI/180))/Math.PI)/2*Math.pow(2,t)},y=function(e){function t(e){r(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.setCenterZoomTarget=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if(o.props.animate){if(o._isAnimating){window.cancelAnimationFrame(o._animFrame);var a=o.animationStep(window.performance.now()),i=a.centerStep,l=a.zoomStep;o._centerStart=i,o._zoomStart=l}else o._isAnimating=!0,o._centerStart=[o.state.center[0],o.state.center[1]],o._zoomStart=o.state.zoom;o._animationStart=window.performance.now(),o._animationEnd=o._animationStart+v,r?(o._zoomAround=r,o._centerTarget=o.calculateZoomCenter(o.state.center,r,o.state.zoom,t)):(o._zoomAround=null,o._centerTarget=e),o._zoomTarget=t,o._animFrame=window.requestAnimationFrame(o.animate)}else if(r){var u=o.calculateZoomCenter(o.state.center,r,o.state.zoom,t);o.setCenterZoom(u,t,n)}else o.setCenterZoom(e,t,n)},o.animationStep=function(e){var t=o._animationEnd-o._animationStart,n=Math.max(e-o._animationStart,0),r=n/t,a=(o._zoomTarget-o._zoomStart)*r,i=o._zoomStart+a;if(o._zoomAround){var l=o.calculateZoomCenter(o._centerStart,o._zoomAround,o._zoomStart,i);return{centerStep:l,zoomStep:i}}var u=[o._centerStart[0]+(o._centerTarget[0]-o._centerStart[0])*r,o._centerStart[1]+(o._centerTarget[1]-o._centerStart[1])*r];return{centerStep:u,zoomStep:i}},o.animate=function(e){if(e>=o._animationEnd)o._isAnimating=!1,o.setCenterZoom(o._centerTarget,o._zoomTarget);else{var t=o.animationStep(e),n=t.centerStep,r=t.zoomStep;o.setCenterZoom(n,r),o._animFrame=window.requestAnimationFrame(o.animate)}},o.setCenterZoom=function(e,t){Math.round(o.state.zoom)!==Math.round(t)&&!function(){var n=o.tileValues(o.props,o.state),r=o.tileValues(o.props,{center:e,zoom:t}),a=o.state.oldTiles;o.setState({oldTiles:a.filter(function(e){return e.roundedZoom!==n.roundedZoom}).concat(n)});for(var i={},l=r.tileMinX;l<=r.tileMaxX;l++)for(var u=r.tileMinY;u<=r.tileMaxY;u++){var s=l+"-"+u+"-"+r.roundedZoom;i[s]=!1}o._loadTracker=i}(),o.setState({center:e,zoom:t}),(Math.abs(o.props.zoom-t)>.001||Math.abs(o.props.center[0]-e[0])>1e-4||Math.abs(o.props.center[1]-e[1])>1e-4)&&o.syncToProps(e,t)},o.imageLoaded=function(e){o._loadTracker&&e in o._loadTracker&&(o._loadTracker[e]=!0,0===Object.keys(o._loadTracker).filter(function(e){return!o._loadTracker[e]}).length&&o.setState({oldTiles:[]}))},o.handleTouchStart=function(e){var t=o.props,n=t.width,r=t.height;if(1===e.touches.length){var a=e.touches[0],i=c(o._containerRef,a);i[0]>=0&&i[1]>=0&&i[0]<n&&i[1]<r&&(o._touchStartCoords=[[a.clientX,a.clientY]],e.preventDefault())}else if(2===e.touches.length&&o._touchStartCoords){e.preventDefault(),(o.state.centerDelta||o.state.zoomDelta)&&o.sendDeltaChange();var l=e.touches[0],u=e.touches[1];o._touchStartCoords=[[l.clientX,l.clientY],[u.clientX,u.clientY]],o._touchStartMidPoint=[(l.clientX+u.clientX)/2,(l.clientY+u.clientY)/2],o._touchStartDistance=Math.sqrt(Math.pow(l.clientX-u.clientX,2)+Math.pow(l.clientY-u.clientY,2))}},o.handleTouchMove=function(e){if(1===e.touches.length&&o._touchStartCoords){e.preventDefault();var t=e.touches[0];o.setState({centerDelta:[t.clientX-o._touchStartCoords[0][0],t.clientY-o._touchStartCoords[0][1]]})}else if(2===e.touches.length&&o._touchStartCoords){var n=o.props,r=n.width,a=n.height,i=o.state.zoom;e.preventDefault();var l=e.touches[0],u=e.touches[1],s=(0,m.default)(o._containerRef),c=[(l.clientX+u.clientX)/2,(l.clientY+u.clientY)/2],h=[c[0]-o._touchStartMidPoint[0],c[1]-o._touchStartMidPoint[1]],f=Math.sqrt(Math.pow(l.clientX-u.clientX,2)+Math.pow(l.clientY-u.clientY,2)),d=Math.min(18,i+Math.log2(f/o._touchStartDistance))-i,p=Math.pow(2,d),v=[(s.x+r/2-c[0])*(p-1),(s.y+a/2-c[1])*(p-1)];o.setState({zoomDelta:d,centerDelta:[v[0]+h[0]*p,v[1]+h[1]*p]})}},o.handleTouchEnd=function(e){if(o._touchStartCoords)if(e.preventDefault(),o.sendDeltaChange(),0===e.touches.length)o._touchStartCoords=null;else if(1===e.touches.length){var t=e.touches[0];o._touchStartCoords=[[t.clientX,t.clientY]]}},o.handleMouseDown=function(e){var t=o.props,n=t.width,r=t.height,a=c(o._containerRef,e);a[0]>=0&&a[1]>=0&&a[0]<n&&a[1]<r&&(o._mouseDown=!0,o._dragStart=a,e.preventDefault())},o.handleMouseMove=function(e){o._mousePosition=c(o._containerRef,e),o._mouseDown&&o._dragStart&&o.setState({centerDelta:[o._mousePosition[0]-o._dragStart[0],o._mousePosition[1]-o._dragStart[1]]})},o.handleMouseUp=function(e){o._mouseDown&&(o.sendDeltaChange(),o._mouseDown=!1)},o.sendDeltaChange=function(){var e=o.state,t=e.center,n=e.zoom,r=e.centerDelta,a=e.zoomDelta;if(r||0!==a){var i=u(M(t[1],n+a)-(r?r[0]/256:0),n+a),l=s(g(t[0],n+a)-(r?r[1]/256:0),n+a);o.setCenterZoom([l,i],n+a)}o.setState({centerDelta:null,zoomDelta:0})},o.syncToProps=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.state.center,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.state.zoom,n=o.props.onBoundsChanged;n&&n({center:e,zoom:t})},o.handleWheel=function(e){e.preventDefault(),o.zoomAroundMouse(-e.deltaY/_)},o.zoomAroundMouse=function(e){var t=o.state.zoom;if(!(!o._mousePosition||t+e<1||t+e>18)){var n=o.pixelToLatLng(o._mousePosition[0],o._mousePosition[1],t);o.setCenterZoomTarget(null,t+e,!1,n)}},o.handleContextMenu=function(e){e.preventDefault()},o.pixelToLatLng=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:o.state.center,a=o.props,i=a.width,l=a.height,c=[(e-i/2)/256,(t-l/2)/256],h=M(r[1],n)+c[0],f=g(r[0],n)+c[1];return[s(f,n),u(h,n)]},o.latLngToPixel=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:o.state.center,a=o.props,i=a.width,l=a.height,u=M(r[1],n),s=g(r[0],n),c=M(t,n),h=g(e,n);return[256*(c-u)+i/2,256*(h-s)+l/2]},o.calculateZoomCenter=function(e,t,n,r){var a=o.latLngToPixel(t[0],t[1],n,e),i=o.pixelToLatLng(a[0],a[1],r,e),l=i[0]-t[0],u=i[1]-t[1];return[e[0]-l,e[1]-u]},o.setRef=function(e){o._containerRef=e},o._mousePosition=null,o._dragStart=null,o._mouseDown=!1,o._touchStartCoords=null,o._isAnimating=!1,o._animationStart=null,o._animationEnd=null,o._centerTarget=null,o._zoomTarget=null,o.state={zoom:e.zoom,center:e.center,zoomDelta:0,centerDelta:null,oldTiles:[]},o}return i(t,e),h(t,[{key:"componentDidMount",value:function(){var e=window.addEventListener;e("mousedown",this.handleMouseDown),e("mouseup",this.handleMouseUp),e("mousemove",this.handleMouseMove),e("touchstart",this.handleTouchStart),e("touchmove",this.handleTouchMove),e("touchend",this.handleTouchEnd)}},{key:"componentWillUnmount",value:function(){var e=window.removeEventListener;e("mousedown",this.handleMouseDown),e("mouseup",this.handleMouseUp),e("mousemove",this.handleMouseMove),e("touchstart",this.handleTouchStart),e("touchmove",this.handleTouchMove),e("touchend",this.handleTouchEnd)}},{key:"componentWillReceiveProps",value:function(e){(Math.abs(e.zoom-this.state.zoom)>.001||Math.abs(e.center[0]-this.state.center[0])>1e-4||Math.abs(e.center[1]-this.state.center[1])>1e-4)&&this.setCenterZoomTarget(e.center,e.zoom,!0)}},{key:"tileValues",value:function(e,t){var o=e.width,n=e.height,r=t.center,a=t.zoom,i=t.centerDelta,l=t.zoomDelta,u=Math.round(a+l),s=a+l-u,c=Math.pow(2,s),h=o/c,f=n/c,d=M(r[1],u)-(i?i[0]/256/c:0),p=g(r[0],u)-(i?i[1]/256/c:0),m=h/2/256,v=f/2/256,_=Math.floor(d-m),y=Math.floor(d+m),w=Math.floor(p-v),b=Math.floor(p+v);return{tileMinX:_,tileMaxX:y,tileMinY:w,tileMaxY:b,tileCenterX:d,tileCenterY:p,roundedZoom:u,zoomDelta:l,scaleWidth:h,scaleHeight:f,scale:c}}},{key:"renderTiles",value:function(){for(var e=this,t=this.state.oldTiles,o=this.props.provider||l,n=this.tileValues(this.props,this.state),r=n.tileMinX,a=n.tileMaxX,i=n.tileMinY,u=n.tileMaxY,s=n.tileCenterX,c=n.tileCenterY,h=n.roundedZoom,f=n.scaleWidth,p=n.scaleHeight,m=n.scale,v=[],_=0;_<t.length;_++){var M=t[_],g=M.roundedZoom-h;if(!(Math.abs(g)>4||0===g))for(var y=1/Math.pow(2,g),w=256*-(r-M.tileMinX*y),b=256*-(i-M.tileMinY*y),T=Math.max(M.tileMinX,0),S=Math.max(M.tileMinY,0),z=Math.min(M.tileMaxX,Math.pow(2,M.roundedZoom)-1),P=Math.min(M.tileMaxY,Math.pow(2,M.roundedZoom)-1),C=T;C<=z;C++)for(var O=S;O<=P;O++)v.push({key:C+"-"+O+"-"+M.roundedZoom,url:o(C,O,M.roundedZoom),left:w+256*(C-M.tileMinX)*y,top:b+256*(O-M.tileMinY)*y,width:256*y,height:256*y,active:!1})}for(var D=Math.max(r,0),x=Math.max(i,0),E=Math.min(a,Math.pow(2,h)-1),k=Math.min(u,Math.pow(2,h)-1),Y=D;Y<=E;Y++)for(var X=x;X<=k;X++)v.push({key:Y+"-"+X+"-"+h,url:o(Y,X,h),left:256*(Y-r),top:256*(X-i),width:256,height:256,active:!0});var Z={width:f,height:p,position:"absolute",top:0,left:0,overflow:"hidden",transform:"scale("+m+", "+m+")",transformOrigin:"top left"},j=-(256*(s-r)-f/2),L=-(256*(c-i)-p/2),A={position:"absolute",width:256*(a-r+1),height:256*(u-i+1),left:j,top:L};return d.default.createElement("div",{style:Z},d.default.createElement("div",{style:A},v.map(function(t){return d.default.createElement("img",{key:t.key,src:t.url,width:t.width,height:t.height,onLoad:function(){return e.imageLoaded(t.key)},style:{position:"absolute",left:t.left,top:t.top,transform:t.transform,transformOrigin:"top left",opacity:1}})})))}},{key:"renderOverlays",value:function(){var e=this,t=this.props,o=t.width,n=t.height,r=this.state,a=r.zoom,i=r.centerDelta,l=r.zoomDelta,u=d.default.Children.map(this.props.children,function(t){var o=t.props,n=o.position,r=o.offset;if(n){var u=e.latLngToPixel(n[0],n[1],a+l);return d.default.cloneElement(t,{left:u[0]-(r?r[0]:0)+(i?i[0]:0),top:u[1]-(r?r[1]:0)+(i?i[1]:0)})}}),s={position:"absolute",width:o,height:n,top:0,left:0};return d.default.createElement("div",{style:s},u)}},{key:"render",value:function(){var e=this.props,t=e.width,o=e.height,n={width:t,height:o,position:"relative",display:"inline-block",overflow:"hidden",background:"#dddddd"};return d.default.createElement("div",{style:n,ref:this.setRef,onContextMenu:this.handleContextMenu,onWheel:this.handleWheel},this.renderTiles(),this.renderOverlays())}}]),t}(f.Component);y.propTypes={center:d.default.PropTypes.array,zoom:d.default.PropTypes.number,width:d.default.PropTypes.number,height:d.default.PropTypes.number,provider:d.default.PropTypes.func,children:d.default.PropTypes.node,animate:d.default.PropTypes.bool,onBoundsChanged:d.default.PropTypes.func},y.defaultProps={animate:!0},t.default=y},170:function(e,t){"use strict";function o(e){for(var t=0,o=0,n=!0;e;)t+=e.offsetLeft-(n?0:e.scrollLeft)+e.clientLeft,o+=e.offsetTop-(n?0:e.scrollTop)+e.clientTop,e=e.offsetParent,n=!1;return{x:t,y:o}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},171:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=o(166),s=n(u),c=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.left,o=e.top;return s.default.createElement("div",{style:{position:"absolute",left:t,top:o}},this.props.children)}}]),t}(u.Component);c.propTypes={position:s.default.PropTypes.array,offset:s.default.PropTypes.array,left:s.default.PropTypes.number,top:s.default.PropTypes.number,children:s.default.PropTypes.node},t.default=c},172:function(e,t,o){e.exports=o.p+"index.html"}});