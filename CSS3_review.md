f###selector
1、属性选择器：div[attr]/[attr="value"]/[attr~="value"]/[attr^="value"]/[attr$="value"]/[attr*="value"]
2、结构选择器：div:first-child(div的父元素的首个子div)/last-child/first-of-type/last-of-type/only-child/only-of-type
3、伪类选择器：p:target/:disabled/:enabled/:checked/:first-line/:first-letter/::selection/::before/::after/:not(s)/e~f
4、结构性伪类: div:nth-child(n/odd/even/2n)/nth-last-child(n)/nth-of-type(n)/nth-last-of-type(n)/empty
5、文本功能：Direction:Rtl/Ltr+unicode-bidi//Text-overflow:clip/ellipsis+overflow:hidden/white-space:nowrap

###box
1、弹性盒模型：father-->display:(-webkit-前缀+)box/inline-box,box-orient:horizontal/vertical,box-direction:Normal/reverse,box-oridianl-group,box-flex,box-pack:start/end/cneter/justify,box-align:start/end/center
2、盒模型阴影：box-shadow:[inset] x y blur [spread] color/box-reflect:direction distance 渐变/resize:both horizontal vertical/box-sizing:content-box border-box
3、三栏布局：column-width/count/gap/rule
4、响应式布局：a:all/print/tv...
              b:and/not/only
              c:max-width/max-device-width/orientation:portrait/orientation:landscape/-webkit-min-device-pixel-ratio
              d:<link rel="stylesheet" type="text/css" href="./.css" media="print"/>
                @import url(./.css) screen
                @media screen{
                    selector{
                        prototype:value;
                    }
                }

###radius
1、border-radius:px/100%
2、border-image(-source/-slice/-width/-repeat):
3、linear-gradient([起点|角度],点,点)
4、radial-gradient([起点|角度|大小],点,点)
5、background:url(a.jpg) 0 0,url(b.jpg) 0 100%;background-size:x y;background-origin:border/padding/content-box;background-clip:border/padding/content/no-clip
6、mask-imge/position/repeat

###transition
1、transition-property(all||[attr]||none)/transition-duration/transition-delay/transition-timing-function:ease-in||cubic-bezier(p1(x1,y1),p2(x2,y2))/obj.addEventListener("webkitTransitionEnd",function(){})/obj.addEventListener("transitionend",function(){},false)
2、transform:rotate(deg,origin)/skew()/scale()/translate()/martix(a,b,c,d,e,f) --> [[1,0,0],[1,0,0],[0,0,1]]


###3d
1、transform-style:preserve-3d/perspective/perspective-origin/rotateZ()/translateZ()/scaleZ()
2、@keyframes name{number:0% 100%||from to}/animation-name/animation-duration/animation-play-state/animation-timing-function/animation-delay/animation-iteration-count/animation-direction:alternate/obj.addEventListerner("webkitAnimationEnd",fn,false)
