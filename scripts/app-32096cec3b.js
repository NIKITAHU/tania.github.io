!function(){"use strict";angular.module("breno.main.sections.work",[])}(),function(){"use strict";function a(){var a={restrict:"E",templateUrl:"app/main/sections/work/work.html",controller:e,controllerAs:"vm",scope:{},bindToController:!0};return a}function e(a){var e=this;e.DATA=a,e.projects=[3,4,0,1,2,5]}e.$inject=["PROJECTS"],angular.module("breno.main.sections.work").directive("work",a)}(),function(){"use strict";angular.module("breno.main.sections.work").constant("PROJECTS",[{name:"dash",target:"//dash.breno.io/",text:"A very simple yet challenging browser and mobile game I built from scratch where you must try to memorize different patterns and play as fast as you can."},{name:"eunice festas",target:"//eunicefestas.com.br/",text:"Web site for a party company built with PHP and JavaScript with full content management."},{name:"myfriend",target:"//myfriend.breno.io/",text:"Free open-source project aimed to help shelterless dogs to find a home. It features a recommendation system that matches user's and dog's traits."},{name:"kajoo",target:"//kajoo.com.br/",text:"Developed the backend for a counting system with high-availability and stress requirements with NodeJS and a data visualization system with AngularJS and SocketIO."},{name:"polyjuice",target:"//github.com/brenolf/polyjuice",text:"Developer tool to help programmers migrating seamlessly from different JavaScript linting tools."},{name:"breno",target:"//www.behance.net/gallery/23135823/Personal-2015-website",text:"My personal page is always changing, maybe because of the feeling of always having it fresh.  That's why I also keep my old layouts as landmarks of improvement."}])}(),function(){"use strict";angular.module("breno.main.sections.talks",[])}(),function(){"use strict";function a(){var a={restrict:"E",templateUrl:"app/main/sections/talks/talks.html",controller:e,controllerAs:"vm",scope:{},bindToController:!0};return a}function e(a,e){var s=this;s.TEXTS=a,s.TALKS=e}e.$inject=["TEXTS","TALKS"],angular.module("breno.main.sections.talks").directive("talks",a)}(),function(){"use strict";angular.module("breno.main.sections.talks").constant("TALKS",[{name:"Snarks Fluxo-críticos",target:"/assets/pdf/sfc.pdf",year:2013,language:"pt"},{name:"Extending Snarks",target:"/assets/pdf/es.pdf",year:2014,language:"en"},{name:"Como eu fiz um jogo em JavaScript?",target:"http://slides.com/brenolf/como-eu-fiz-um-jogo-em-javascript#/",year:2015,language:"pt"},{name:"ES6 Rocks!",target:"http://slides.com/brenolf/es6-rocks#/",year:2015,language:"pt"},{name:"Teoria e prática: Conjuntos disjuntos?",target:"http://slides.com/brenolf/teoria-e-pratica#/",year:2015,language:"pt"},{name:"A Study of Critical Snarks",target:"/assets/pdf/scs.pdf",year:2015,language:"pt"},{name:"Algoritmos genéticos em JavaScript",target:"https://www.emaze.com/@AILICQCL/algoritmos-genticos-em-javascript",year:2015,language:"pt"}]).constant("TEXTS",[{name:"Hypohamiltonian Snarks Have a 5-flow (pre-print)",target:"/assets/pdf/freitas-silva-lucchesi-15.pdf",year:2015,language:"en"},{name:"Why I'm becoming sassy",target:"https://medium.com/@brenolf/why-i-m-becoming-sassy-8b4fe456558c",year:2015,language:"en"},{name:"Plus one minus one is not zero*",target:"https://medium.com/@brenolf/plus-one-minus-one-is-not-zero-3eae94c7efcf",year:2015,language:"en"},{name:"Designing a designer",target:"https://medium.com/@brenolf/designing-a-designer-2a139d46a68f",year:2015,language:"en"}])}(),function(){"use strict";angular.module("breno.main.sections.splash",[])}(),function(){"use strict";function a(){var a={restrict:"E",templateUrl:"app/main/sections/splash/splash.html",controller:e,controllerAs:"vm",scope:{},bindToController:!0};return a}function e(){}angular.module("breno.main.sections.splash").directive("splash",a)}(),function(){"use strict";angular.module("breno.main.sections.end",[])}(),function(){"use strict";function a(){var a={restrict:"E",templateUrl:"app/main/sections/end/end.html",controller:e,controllerAs:"vm",scope:{},bindToController:!0};return a}function e(){}angular.module("breno.main.sections.end").directive("end",a)}(),function(){"use strict";angular.module("breno.main.sections.about",[])}(),function(){"use strict";function a(){var a={restrict:"E",templateUrl:"app/main/sections/about/about.html",controller:e,controllerAs:"vm",scope:{},bindToController:!0};return a}function e(){function a(){var a=new Date,s=new Date("1993-08-12 00:00:00"),i=31536e6;e.age=Math.floor((a-s)/i)}var e=this;a()}angular.module("breno.main.sections.about").directive("about",a)}(),function(){"use strict";angular.module("breno.main",["breno.main.sections"])}(),function(){"use strict";function a(a){a.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"vm"})}a.$inject=["$stateProvider"],angular.module("breno.main").config(a)}(),function(){"use strict";function a(){}angular.module("breno.main").controller("MainController",a)}(),function(){"use strict";angular.module("breno.cv",[])}(),function(){"use strict";function a(a){a.state("cv",{url:"/cv",templateUrl:"app/cv/cv.html",controller:"MainController",controllerAs:"vm"})}a.$inject=["$stateProvider"],angular.module("breno.cv").config(a)}(),function(){"use strict";function a(){var a={restrict:"E",templateUrl:"app/cv/cv.html",controller:e,controllerAs:"vm",scope:{},bindToController:!0};return a}function e(){}angular.module("breno.cv").directive("cv",a)}(),function(){"use strict";angular.module("breno",["ngSanitize","ui.router","duScroll","breno.main","breno.cv"])}(),function(){"use strict";function a(a){a.debug("runBlock end")}a.$inject=["$log"],angular.module("breno").run(a)}(),function(){"use strict";function a(a){a.otherwise("/")}a.$inject=["$urlRouterProvider"],angular.module("breno").config(a)}(),function(){"use strict";function a(a){a.debugEnabled(!0)}a.$inject=["$logProvider"],angular.module("breno").config(a)}(),function(){"use strict";angular.module("breno.main.sections",["breno.main.sections.about","breno.main.sections.splash","breno.main.sections.talks","breno.main.sections.work","breno.main.sections.end"])}(),angular.module("breno").run(["$templateCache",function(a){a.put("app/cv/cv.html",'<article class="cv"><div class="column"><header><h1>Breno <b>Lima de Freitas</b></h1><ul><li><i class="fa fa-globe"></i> breno.io</li><li><i class="fa fa-envelope"></i> hello@breno.io</li><li><i class="fa fa-github"></i> github.com/brenolf</li><li><i class="fa fa-linkedin"></i> ca.linkedin.com/in/brenolf/</li></ul></header><section><h2>profile</h2><div class="block">Computer scientist with strong mathematical background and experience with Web development, TDD, design and analysis of algorithms and human-computer interface. Also, I am self-taught and possess a constant improvement trait.</div></section><section><h2>objective</h2><div class="block">Work in Computer Science field in order to enhance my skills and apply them to solve interesting problems.</div></section><section><h2>professional experience</h2><div class="block"><h3>World Tech Makers</h3><div class="specific"><span class="date">Aug 2015 &#8212; Aug 2016</span> <span class="place">São Paulo, Brazil</span></div><div class="general">Software Engineer</div></div><div class="block"><h3>Codeminer 42</h3><div class="specific"><span class="date">Apr 2015 &#8212; Jun 2015</span> <span class="place">Sorocaba, Brazil</span></div><div class="general">Intern</div></div><div class="block"><h3>university of waterloo</h3><div class="specific"><span class="date">May 2014 &#8212; Aug 2014</span> <span class="place">Waterloo, Canada</span></div><div class="general">Undergraduate Research Assistant</div></div><div class="block"><h3>cultural norte americano</h3><div class="specific"><span class="date">Jan 2012 &#8212; Dec 2013</span> <span class="place">Indaiatuba, Brazil</span></div><div class="general">English language teacher</div></div><div class="block"><h3>madricomp</h3><div class="specific"><span class="date">Aug 2010 &#8212; Jan 2011</span> <span class="place">Indaiatuba, Brazil</span></div><div class="general">Web Application Developer</div></div></section><section><h2>academic experience</h2><div class="block"><h3>universidade federal de são carlos</h3><div class="specific"><span class="date">Jul 2013 &#8212; May 2015</span> <span class="place">Sorocaba, Brazil</span></div><div class="general"><i>Flow-critical Snarks</i><div>Supervised by Prof. Cândida Nunes da Silva</div></div></div><div class="block"><h3>university of waterloo</h3><div class="specific"><span class="date">May 2014 &#8212; Aug 2014</span> <span class="place">Waterloo, Canada</span></div><div class="general"><i>Extending Snarks</i><div>Supervised by Prof. Daniel Haven Younger</div></div></div><div class="block"><h3>universidade federal de são carlos</h3><div class="specific"><span class="date">Jan 2013 &#8212; Jul 2013</span> <span class="place">Sorocaba, Brazil</span></div><div class="general"><i>Visual Coordinating System</i><div>Supervised by Prof. José de Oliveira Guimarães</div></div></div></section></div><div class="column side"><section><h2>education</h2><div class="block"><h3>universidade federal de são carlos</h3><div class="specific"><span class="date">Feb 2016 &#8212; Present</span> <span class="place">Sorocaba, Brazil</span></div><div class="general">Master of Science in Computer Science</div></div><div class="block"><h3>universidade federal de são carlos</h3><div class="specific"><span class="date">Mar 2011 &#8212; Jun 2015</span> <span class="place">Sorocaba, Brazil</span></div><div class="general">Bachelor of Science in Computer Science</div></div><div class="block"><h3>university of toronto</h3><div class="specific"><span class="date">Jan 2014 &#8212; Dec 2014</span> <span class="place">Toronto, Canada</span></div><div class="general">Exchange program</div></div><div class="block"><h3>fundação indaiatubana de educação e cultura</h3><div class="specific"><span class="date">Jan 2009 &#8212; Dec 2010</span> <span class="place">Indaiatuba, Brazil</span></div><div class="general">Associate\'s degree in Web Development</div></div></section><section><h2>events</h2><div class="block"><h3>SBC\'s 34<sup>th</sup> undergraduate researches contest</h3><div class="specific"><span class="date">Jul 2015</span> <span class="place">Recife, Brazil</span></div><div class="general">1<sup>st</sup> place</div></div><div class="block"><h3>ACM International Collegiate Programming Contest</h3><div class="specific"><span class="date">2011 &#8212; 2013</span> <span class="place">Sorocaba, Brazil</span></div><div class="general">2<sup>nd</sup> place in 2013\'s regional phase</div></div><div class="block"><h3>Google Developer Day</h3><div class="specific"><span class="date">2011</span> <span class="place">São Paulo, Brazil</span></div></div></section><section><h2>languages</h2><div class="block"><ul><li><span>Portuguese</span> Native</li><li><span>English</span> Fluent</li><li><span>Spanish</span> Limited</li></ul></div></section><section><h2>papers</h2><div class="block"><h3>Hypohamiltonian Snarks Have a 5-flow</h3><div class="specific"><span class="date">2015</span> <span class="place"></span></div><div class="general"><i>With Da Silva C.N. and Lucchesi C.L.</i><div>Electronic Notes in Discrete Mathematics</div></div></div></section><section><h2>skills</h2><div class="block"><ul><li>JavaScript</li><li>Ruby on Rails</li><li>Python</li><li>CSS + Sass</li><li>HTML5</li><li>SQL Databases</li><li>Git</li><li>C</li><li>Unix environments</li></ul></div></section></div></article>'),a.put("app/main/main.html",'<section class="main"><splash></splash><about></about><hr class="main__hr"><work></work><hr class="main__hr"><talks></talks><end></end></section>'),a.put("app/main/sections/about/about.html",'<article class="about" id="hello"><h2>hello</h2><div class="about__text grid__col grid__col--2-of-3 grid__col--centered">Hello, my name is Breno Lima de Freitas. I\'m a {{vm.age}} years old computer scientist based at Indaiatuba, Brazil. I\'ve always loved playing out with computers and trying to make them do some tricks under my command; maybe that\'s why I ended up pursuing a career on computer science (take a look at <a class="about__text__link" ui-sref="cv">my r&eacute;sum&eacute;</a>).<br><br>My areas of interest are many, but I\'m mainly passionate about theoritical computer science and artificial intelligence; Machine Learning being my major topic of study. I look forward to working with you to build something great and have an enjoyable time!</div></article>'),a.put("app/main/sections/end/end.html",'<footer class="end"><div class="end__logo"><img src="assets/images/logo.png" alt="Breno Lima de Freitas"></div><div class="grid__col grid__col--2-of-3 grid__col--centered end__links"><a href="mailto:hello@breno.io"><i class="fa fa-envelope"></i></a> <a href="https://github.com/brenolf" target="_blank"><i class="fa fa-github"></i></a> <a href="https://www.linkedin.com/in/brenolf" target="_blank"><i class="fa fa-linkedin"></i></a> <a href="https://twitter.com/brenolf_" target="_blank"><i class="fa fa-twitter"></i></a> <a href="http://behance.net/brenolimad7b24" target="_blank"><i class="fa fa-behance"></i></a> <a href="https://medium.com/@brenolf/" target="_blank"><i class="fa fa-medium"></i></a></div></footer>'),a.put("app/main/sections/talks/talks.html",'<article class="talks" id="talks"><h2>talks &amp; texts</h2><div class="talks__intro grid__col grid__col--2-of-3 grid__col--centered">I always try to make things that matter, and that\'s why I eventually end up giving some talks on many different subjects. I also like writting, even though I\'m not good at allocating time slots in order to do it more often. Here\'s a selection of my previous talks, papers and articles.</div><div><div class="grid__col grid__col--2-of-6 grid__col--push-1-of-6 talks__piece"><h3 class="talks__piece__subtitle">Talks</h3><ul class="talks__piece__list"><li ng-repeat="talk in vm.TALKS"><a class="talks__piece__list__link" ng-href="{{talk.target}}">{{talk.year}} - {{talk.name}}</a></li></ul></div><div class="grid__col grid__col--2-of-6 talks__piece"><h3 class="talks__piece__subtitle">Texts</h3><ul class="talks__piece__list"><li ng-repeat="text in vm.TEXTS"><a class="talks__piece__list__link" ng-href="{{text.target}}">{{text.year}} - {{text.name}}</a></li></ul></div></div></article>'),a.put("app/main/sections/splash/splash.html",'<article class="splash"><div class="grid__col grid__col--1-of-3 splash__name"><div>Breno Freitas</div></div><div class="grid__col grid__col--2-of-3 splash__links"><div><a du-smooth-scroll="hello">hello</a> <a du-smooth-scroll="work">work</a> <a du-smooth-scroll="talks">talks</a></div></div><div class="splash__title"><img class="splash__title__logo" src="assets/images/logo.png" alt="Breno Lima de Freitas"><h1 class="splash__title__text">make <span>it</span> happen.</h1></div><div class="splash__gradient"></div></article>'),a.put("app/main/sections/work/work.html",'<article class="work" id="work"><h2>work</h2><div ng-repeat="(index, i) in vm.projects" class="grid__col grid__col--1-of-3 work__list__card work__list__card--card{{i}} work__list__card--color{{index}}"><a class="work__list__card__wrapper" ng-href="{{vm.DATA[i].target}}" target="_blank"><div class="work__list__card__wrapper__img"><img class="work__list__card__wrapper__img__element" ng-src="assets/images/projects/{{i}}.png" alt="project"></div><h4 class="work__list__card__wrapper__title">{{vm.DATA[i].name}}</h4><p class="work__list__card__wrapper__dsc">{{vm.DATA[i].text}}</p></a></div></article>')}]);
//# sourceMappingURL=../maps/scripts/app-32096cec3b.js.map
