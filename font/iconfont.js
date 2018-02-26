(function(window){var svgSprite='<svg><symbol id="icon-menu" viewBox="0 0 1024 1024"><path d="M46.545455 256l930.909091 0 0 46.545455-930.909091 0 0-46.545455Z"  ></path><path d="M46.545455 488.727273l930.909091 0 0 46.545455-930.909091 0 0-46.545455Z"  ></path><path d="M46.545455 721.454545l930.909091 0 0 46.545455-930.909091 0 0-46.545455Z"  ></path></symbol><symbol id="icon-paper-airplane" viewBox="0 0 1024 1024"><path d="M974.592 42.944C965.76 35.776 954.944 32 944 32c-7.296 0-14.656 1.664-21.44 5.056l-864 432C43.392 476.672 33.344 491.712 32.128 508.608c-1.216 16.896 6.656 33.216 20.544 42.88l219.456 151.872c0 0.256-0.128 0.448-0.128 0.64l0 240c0 20.8 13.44 39.232 33.28 45.696C310.144 991.232 315.136 992 320 992c15.104 0 29.76-7.104 38.912-19.904l100.416-139.136 217.344 150.528C684.8 989.12 694.4 992 704 992c5.504 0 11.072-0.96 16.384-2.88 14.592-5.248 25.728-17.344 29.888-32.256l240-864C995.392 74.56 989.184 54.976 974.592 42.944zM295.168 660.992 80 512l728.256-364.096L295.168 660.992zM320 944 320 704l624-624L320 944zM704 944l-216.512-149.888 419.52-580.864L704 944z"  ></path></symbol><symbol id="icon-daima" viewBox="0 0 1024 1024"><path d="M984.752 532.72 790.432 726.8C778.432 738.768 758.976 738.768 746.976 726.8 734.992 714.816 734.992 695.408 746.976 683.44L919.616 511.04 746.976 338.656C734.992 326.672 734.992 307.264 746.976 295.296 758.976 283.312 778.432 283.312 790.432 295.296L984.752 489.36C996.752 501.344 996.752 520.752 984.752 532.72ZM347.776 911.568C338.944 926.992 319.376 932.288 304.064 923.376 288.752 914.48 283.52 894.752 292.352 879.328L676.352 112.432C685.184 96.992 704.752 91.712 720.064 100.624 735.376 109.52 740.608 129.248 731.776 144.672L347.776 911.568ZM277.152 726.8C265.152 738.768 245.696 738.768 233.696 726.8L39.36 532.72C27.376 520.752 27.376 501.344 39.36 489.36L233.696 295.296C245.696 283.312 265.152 283.312 277.152 295.296 289.136 307.264 289.136 326.672 277.152 338.656L104.528 511.04 277.152 683.44C289.136 695.408 289.136 714.816 277.152 726.8Z"  ></path></symbol><symbol id="icon-xin" viewBox="0 0 1024 1024"><path d="M769.28 128C672.64 128 588.16 183.04 544 263.68 500.48 183.04 415.36 128 318.08 128c-140.8 0-254.72 114.56-254.72 256 0 67.2 25.6 128 67.84 174.08l391.04 392.96C528.64 956.8 536.32 960 544 960c7.68 0 15.36-3.2 21.76-8.96l391.04-392.96C998.4 512.64 1024 451.2 1024 384 1024 242.56 910.08 128 769.28 128zM908.16 516.48 544 886.4 179.84 516.48C147.2 481.92 127.36 435.2 127.36 384c0-106.24 85.76-192 190.72-192C403.2 192 476.8 248.32 502.4 325.76 508.8 342.4 525.44 354.56 544 354.56c19.2 0 35.2-11.52 42.24-28.16l0 0C611.2 248.32 684.16 192 769.28 192c105.6 0 190.72 85.76 190.72 192C960.64 435.2 940.8 481.92 908.16 516.48z"  ></path></symbol><symbol id="icon-bijibendiannaolaptop" viewBox="0 0 1024 1024"><path d="M126.58688 179.01056l0.4096 0L897.6384 179.01056c17.87904 0 32.27648 14.39232 32.27648 32.2816l0 0.4096 0 509.71648c0 17.46432-14.39744 31.872-32.27648 31.872l-0.63488 0L126.58688 753.29024c-17.88928 0-32.27648-14.40256-32.27648-31.872l0-0.81408L94.3104 211.29216C94.3104 193.39776 108.69248 179.01056 126.58688 179.01056L126.58688 179.01056zM33.01888 844.98944 33.01888 844.98944c-17.664 0-31.86176-13.97248-31.86176-31.86688 0-17.47968 14.19264-31.89248 31.86176-31.89248l958.16704 0c17.87904 0 31.65696 14.40768 31.65696 31.89248 0 17.88928-13.7728 31.86688-31.65696 31.86688L33.01888 844.98944 33.01888 844.98944zM865.76128 242.74944 865.76128 242.74944 158.65344 242.74944l0 446.17728 707.10272 0L865.75616 242.74944 865.76128 242.74944z"  ></path></symbol><symbol id="icon-flagqizi" viewBox="0 0 1024 1024"><path d="M875.196952 563.300386l-11.180644 4.473895-11.180644 2.242064c-7.450692 3.02387-17.514909 5.962805-30.184463 8.93858-12.668531 3.02387-26.454512 6.382361-41.365106 10.064216-14.901385 3.720741-32.044834 6.706749-51.420113 8.93858-19.385513 2.242064-37.272905 3.358491-53.662177 3.358491-26.836205 0-90.935082-12.621459-192.296631-38.016849-70.051449-20.86419-119.248941-31.30089-147.563824-31.30089-55.160297 0-102.105492 9.739828-140.866285 29.068036l0 397.996526-35.774785 0L159.702282 93.764524l11.180644-4.473895c1.487887-1.440815 7.823176-4.102435 19.003819-7.823176 11.180644-3.682879 29.068036-7.459902 53.662177-11.180644 24.594141-3.682879 50.313919-5.590322 77.139891-5.590322 28.324092 0 88.693018 11.972683 181.105754 35.774785 86.460164 23.850198 145.341203 35.774785 176.641069 35.774785 25.338085 0 51.801806-4.102435 79.372745-12.297071 27.580149-8.156774 49.568952-15.978926 65.959248-23.477714 16.399505-7.450692 24.603351-11.924587 24.603351-13.413498l26.825972-13.422707L875.196952 563.300386zM839.422168 131.771139c-58.136072 26.836205-111.798249 40.248679-160.986531 40.248679-34.286897 0-96.143711-11.924587-185.580672-35.774785-86.460164-23.802102-143.843082-35.774785-172.167175-35.774785-47.699372 0-89.436962 5.962805-125.211746 17.887392l0 402.461211c38.760792-16.389272 85.707011-24.594141 140.866285-24.594141 20.86419 0 73.037457 10.4367 156.512636 31.30089 95.399767 25.39539 156.512636 38.016849 183.347818 38.016849 37.262672 0 91.668793-8.948813 163.218362-26.836205L839.421144 131.771139z"  ></path></symbol><symbol id="icon-guanbi" viewBox="0 0 1024 1024"><path d="M887.132284 833.893244 560.497039 507.257999l320.308143-320.314283c12.085246-12.087293 12.085246-31.670304 0-43.756573-12.08627-12.085246-31.68463-12.085246-43.756573 0L516.740466 463.500403l-326.639339-326.640362c-12.025894-12.025894-31.535227-12.025894-43.561122 0-12.040221 12.025894-12.040221 31.54853 0 43.575448l326.633199 326.633199L136.905578 843.339384c-12.079106 12.08627-12.079106 31.668257 0 43.754526 12.08627 12.087293 31.677467 12.087293 43.763736 0l336.261487-336.266603 326.642408 326.642408c12.025894 12.025894 31.518854 12.025894 43.559075 0C899.159202 865.442798 899.159202 845.919139 887.132284 833.893244z"  ></path></symbol><symbol id="icon-zuanshi" viewBox="0 0 1024 1024"><path d="M951.092503 373.334847 709.6168 162.211429c-3.65525-3.14462-8.31334-8.083096-13.133112-8.083096L429.747671 154.128333c-2.719948 0-5.461385 0-8.085142 0L300.521494 154.128333c-5.227048 0-10.253528 4.973268-14.007015 8.619308L72.031547 371.995339c-7.81192 7.566326-8.190543 20.23895-0.854461 28.27702l429.470355 466.61023c3.802606 4.164856 9.178033 1.51347 14.81645 1.51347 0 0 0.007163 0 0.011256 0 0.010233 0 0.024559 0 0.034792 0 0.029676 0 0.054235 0 0.083911 0 5.684466 0 11.093662 2.994194 14.891152-1.240247l422.449451-466.767819c3.611248-4.028757 5.453199-8.514931 5.109368-13.909801C957.694875 381.073088 955.189821 376.862183 951.092503 373.334847zM328.095503 405.860634 461.71985 764.123204 134.747937 405.860634 328.095503 405.860634zM576.25442 194.036251l90.49813 170.892135L364.444363 364.928387l74.358545-170.892135L576.25442 194.036251zM662.23056 405.860634 515.613294 795.483446 370.632295 405.860634 662.23056 405.860634zM705.198164 405.860634l184.607508 0L570.931181 761.055332 705.198164 405.860634zM887.676172 364.928387 712.282512 364.928387l-90.489944-170.892135 67.224054 0L887.676172 364.928387zM308.672128 194.036251l86.136799 0-74.470085 170.892135L132.213207 364.928387 308.672128 194.036251z"  ></path></symbol><symbol id="icon-iconxlsx" viewBox="0 0 1024 1024"><path d="M845.631078 611.970876l-12.565177-12.68388c-2.532683-2.558265-5.987365-3.994987-9.586332-3.994987s-7.054673 1.436722-9.585309 3.994987L533.597389 881.823883l0-805.853631c0-7.593955-6.118348-13.580297-13.660114-13.580297l-15.875572 0c-7.661494 0-13.661138 6.065136-13.661138 13.580297l0 805.851585-280.295847-282.534841c-5.062296-5.116531-14.108323-5.116531-19.170618 0l-12.5662 12.68388c-5.221932 5.27412-5.221932 13.752212 0 19.015076l324.046281 326.628082c2.532683 2.558265 5.987365 3.994987 9.586332 3.994987s7.054673-1.436722 9.585309-3.994987l324.045257-326.628082C850.85301 625.724111 850.85301 617.246019 845.631078 611.970876z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)