"use strict";(self.webpackChunkcodrops_scroll_rig_tutorial=self.webpackChunkcodrops_scroll_rig_tutorial||[]).push([[478],{2478:(e,r,t)=>{t.r(r),t.d(r,{default:()=>u});var n=t(5043),c=t(9245),o=t(9408),s=t(7894);var a=t(5562),i=(t(694),t(579));c.p.preload("/glb/watch-v1.glb");function l(e){let{props:r,scrollState:t}=e;const a=(0,n.useRef)(),{nodes:l,materials:u,animations:f}=(0,c.p)("/glb/boy_float.glb"),{actions:p,ref:m,names:d}=function(e,r){const t=n.useRef(),[c]=n.useState((()=>r?r instanceof o.Object3D?{current:r}:r:t)),[a]=n.useState((()=>new o.AnimationMixer(void 0)));n.useLayoutEffect((()=>{r&&(c.current=r instanceof o.Object3D?r:r.current),a._root=c.current}));const i=n.useRef({}),l=n.useMemo((()=>{const r={};return e.forEach((e=>Object.defineProperty(r,e.name,{enumerable:!0,get(){if(c.current)return i.current[e.name]||(i.current[e.name]=a.clipAction(e,c.current))},configurable:!0}))),{ref:c,clips:e,actions:r,names:e.map((e=>e.name)),mixer:a}}),[e]);return(0,s.A)(((e,r)=>a.update(r))),n.useEffect((()=>{const e=c.current;return()=>{i.current={},a.stopAllAction(),Object.values(l.actions).forEach((r=>{e&&a.uncacheAction(r,e)}))}}),[e]),l}(f,a);function h(e){p[e].timeScale=1.2,p[e].reset().fadeIn(.5).play()}return(0,n.useEffect)((()=>{d.forEach(h)}),[]),(0,i.jsx)("group",{ref:a,...r,position:[2,-2.5,10],dispose:null,children:(0,i.jsx)("group",{name:"Scene",children:(0,i.jsx)("group",{name:"BezierCircle",children:(0,i.jsxs)("group",{name:"Armature",rotation:[Math.PI/2,0,0],scale:.025,children:[(0,i.jsx)("skinnedMesh",{name:"Ch09",geometry:l.Ch09.geometry,material:u["Ch09_body.001"],skeleton:l.Ch09.skeleton}),(0,i.jsx)("primitive",{object:l.mixamorig6Hips})]})})})})}const u=()=>{const e=(0,n.useRef)();return(0,i.jsxs)("section",{children:[(0,i.jsx)("div",{ref:e,className:"Placeholder ScrollScene"}),(0,i.jsx)(a.yK,{children:(0,i.jsx)(a.aQ,{track:e,children:e=>(0,i.jsx)(l,{...e})})})]})};c.p.preload("/glb/boy_float.glb")}}]);
//# sourceMappingURL=478.2cdc1227.chunk.js.map