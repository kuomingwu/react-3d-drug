(this["webpackJsonpreact-3d-drug"]=this["webpackJsonpreact-3d-drug"]||[]).push([[0],{29:function(e,t,a){e.exports=a(42)},33:function(e,t,a){},34:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},35:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),c=a.n(o),i=(a(33),a(34),a(35),a(3)),s=a(23),l=a(1),u=a(4),m=a(17),d=a(20),h=a.n(d);function g(e,t,a){var n=0,r=0,o=window.innerWidth,c=window.innerHeight;return e<=o/2&&(n=a*((o/2-e)/(o/2)*100)/100*-1),e>=o/2&&(n=a*((e-o/2)/(o/2)*100)/100),t<=c/2&&(r=.5*a*((c/2-t)/(c/2)*100)/100*-1),t>=c/2&&(r=a*((t-c/2)/(c/2)*100)/100),{x:n,y:r}}function p(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:40,n=g(e.current.x,e.current.y,a);t.rotation.xD=h()(t.rotation.xD||0,n.y,.1),t.rotation.yD=h()(t.rotation.yD||0,n.x,.1),t.rotation.x=l.Math.degToRad(t.rotation.xD),t.rotation.y=l.Math.degToRad(t.rotation.yD)}function f(e){var t=e.mouse,a=Object(s.a)(e,["mouse"]),o=Object(n.useRef)(),c=Object(u.c)(m.a,"/".concat("/react-3d-drug","/stacy.glb")),d=c.nodes,h=c.animations,g=Object(u.c)(l.TextureLoader,"/".concat("/react-3d-drug","/stacy.jpg")),f=Object(n.useRef)(),b=Object(n.useState)((function(){return new l.AnimationMixer})),y=Object(i.a)(b,1)[0];return Object(u.b)((function(e,t){return y.update(t)})),Object(n.useEffect)((function(){return f.current={idle:y.clipAction(h[8],o.current)},f.current.idle.play(),function(){return h.forEach((function(e){return y.uncacheClip(e)}))}}),[]),Object(u.b)((function(e,a){y.update(a),p(t,d.mixamorigNeck),p(t,d.mixamorigSpine)})),r.a.createElement("group",Object.assign({ref:o},a,{dispose:null}),r.a.createElement("group",{rotation:[Math.PI/2,0,0],scale:[.01,.01,.01]},r.a.createElement("primitive",{object:d.mixamorigHips}),r.a.createElement("skinnedMesh",{geometry:d.stacy.geometry,skeleton:d.stacy.skeleton,rotation:[-Math.PI/2,0,0],scale:[100,100,100]},r.a.createElement("meshPhongMaterial",{attach:"material",map:g,"map-flipY":!1,skinning:!0}))))}a(40);var b=a(28);function y(e){var t=Object.assign({},e);return r.a.createElement("mesh",Object.assign({},t,{receiveShadow:!0}),r.a.createElement("planeGeometry",{attach:"geometry",args:[5e3,5e3,1,1]}),r.a.createElement("meshLambertMaterial",{attach:"material",color:"#9b9b9b",transparent:!0,opacity:.2}))}var w=function(){var e=8.25,t=Object(n.useRef)({x:0,y:0});return r.a.createElement(b.a,{onMouseMove:function(e){return t.current=function(e){return{x:e.clientX,y:e.clientY}}(e)},shadowMap:!0,pixelRatio:window.devicePixelRatio,camera:{position:[0,-3,18]}},r.a.createElement("fog",{attach:"fog",args:[14671839,35,65]}),r.a.createElement("hemisphereLight",{skyColor:"black",groundColor:16777215,intensity:.68,position:[0,50,0]}),r.a.createElement("directionalLight",{position:[-8,12,8],"shadow-camera-left":-8.25,"shadow-camera-bottom":-8.25,"shadow-camera-right":e,"shadow-camera-top":e,"shadow-camera-near":.1,"shadow-camera-far":1500,castShadow:!0}),r.a.createElement("mesh",{position:[0,-3,-10]},r.a.createElement("circleBufferGeometry",{attach:"geometry",args:[8,64]}),r.a.createElement("meshBasicMaterial",{attach:"material",color:"lightpink"})),r.a.createElement(y,{rotation:[-.5*Math.PI,0,0],position:[0,-11,0]}),r.a.createElement(n.Suspense,{fallback:null},r.a.createElement(f,{mouse:t,position:[0,-11,0],scale:[7,7,7]})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.e40c8f07.chunk.js.map