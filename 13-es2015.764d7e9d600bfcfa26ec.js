(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{AgMk:function(b,e,d){"use strict";d.r(e),d.d(e,"ThemeModule",function(){return c});var o=d("SVse"),t=d("iInd"),i=d("NuRj"),n=d("8Y7J");const a=[{path:"",data:{title:"Theme"},children:[{path:"",redirectTo:"colors"},{path:"colors",component:(()=>{class b{constructor(b){this._document=b}themeColors(){Array.from(this._document.querySelectorAll(".theme-color")).forEach(b=>{const e=Object(i.getStyle)("background-color",b),d=this._document.createElement("table");d.innerHTML=`\n        <table class="w-100">\n          <tr>\n            <td class="text-muted">HEX:</td>\n            <td class="font-weight-bold">${Object(i.rgbToHex)(e)}</td>\n          </tr>\n          <tr>\n            <td class="text-muted">RGB:</td>\n            <td class="font-weight-bold">${e}</td>\n          </tr>\n        </table>\n      `,b.parentNode.appendChild(d)})}ngOnInit(){this.themeColors()}}return b.\u0275fac=function(e){return new(e||b)(n.Lb(o.e))},b.\u0275cmp=n.Fb({type:b,selectors:[["ng-component"]],decls:131,vars:0,consts:[[1,"animated","fadeIn"],[1,"card"],[1,"card-header"],[1,"icon-drop"],[1,"card-body"],[1,"row"],[1,"col-xl-2","col-md-3","col-sm-4","col-6","mb-4"],[1,"bg-primary","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-secondary","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-success","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-danger","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-warning","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-info","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-light","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-dark","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"row","mb-3"],[1,"bg-gray-100","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-200","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-300","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-400","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-500","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-600","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-700","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-800","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-900","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-blue","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-light-blue","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-indigo","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-purple","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-pink","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-red","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-orange","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-yellow","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-green","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-teal","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-cyan","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"]],template:function(b,e){1&b&&(n.Rb(0,"div",0),n.Rb(1,"div",1),n.Rb(2,"div",2),n.Mb(3,"i",3),n.xc(4," Theme colors "),n.Qb(),n.Rb(5,"div",4),n.Rb(6,"div",5),n.Rb(7,"div",6),n.Mb(8,"div",7),n.Rb(9,"h6"),n.xc(10,"Brand Primary Color"),n.Qb(),n.Qb(),n.Rb(11,"div",6),n.Mb(12,"div",8),n.Rb(13,"h6"),n.xc(14,"Brand Secondary Color"),n.Qb(),n.Qb(),n.Rb(15,"div",6),n.Mb(16,"div",9),n.Rb(17,"h6"),n.xc(18,"Brand Success Color"),n.Qb(),n.Qb(),n.Rb(19,"div",6),n.Mb(20,"div",10),n.Rb(21,"h6"),n.xc(22,"Brand Danger Color"),n.Qb(),n.Qb(),n.Rb(23,"div",6),n.Mb(24,"div",11),n.Rb(25,"h6"),n.xc(26,"Brand Warning Color"),n.Qb(),n.Qb(),n.Rb(27,"div",6),n.Mb(28,"div",12),n.Rb(29,"h6"),n.xc(30,"Brand Info Color"),n.Qb(),n.Qb(),n.Rb(31,"div",6),n.Mb(32,"div",13),n.Rb(33,"h6"),n.xc(34,"Brand Light Color"),n.Qb(),n.Qb(),n.Rb(35,"div",6),n.Mb(36,"div",14),n.Rb(37,"h6"),n.xc(38,"Brand Dark Color"),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(39,"div",1),n.Rb(40,"div",2),n.Mb(41,"i",3),n.xc(42," Grays "),n.Qb(),n.Rb(43,"div",4),n.Rb(44,"div",15),n.Rb(45,"div",6),n.Mb(46,"div",16),n.Rb(47,"h6"),n.xc(48,"Gray 100 Color"),n.Qb(),n.Qb(),n.Rb(49,"div",6),n.Mb(50,"div",17),n.Rb(51,"h6"),n.xc(52,"Gray 200 Color"),n.Qb(),n.Qb(),n.Rb(53,"div",6),n.Mb(54,"div",18),n.Rb(55,"h6"),n.xc(56,"Gray 300 Color"),n.Qb(),n.Qb(),n.Rb(57,"div",6),n.Mb(58,"div",19),n.Rb(59,"h6"),n.xc(60,"Gray 400 Color"),n.Qb(),n.Qb(),n.Rb(61,"div",6),n.Mb(62,"div",20),n.Rb(63,"h6"),n.xc(64,"Gray 500 Color"),n.Qb(),n.Qb(),n.Rb(65,"div",6),n.Mb(66,"div",21),n.Rb(67,"h6"),n.xc(68,"Gray 600 Color"),n.Qb(),n.Qb(),n.Rb(69,"div",6),n.Mb(70,"div",22),n.Rb(71,"h6"),n.xc(72,"Gray 700 Color"),n.Qb(),n.Qb(),n.Rb(73,"div",6),n.Mb(74,"div",23),n.Rb(75,"h6"),n.xc(76,"Gray 800 Color"),n.Qb(),n.Qb(),n.Rb(77,"div",6),n.Mb(78,"div",24),n.Rb(79,"h6"),n.xc(80,"Gray 900 Color"),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(81,"div",1),n.Rb(82,"div",2),n.Mb(83,"i",3),n.xc(84," Additional colors "),n.Qb(),n.Rb(85,"div",4),n.Rb(86,"div",5),n.Rb(87,"div",6),n.Mb(88,"div",25),n.Rb(89,"h6"),n.xc(90,"Blue Color"),n.Qb(),n.Qb(),n.Rb(91,"div",6),n.Mb(92,"div",26),n.Rb(93,"h6"),n.xc(94,"Light Blue Color"),n.Qb(),n.Qb(),n.Rb(95,"div",6),n.Mb(96,"div",27),n.Rb(97,"h6"),n.xc(98,"Indigo Color"),n.Qb(),n.Qb(),n.Rb(99,"div",6),n.Mb(100,"div",28),n.Rb(101,"h6"),n.xc(102,"Purple Color"),n.Qb(),n.Qb(),n.Rb(103,"div",6),n.Mb(104,"div",29),n.Rb(105,"h6"),n.xc(106,"Pink Color"),n.Qb(),n.Qb(),n.Rb(107,"div",6),n.Mb(108,"div",30),n.Rb(109,"h6"),n.xc(110,"Red Color"),n.Qb(),n.Qb(),n.Rb(111,"div",6),n.Mb(112,"div",31),n.Rb(113,"h6"),n.xc(114,"Orange Color"),n.Qb(),n.Qb(),n.Rb(115,"div",6),n.Mb(116,"div",32),n.Rb(117,"h6"),n.xc(118,"Yellow Color"),n.Qb(),n.Qb(),n.Rb(119,"div",6),n.Mb(120,"div",33),n.Rb(121,"h6"),n.xc(122,"Green Color"),n.Qb(),n.Qb(),n.Rb(123,"div",6),n.Mb(124,"div",34),n.Rb(125,"h6"),n.xc(126,"Teal Color"),n.Qb(),n.Qb(),n.Rb(127,"div",6),n.Mb(128,"div",35),n.Rb(129,"h6"),n.xc(130,"Cyan Color"),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb())},encapsulation:2}),b})(),data:{title:"Colors"}},{path:"typography",component:(()=>{class b{constructor(){}}return b.\u0275fac=function(e){return new(e||b)},b.\u0275cmp=n.Fb({type:b,selectors:[["ng-component"]],decls:189,vars:0,consts:[[1,"animated","fadeIn"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"table"],[1,"highlighter-rouge"],[1,"h1"],[1,"h2"],[1,"h3"],[1,"h4"],[1,"h5"],[1,"h6"],[1,"bd-example"],[1,"bd-example","bd-example-type"],[1,"display-1"],[1,"display-2"],[1,"display-3"],[1,"display-4"],[1,"row"],[1,"col-sm-3"],[1,"col-sm-9"],[1,"col-sm-3","text-truncate"],[1,"col-sm-4"],[1,"col-sm-8"]],template:function(b,e){1&b&&(n.Rb(0,"div",0),n.Rb(1,"div",1),n.Rb(2,"div",2),n.xc(3," Headings "),n.Qb(),n.Rb(4,"div",3),n.Rb(5,"p"),n.xc(6,"Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more."),n.Qb(),n.Rb(7,"table",4),n.Rb(8,"thead"),n.Rb(9,"tr"),n.Rb(10,"th"),n.xc(11,"Heading"),n.Qb(),n.Rb(12,"th"),n.xc(13,"Example"),n.Qb(),n.Qb(),n.Qb(),n.Rb(14,"tbody"),n.Rb(15,"tr"),n.Rb(16,"td"),n.Rb(17,"p"),n.Rb(18,"code",5),n.xc(19,"<h1></h1>"),n.Qb(),n.Qb(),n.Qb(),n.Rb(20,"td"),n.Rb(21,"span",6),n.xc(22,"h1. Bootstrap heading"),n.Qb(),n.Qb(),n.Qb(),n.Rb(23,"tr"),n.Rb(24,"td"),n.Rb(25,"p"),n.Rb(26,"code",5),n.xc(27,"<h2></h2>"),n.Qb(),n.Qb(),n.Qb(),n.Rb(28,"td"),n.Rb(29,"span",7),n.xc(30,"h2. Bootstrap heading"),n.Qb(),n.Qb(),n.Qb(),n.Rb(31,"tr"),n.Rb(32,"td"),n.Rb(33,"p"),n.Rb(34,"code",5),n.xc(35,"<h3></h3>"),n.Qb(),n.Qb(),n.Qb(),n.Rb(36,"td"),n.Rb(37,"span",8),n.xc(38,"h3. Bootstrap heading"),n.Qb(),n.Qb(),n.Qb(),n.Rb(39,"tr"),n.Rb(40,"td"),n.Rb(41,"p"),n.Rb(42,"code",5),n.xc(43,"<h4></h4>"),n.Qb(),n.Qb(),n.Qb(),n.Rb(44,"td"),n.Rb(45,"span",9),n.xc(46,"h4. Bootstrap heading"),n.Qb(),n.Qb(),n.Qb(),n.Rb(47,"tr"),n.Rb(48,"td"),n.Rb(49,"p"),n.Rb(50,"code",5),n.xc(51,"<h5></h5>"),n.Qb(),n.Qb(),n.Qb(),n.Rb(52,"td"),n.Rb(53,"span",10),n.xc(54,"h5. Bootstrap heading"),n.Qb(),n.Qb(),n.Qb(),n.Rb(55,"tr"),n.Rb(56,"td"),n.Rb(57,"p"),n.Rb(58,"code",5),n.xc(59,"<h6></h6>"),n.Qb(),n.Qb(),n.Qb(),n.Rb(60,"td"),n.Rb(61,"span",11),n.xc(62,"h6. Bootstrap heading"),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(63,"div",1),n.Rb(64,"div",2),n.xc(65," Headings "),n.Qb(),n.Rb(66,"div",3),n.Rb(67,"p"),n.Rb(68,"code",5),n.xc(69,".h1"),n.Qb(),n.xc(70," through "),n.Rb(71,"code",5),n.xc(72,".h6"),n.Qb(),n.xc(73," classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element."),n.Qb(),n.Rb(74,"div",12),n.Rb(75,"p",6),n.xc(76,"h1. Bootstrap heading"),n.Qb(),n.Rb(77,"p",7),n.xc(78,"h2. Bootstrap heading"),n.Qb(),n.Rb(79,"p",8),n.xc(80,"h3. Bootstrap heading"),n.Qb(),n.Rb(81,"p",9),n.xc(82,"h4. Bootstrap heading"),n.Qb(),n.Rb(83,"p",10),n.xc(84,"h5. Bootstrap heading"),n.Qb(),n.Rb(85,"p",11),n.xc(86,"h6. Bootstrap heading"),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(87,"div",1),n.Rb(88,"div",2),n.xc(89," Display headings "),n.Qb(),n.Rb(90,"div",3),n.Rb(91,"p"),n.xc(92,"Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a "),n.Rb(93,"strong"),n.xc(94,"display heading"),n.Qb(),n.xc(95,"\u2014a larger, slightly more opinionated heading style."),n.Qb(),n.Rb(96,"div",13),n.Rb(97,"table",4),n.Rb(98,"tbody"),n.Rb(99,"tr"),n.Rb(100,"td"),n.Rb(101,"span",14),n.xc(102,"Display 1"),n.Qb(),n.Qb(),n.Qb(),n.Rb(103,"tr"),n.Rb(104,"td"),n.Rb(105,"span",15),n.xc(106,"Display 2"),n.Qb(),n.Qb(),n.Qb(),n.Rb(107,"tr"),n.Rb(108,"td"),n.Rb(109,"span",16),n.xc(110,"Display 3"),n.Qb(),n.Qb(),n.Qb(),n.Rb(111,"tr"),n.Rb(112,"td"),n.Rb(113,"span",17),n.xc(114,"Display 4"),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(115,"div",1),n.Rb(116,"div",2),n.xc(117," Inline text elements "),n.Qb(),n.Rb(118,"div",3),n.Rb(119,"p"),n.xc(120,"Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a "),n.Rb(121,"strong"),n.xc(122,"display heading"),n.Qb(),n.xc(123,"\u2014a larger, slightly more opinionated heading style."),n.Qb(),n.Rb(124,"div",12),n.Rb(125,"p"),n.xc(126,"You can use the mark tag to "),n.Rb(127,"mark"),n.xc(128,"highlight"),n.Qb(),n.xc(129," text."),n.Qb(),n.Rb(130,"p"),n.Rb(131,"del"),n.xc(132,"This line of text is meant to be treated as deleted text."),n.Qb(),n.Qb(),n.Rb(133,"p"),n.Rb(134,"s"),n.xc(135,"This line of text is meant to be treated as no longer accurate."),n.Qb(),n.Qb(),n.Rb(136,"p"),n.Rb(137,"ins"),n.xc(138,"This line of text is meant to be treated as an addition to the document."),n.Qb(),n.Qb(),n.Rb(139,"p"),n.Rb(140,"u"),n.xc(141,"This line of text will render as underlined"),n.Qb(),n.Qb(),n.Rb(142,"p"),n.Rb(143,"small"),n.xc(144,"This line of text is meant to be treated as fine print."),n.Qb(),n.Qb(),n.Rb(145,"p"),n.Rb(146,"strong"),n.xc(147,"This line rendered as bold text."),n.Qb(),n.Qb(),n.Rb(148,"p"),n.Rb(149,"em"),n.xc(150,"This line rendered as italicized text."),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(151,"div",1),n.Rb(152,"div",2),n.xc(153," Description list alignment "),n.Qb(),n.Rb(154,"div",3),n.Rb(155,"p"),n.xc(156,"Align terms and descriptions horizontally by using our grid system\u2019s predefined classes (or semantic mixins). For longer terms, you can optionally add a "),n.Rb(157,"code",5),n.xc(158,".text-truncate"),n.Qb(),n.xc(159," class to truncate the text with an ellipsis."),n.Qb(),n.Rb(160,"div",12),n.Rb(161,"dl",18),n.Rb(162,"dt",19),n.xc(163,"Description lists"),n.Qb(),n.Rb(164,"dd",20),n.xc(165,"A description list is perfect for defining terms."),n.Qb(),n.Rb(166,"dt",19),n.xc(167,"Euismod"),n.Qb(),n.Rb(168,"dd",20),n.Rb(169,"p"),n.xc(170,"Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit."),n.Qb(),n.Rb(171,"p"),n.xc(172,"Donec id elit non mi porta gravida at eget metus."),n.Qb(),n.Qb(),n.Rb(173,"dt",19),n.xc(174,"Malesuada porta"),n.Qb(),n.Rb(175,"dd",20),n.xc(176,"Etiam porta sem malesuada magna mollis euismod."),n.Qb(),n.Rb(177,"dt",21),n.xc(178,"Truncated term is truncated"),n.Qb(),n.Rb(179,"dd",20),n.xc(180,"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."),n.Qb(),n.Rb(181,"dt",19),n.xc(182,"Nesting"),n.Qb(),n.Rb(183,"dd",20),n.Rb(184,"dl",18),n.Rb(185,"dt",22),n.xc(186,"Nested definition list"),n.Qb(),n.Rb(187,"dd",23),n.xc(188,"Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc."),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb())},encapsulation:2}),b})(),data:{title:"Typography"}}]}];let r=(()=>{class b{}return b.\u0275fac=function(e){return new(e||b)},b.\u0275mod=n.Jb({type:b}),b.\u0275inj=n.Ib({imports:[[t.g.forChild(a)],t.g]}),b})(),c=(()=>{class b{}return b.\u0275fac=function(e){return new(e||b)},b.\u0275mod=n.Jb({type:b}),b.\u0275inj=n.Ib({imports:[[o.c,r]]}),b})()}}]);