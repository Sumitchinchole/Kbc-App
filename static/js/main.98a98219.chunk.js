(this["webpackJsonpkbc-quiz-app"]=this["webpackJsonpkbc-quiz-app"]||[]).push([[0],[,,,,,,,,,,function(t,e,r){},function(t,e,r){},,function(t,e,r){},function(t,e,r){},function(t,e,r){"use strict";r.r(e);var c=r(0),a=r.n(c),n=r(5),i=r.n(n),s=r(2),o=(r(10),r(11),r(3)),u=r.p+"static/media/KbcBackground.679c6db8.mp3",d=r.p+"static/media/correct.160572d7.mp3",h=r.p+"static/media/wrong.e9468218.mp3",l=r.p+"static/media/KBC.37b6be46.mp3",m=r(1);function x(t){var e=t.data,r=t.setStop,a=t.questionNumber,n=t.setQuestionNumber,i=t.setEarned,x=t.moneyPyramid,j=Object(c.useState)(null),b=Object(s.a)(j,2),f=b[0],O=b[1],p=Object(c.useState)(null),w=Object(s.a)(p,2),v=w[0],N=w[1],y=Object(c.useState)("answer"),S=Object(s.a)(y,2),g=S[0],I=S[1],q=Object(o.a)(u),k=Object(s.a)(q,1)[0],E=Object(o.a)(d),W=Object(s.a)(E,1)[0],A=Object(o.a)(h),B=Object(s.a)(A,1)[0],M=Object(o.a)(l),C=Object(s.a)(M,1)[0];Object(c.useEffect)((function(){k()}),[k]),Object(c.useEffect)((function(){O(e[a-1])}),[e,a]);var P=function(t,e){setTimeout((function(){e()}),t)};return Object(m.jsxs)("div",{className:"kbc",children:[Object(m.jsx)("div",{className:"question",children:null===f||void 0===f?void 0:f.question}),Object(m.jsx)("div",{className:"answers",children:null===f||void 0===f?void 0:f.answers.map((function(t){return Object(m.jsx)("div",{className:v===t?g:"answer",onClick:function(){return function(t){N(t),I("answer active"),P(3e3,(function(){return I(t.correct?"answer correct":"answer wrong")})),P(5e3,(function(){t.correct?(W(),P(1e3,(function(){n((function(t){return t+1})),N(null)}))):(B(),P(1e3,(function(){r(!0)}))),a>=15&&t.correct&&(C(),r(!0),n(0),i(x.find((function(t){return t.id===a})).amount))}))}(t)},children:t.text})}))})]})}r(13);function j(t){var e=t.setStop,r=t.questionNumber,a=Object(c.useState)(30),n=Object(s.a)(a,2),i=n[0],o=n[1];return Object(c.useEffect)((function(){if(0===i)return e(!0);var t=setInterval((function(){o((function(t){return t-1}))}),1e3);return function(){return clearInterval(t)}}),[e,i]),Object(c.useEffect)((function(){o(30),r>=10&&o(60)}),[r]),i}r(14);function b(t){var e=t.setUserName,r=Object(c.useRef)();return Object(m.jsxs)("div",{className:"Start",children:[Object(m.jsx)("input",{placeholder:"Enter your name",className:"startInput",ref:r}),Object(m.jsx)("button",{className:"startButton",onClick:function(){r.current.value&&e(r.current.value)},children:"Start"})]})}var f=function(){var t=Object(c.useState)(null),e=Object(s.a)(t,2),r=e[0],a=e[1],n=Object(c.useState)(1),i=Object(s.a)(n,2),o=i[0],u=i[1],d=Object(c.useState)(!1),h=Object(s.a)(d,2),l=h[0],f=h[1],O=Object(c.useState)("0"),p=Object(s.a)(O,2),w=p[0],v=p[1],N=Object(c.useMemo)((function(){return[{id:1,amount:"1,000"},{id:2,amount:"2,000"},{id:3,amount:"3,000"},{id:4,amount:"5,000"},{id:5,amount:"10,000"},{id:6,amount:"20,000"},{id:7,amount:"40,000"},{id:8,amount:"80,000"},{id:9,amount:"1,60,000"},{id:10,amount:"3,20,000"},{id:11,amount:"6,40,000"},{id:12,amount:"12,50,000"},{id:13,amount:"25,00,000"},{id:14,amount:"50,00,000"},{id:15,amount:"1 Crore"}].reverse()}),[]);return Object(c.useEffect)((function(){o>1&&v(N.find((function(t){return t.id===o-1})).amount)}),[N,o]),Object(m.jsx)("div",{className:"app",children:r?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"main",children:[l?Object(m.jsxs)("h1",{className:"endText",children:["You Earned: ",w]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"top",children:Object(m.jsx)("div",{className:"timer",children:Object(m.jsx)(j,{setStop:f,questionNumber:o})})}),Object(m.jsx)("div",{className:"bottom",children:Object(m.jsx)(x,{data:[{id:1,question:"In Which State has the Largest Area?",answers:[{text:"Maharashtra",correct:!1},{text:"Madhya Pradesh",correct:!1},{text:"Uttar Pradesh",correct:!1},{text:"Rajasthan",correct:!0}]},{id:2,question:"Who won the IPL 2021 tournament?",answers:[{text:"Mumbai Indians",correct:!1},{text:"Kolkata Knight Riders",correct:!1},{text:"Delhi Capital",correct:!1},{text:"Chennei Super Kings",correct:!0}]},{id:3,question:"Who is the Prime Minister of India?",answers:[{text:"Narendra Modi",correct:!0},{text:"Rajnath Singh",correct:!1},{text:"Sardar Patel",correct:!1},{text:"Rahul Gandhi",correct:!1}]},{id:4,question:"The first case of Novel CoronaVirus was identified in.....?",answers:[{text:"Beijing",correct:!1},{text:"Shanghai",correct:!1},{text:"Wuhan,Hubai",correct:!0},{text:"Tianjin",correct:!1}]},{id:5,question:"Which Cricketer scored four hundreds in the 2016 IPL?",answers:[{text:"Rohit Sharma",correct:!1},{text:"Suresh Raina",correct:!1},{text:"Chris Gayle",correct:!1},{text:"Virat Kohli",correct:!0}]},{id:6,question:"Which is the largest joint in the human body?",answers:[{text:"Elbow",correct:!1},{text:"Knee",correct:!0},{text:"Hip",correct:!1},{text:"Shoulder",correct:!1}]},{id:7,question:"In Which song this film feature? (Song: Ye Mausam ki barish , ye barish ka pani...)",answers:[{text:"Half Girlfriend",correct:!0},{text:"Baaghi",correct:!1},{text:"Shershaah",correct:!1},{text:"Ok Jaanu",correct:!1}]},{id:8,question:"Which of these is not a country?",answers:[{text:"North Macedonia",correct:!1},{text:"East Timor",correct:!1},{text:"West Indies",correct:!0},{text:"South Sudan",correct:!1}]},{id:9,question:"Which of the following is the oldest test cricket playing country in the world?",answers:[{text:"Austalia",correct:!0},{text:"India",correct:!1},{text:"England",correct:!1},{text:"South Africa",correct:!1}]},{id:10,question:"Which day is celebrated as World Health Day?",answers:[{text:"10 April",correct:!1},{text:"9 April",correct:!1},{text:"6 April",correct:!1},{text:"7 April",correct:!0}]},{id:11,question:"In which year , Capital of India was shifted to Delhi from Kolkata?",answers:[{text:"1910",correct:!1},{text:"1911",correct:!0},{text:"1915",correct:!1},{text:"1917",correct:!1}]},{id:12,question:"Indian played their First ODI Match against______?",answers:[{text:"Pakistan",correct:!1},{text:"South Africa",correct:!1},{text:"England",correct:!0},{text:"Australia",correct:!1}]},{id:13,question:"What is main reason for the average temperature of the Earth remains fairly steady as compared to that of the moon?",answers:[{text:"Hydrosphere",correct:!1},{text:"Biosphere",correct:!1},{text:"Lithosphere",correct:!1},{text:"Atmosphere",correct:!0}]},{id:14,question:"Which neighbouring country of India has adopted India's BHIM UPI?",answers:[{text:"Nepal",correct:!1},{text:"Bhutan",correct:!0},{text:"Bangladesh",correct:!1},{text:"Srilanka",correct:!1}]},{id:15,question:"When was first Bharat Ratna Award given?",answers:[{text:"January 1954",correct:!0},{text:"Dec 1952",correct:!1},{text:"July 1956",correct:!1},{text:"January 1951",correct:!1}]}],setStop:f,questionNumber:o,setQuestionNumber:u,setEarned:v,moneyPyramid:N})})]}),";"]}),Object(m.jsx)("div",{className:"pyramid",children:Object(m.jsx)("ul",{className:"moneyList",children:N.map((function(t){return Object(m.jsxs)("li",{className:o===t.id?"moneyListItem active":"moneyListItem",children:[Object(m.jsx)("span",{className:"moneyListItemNumber",children:t.id}),Object(m.jsx)("span",{className:"moneyListItemAmount",children:t.amount})]})}))})})]}):Object(m.jsx)(b,{setUserName:a})})};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.98a98219.chunk.js.map