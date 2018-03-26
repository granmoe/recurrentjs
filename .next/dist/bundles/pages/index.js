module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/input-sentences.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("the company has, say, 6 months of runway\nor to put it more brutally, 6 months before they're out of business\nthey expect to avoid that by raising more from investors\nthat last sentence is the fatal one\nit's hard to convince investors the first time too, but founders expect that\nwhat bites them the second time is a confluence of three forces:\nthe company is spending more now than it did the first time it raised money\ninvestors have much higher standards for companies that have already raised money\nthe company is now starting to read as a failure\nthe first time it raised money, it was neither a success nor a failure; it was too early to ask\ni'm going to call the situation i described in the first paragraph \"the fatal pinch\none of the things that makes the fatal pinch so dangerous is that it's self-reinforcing\ny combinator tells founders who raise money to act as if it's the last they'll ever get\ni will now, by an amazing feat of clairvoyance, do this for you: the probability is zero\nyou should shut down the company if you're certain it will fail no matter what you do\ncompanies rarely have to fail though\nwhat i'm really doing here is giving you the option of admitting you've already given up\nif you don't want to shut down the company, that leaves increasing revenues and decreasing expenses\nin most startups, expenses  people and decreasing expenses  firing people\nif so, now's the time\nwhich leaves two options, firing good people and making more money\nyou should lean more toward firing people if the source of your trouble is overhiring\nplus those 15 people might not even be the ones you need for whatever you end up building\nso the solution may be to shrink and then figure out what direction to grow in\nit may seem facile to suggest a startup make more money, as if that could be done for the asking\nusually a startup is already trying as hard as it can to sell whatever it sells\nbut only work on whatever will get you the most revenue the soonest\nor you may have expertise in some new field they don't understand\nand to the extent you can, try to avoid the worst pitfalls of consulting\nyou keep the ip and no billing by the hour\nyou just have to realize in time that you're near death\nand if you're in the fatal pinch, you are\nit struck me recently how few of the most successful people i know are mean\nthere are exceptions, but remarkably few\nmeanness isn't rare\nin fact, one of the things the internet has shown us is how mean people can be\na few decades ago, only famous people and professional writers got to publish their opinions\nnow everyone can, and we can all see the long tail of meanness that had previously been hidden\nwhat's going on here? are meanness and success inversely correlated?\npart of what's going on, of course, is selection bias\ni only know people who work in certain fields: startup founders, programmers, professors\ni'm willing to believe that successful people in other fields are mean\nmaybe successful hedge fund managers are mean; i don't know enough to say\nit seems quite likely that most successful drug lords are mean\nbeing married to her is like standing next to an airport baggage scanner\nwhy? i think there are several reasons\none is that being mean makes you stupid\nthat's why i hate fights\nyou never do your best work in a fight, because fights are not sufficiently general\nwinning is always a function of the situation and the people involved\nand yet fighting is just as much work as thinking about real problems\nstartups don't win by attacking\nthey win by transcending\nthere are exceptions of course, but usually the way to win is to race ahead, not to stop and fight\nanother reason mean founders lose is that they can't get the best people to work for them\nthey can hire people who will put up with them because they need a job\nbut the best people have other options\na mean person can't convince the best people to work for him unless he is super convincing\nand while having the best people helps any organization, it's critical for startups\nthe startup founders who end up richest are not the ones driven by money\n[1] the ones who keep going are driven by something else\nthey may not say so explicitly, but they're usually trying to improve the world\nwhich means people with a desire to improve the world have a natural advantage\nthis kind of work is the future\nfor most of history success meant control of scarce resources\nfor most of history, success meant success at zero-sum games\nand in most of them meanness was not a handicap but probably an advantage\nthat is changing\nincreasingly the games that matter are not zero-sum\nthere have long been games where you won by having new ideas\nin the third century bc archimedes won by doing that\nat least until an invading roman army killed him\nand not just not being at war\npeople need to feel that what they create can't be stolen\nthat has always been the case for thinkers, which is why this trend began with them\nthe exciting thing is that their m\nseems to be spreading\nso i'm really glad i stopped to think about this\njessica and i have always worked hard to teach our kids not to be mean\nwe tolerate noise and mess and junk food, but not meanness\nstartups are very counterintuitive\ni'm not sure why\nmaybe it's just because knowledge about them hasn't permeated our culture yet\nbut whatever the reason, starting a startup is a task where you can't always trust your instincts\nit's like skiing in that way\nwhen you first try skiing and you want to slow down, your instinct is to lean back\nbut if you lean back on skis you fly down the hill out of control\nso part of learning to ski is learning to suppress that impulse\neventually you get new habits, but at first it takes a conscious effort\nat first there's a list of things you're trying to remember as you start down the hill\nstartups are as unnatural as skiing, so there's a similar list for startups\ncounterintuitive\nif you know nothing more than this, you may at least pause before making them\nit's really true\nthey seem wrong\nso of course your first impulse is to disregard them\nif founders' instincts already gave them the right answers, they wouldn't need us\nyou only need other people to give you advice that surprises you\nthat's why there are a lot of ski instructors and not many running instructors\nyou can, however, trust your instincts about people\nand in fact one of the most common mistakes young founders make is not to do that enough\nif someone seems slippery, or bogus, or a jerk, don't ignore it\nthis is one case where it pays to be self-indulgent\nwork with people you genuinely like, and you've known long enough to be sure\nthe second counterintuitive point is that it's not that important to know a lot about startups\nmark zuckerberg didn't succeed because he was an expert on startups\nif you don't know anything about, say, how to raise an angel round, don't feel bad on that account\nthat sort of thing you can learn when you need to, and forget after you've done it\n\" it would set off alarms\nfrom the outside that seems like what startups do\nwe saw this happen so often that we made up a name for it: playing house\neventually i realized why it was happening\nthink about what you have to do to get into college, for example\nextracurricular activities, check\neven in college classes most of the work is as artificial as running laps\ni'm not attacking the educational system for being this way\ni confess i did it myself in college\nit was like a game\nthen they want to know what the tricks are for growing fast\nand we have to tell them the best way to do that is simply to make something people want\n\" and the partner replying \"just\ngaming the system may continue to work if you go to work for a big company\n[2] but that doesn't work with startups\nstartups are as impersonal as physics\nyou have to make something people want, and you prosper only to the extent you do\nthe dangerous thing is, faking does work to some degree on investors\nbut it's not in your interest to\nthe company is ultimately doomed\nall you're doing is wasting your own time riding it down\nso stop looking for the trick\nit's exciting that there even exist parts of the world where you win by doing good work\nhow do you win in each type of work, and what would you like to win by doing? [4]\nall-consuming\nthat brings us to our fourth counterintuitive point: startups are all-consuming\nif you start a startup, it will take over your life to a degree you cannot imagine\nso there is a real opportunity cost here\nlarry page may seem to have an enviable life, but there are aspects of it that are unenviable\nif he goes on vacation for even a week, a whole week's backlog of shit accumulates\nit never gets any easier\nthe nature of the problems change\nbut the total volume of worry never decreases; if anything it increases\nmany of which will make you a better parent when you do have kids\nand since you can delay pushing the button for a while, most people in rich countries do\nto be fair, the universities have their hand forced here\na lot of incoming students are interested in startups\nuniversities are, at least de facto, expected to prepare them for their careers\nso students who want to start startups hope universities can teach them about startups\ncan universities teach students about startups? yes and no\n[5] so starting a startup is intrinsically something you can only really learn by doing it\nyou may be nominally a student for a bit, but you won't even be that for long\ndo not start a startup in college\nstarting a startup is like a brutally fast depth-first search\nmost people should still be searching breadth-first at 20\nif you start a startup at 20 and you're sufficiently successful, you'll never get to do it\nmark zuckerberg will never get to bum around a foreign country\nhe can do other things most people can't, like charter jets to fly him to foreign countries\nbut success has taken a lot of the serendipity out of his life\nfacebook is running him as much as he's running facebook\namong other things it gives you more options to choose your life's work from\nthere's not even a tradeoff here\nshould you do it at any age? i realize i've made startups sound pretty hard\nif i haven't, let me try again: starting a startup is really hard\nwhat if it's too hard? how can you tell if you're up to this challenge?\nthe answer is the fifth counterintuitive point: you can't tell\nstarting a startup will change you a lot\nit was easy to tell how smart they were, and most people reading this will be over that threshold\nthe hard part was predicting how tough and ambitious they would become\nthe founders sometimes think they know\nif you're absolutely terrified of starting a startup, you probably shouldn't do it\nbut if you're merely unsure whether you're up to it, the only way to find out is to try\njust not now\nfor getting both is the same\ni've written a whole essay on this, so i won't repeat it all here\nthe way to come up with good startup ideas is to take a step back\nin fact, so unconsciously that you don't even realize at first that they're startup ideas\nthis is not only possible, it's how apple, yahoo, google, and facebook all got started\nnone of these companies were even meant to be companies at first\nthey were all just side projects\nthe third part, incidentally, is how you get cofounders at the same time as the idea\n\" but that prescription, though sufficient, is too narrow\nwhat was special about brian chesky and joe gebbia was not that they were experts in technology\nwhat kind of problems are those? that is very hard to answer in the general case\nso how do you know when you're working on real stuff? [8]\ni know how i know\ny combinator itself was something i only did because it seemed interesting\nso i seem to have some sort of internal compass that helps me out\nbut i don't know what other people have in their heads\nand indeed, probably also the best way to live\nyou may not realize they're startup ideas, but you'll know they're something that ought to exist\nhe didn't mean it to be a startup, and he never tried to turn it into one\n\" it's the classic version of college as education for its own sake\nthe component of entrepreneurship that really matters is domain expertise\nthe way to become larry page was to become an expert on search\nat its best, starting a startup is merely an ulterior motive for curiosity\nand you'll do it best if you introduce the ulterior motive toward the end of the process\nmost startups that raise money do it more than once\nreality can be messier\nsome companies raise money twice in phase 2\nothers skip phase 1 and go straight to phase 2\nbut the three phase path is at least the one about which individual startups' paths oscillate\nthis essay focuses on phase 2 fundraising\nthat problem is irreducible; it should be hard\nbut much of the other kind of difficulty can be eliminated\nyou can't trust your intuitions\ni'm going to give you a set of rules here that will get you through this process if anything will\nat certain moments you'll be tempted to ignore them\nso rule number zero is: these rules exist for a reason\nthe ultimate source of the forces acting on you are the forces acting on investors\nbut that fast growth means investors can't wait around\nif you wait till a startup is obviously a success, it's too late\nbut that in turn makes investors nervous they're about to invest in a flop\nas indeed they often are\nwhat investors would like to do, if they could, is wait\nbut if you wait too long, other investors might take the deal away from you\nand of course the other investors are all subject to the same forces\ndon't raise money unless you want it and it wants you\nactually it isn't\nrapid growth is what makes a company a startup\nthe other time not to raise money is when you won't be able to\nbe in fundraising mode or not\none of the things that surprises founders most about fundraising is how distracting it is\nwhen you start fundraising, everything else grinds to a halt\nthe problem is not the time fundraising consumes but that it becomes the top idea in your mind\na startup can't endure that level of distraction for long\nbecause fundraising is so distracting, a startup should either be in fundraising mode or not\nyou can take money from investors when you're not in fundraising mode\nyou just can't expend any attention on it\nthere are two things that take attention: convincing investors, and negotiating with them\n[3] the terms will be whatever they turn out to be in your next equity round\ninvestors will try to lure you into fundraising when you're not\nit's great for them if they can, because they can thereby get a shot at you before everyone else\nthey'll send you emails saying they want to meet to learn more about you\ndeals don't happen that way\nthey may say they just want to meet and chat, but investors never just want to meet and chat\nget introductions to investors\nbefore you can talk to investors, you have to be introduced to them\nif you're presenting at a demo day, you'll be introduced to a whole bunch simultaneously\nbut even if you are, you should supplement these with intros you collect yourself\ndo you have to be introduced? in phase 2, yes\nintros vary greatly in effectiveness\nthe best type of intro is from a well-known investor who has just invested in you\nso when you get an investor to commit, ask them to introduce you to other investors they respect\n[7] the next best type of intro is from a founder of a company they've funded\nyou can also get intros from other people in the startup community, like lawyers and reporters\nthere are now sites like angellist, fundersclub, and wefunder that can introduce you to investors\nwe recommend startups treat them as auxiliary sources of money\nraise money first from leads you get yourself\nthose will on average be better investors\nhear no till you hear yes\ni mentioned earlier that investors prefer to wait if they can\nwhat's particularly dangerous for founders is the way they wait\nessentially, they lead you on\nthey seem like they're about to invest right up till the moment they say no\nif they even say no\nsome of the worse ones never actually do say no; they just stop replying to your emails\nthey hope that way to get a free option on investing\nthat's not the worst thing investors will do\nand wishful thinking founders are happy to meet them half way\nfortunately, the next rule is a tactic for neutralizing this behavior\nbut to work it depends on you not being tricked by the no that sounds like yes\nif you believe an investor has committed, get them to confirm it\nand till they confirm, regard them as saying no\ndo breadth-first search weighted by expected value\nwhen you talk to investors your m\nshould be breadth-first search, weighted by expected value\nyou should always talk to investors in parallel rather than serially\nmeet such investors last, if at all\nbut you have to be disciplined about assigning probabilities\nyou can't let how much you want an investor influence your estimate of how much they want you\nknow where you stand\nnever leave a meeting with an investor without asking what happens next\nif you're experienced at negotiations, you already know how to ask such questions\n[13] if you're not, there's a trick you can use in this situation\ninvestors know you're inexperienced at raising money\ninexperience there doesn't make you unattractive\nlarry and sergey were noobs at fundraising\nget the first commitment\nthe biggest factor in most investors' opinions of you is the opinion of other investors\nonce you start getting investors to commit, it becomes increasingly easy to get more to\nbut the other side of this coin is that it's often hard to get the first commitment\ngetting the first substantial offer can be half the total difficulty of fundraising\nwhat counts as a substantial offer depends on who it's from and how much it is\nmoney from friends and family doesn't usually count, no matter how much\nclose committed money\nit's not a deal till the money's in the bank\nand it's also one that furnishes them plenty of excuses to gratify it\nthe public markets snap startup investing around like a whip\nif the chinese economy blows up tomorrow, all bets are off\ntomorrow a big competitor could appear, or you could get cded, or your cofounder could quit\neven a day's delay can bring news that causes an investor to change their mind\nso when someone commits, get the money\nknowing where you stand doesn't end when they say they'll invest\ninexperienced investors are the ones most likely to get buyer's remorse\nbut i've heard of cases of even top-tier vc firms welching on deals\navoid investors who don't \"lead\nsome investors are known for deciding quickly, and those are extra valuable early on\nconversely, an investor who will only invest once other investors have is worthless initially\nyou can recognize this contemptible subspecies of investor because they often talk about \"leads\n\" they say that they don't lead, or that they'll invest once you have a lead\nnow there are rarely actual rounds before the a round, or leads for them\nnow startups simply raise money from investors one at a time till they feel they have enough\nthe spectral signature of all mediocre investors\nhave multiple plans\nmany investors will ask how much you're planning to raise\nthis question makes founders feel they should be planning to raise a specific amount\nbut in fact you shouldn't\nit's a mistake to have fixed plans in an undertaking as unpredictable as fundraising\n\" i've known a handful of founders who could pull that off without having vcs laugh in their faces\ndifferent plans match different investors\n$15k per month is high, so don't actually spend that much\nbut it's ok to use a high estimate when fundraising to add a margin for error\nif you have additional expenses, like manufacturing, add in those at the end\nunderestimate how much you want\nthen when you reach $150k you're more than half done\nwhereas if you'd said you were raising $500k, you'd be less than a third done at $150k\nif fundraising stalled there for an appreciable time, you'd start to read as a failure\nsaying initially that you're raising $250k doesn't limit you to raising that much\nstartups do that all the time\ni'm not saying you should lie, but that you should lower your expectations initially\nthere is almost no downside in starting with a low number\nit not only won't cap the amount you raise, but will on the whole tend to increase it\na good metaphor here is angle of attack\nif you try to fly at too steep an angle of attack, you just stall\nbe profitable if you can\nif you can make it to profitability without raising any additional money\nthere are many analogies between fundraising and dating, and this is one of the strongest\nno one wants you if you seem desperate\nand the best way not to seem desperate is not to be desperate\nand they are then surprised how difficult and unpleasant it is\nof course not all startups can make it to ramen profitability in a few months\ndon't optimize for valuation\nfounders who raise money at high valuations tend to be unduly proud of it\nthis is stupid, because fundraising is not the test that matters\nthe real test is revenue\nfundraising is just a means to that end\nbeing proud of how well you did at fundraising is like being proud of your college grades\nnumber two is good investors\nvaluation is at best third\nthe empirical evidence shows just how unimportant it is\n6 million respectively\nso let that satisfy your competitiveness\nyou're doing better than dropbox and airbnb at a test that doesn't matter\nit will be easier to raise money at a lower valuation\nit shouldn't be, but it is\nbut although it's a mistake for investors to care about price, a significant number do\nyesno before valuation\nsome investors want to know what your valuation is before they even talk to you about investing\nfortunately there is a way to avoid naming a price in this situation\nand it is not just a negotiating trick; it's how you (both) should be operating\nthen if they decide they do want to invest, you can figure out a price\nbut first things first\nthis is a safe technique so long as you combine it with the next one\nbeware \"valuation sensitive\" investors\noccasionally you'll encounter investors who describe themselves as \"valuation sensitive\nyou should therefore never approach such investors first\nthis way, you'll not only get market price, but it will also take less time\nso you'd only want to talk to this sort of investor if you were about to do that anyway\nif you're surprised by a lowball offer, treat it as a backup offer and delay responding to it\nbut lowballing you is a dick move that should be met with the corresponding countermove\naccept offers greedily\na greedy algorithm takes the best of the options in front of it right now\nand that is how startups should approach fundraising in phases 2 and later\nif someone makes you an acceptable offer, take it\nif you have multiple incompatible offers, take the best\ndon't reject an acceptable offer in the hope of getting a better one in the future\nthese simple rules cover a wide variety of cases\nif you're raising money from many investors, roll them up as they say yes\nas you start to feel you've raised enough, the threshold for acceptable will start to get higher\nin practice offers exist for stretches of time, not points\nso when you get an acceptable offer that would be incompatible with others (e\nthis could lose you some that might have made an offer if they had more time\nbut by definition you don't care; the initial offer was acceptable\na deadline of three working days is acceptable\nyou shouldn't need more than that if you've been talking to investors in parallel\nbut a deadline any shorter is a sign you're dealing with a sketchy investor\nyou can usually call their bluff, and you may need to\nbut if it does, \"get the best investors\" is in the average case bad advice\nthe best investors are also the most selective, because they get their pick of all the startups\n(the situation is different in phase 1\nthere's no practical difficulty\nif the smaller investments are on convertible notes, they'll just convert into the series a round\ntill they do, you don't know for sure they will, and the greedy algorithm tells you what to do\ndon't sell more than 25% in phase 2\nif you do well, you will probably raise a series a round eventually\ni say probably because things are changing with series a rounds\nstartups may start to skip them\nwhich means you should avoid doing things in earlier rounds that will mess up raising an a round\nguess conservatively\nhave one person handle fundraising\n(if the founders mistrust one another, this could cause some friction\neven if the ceo is a programmer and another founder is a salesperson? yes\nbut wait till that point\nyou'll need an executive summary and (maybe) a deck\ntraditionally phase 2 fundraising consists of presenting a slide deck in person to investors\na lot of the most successful startups we fund never make decks in phase 2\nthey just talk to investors and explain what they plan to do\nbut don't refuse on that account to give copies to investors you meet\nyou just have to treat such leaks as a cost of doing business\nin practice it's not that high a cost\ni wouldn't do that\nit's a sign they're not really interested\nstop fundraising when it stops working\nwhen do you stop fundraising? ideally when you've raised enough\nbut what if you haven't raised as much as you'd like? when do you give up?\nwhen your fundraising options run out, they usually run out in the same way\ndon't keep sucking on the straw if you're just getting air\nit's not going to get better\ndon't get addicted to fundraising\nthe work at an early stage startup often consists of unglamorous schleps\nwhereas fundraising, when it's going well, can be quite the opposite\nthe danger of fundraising is particularly acute for people who are good at it\nit's always fun to work on something you're good at\nif you're one of these people, beware\nfundraising is not what will make your company successful\nlistening to users complain about bugs in your software is what will make you successful\nstartups can be destroyed by this\ndon't raise too much\nthough only a handful of startups have to worry about this, it is possible to raise too much\nthe dangers of raising too much are subtle but insidious\none is that it will set impossibly high expectations\na company's valuation is expected to rise each time it raises money\nif not it's a sign of a company in trouble, which makes you unattractive to investors\nand you have to be doing really, really well to raise money at $50 million\nbut the money itself may be more dangerous than the valuation\nso if you do raise a huge amount of money, don't spend it\nstartups raising money occasionally alienate investors by seeming arrogant\nit's a mistake to behave arrogantly to investors\nthe only safe strategy is never to seem arrogant at all\nso you must cushion the blow with soft words\nat yc we tell startups they can blame us\nand now that i've written this, everyone else can blame me if they want\nthe danger of behaving arrogantly is greatest when you're doing well\nwhen everyone wants you, it's hard not to let it go to your head\nespecially if till recently no one wanted you\nbut restrain yourself\nthe startup world is a small place, and startups have lots of ups and downs\nthis is a domain where it's more true than usual that pride goeth before a fall\nbe nice when investors reject you as well\nthe best investors are not wedded to their initial opinion of you\nif they reject you in phase 2 and you end up doing well, they'll often invest in phase 3\nin fact investors who reject you are some of your warmest leads for future fundraising\nany investor who spent significant time deciding probably came close to saying yes\nthe bar will be higher next time\nassume the money you raise in phase 2 will be the last you ever raise\nyou must make it to profitability on this money if you can\nthis is probably the optimal strategy for investors\nit's too hard to pick winners early on\nbetter to let the market do it for you\nbut it often comes as a surprise to startups how much harder it is to raise money in phase 3\nthe next time you raise money, the experiment has to have worked\nyou have to be on a trajectory that leads to going public\nand while there are some ideas where the proof that the experiment worked might consist of e\nquery response times, usually the proof is profitability\nusually phase 3 fundraising has to be type a fundraising\nin practice there are two ways startups hose themselves between phases 2 and 3\nsome are just too slow to become profitable\nthey raise enough money to last for two years\nthere doesn't seem any particular urgency to be profitable\nso they don't make any effort to make money for a year\nbut by that time, not making money has become habitual\nwhen they finally decide to try, they find they can't\nthe other way companies hose themselves is by letting their expenses grow too fast\nwhich almost always means hiring too many people\nyou usually shouldn't go out and hire 8 people as soon as you raise money at phase 2\nusually you want to wait till you have growth (and thus usually revenues) to justify them\na lot of vcs will encourage you to hire aggressively\ndon't listen to them\ndon't make things complicated\nthat's fundraising in one sentence\ndon't introduce complicated optimizations, and don't let investors introduce complications either\nfundraising is not what will make you successful\nit's just a means to an end\nbe good, take care of yourselves, and don't leave the path\nthe biggest component in most investors' opinion of you is the opinion of other investors\nwhich is of course a recipe for exponential growth\nbut actually the two are not that highly correlated\nif you understand them, you can at least avoid being surprised\nraising money decreases the risk of failure\nplus a company that has raised money is literally more valuable\nthough they're often clueless about technology, most investors are pretty good at reading people\nwhen fundraising is going well, investors are quick to sense it in your increased confidence\njudging startups is hard even for the best investors\nthe mediocre ones might as well be flipping coins\nthe best investors aren't influenced much by the opinion of other investors\nit would only dilute their own judgment to average it together with other people's\nthis is the fourth way in which offers beget offers\nfounders try this sort of thing all the time, and investors are very sensitive to it\nif anything oversensitive\nbut you're safe so long as you're telling the truth\nthere's no manipulation in that\ndo not, however, tell a who b is\nvcs will sometimes ask which other vcs you're talking to, but you should never tell them\nangels you can sometimes tell about other angels, because angels cooperate more with one another\nthe second will be easier\nthe right way to lift heavy things is to let your legs do the work\ninexperienced founders make the same mistake when trying to convince investors\nthey try to convince with their pitch\ninvestors are looking for startups that will be very successful\nbut that test is not as simple as it sounds\nthe big successes are so big they dwarf the rest\nbut angel investors like big successes too\nthe most important ingredient is formidable founders\n[2] every startup has reasons both to invest and not to invest\nif investors think you're a winner they focus on the former, and if not they focus on the latter\nfor example, it might be a rich market, but with a slow sales cycle\nthey're not necessarily trying to mislead you\nmost investors are genuinely unclear in their own minds why they like or dislike startups\nif you seem like a winner, they'll like your idea more\nbut don't be too smug about this weakness of theirs, because you have it too; almost everyone does\nthere is a role for ideas of course\nthey're fuel for the fire that starts with liking the founders\n\" (whereas when they don't like you, they'll be saying \"but what about x?\")\nformidable is close to confident, except that someone could be confident and mistaken\nformidable is roughly justifiably confident\nwhat should they do? [4]\nwhat they should not do is try to imitate the swagger of more experienced founders\ninvestors are not always that good at judging technology, but they're good at judging confidence\nif you try to act like something you're not, you'll just end up in an uncanny valley\nyou'll depart from sincere, but never arrive at convincing\nthe way to seem most formidable as an inexperienced founder is to stick to the truth\nhow formidable you seem isn't a constant\nit varies depending on what you're saying\nthat's the secret\nand by convince yourself, i don't mean play mind games with yourself to boost your confidence\ni mean truly evaluate whether your startup is worth investing in\nif it isn't, don't try to raise money\nto evaluate whether your startup is worth investing in, you have to be a domain expert\nwhich in fact it will usually be\nknow everything about your market\nwhen the unfortunate fellow got to his last slide, the professor burst out:\nwhich one of these conclusions do you actually believe?\neven if you have no ideas\nyou have to produce something\nand all too many startups go into fundraising in the same spirit\nit's when you can convince investors, and not before\nif you try convincing investors before you've convinced yourself, you'll be wasting both your time\nbut pausing first to convince yourself will do more than save you from wasting your time\nit will force you to organize your thoughts\nand if you can do that you'll end up with more than added confidence\nyou'll also have a provisional roadmap of how to succeed\nno one knows whether a startup is going to succeed\nstartup investors know that every investment is a bet, and against pretty long odds\nfounders think of startups as ideas, but investors think of them as markets\nyour target market has to be big, and it also has to be capturable by you\nbut the market doesn't have to be big yet, nor do you necessarily have to be in it yet\nthe standard of plausibility varies dramatically depending on the age of the startup\nmicrosoft for example was not going to grow huge selling basic interpreters\ngood, but not great\nno company, however successful, ever looks more than a pretty good bet a few months in\nmicrocomputers turned out to be a big deal, and microsoft both executed well and got lucky\nbut it was by no means obvious that this was how things would play out\nplenty of companies seem as good a bet a few months in\nand who can reasonably expect more of a startup than that?\nif you can make as good a case as microsoft could have, will you convince investors? not always\na lot of vcs would have rejected microsoft\n[9] certainly some rejected google\nthis is arguably a permissible tactic\nit's arguably an instance of scamming a scammer\nif you know you're on the right track, then you also know why investors were wrong to reject you\nexperienced investors are well aware that the best ideas are also the scariest\nthey all know about the vcs who rejected google\nthat's what happened to dropbox\nyet another backup and syncing thing, they all thought\na couple weeks later, dropbox raised a series a round from sequoia\nyou can convince yourself, then convince them\nand when you convince them, use the same matter-of-fact language you used to convince yourself\nyou wouldn't use vague, grandiose marketing-speak among yourselves\ndon't use it with investors either\nit not only doesn't work on them, but seems a mark of incompetence\njust be concise\nso here's the recipe for impressing investors when you're not already good at seeming formidable:\nmake something worth investing in\nunderstand why it's worth investing in\nexplain that clearly to investors\nif you're saying something you know is true, you'll seem confident when you're saying it\nconversely, never let pitching draw you into bullshitting\nas long as you stay on the territory of truth, you're strong\nmake the truth good, then just tell it\none of the most common types of advice we give at y combinator is to do things that don't scale\na lot of would-be founders believe that startups either take off or don't\nor they don't, in which case the market must not exist\nactually startups take off because the founders make them take off\na good metaphor would be the cranks that car engines had before they got electric starters\nthe most common unscalable thing founders have to do at the start is to recruit users manually\nnearly all startups have to\nyou can't wait for users to come to you\nyou have to go out and get them\nif anyone could have sat back and waited for users, it was stripe\nbut in fact they're famous within yc for aggressive early user acquisition\nat yc we use the term \"collison installation\" for the technique they invented\n\" but the collison brothers weren't going to wait\nthere are two reasons founders resist going out and recruiting users individually\none is a combination of shyness and laziness\nthe other reason founders ignore this path is that the absolute numbers seem so small at first\nthis can't be how the big, famous startups got started, they think\nthe mistake they make is to underestimate the power of compound growth\nwe encourage every startup to measure their progress by weekly growth rate\nif you have 100 users, you need to get 10 more next week to grow 10% a week\nafter a year you'll have 14,000 users, and after 2 years you'll have 2 million\nairbnb is a classic example of this technique\nmarketplaces are so hard to get rolling that you should expect to take heroic measures at first\nthat initial fragility was not a unique feature of airbnb\nalmost all startups are fragile initially\nthey unconsciously judge larval startups by the standards of established ones\nit's harmless if reporters and know-it-alls dismiss your startup\nthey always get things wrong\nit's even ok if investors dismiss your startup; they'll change their minds when they see growth\nthe big danger is that you'll dismiss your startup yourself\ni've seen it happen\ni often have to encourage founders who don't see the full potential of what they're building\neven bill gates made that mistake\nhe returned to harvard for the fall semester after starting microsoft\nthey were just trying to survive\nbut in retrospect that too was the optimal path to dominating a big market\notherwise you'll have to make a more deliberate effort to locate the most promising vein of users\nyou should take extraordinary measures not just to acquire users, but also to make them happy\nyour first users should feel that signing up with you was one of the best choices they ever made\nand you in turn should be racking your brains to think of new ways to delight them\nyou can be ornery when you're scotty, but not when you're kirk\nthat would be a great problem to have\nsee if you can make it happen\ntim cook doesn't send you a hand-written note after you buy a laptop\nbut you can\nthat's one advantage of being small: you can provide a level of service no big company can\nsteve wasn't just using \"insanely\" as a synonym for \"very\nwhat novice founders don't get is what insanely great translates to in a larval startup\nwhen steve jobs started using that phrase, apple was already an established company\nthat's not hard for engineers to grasp\nit's just a more extreme version of designing a robust and elegant product\nit's not the product that should be insanely great, but the experience of being your user\nthe product is just one component of that\nfor a big company it's necessarily the dominant one\ncan, perhaps, but should? yes\nover-engaging with early users is not just a permissible technique for getting growth rolling\nmaking a better mousetrap is not an atomic operation\nthe feedback you get from engaging directly with your earliest users will be the best you ever get\nsometimes the right unscalable trick is to focus on a deliberately narrow market\nit's like keeping a fire contained at first to get it really hot before adding more logs\nthat's what facebook did\nat first it was just for harvard students\nmost startups that use the contained fire strategy do it unconsciously\nthe strategy works just as well if you do it unconsciously\namong companies, the best early adopters are usually other startups\nplus when they succeed they grow fast, and you with them\nthey got started by doing something that really doesn't scale: assembling their routers themselves\nhardware startups face an obstacle that software startups don't\nthe minimum order for a factory production run is usually several hundred thousand dollars\nthe arrival of crowdfunding (or more precisely, preorders) has helped a lot\nbut even so i'd advise startups to pull a meraki initially if they can\nthat's what pebble did\nthe pebbles assembled the first several hundred watches themselves\n\" who knew?\neven if there aren't many of them, there are probably adjacent territories that have more\nconsulting is the canonical example of work that doesn't scale\nthat's where companies cross the line\nwe did that at viaweb\nsince we would do anything to get users, we did\nwe felt pretty lame at the time\nthere's a more extreme variant where you don't just use your software, but are your software\nsome startups could be entirely manual at first\ni should mention one sort of initial tactic that usually doesn't work: the big launch\nthey want to launch simultaneously in 8 different publications, with embargoes\nand on a tuesday, of course, since they read somewhere that's the optimum day to launch something\nit's easy to see how little launches matter\nthink of some successful startups\nso why do founders think launches matter? a combination of solipsism and laziness\npartnerships too usually don't work\nit's not enough just to do something extraordinary initially\nyou have to make an extraordinary effort initially\ny combinator has now funded 564 startups including the current batch, which has 53\n7 billion, and the 511 prior to the current batch have collectively raised about $1\nas usual those numbers are dominated by a few big winners\nthe top 10 startups account for 8\n6 of that 11\nbut there is a peloton of younger startups behind them\nthere are about 40 more that have a shot at being really big\ni'd guess we can grow another 2 or 3x before hitting the next bottleneck\none consequence of funding such a large number of startups is that we see trends early\ni'm going to take a shot at describing where these trends are leading\ni think more\nnow there's a third: start your own company\nthat's a big change\ni think we're still at the beginning of this one\nit's hard to predict how big a deal it will be\nas big a deal as the industrial revolution? maybe\nprobably not\none thing we can say for sure is that there will be a lot more startups\nthis process is not just something happening now in silicon valley\nit started decades ago, and it's happening as far afield as the car industry\nit has a long way to run\nthe other big driver of change is that startups are becoming cheaper to start\nwhich means investors will get less stock and less control\nthere are still a lot of people who'd make great founders who never end up starting a company\nyou can see that from how randomly some of the most successful startups got started\nthere might be 10x or even 50x more good founders out there\nhigh returns don't come from investing at low valuations\nthey come from investing in the companies that do really well\nso if there are more of those to be had each year, the best pickers should have more hits\nthis means there should be more variability in the vc business\nwhereas the bad firms will get the leftovers, as they do now, and yet pay a higher price for them\nnor do i think it will be a problem that founders keep control of their companies for longer\nwhat about angels? i think there is a lot of opportunity there\nit used to suck to be an angel investor\nand the days when vcs could wash angels out of the cap table are long gone\nfew investors understand the cost that raising money from them imposes on startups\nand in this context, low-cost means deciding quickly\none is that the scariness of starting a startup in the old days was a pretty effective filter\nnow that the cost of failing is becoming lower, we should expect founders to do it more\nthat's not a bad thing\nit will be interesting, in a bad way, if idea clashes become a lot more common\nwhat used to be an obelisk will become a pyramid\nit will be a little wider at the top, but a lot wider at the bottom\nimagine the obelisk of investors that corresponds to the obelisk of startups\ni think the biggest danger for vcs, and also the biggest opportunity, is at the series a stage\nright now, vcs often knowingly invest too much money at the series a stage\nsome vcs lie and claim the company really needs that much\nlike a lot of bad things, this didn't happen intentionally\nthe vc business backed into it as their initial assumptions gradually became obsolete\nwhat will happen to the vc business when that happens? hell if i know\nbut i bet that particular firm will end up ahead\nand that's where the money is\nyou can't fight market forces forever\n40% used to be common\nnow vcs are fighting to hold the line at 20%\nbut i am daily waiting for the line to collapse\nit's going to happen\nyou may as well anticipate it, and look bold\nwho knows, maybe vcs will make more money by doing the right thing\nit wouldn't be the first time that happened\nventure capital is a business where occasional big successes generate hundredfold returns\nif you want to find new opportunities for investing, look for things founders complain about\nfounders are your customers, and the things they complain about are unsatisfied demand\nbut the more general recipe is: do something founders want\nthe way to get startup ideas is not to try to think of startup ideas\nit's to look for problems, preferably problems you have yourself\nmicrosoft, apple, yahoo, google, and facebook all began this way\nit sounds obvious to say you should only work on problems that exist\nand yet by far the most common mistake startups make is to solve problems no one has\ni made it myself\nin 1995 i started a company to put art galleries online\nbut galleries didn't want to be online\nit's not how the art business works\nso why did i spend 6 months working on this stupid idea? because i didn't pay attention to users\ni invented a model of the world that didn't correspond to reality, and worked from that\ni didn't notice my model was wrong until i tried to convince users to pay for what we'd built\neven then i took embarrassingly long to catch on\ni was attached to my model of the world, and i'd spent a lot of time on the software\nthey had to want it\nat yc we call these \"made-up\" or \"sitcom\" startup ideas\nimagine one of the characters on a tv show was starting a startup\nthe writers would have to invent something for it to do\nbut coming up with good startup ideas is hard\nit's not something you can do for the asking\nfor example, a social network for pet owners\nit doesn't sound obviously mistaken\nmillions of people have pets\noften they care a lot about their pets and spend a lot of money on them\nsurely many of these people would like a site where they could talk to other pet owners\nyou could serve them targeted offers, and maybe charge for premium features\n\" they say \"yeah, maybe i could see using something like that\n\" even when the startup launches, it will sound plausible to a lot of people\nsum that reaction across the entire population, and you have zero users\nchoose the latter\nif you invert the scale on the y axis, you can envision companies as holes\ngoogle is an immense crater: hundreds of millions of people use it, and they need it a lot\na startup just starting out can't expect to excavate that much volume\nso you have two choices about the shape of hole you start with\nyou can either dig a hole that's broad but shallow, or one that's narrow and deep, like a well\nmade-up startup ideas are usually of the first type\nlots of people are mildly interested in a social network for pet owners\nnearly all good startup ideas are of the second type\nmicrosoft was a well when they made altair basic\nthirty years later facebook had the same shape\nyou don't need the narrowness of the well per se\nit's depth you need; you get narrowness as a byproduct of optimizing for depth (and speed)\nbut you almost always do get it\nfacebook was a good idea because it started with a small market there was a fast path out of\nso you spread rapidly through all the colleges\nonce you have all the college students, you get everyone else simply by letting them in\nthe founders of airbnb didn't realize at first how big a market they were tapping\ninitially they had a much narrower idea\nthey were going to let hosts rent out space on their floors during conventions\nthey didn't foresee the expansion of this idea; it forced itself upon them gradually\nall they knew at first is that they were onto something\nthat's probably as much as bill gates or mark zuckerberg knew at first\noccasionally it's obvious from the beginning when there's a path out of the initial niche\nand sometimes i can see a path that's not immediately obvious; that's one of our specialties at yc\nbut there are limits to how well this can be done, no matter how much experience you have\nin zen and the art of motorcycle maintenance, robert pirsig says:\nyou want to know how to paint a perfect painting? it's easy\nmake yourself perfect and then just paint naturally\ni've wondered about that passage since i read it in high school\ni'm not sure how useful his advice is for painting specifically, but it fits this situation well\nempirically, the way to have good startup ideas is to become the sort of person who has them\nyou can also be at the leading edge as a user\nbut mark already lived online; to him it seemed natural\npaul buchheit says that people at the leading edge of a rapidly changing field \"live in the future\n\" combine that with pirsig and you get:\nlive in the future, then build what's missing\nthat describes the way many if not most of the biggest startups got started\nneither apple nor yahoo nor google nor facebook were even supposed to be companies at first\nthey grew out of things their founders built because there seemed a gap in the world\n\" lots of people heard about the altair\nlots forgot usb sticks\nthe verb you want to be using with respect to startup ideas is not \"think up\" but \"notice\nthe most successful startups almost all begin this way\nthat may not have been what you wanted to hear\nbut disappointing though it may be, this is the truth\nand it is a recipe of a sort, just one that in the worst case takes a year rather than a weekend\nif you're not at the leading edge of some rapidly changing field, you can get to one\nfor example, anyone reasonably smart can probably get to an edge of programming (e\nbuilding mobile apps) in a year\nespecially if you're also looking for a cofounder\nyou don't have to learn programming to be at the leading edge of a domain that's changing fast\nother domains change fast\nbut while learning to hack is not necessary, it is for the forseeable future sufficient\nas marc andreessen put it, software is eating the world, and this trend has decades left to run\nknowing how to hack also means that when you have ideas, you'll be able to implement them\nthat's not absolutely necessary (jeff bezos couldn't) but it's an advantage\ni'll try building an initial version tonight\nwhat won't be obvious is that they're startup ideas\nmost things that are missing will take some time to see\nyou almost have to trick yourself into seeing the ideas around you\nbut you know the ideas are out there\nthis is not one of those problems where there might not be an answer\nit's impossibly unlikely that this is the exact moment when technological progress stops\nand when these problems get solved, they will probably seem flamingly obvious in retrospect\nwhat you need to do is turn off the filters that usually prevent you from seeing them\nthe most powerful is simply taking the current state of the world for granted\neven the most radically open-minded of us mostly do that\nyou couldn't get from your bed to the front door if you stopped to question everything\npay particular attention to things that chafe you\nwhen something annoys you, it could be because you're living in the future\nit was obvious to us as programmers that these sites would have to be generated by software\nto sit down and try to think of ideas\ngive yourself some time\ndrew houston did work on a less promising idea before dropbox: an sat prep startup\nbut dropbox was a much better idea, both in the absolute sense and also as a match for his skills\nif you do that, you'll naturally tend to build things that are missing\nit wouldn't seem as interesting to build something that already existed\nit's cool; users love it; it just doesn't matter\nmicrocomputers seemed like toys when apple and microsoft started working on them\n\" backrub seemed like an inconsequential science project\nthe facebook was just a way for undergrads to stalk one another\nto us that's positive evidence an idea is good\nlive in the future and build what seems interesting\nthat's what i'd advise college students to do, rather than trying to learn about \"entrepreneurship\n\" \"entrepreneurship\" is something you learn best by doing it\nthe examples of the most successful founders make that clear\nwhat you should be spending your time on in college is ratcheting yourself into the future\ncollege is an incomparable opportunity to do that\nall you'll learn is the words for things\nthe clash of domains is a particularly fruitful source of ideas\nor better still, go work for a biotech company\ncs majors normally get summer jobs at computer hardware or software companies\nor don't take any extra classes, and just build things\nit's no coincidence that microsoft and facebook both got started in january\nbut don't feel like you have to build things that will become startups\nthat's premature optimization\njust build things\npreferably with other students\nyou're also surrounded by other people trying to do the same thing\nbeware of research\nwhereas a phd dissertation is extremely unlikely to\ncompetition\nbecause a good idea should seem obvious, when you have one you'll tend to feel that you're late\ndon't let that deter you\nworrying that you're late is one of the signs of a good idea\nten minutes of searching the web will usually settle the question\neven if you find someone else working on the same thing, you're probably not too late\nif you're uncertain, ask users\nthe question then is whether that beachhead is big enough\nerr on the side of doing things where you'll face competitors\ninexperienced founders usually give competitors more credit than they deserve\nwhether you succeed depends far more on you than on your competitors\nso better a good idea with competitors than a bad one without\nin fact that's a very promising starting point\ngoogle was that type of idea\nyour thesis has to be more precise than \"we're going to make an x that doesn't suck\" though\nyou have to be able to phrase it in terms of something the incumbents are overlooking\ngoogle was that type of idea too\nthey'd prefer not to deal with tedious problems or get involved in messy ways with the real world\nwhich is a reasonable preference, because such things slow you down\nand dealing with payments is a schlep for stripe, but not an intolerable one\nwe overcame this one to work on viaweb\nwe could see the problem was one that needed to be solved though\nand even to the degree it isn't, it's a worse form of self-indulgence\nstarting a successful startup is going to be fairly laborious no matter what\nthe unsexy filter, while still a source of error, is not as entirely useless as the schlep filter\nparticularly as you get older and more experienced\nplus if you find an idea sexy, you'll work on it more enthusiastically\nsometimes you need an idea now\nfor example, if you're working on a startup and your initial idea turns out to be bad\nfor the rest of this essay i'll talk about tricks for coming up with startup ideas on demand\nalthough empirically you're better off using the organic strategy, you could succeed this way\nyou just have to be more disciplined\nyou'll see a lot more ideas, most of them bad, so you need to be able to filter them\none of the biggest dangers of not using the organic method is the example of the organic method\norganic ideas feel like inspirations\nwhen searching for ideas, look in areas where you have some expertise\nif you're a database expert, don't build a chat app for teenagers (unless you're also a teenager)\nmaybe it's a good idea, but you can't trust your judgment about that, so ignore it\nthere have to be other ideas that involve databases, and whose quality you can judge\nthe place to start looking for ideas is things you need\nthere must be things you need\n\" if you can think of any x people said that about, you probably have an idea\nyou know there's demand, and people don't say that about things that are impossible to build\nyou're probably not the only one\nit's especially good if you're different in a way people will increasingly be\nif you're changing ideas, one unusual thing about you is the idea you'd previously been working on\ndid you discover any needs while working on it? several well-known startups began this way\na particularly promising way to be unusual is to be young\nsome of the most valuable new ideas take root first among people in their teens and early twenties\nit would have been very hard for someone who wasn't a college student to start facebook\nthe next best thing to an unmet need of your own is an unmet need of someone else\ntry talking to everyone you can about the gaps they find in the world\nyou're just looking for something to spark a thought\nwhen you find an unmet need that isn't your own, it may be somewhat blurry at first\nthe person who needs something may not know exactly what they need\none way to ensure you do a good job solving other people's problems is to make them your own\nthat may seem like taking things to extremes, but startups are extreme\nwe love it when founders do such things\ndon't try to start twitter\nthose ideas are so rare that you can't find them by looking for them\nmake something unsexy that people will pay you for\nwhat would you pay for right now?\nfor example, journalism is in free fall at the moment\nbut there may still be money to be made from something like journalism\nbut imagine asking that in the future, not now\nwhen one company or industry replaces another, it usually comes in from the side\nand be imaginative about the axis along which the replacement occurs\nit could be replaced on any of these axes (it has already started to be on most)\nthe prices of gene sequencing and 3d printing are both experiencing moore's law-like declines\nlooking for waves is essentially a way to simulate the organic method\nfinding startup ideas is a subtle business, and that's why most people who try fail so miserably\nit doesn't work well simply to try to think of startup ideas\nif you do that, you get bad ones that sound dangerously plausible\nbut even then, not immediately\nit takes time to come across situations where you notice something missing\nlive in the future and build what seems interesting\nstrange as it sounds, that's the real recipe\none advantage of y combinator's early, broad focus is that we see trends before most other people\nand one of the most conspicuous trends in the last batch was the large number of hardware startups\nout of 84 companies, 7 were making hardware\non the whole they've done better than the companies that weren't\nthey've faced resistance from investors of course\ninvestors have a deep-seated bias against hardware\nbut investors' opinions are a trailing indicator\nthere is no one single force driving this trend\nhardware does well on crowdfunding sites\nelectric motors have improved\nwireless connectivity of various types can now be taken for granted\nit's getting more straightforward to get things manufactured\nretailers are less of a bottleneck as customers increasingly buy online\none question i can answer is why hardware is suddenly cool\nit always was cool\nphysical things are great\nthey just haven't been as great a way to start a rapidly growing business as software\nbut that rule may not be permanent\nit's not even that old; it only dates from about 1990\nmaybe the advantage of software will turn out to have been temporary\nhackers love to build hardware, and customers love to buy it\nit wouldn't be the first time something was a bad idea till it wasn't\nand it wouldn't be the first time investors learned that lesson from founders\na startup is a company designed to grow fast\nbeing newly founded does not in itself make a company a startup\n\" the only essential thing is growth\neverything else we associate with startups follows from growth\nif you want to start one it's important to understand that\nstartups are so hard that you can't be pointed off to the side and hope to succeed\nyou have to know that growth is what you're after\nthe good news is, if you get growth, everything else tends to fall into place\nwhich means you can use growth like a compass to make almost every decision you face\nmillions of companies are started every year in the us\nonly a tiny fraction are startups\nmost are service businessesrestaurants, barbershops, plumbers, and so on\nthese are not startups, except in a few unusual cases\na barbershop isn't designed to grow fast\nwhereas a search engine, for example, is\nwhen i say startups are designed to grow fast, i mean it in two senses\npartly i mean designed in the sense of intended, because most startups fail\nthat difference is why there's a distinct word, \"startup,\" for companies designed to grow fast\nwe could just talk about super-successful companies and less successful ones\nbut in fact startups do have a different sort of dna from other businesses\ngoogle is not just a barbershop whose founders were unusually lucky and hard-working\ngoogle was different from the beginning\nto grow rapidly, you need to make something you can sell to a big market\nthat's the difference between google and a barbershop\na barbershop doesn't scale\nbarbershops are doing fine in the (a) department\nalmost everyone needs their hair cut\nthe problem for a barbershop, as for any retail establishment, is (b)\na barbershop serves customers in person, and few will travel far for a haircut\nand even if they did the barbershop couldn't accomodate them\nwriting software is a great way to solve (b), but you can still end up constrained in (a)\nif you make software to teach english to chinese speakers, however, you're in startup territory\nmost businesses are tightly constrained in (a) or (b)\nthe distinctive feature of successful startups is that they're not\nit might seem that it would always be better to start a startup than an ordinary business\nif you write software to teach tibetan to hungarians, you won't have much competition\nthe constraints that limit ordinary companies also protect them\nthat's the tradeoff\nif you start a barbershop, you only have to compete with other local barbers\nif you start a search engine you have to compete with the whole world\nbar  neighborhood is a sufficient idea for a small business\nsimilarly for companies constrained in (a)\nyour niche both protects and defines you\nbut that's not how most startups get started\n[3] but at the moment when successful startups get started, much of the innovation is unconscious\nwhat's different about successful founders is that they can see different problems\nsteve wozniak's problem was that he wanted his own computer\nthat was an unusual problem to have in 1975\nbut technological change was about to make it a much more common one\ngoogle has similar origins\nlarry page and sergey brin wanted to search the web\nthat's one connection between startup ideas and technology\nrapid change in one area uncovers big, soluble problems in other areas\nsometimes the changes are advances, and what they change is solubility\nbut in google's case the most important change was the growth of the web\nwhat changed there was not solubility but bigness\nhow fast does a company have to grow to be considered a startup? there's no precise answer to that\n\"startup\" is a pole, not a threshold\nstarting one is at first no more than a declaration of one's ambitions\nbut at first you have no more than commitment\nstarting a startup is like being an actor in that respect\n\"actor\" too is a pole rather than a threshold\nat the beginning of his career, an actor is a waiter who goes to auditions\nthe growth of a successful startup usually has three phases:\neventually a successful startup will grow into a big company\ntogether these three phases produce an s-curve\nthe phase whose growth defines the startup is the second one, the ascent\nits length and slope determine how big the company will be\nthe slope is the company's growth rate\nif there's one number every founder should always know, it's the company's growth rate\nthat's the measure of a startup\nif you don't know that number, you don't even know if you're doing well or badly\n\" that's not a rate\na good growth rate during yc is 5-7% a week\nif you can hit 10% a week you're doing exceptionally well\nif you can only manage 1%, it's a sign you haven't yet figured out what you're doing\nthe best thing to measure the growth rate of is revenue\nthe next best, for startups that aren't charging initially, is active users\nthe key word here is \"just\n\" if they decide to grow at 7% a week and they hit that number, they're successful for that week\nthere's nothing more they need to do\nprogrammers will recognize what we're doing here\nwe're turning starting a startup into an optimization problem\nyou don't have to think about what the program should do, just make it faster\nfor most programmers this is very satisfying work\njudging yourself by weekly growth doesn't mean you can look no more than a week ahead\nit's not that you don't think about the future, just that you think about it no more than necessary\nin theory this sort of hill-climbing could get a startup into trouble\nthey could end up on a local maximum\nbut in practice that never happens\nnine times out of ten, sitting around strategizing is just a form of procrastination\nwhereas founders' intuitions about which hill to climb are usually better than they realize\nplus the maxima in the space of startup ideas are not spiky and isolated\nmost fairly good ideas are adjacent to even better ones\nthe fascinating thing about optimizing for growth is that it can actually discover startup ideas\nyou can use the need for growth as a form of evolutionary pressure\nthere's a parallel here to small businesses\nfor startups, growth is a constraint much like truth\nevery successful startup is at least partly a product of the imagination of growth\nif we project forward we see why\nweeklyyearly\na company that grows at 1% a week will grow 1\n7x a year, whereas a company that grows at 5% a week will grow 12\na startup that grows at 5% a week will in 4 years be making $25 million a month\nwhat happens to fast growing startups tends to surprise even the founders\nsmall variations in growth rate produce qualitatively different outcomes\nand, strangely enough, it's also why they fail so frequently\nfor the right peoplee\nthe young bill gatesthe probability might be 20% or even 50%\nso it's not surprising that so many want to take a shot at it\nand since the latter is huge the former should be too\nthis doesn't bother me\nit's the same with other high-beta vocations, like being an actor or a novelist\ni've long since gotten used to it\nbut it seems to bother a lot of people, particularly those who've started ordinary businesses\nif they stepped back and looked at the whole picture they might be less indignant\nif you judge by the median startup, the whole concept of a startup seems like a fraud\nbut it's a mistake to use the median in a domain with so much variation\nthe test of any investment is the ratio of return to risk\nbut that's not the only reason investors like startups\nthe other way to get returns from an investment is in the form of dividends\nthe founders can't enrich themselves without also enriching the investors\nwhy do founders want to take the vcs' money? growth, again\nthe constraint between good ideas and growth operates in both directions\nit's not merely that you need a scalable idea to grow\nif you have such an idea and don't grow fast enough, competitors will\nalmost every company needs some amount of funding to get started\nbut startups often raise money even when they are or could be profitable\nfundamentally that's how the most successful startups view fundraising\nraising money lets you choose your growth rate\na profitable startup could if it wanted just grow on its own revenues\ngrowing slower might be slightly dangerous, but chances are it wouldn't kill them\npretty much every successful startup will get acquisition offers too\nwhy? what is it about startups that makes other companies want to buy them? [13]\nbut acquirers have an additional reason to want startups\na rapidly growing company is not merely valuable, but dangerous\nif it keeps expanding, it might expand into the acquirer's own territory\nmost product acquisitions have some component of fear\nthe combination of founders, investors, and acquirers forms a natural ecosystem\njust as our ancestors did to explain the apparently too neat workings of the natural world\nbut there is no secret cabal making it all work\nto anyone who knows mark zuckerberg that is the reductio ad absurdum of the initial assumption\nif you want to understand startups, understand growth\ngrowth drives everything in this world\nand growth explains why successful startups almost invariably get acquisition offers\nto acquirers a fast-growing company is not merely valuable but dangerous too\nunderstanding growth is what starting a startup consists of\nyou're committing to search for one of the rare ideas that generates rapid growth\nbecause these ideas are so valuable, finding one is hard\nthe startup is the embodiment of your discoveries so far\na startup founder is in effect an economic research scientist\nmost don't discover anything that remarkable, but some discover relativity\nthe first rule i knew intellectually, but didn't really grasp till it happened to us\nthe total value of the companies we've funded is around 10 billion, give or take a few\nbut just two companies, dropbox and airbnb, account for about three quarters of it\nin startups, the big winners are big to a degree that violates our expectations about variation\nthat yields all sorts of strange consequences\nand yet it's true\n[2] you need to do what you know intellectually to be right, even though it feels wrong\nit's a constant battle for us\nit's hard to make ourselves take enough risks\nwhen you interview a startup and think \"they seem likely to succeed,\" it's hard not to fund them\ntheir chances of succeeding seem small\nunfortunately picking winners is harder than that\nthat's made harder by the fact that the best startup ideas seem at first like bad ideas\nso the most successful founders tend to work on ideas that few beside them realize are good\n\" the intersection is the sweet spot for startups\nthis concept is a simple one and yet seeing it as a venn diagram is illuminating\nit reminds you that there is an intersectionthat there are good ideas that seem bad\nit also reminds you that the vast majority of ideas that seem bad are bad\nthe fact that the best ideas seem like bad ideas makes it even harder to recognize the big winners\none could have described microsoft and apple in exactly the same terms\nharder still\nwait, it gets worse\nwhen you pick a big winner, you won't know it for two years\nmeanwhile, the one thing you can measure is dangerously misleading\nbut we know that's the wrong metric\nexcept an inverse one\nthat's the scary thing: fundraising is not merely a useless metric, but positively misleading\nthe big winners could generate 10,000x returns\nit takes a conscious effort not to do that too\nbut those are the wrong eyes to look through\nwe can afford to take at least 10x as much risk as demo day investors\nand since risk is usually proportionate to reward, if you can afford to take more risk you should\ni don't know what fraction of them currently raise more after demo day\n[5] but the percentage is certainly way over 30%\nand frankly the thought of a 30% success rate at fundraising makes my stomach clench\na demo day where only 30% of the startups were fundable would be a shambles\neveryone would agree that yc had jumped the shark\nwe ourselves would feel that yc had jumped the shark\nand yet we'd all be wrong\nfor better or worse that's never going to be more than a thought experiment\nwe could never stand it\ni can make up all sorts of plausible justifications\nit might dilute the value of the alumni network\ni'm not a very good speaker\ni say \"um\" a lot\nsometimes i have to pause when i lose my train of thought\ni wish i were a better speaker\nbut i don't wish i were a better speaker like i wish i were a better writer\nhaving good ideas is most of writing well\ni first noticed this at a conference several years ago\nthere was another speaker who was much better than me\nhe had all of us roaring with laughter\ni seemed awkward and halting by comparison\nafterward i put my talk online like i usually do\nboy was he good\nso i decided i'd pay close attention to what he said, to learn how he did it\nafter about ten sentences i found myself thinking \"i don't want to be a good speaker\nfor example, when i give a talk i usually write it out beforehand\nbut here again there's a tradeoff between smoothness and ideas\nall the time you spend practicing a talk, you could instead spend making it better\nbut i always end up spending most of the time rewriting it instead\nevery talk i give ends up being given from a manuscript full of things crossed out and rewritten\ndepending on your audience, there are even worse tradeoffs than these\nthat's true in writing too of course, but the descent is steeper with talks\nany given person is dumber as a member of an audience than as a reader\nevery audience is an incipient mob, and a good speaker uses that\nso are talks useless? they're certainly inferior to the written word as a source of ideas\nbut that's not all talks are good for\nwhen i go to a talk, it's usually because i'm interested in the speaker\ntalks are also good at motivating me to do things\nit's probably no coincidence that so many famous speakers are described as motivational speakers\nthat may be what public speaking is really for\nit's probably what it was originally for\nthe emotional reactions you can elicit with a talk can be a powerful force\ni wish i could say that force was more often used for good than ill, but i'm not sure\none of the cases he decided was brought by the owner of a food shop\nthe owner wanted the student to pay for the smells he was enjoying\nthe student was stealing his smells\nit sounds ridiculous to us to treat smells as property\nbut i can imagine scenarios in which one could charge for smells\nimagine we were living on a moon base where we had to buy air by the liter\ni could imagine air suppliers adding scents at an extra charge\nthe reason it seems ridiculous to us to treat smells as property is that it wouldn't work to\nit would work on a moon base, though\nwhat counts as property depends on what works to treat as property\nand that not only can change, but has changed\nbut hunter gatherers didn't treat land, for example, as property in the way we do\n[2] but we are in the midst of such a change now\nbut with the arrival of networks, it's as if we've moved to a planet with a breathable atmosphere\ndata moves like smells now\nbut building new things takes too long\npeople should be able to charge for content when it works to charge for content\nbut by \"works\" i mean something more subtle than \"when they can get away with it\n\" i mean when people can charge for content without warping society in order to do it\nthe crazy legal measures that the labels and studios have been taking have a lot of that flavor\nnewspapers and magazines are just as screwed, but they are at least declining gracefully\nthe riaa and mpaa would make us breathe through tubes if they could\nultimately it comes down to common sense\nthis is where it's helpful to have working democracies and multiple sovereign countries\nprivate property is an extremely useful ideaarguably one of our greatest inventions\nso far, each new definition of it has brought us increasing material wealth\n[4] it seems reasonable to suppose the newest one will too\nin this essay i'm going to demonstrate this phenomenon by describing some\nany one of them could make you a billionaire\ndon't worry, it's not a sign of weakness\narguably it's a sign of sanity\nthe biggest startup ideas are terrifying\nand not just because they'd be a lot of work\nshe says to him:\nhere's the thing: if you ever got me, you wouldn't have a clue what to do with me\nthat's what these ideas say to us\nthis phenomenon is one of the most important things you can understand about startups\n[1] you'd expect big startup ideas to be attractive, but actually they tend to repel you\nand that has a bunch of consequences\neven the most ambitious people are probably best off approaching them obliquely\na new search engine\nthe best ideas are just on the right side of impossible\ni don't know if this one is possible, but there are signs it might be\nthat was not a natural move for microsoft\nthey did it because they were afraid of google, and google was in the search business\nmicrosoft : google :: google : facebook\ngoogle used to give me a page of the right answers, fast, with no clutter\nand the pages don't have the clean, sparse feel they used to\ngoogle search results used to look like the output of a unix utility\nnow if i accidentally put the cursor in the wrong place, anything might happen\nthe way to win here is to build the search engine all the hackers use\nand for the first time in over a decade the idea of switching seems thinkable to me\nfeel free to make it excessively hackerish\nmake it really good for code search, for example\nreplace email\nemail was not designed to be used the way we use it now\nemail is not a messaging protocol\nit's a todo list\nor rather, my inbox is a todo list, and email is the way things get onto it\nbut it is a disastrously bad todo list\nas a todo list protocol, the new protocol should give more power to the recipient than email does\ni want there to be more restrictions on what someone can put on my todo list\n) when does it have to be done?\nthis is one of those ideas that's like an irresistible force meeting an immovable object\non one hand, entrenched protocols are impossible to replace\nand if email is going to get replaced eventually, why not now?\nthey're all at the mercy of email too\nwhatever you build, make it fast\ngmail has become painfully slow\ngmail is slow because google can't afford to spend a lot on it\nbut people will pay for this\ni'd have no problem paying $50 a month\nat least $1000 a month\nreplace universities\npeople are all over this idea lately, and i think they're onto something\none could do a lot better for a lot less money\ni don't think universities will disappear\nthey won't be replaced wholesale\nthey'll just lose the de facto monopoly on certain types of learning that they once had\ny combinator itself is arguably one of them\nif learning breaks up into many little pieces, credentialling may separate from it\nuniversities seem the place to start\ninternet drama\nhollywood has been slow to embrace the internet\na lot of the reason is the horribleness of cable clients, also known as tvs\nour family didn't wait for apple tv\nwe hated our last tv so much that a few months ago we replaced it with an imac bolted to the wall\nmore can be stolen by things that are a little more closely related, like games\nthere are two ways delivery and payment could play out\nif that's the way things play out, there will also be a need for such infrastructure companies\nthe next steve jobs\nhis answer was simply \"no\n\" i already feared that would be the answer\ni asked more to see how he'd qualify it\nbut he didn't qualify it at all\nno, there will be no more great new stuff beyond whatever's currently in the pipeline\nso if apple's not going to make the next ipad, who is? none of the existing players\nso the company that creates the next wave of hardware is probably going to have to be a startup\ni realize it sounds preposterously ambitious for a startup to try to become as big as apple\nbut no more ambitious than it was for apple to become as big as apple, and they did it\nsteve jobs has shown us what's possible\nnow steve is gone there's a vacuum we can all feel\nif a new company led boldly into the future of hardware, users would follow\nthe ceo of that company, the \"next steve jobs,\" might not measure up to steve jobs\nbut he wouldn't have to\nhe'd just have to do a better job than samsung and hp and nokia, and that seems pretty doable\nbring back moore's law\nthe last 10 years have reminded us what moore's law actually says\nactually what it says is that circuit densities will double every 18 months\nit used to seem pedantic to point that out\nnot any more\nintel can no longer give us faster cpus, just more of them\nthis moore's law is not as good as the old one\nthere are several ways to approach this problem\nand if it's not impossible but simply very hard, it might be worth trying to write it\nthe expected value would be high even if the chance of succeeding was low\nthe reason the expected value is so high is web services\nand that would in turn mean that you got practically all the users\nthey'd take most of intel's business\nthen the programmer still does much of the work of optimization\nthese people might be your employees, or you might create a marketplace for optimization\ni realize how crazy all this sounds\nin fact, what i like about this idea is all the different ways in which it's wrong\ntrying to write the sufficiently smart compiler is by definition a mistake\nnow that's what i call a startup idea\nongoing diagnosis\nfor example, in 2004 bill clinton found he was feeling short of breath\nit seems reasonable to assume bill clinton has the best medical care available\nditto for cancer\ncancer will show up on some sort of radar screen immediately\n(of course, what shows up on the radar screen may be different from what we think of now as cancer\nfor example, a friend of mine once had her brain scanned as part of a study\nshe was horrified when the doctors running the study discovered what appeared to be a large tumor\nafter further testing, it turned out to be a harmless cyst\nbut it cost her a few days of terror\nbut i think that's just an artifact of current limitations\nthere is room for a lot of startups here\nlet me conclude with some tactical advice\ndon't say, for example, that you're going to replace email\nif you do that you raise too many expectations\njust say you're building todo-list software\nthat sounds harmless\npeople can notice you've replaced email when it's a fait accompli\nempirically, the way to do really big things seems to be to start with deceptively small things\nempirically, it's not just for other people that you need to start small\nyou need to for your own sake\nneither bill gates nor mark zuckerberg knew at first how big their companies were going to get\nall they knew was that they were onto something\nyou'll be better off if you operate like columbus and just head in a general westerly direction\nstart with something you know works, and when you expand, expand westward\nit felt as if there was some kind of wall between us\ni could never quite tell if they understood what i was saying\nyou won't have to babysit the round to make sure it happens\nwas there some kind of inverse relation between resourcefulness and being hard to talk to?\nyou don't have to explain in detail; they'll chase down all the implications\nthat's the connection\nit's conversational resourcefulness\nthey traversed idea space as gingerly as a very old person traverses the physical world\nthe unsuccessful founders weren't stupid\nthey just weren't eager to\nso being hard to talk to was not what was killing the unsuccessful startups\nit was a sign of an underlying lack of resourcefulness\nthat's what was killing them\nbut the most immediate evidence i had that something was amiss was that i couldn't talk to them\nthere are great startup ideas lying around unexploited right under our noses\none reason we don't see them is a phenomenon i call schlep blindness\nschlep was originally a yiddish word but has passed into general use in the us\nit means a tedious, unpleasant task\nno one likes schleps, but hackers especially dislike them\nmaybe that's possible, but i haven't seen it\none of the many things we do at y combinator is teach hackers about the inevitability of schleps\nno, you can't start a startup by just writing code\ni remember going through this realization myself\na company is defined by the schleps it will undertake\nand schleps should be dealt with the same way you'd deal with a cold swimming pool: just jump in\nthe most dangerous thing about our dislike of schleps is that much of it is unconscious\nyour unconscious won't even let you see ideas that involve painful schleps\nthat's schlep blindness\nthe phenomenon isn't limited to startups\ntheir unconscious mind decides for them, shrinking from the work involved\nthe most striking example i know of schlep blindness is stripe, or rather stripe's idea\nthousands of people must have known about this problem\nyou'd have to make deals with banks\nplus there are probably all sorts of regulations to comply with\nit's a lot more intimidating to start a startup like this than a recipe site\nthat scariness makes ambitious ideas doubly valuable\n(this is also true of starting a startup generally\nmaybe that's one reason the most successful startups of all so often have young founders\nin practice the founders grow with the problems\nbut no one seems able to foresee that, not even older, more experienced founders\nthey don't know how much they can grow, but they also don't know how much they'll need to\nolder founders only make the first mistake\nignorance can't solve everything though\nsome ideas so obviously entail alarming schleps that anyone can see them\nhow do you see ideas like that? the trick i recommend is to take yourself out of the picture\nsomehow it's as if most places were sprayed with startupicide\ni wondered about this for years\na couple weeks ago i finally figured it out\ni was framing the question wrong\nthe problem is not that most towns kill startups\nit's that death is the default for startups, and most towns don't save them\nstartups in other places are just doing what startups naturally do: fail\nthe real question is, what's saving startups in places like silicon valley? [2]\nenvironment\nand what drives them both is the number of startup people around you\nit's quite a leap to start a startup\nit's an unusual thing to do\nbut in silicon valley it seems normal\nin most places, if you start a startup, people treat you as if you're unemployed\nhaving people around you care about what you're doing is an extraordinarily powerful force\neven the most willful people are susceptible to it\nhe responded so eagerly that for about half a second i found myself considering doing it\nin most other cities, the prospect of starting a startup just doesn't seem real\nin the valley it's not only real but fashionable\nthat no doubt causes a lot of people to start startups who shouldn't\nbut i think that's ok\nthe second component of the antidote is chance meetings with people who can help you\nthe reason startups are more likely to make it here is that great things happen to them too\nin the valley, lightning has a sign bit\nand moreover has advanced views, for 2004, on founders retaining control of their companies\nyou can't say precisely what the miracle will be, or even for sure that one will happen\ni bet this is true even for startups we fund\nchance meetings play a role like the role relaxation plays in having ideas\nthe critical thing in both cases is that they drift just the right amount\nthe meeting between larry page and sergey brin was a good example\nfor larry page the most important component of the antidote was sergey brin, and vice versa\nthe antidote is people\ni'm not sure why this is so\na large part of yc's function is to accelerate that process\nto make a startup hub, you need a lot of people interested in startups\nthere are three reasons\nthe first, obviously, is that if you don't have enough density, the chance meetings don't happen\nsean parker was exactly what facebook needed in 2004\nthis is one of the reasons we fund such a large number of companies, incidentally\nin most places the atmosphere pulls you back toward the mean\ni flew into the bay area a few days ago\ni notice this every time i fly over the valley: somehow you can sense something is going on\nobviously you can sense prosperity in how well kept a place looks\nbut there are different kinds of prosperity\nsilicon valley doesn't look like boston, or new york, or la, or dc");

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recurrent__ = __webpack_require__("./recurrent/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recurrent_vis__ = __webpack_require__("./recurrent/vis.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_input_sentences__ = __webpack_require__("./config/input-sentences.js");
var _jsxFileName = '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var ppl_list = [];
var tick_iter = 0;

// model parameters
var generator = 'lstm'; // can be 'rnn' or 'lstm'
var hidden_sizes = [20, 20]; // list of sizes of hidden layers
var letter_size = 5; // size of letter embeddings

// optimization
var regc = 0.000001; // L2 regularization strength
var learning_rate = 0.01; // learning rate
var clipval = 5.0; // clip gradients at this value
// prediction params
var sample_softmax_temperature = 1.0; // how peaky model predictions should be
var max_chars_gen = 100; // max length of generated sentences

// various global var inits
var epoch_size = -1;
var input_size = -1;
var output_size = -1;
var letterToIndex = {};
var indexToLetter = {};
var vocab = [];
var data_sents = [];
var solver = new __WEBPACK_IMPORTED_MODULE_2__recurrent__["a" /* default */].Solver(); // should be class because it needs memory for step caches
var pplGraph = new __WEBPACK_IMPORTED_MODULE_3__recurrent_vis__["a" /* default */]();

var lh = void 0,
    logprobs = void 0,
    probs = void 0;

var model = {};

var initVocab = function initVocab(sents, count_threshold) {
  // go over all characters and keep track of all unique ones seen
  var charCounts = Array.from(sents.join('')).reduce(function (counts, char) {
    counts[char] = counts[char] ? counts[char] + 1 : counts[char] = 1;
    return counts;
  }, {});

  // NOTE: start at nextIndex at 1 because we will have START and END tokens!
  // that is, START token will be index 0 in model letter vectors
  // and END token will be index 0 in the next character softmax

  var _Object$entries$reduc = Object.entries(charCounts).reduce(function (result, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        char = _ref2[0],
        count = _ref2[1];

    if (count >= count_threshold) {
      result.vocab.push(char);
      result.letterToIndex[char] = result.nextIndex;
      result.indexToLetter[result.nextIndex] = char;
      result.nextIndex += 1;
    }
    return result;
  }, {
    letterToIndex: {},
    indexToLetter: {},
    vocab: [],
    nextIndex: 1
  }),
      l = _Object$entries$reduc.letterToIndex,
      i = _Object$entries$reduc.indexToLetter,
      v = _Object$entries$reduc.vocab;

  letterToIndex = l;
  indexToLetter = i;
  vocab = v;

  // globals written: indexToLetter, letterToIndex, vocab (list), and:
  input_size = vocab.length + 1;
  output_size = vocab.length + 1;
  epoch_size = sents.length;
  // TODO: Show this in the UI
  // $('#prepro_status').text(
  // 'found ' + vocab.length + ' distinct characters: ' + vocab.join(''),
  // )
};

var initModel = function initModel() {
  // letter embedding vectors
  var model = {};
  model['Wil'] = new __WEBPACK_IMPORTED_MODULE_2__recurrent__["a" /* default */].RandMat(input_size, letter_size, 0, 0.08);

  if (generator === 'rnn') {
    var rnn = __WEBPACK_IMPORTED_MODULE_2__recurrent__["a" /* default */].initRNN(letter_size, hidden_sizes, output_size);
    model = _extends({}, model, rnn);
  } else {
    var lstm = __WEBPACK_IMPORTED_MODULE_2__recurrent__["a" /* default */].initLSTM(letter_size, hidden_sizes, output_size);
    model = _extends({}, model, lstm);
  }

  return model;
};

function reinit() {
  // note: reinit writes global vars by running
  // eval on a textarea
  // TODO: Allow user to set hyperparams in a safer way, via inputs

  solver = new __WEBPACK_IMPORTED_MODULE_2__recurrent__["a" /* default */].Solver(); // GLOBAL
  pplGraph = new __WEBPACK_IMPORTED_MODULE_3__recurrent_vis__["a" /* default */](); // GLOBAL

  ppl_list = []; // GLOBAL
  tick_iter = 0; // GLOBAL

  data_sents = __WEBPACK_IMPORTED_MODULE_4__config_input_sentences__["a" /* default */].split('\n').map(function (str) {
    return str.trim();
  });
  initVocab(data_sents, 1); // takes count threshold for characters
  model = initModel(); // pass in some of the stuff that will be returned from initVocab
}

var forwardIndex = function forwardIndex(G, model, ix, prev) {
  var x = G.rowPluck(model['Wil'], ix);
  // forward prop the sequence learner
  return generator === 'rnn' ? __WEBPACK_IMPORTED_MODULE_2__recurrent__["a" /* default */].forwardRNN(G, model, hidden_sizes, x, prev) : __WEBPACK_IMPORTED_MODULE_2__recurrent__["a" /* default */].forwardLSTM(G, model, hidden_sizes, x, prev);
};

var predictSentence = function predictSentence(model, samplei, temperature) {
  if (typeof samplei === 'undefined') {
    samplei = false;
  }
  if (typeof temperature === 'undefined') {
    temperature = 1.0;
  }

  var G = new __WEBPACK_IMPORTED_MODULE_2__recurrent__["a" /* default */].Graph(false);
  var s = '';
  var prev = {};
  while (true) {
    // RNN tick
    var ix = s.length === 0 ? 0 : letterToIndex[s[s.length - 1]];
    lh = forwardIndex(G, model, ix, prev);
    prev = lh;

    // sample predicted letter
    logprobs = lh.o;
    if (temperature !== 1.0 && samplei) {
      // scale log probabilities by temperature and renormalize
      // if temperature is high, logprobs will go towards zero
      // and the softmax outputs will be more diffuse. if temperature is
      // very low, the softmax outputs will be more peaky
      for (var q = 0, nq = logprobs.w.length; q < nq; q++) {
        logprobs.w[q] /= temperature;
      }
    }

    probs = __WEBPACK_IMPORTED_MODULE_2__recurrent__["a" /* default */].softmax(logprobs);
    if (samplei) {
      var ix = __WEBPACK_IMPORTED_MODULE_2__recurrent__["a" /* default */].samplei(probs.w);
    } else {
      var ix = __WEBPACK_IMPORTED_MODULE_2__recurrent__["a" /* default */].maxi(probs.w);
    }

    if (ix === 0) break; // END token predicted, break out
    if (s.length > max_chars_gen) {
      break;
    } // something is wrong

    var letter = indexToLetter[ix];
    s += letter;
  }
  return s;
};

var costfun = function costfun(model, sent) {
  // takes a model and a sentence and
  // calculates the loss. Also returns the Graph
  // object which can be used to do backprop
  var n = sent.length;
  var G = new __WEBPACK_IMPORTED_MODULE_2__recurrent__["a" /* default */].Graph();
  var log2ppl = 0.0;
  var cost = 0.0;
  var prev = {};
  for (var i = -1; i < n; i++) {
    // start and end tokens are zeros
    var ix_source = i === -1 ? 0 : letterToIndex[sent[i]]; // first step: start with START token
    var ix_target = i === n - 1 ? 0 : letterToIndex[sent[i + 1]]; // last step: end with END token

    lh = forwardIndex(G, model, ix_source, prev);
    prev = lh;

    // set gradients into logprobabilities
    logprobs = lh.o; // interpret output as logprobs
    probs = __WEBPACK_IMPORTED_MODULE_2__recurrent__["a" /* default */].softmax(logprobs); // compute the softmax probabilities

    log2ppl += -Math.log2(probs.w[ix_target]); // accumulate base 2 log prob and do smoothing
    cost += -Math.log(probs.w[ix_target]);

    // write gradients into log probabilities
    logprobs.dw = probs.w;
    logprobs.dw[ix_target] -= 1;
  }
  var ppl = Math.pow(2, log2ppl / (n - 1));
  return { G: G, ppl: ppl, cost: cost };
};

function median(values) {
  values.sort(function (a, b) {
    return a - b;
  }); // OPT: Isn't this the default sort?
  var half = Math.floor(values.length / 2);
  return values.length % 2 ? values[half] : (values[half - 1] + values[half]) / 2.0;
}

function tick() {
  // sample sentence fromd data
  var sentix = __WEBPACK_IMPORTED_MODULE_2__recurrent__["a" /* default */].randi(0, data_sents.length);
  var sent = data_sents[sentix];

  var t0 = new Date().valueOf(); // log start timestamp

  // evaluate cost function on a sentence
  var cost_struct = costfun(model, sent);

  // use built up graph to compute backprop (set .dw fields in mats)
  cost_struct.G.backward();
  // perform param update
  var solver_stats = solver.step(model, learning_rate, regc, clipval);
  //$("#gradclip").text('grad clipped ratio: ' + solver_stats.ratio_clipped)

  var t1 = new Date().valueOf();
  var tick_time = t1 - t0;

  ppl_list.push(cost_struct.ppl); // keep track of perplexity

  // evaluate now and then
  tick_iter += 1;
  if (tick_iter % 50 === 0) {
    // draw samples
    // $('#samples').html('') // TODO: Show samples in the UI...for now just log them out
    for (var q = 0; q < 5; q++) {
      console.log('NN output - sample:', predictSentence(model, true, sample_softmax_temperature));
      // var pred = predictSentence(model, true, sample_softmax_temperature)
      // var pred_div = '<div class="apred">' + pred + '</div>'
      // $('#samples').append(pred_div)
    }
  }

  if (tick_iter % 10 === 0) {
    // draw argmax prediction
    // TODO: Show this in the UI...for now just log it out
    console.log('NN output - argmax prediction:', predictSentence(model, false));
    // $('#argmax').html('')
    // var pred = predictSentence(model, false)
    // var pred_div = '<div class="apred">' + pred + '</div>'
    // $('#argmax').append(pred_div)

    // // keep track of perplexity
    // $('#epoch').text('epoch: ' + (tick_iter / epoch_size).toFixed(2))
    // $('#ppl').text('perplexity: ' + cost_struct.ppl.toFixed(2))
    // $('#ticktime').text(
    //   'forw/bwd time per example: ' + tick_time.toFixed(1) + 'ms',
    // )

    // TODO: Different solution for graph...maybe victory or something...or maybe antd has something
    // if (tick_iter % 100 === 0) {
    // var median_ppl = median(ppl_list)
    // ppl_list = []
    // pplGraph.add(tick_iter, median_ppl)
    // pplGraph.drawSelf(document.getElementById('pplgraph'))
    // }
  }
}

// var iid = null
// $('#learn').click(function() {
//   reinit()
//   if (iid !== null) {
//     clearInterval(iid)
//   }
//   iid = setInterval(tick, 0)

// This was commented out in his code...perhaps an unfinished idea?
//$('#gradcheck').click(gradCheck);

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref3, [this].concat(args))), _this), _this.state = {
      intervalId: null,
      hasRun: false
    }, _this.init = function () {
      reinit();
      var intervalId = setInterval(tick, 0);
      _this.setState({ intervalId: intervalId, hasRun: true });
    }, _this.pause = function () {
      if (!_this.state.hasRun) {
        _this.init();
        return;
      }

      if (_this.state.intervalId) {
        clearInterval(_this.state.intervalId);
        _this.setState({ intervalId: null });
      } else {
        var intervalId = setInterval(tick, 0);
        _this.setState({ intervalId: intervalId });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'main',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 318
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
          { type: 'primary', onClick: this.pause, __source: {
              fileName: _jsxFileName,
              lineNumber: 319
            }
          },
          !this.state.hasRun ? 'Start' : this.state.intervalId ? 'Pause' : 'Resume'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'section',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 324
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 325
              }
            },
            'RNNs'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 326
              }
            },
            'Here is some info about RNNs'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'section',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 328
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 329
              }
            },
            'Experiment'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 330
              }
            },
            'All the controls will go here with brief explanations'
          )
        )
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./recurrent/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// NOTE: In progress...will clean this all up and probably rewrite most of it later
function assert(condition) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Assertion failed';

  if (!condition) {
    throw new Error(message);
  }
}

// Random numbers utils
var return_v = false;
var v_val = 0.0;

var gaussRandom = function gaussRandom() {
  if (return_v) {
    return_v = false;
    return v_val;
  }
  var u = 2 * Math.random() - 1;
  var v = 2 * Math.random() - 1;
  var r = u * u + v * v;
  if (r == 0 || r > 1) return gaussRandom();
  var c = Math.sqrt(-2 * Math.log(r) / r);
  v_val = v * c; // cache this
  return_v = true;
  return u * c;
};
var randf = function randf(a, b) {
  return Math.random() * (b - a) + a;
};
var randi = function randi(a, b) {
  return Math.floor(Math.random() * (b - a) + a);
};
var randn = function randn(mu, std) {
  return mu + gaussRandom() * std;
};

// helper function returns array of zeros of length n
// and uses typed arrays if available
var zeros = function zeros(n) {
  if (typeof n === 'undefined' || isNaN(n)) {
    return [];
  }
  if (typeof ArrayBuffer === 'undefined') {
    // lacking browser support
    var arr = new Array(n);
    for (var i = 0; i < n; i++) {
      arr[i] = 0;
    }
    return arr;
  } else {
    return new Float64Array(n);
  }
};

// TODO: class
// Mat holds a matrix
var Mat = function Mat(n, d) {
  // n is number of rows d is number of columns
  this.n = n;
  this.d = d;
  this.w = zeros(n * d);
  this.dw = zeros(n * d);
};
Mat.prototype = {
  get: function get(row, col) {
    // slow but careful accessor function
    // we want row-major order
    var ix = this.d * row + col;
    assert(ix >= 0 && ix < this.w.length);
    return this.w[ix];
  },
  set: function set(row, col, v) {
    // slow but careful accessor function
    var ix = this.d * row + col;
    assert(ix >= 0 && ix < this.w.length);
    this.w[ix] = v;
  },
  toJSON: function toJSON() {
    var json = {};
    json['n'] = this.n;
    json['d'] = this.d;
    json['w'] = this.w;
    return json;
  },
  fromJSON: function fromJSON(json) {
    this.n = json.n;
    this.d = json.d;
    this.w = zeros(this.n * this.d);
    this.dw = zeros(this.n * this.d);
    for (var i = 0, n = this.n * this.d; i < n; i++) {
      this.w[i] = json.w[i]; // copy over weights
    }
  }

  // return Mat but filled with random numbers from gaussian
};var RandMat = function RandMat(n, d, mu, std) {
  var m = new Mat(n, d);
  //fillRandn(m,mu,std);
  fillRand(m, -std, std); // kind of :P
  return m;
};

// Mat utils
// fill matrix with random gaussian numbers
var fillRandn = function fillRandn(m, mu, std) {
  for (var i = 0, n = m.w.length; i < n; i++) {
    m.w[i] = randn(mu, std);
  }
};
var fillRand = function fillRand(m, lo, hi) {
  for (var i = 0, n = m.w.length; i < n; i++) {
    m.w[i] = randf(lo, hi);
  }
};

// Transformer definitions
var Graph = function Graph(needs_backprop) {
  if (typeof needs_backprop === 'undefined') {
    needs_backprop = true;
  }
  this.needs_backprop = needs_backprop;

  // this will store a list of functions that perform backprop,
  // in their forward pass order. So in backprop we will go
  // backwards and evoke each one
  this.backprop = [];
};
Graph.prototype = {
  backward: function backward() {
    for (var i = this.backprop.length - 1; i >= 0; i--) {
      this.backprop[i](); // tick!
    }
  },
  rowPluck: function rowPluck(m, ix) {
    // pluck a row of m with index ix and return it as col vector
    assert(ix >= 0 && ix < m.n);
    var d = m.d;
    var out = new Mat(d, 1);
    for (var i = 0, n = d; i < n; i++) {
      out.w[i] = m.w[d * ix + i];
    } // copy over the data

    if (this.needs_backprop) {
      var backward = function backward() {
        for (var i = 0, n = d; i < n; i++) {
          m.dw[d * ix + i] += out.dw[i];
        }
      };
      this.backprop.push(backward);
    }
    return out;
  },
  tanh: function tanh(m) {
    // tanh nonlinearity
    var out = new Mat(m.n, m.d);
    var n = m.w.length;
    for (var i = 0; i < n; i++) {
      out.w[i] = Math.tanh(m.w[i]);
    }

    if (this.needs_backprop) {
      var backward = function backward() {
        for (var i = 0; i < n; i++) {
          // grad for z = tanh(x) is (1 - z^2)
          var mwi = out.w[i];
          m.dw[i] += (1.0 - mwi * mwi) * out.dw[i];
        }
      };
      this.backprop.push(backward);
    }
    return out;
  },
  sigmoid: function sigmoid(m) {
    // sigmoid nonlinearity
    var out = new Mat(m.n, m.d);
    var n = m.w.length;
    for (var i = 0; i < n; i++) {
      out.w[i] = sig(m.w[i]);
    }

    if (this.needs_backprop) {
      var backward = function backward() {
        for (var i = 0; i < n; i++) {
          // grad for z = tanh(x) is (1 - z^2)
          var mwi = out.w[i];
          m.dw[i] += mwi * (1.0 - mwi) * out.dw[i];
        }
      };
      this.backprop.push(backward);
    }
    return out;
  },
  relu: function relu(m) {
    var out = new Mat(m.n, m.d);
    var n = m.w.length;
    for (var i = 0; i < n; i++) {
      out.w[i] = Math.max(0, m.w[i]); // relu
    }
    if (this.needs_backprop) {
      var backward = function backward() {
        for (var i = 0; i < n; i++) {
          m.dw[i] += m.w[i] > 0 ? out.dw[i] : 0.0;
        }
      };
      this.backprop.push(backward);
    }
    return out;
  },
  mul: function mul(m1, m2) {
    // multiply matrices m1 * m2
    assert(m1.d === m2.n, 'matmul dimensions misaligned');

    var n = m1.n;
    var d = m2.d;
    var out = new Mat(n, d);
    for (var i = 0; i < m1.n; i++) {
      // loop over rows of m1
      for (var j = 0; j < m2.d; j++) {
        // loop over cols of m2
        var dot = 0.0;
        for (var k = 0; k < m1.d; k++) {
          // dot product loop
          dot += m1.w[m1.d * i + k] * m2.w[m2.d * k + j];
        }
        out.w[d * i + j] = dot;
      }
    }

    if (this.needs_backprop) {
      var backward = function backward() {
        for (var i = 0; i < m1.n; i++) {
          // loop over rows of m1
          for (var j = 0; j < m2.d; j++) {
            // loop over cols of m2
            for (var k = 0; k < m1.d; k++) {
              // dot product loop
              var b = out.dw[d * i + j];
              m1.dw[m1.d * i + k] += m2.w[m2.d * k + j] * b;
              m2.dw[m2.d * k + j] += m1.w[m1.d * i + k] * b;
            }
          }
        }
      };
      this.backprop.push(backward);
    }
    return out;
  },
  add: function add(m1, m2) {
    assert(m1.w.length === m2.w.length);

    var out = new Mat(m1.n, m1.d);
    for (var i = 0, n = m1.w.length; i < n; i++) {
      out.w[i] = m1.w[i] + m2.w[i];
    }
    if (this.needs_backprop) {
      var backward = function backward() {
        for (var i = 0, n = m1.w.length; i < n; i++) {
          m1.dw[i] += out.dw[i];
          m2.dw[i] += out.dw[i];
        }
      };
      this.backprop.push(backward);
    }
    return out;
  },
  eltmul: function eltmul(m1, m2) {
    assert(m1.w.length === m2.w.length);

    var out = new Mat(m1.n, m1.d);
    for (var i = 0, n = m1.w.length; i < n; i++) {
      out.w[i] = m1.w[i] * m2.w[i];
    }
    if (this.needs_backprop) {
      var backward = function backward() {
        for (var i = 0, n = m1.w.length; i < n; i++) {
          m1.dw[i] += m2.w[i] * out.dw[i];
          m2.dw[i] += m1.w[i] * out.dw[i];
        }
      };
      this.backprop.push(backward);
    }
    return out;
  }
};

var softmax = function softmax(m) {
  var out = new Mat(m.n, m.d); // probability volume
  var maxval = -999999;
  for (var i = 0, n = m.w.length; i < n; i++) {
    if (m.w[i] > maxval) maxval = m.w[i];
  }

  var s = 0.0;
  for (var i = 0, n = m.w.length; i < n; i++) {
    out.w[i] = Math.exp(m.w[i] - maxval);
    s += out.w[i];
  }
  for (var i = 0, n = m.w.length; i < n; i++) {
    out.w[i] /= s;
  }

  // no backward pass here needed
  // since we will use the computed probabilities outside
  // to set gradients directly on m
  return out;
};

// TODO: Convert to class
var Solver = function Solver() {
  this.decay_rate = 0.999;
  this.smooth_eps = 1e-8;
  this.step_cache = {};
};

Solver.prototype = {
  step: function step(model, step_size, regc, clipval) {
    // perform parameter update
    var solver_stats = {};
    var num_clipped = 0;
    var num_tot = 0;
    for (var k in model) {
      if (model.hasOwnProperty(k)) {
        var m = model[k]; // mat ref
        if (!(k in this.step_cache)) {
          this.step_cache[k] = new Mat(m.n, m.d);
        }
        var s = this.step_cache[k];
        for (var i = 0, n = m.w.length; i < n; i++) {
          // rmsprop adaptive learning rate
          var mdwi = m.dw[i];
          s.w[i] = s.w[i] * this.decay_rate + (1.0 - this.decay_rate) * mdwi * mdwi;

          // gradient clip
          if (mdwi > clipval) {
            mdwi = clipval;
            num_clipped++;
          }
          if (mdwi < -clipval) {
            mdwi = -clipval;
            num_clipped++;
          }
          num_tot++;

          // update (and regularize)
          m.w[i] += -step_size * mdwi / Math.sqrt(s.w[i] + this.smooth_eps) - regc * m.w[i];
          m.dw[i] = 0; // reset gradients for next iteration
        }
      }
    }
    solver_stats['ratio_clipped'] = num_clipped * 1.0 / num_tot;
    return solver_stats;
  }
};

var initLSTM = function initLSTM(input_size, hidden_sizes, output_size) {
  // hidden size should be a list

  // TODO: declare model as reduce of hidden_sizes
  var model = {};
  for (var d = 0; d < hidden_sizes.length; d++) {
    // loop over depths
    var prev_size = d === 0 ? input_size : hidden_sizes[d - 1];
    var hidden_size = hidden_sizes[d];

    // gates parameters
    model['Wix' + d] = new RandMat(hidden_size, prev_size, 0, 0.08);
    model['Wih' + d] = new RandMat(hidden_size, hidden_size, 0, 0.08);
    model['bi' + d] = new Mat(hidden_size, 1);
    model['Wfx' + d] = new RandMat(hidden_size, prev_size, 0, 0.08);
    model['Wfh' + d] = new RandMat(hidden_size, hidden_size, 0, 0.08);
    model['bf' + d] = new Mat(hidden_size, 1);
    model['Wox' + d] = new RandMat(hidden_size, prev_size, 0, 0.08);
    model['Woh' + d] = new RandMat(hidden_size, hidden_size, 0, 0.08);
    model['bo' + d] = new Mat(hidden_size, 1);
    // cell write params
    model['Wcx' + d] = new RandMat(hidden_size, prev_size, 0, 0.08);
    model['Wch' + d] = new RandMat(hidden_size, hidden_size, 0, 0.08);
    model['bc' + d] = new Mat(hidden_size, 1);
  }
  // decoder params
  model['Whd'] = new RandMat(output_size, hidden_size, 0, 0.08);
  model['bd'] = new Mat(output_size, 1);
  return model;
};

var forwardLSTM = function forwardLSTM(G, model, hidden_sizes, x, prev) {
  // forward prop for a single tick of LSTM
  // G is graph to append ops to
  // model contains LSTM parameters
  // x is 1D column vector with observation
  // prev is a struct containing hidden and cell
  // from previous iteration

  if (typeof prev.h === 'undefined') {
    // TODO: declare these as map of hidden_sizes
    var hidden_prevs = [];
    var cell_prevs = [];
    for (var d = 0; d < hidden_sizes.length; d++) {
      hidden_prevs.push(new R.Mat(hidden_sizes[d], 1));
      cell_prevs.push(new R.Mat(hidden_sizes[d], 1));
    }
  } else {
    var hidden_prevs = prev.h;
    var cell_prevs = prev.c;
  }

  var hidden = [];
  var cell = [];
  // TODO: declare [hidden, cell] as reduce of hidden_sizes
  for (var d = 0; d < hidden_sizes.length; d++) {
    var input_vector = d === 0 ? x : hidden[d - 1];
    var hidden_prev = hidden_prevs[d];
    var cell_prev = cell_prevs[d];

    // input gate
    var h0 = G.mul(model['Wix' + d], input_vector);
    var h1 = G.mul(model['Wih' + d], hidden_prev);
    var input_gate = G.sigmoid(G.add(G.add(h0, h1), model['bi' + d]));

    // forget gate
    var h2 = G.mul(model['Wfx' + d], input_vector);
    var h3 = G.mul(model['Wfh' + d], hidden_prev);
    var forget_gate = G.sigmoid(G.add(G.add(h2, h3), model['bf' + d]));

    // output gate
    var h4 = G.mul(model['Wox' + d], input_vector);
    var h5 = G.mul(model['Woh' + d], hidden_prev);
    var output_gate = G.sigmoid(G.add(G.add(h4, h5), model['bo' + d]));

    // write operation on cells
    var h6 = G.mul(model['Wcx' + d], input_vector);
    var h7 = G.mul(model['Wch' + d], hidden_prev);
    var cell_write = G.tanh(G.add(G.add(h6, h7), model['bc' + d]));

    // compute new cell activation
    var retain_cell = G.eltmul(forget_gate, cell_prev); // what do we keep from cell
    var write_cell = G.eltmul(input_gate, cell_write); // what do we write to cell
    var cell_d = G.add(retain_cell, write_cell); // new cell contents

    // compute hidden state as gated, saturated cell activations
    var hidden_d = G.eltmul(output_gate, G.tanh(cell_d));

    hidden.push(hidden_d);
    cell.push(cell_d);
    // return [[...hidden, hidden_d], [...cell, cell_d]]
  }

  // one decoder to outputs at end
  var output = G.add(G.mul(model['Whd'], hidden[hidden.length - 1]), model['bd']);

  // return cell memory, hidden representation and output
  return { h: hidden, c: cell, o: output };
};

var initRNN = function initRNN(input_size, hidden_sizes, output_size) {
  // hidden size should be a list

  // TODO: declare model as reduce of hidden_sizes
  var model = {};
  for (var d = 0; d < hidden_sizes.length; d++) {
    // loop over depths
    var prev_size = d === 0 ? input_size : hidden_sizes[d - 1];
    var hidden_size = hidden_sizes[d];
    model['Wxh' + d] = new R.RandMat(hidden_size, prev_size, 0, 0.08);
    model['Whh' + d] = new R.RandMat(hidden_size, hidden_size, 0, 0.08);
    model['bhh' + d] = new R.Mat(hidden_size, 1);
  }
  // decoder params
  model['Whd'] = new RandMat(output_size, hidden_size, 0, 0.08);
  model['bd'] = new Mat(output_size, 1);
  return model;
};

var forwardRNN = function forwardRNN(G, model, hidden_sizes, x, prev) {
  // forward prop for a single tick of RNN
  // G is graph to append ops to
  // model contains RNN parameters
  // x is 1D column vector with observation
  // prev is a struct containing hidden activations from last step

  if (typeof prev.h === 'undefined') {
    // TODO: declare as map of hidden_sizes
    var hidden_prevs = [];
    for (var d = 0; d < hidden_sizes.length; d++) {
      hidden_prevs.push(new R.Mat(hidden_sizes[d], 1));
    }
  } else {
    var hidden_prevs = prev.h;
  }

  // todo: declare hidden as map of hidden_sizes
  var hidden = [];
  for (var d = 0; d < hidden_sizes.length; d++) {
    var input_vector = d === 0 ? x : hidden[d - 1];
    var hidden_prev = hidden_prevs[d];

    var h0 = G.mul(model['Wxh' + d], input_vector);
    var h1 = G.mul(model['Whh' + d], hidden_prev);
    var hidden_d = G.relu(G.add(G.add(h0, h1), model['bhh' + d]));

    hidden.push(hidden_d);
  }

  // one decoder to outputs at end
  var output = G.add(G.mul(model['Whd'], hidden[hidden.length - 1]), model['bd']);

  // return cell memory, hidden representation and output
  return { h: hidden, o: output };
};

var sig = function sig(x) {
  // helper function for computing sigmoid
  return 1.0 / (1 + Math.exp(-x));
};

var maxi = function maxi(w) {
  // argmax of array w
  var maxv = w[0];
  var maxix = 0;
  for (var i = 1, n = w.length; i < n; i++) {
    var v = w[i];
    if (v > maxv) {
      maxix = i;
      maxv = v;
    }
  }
  return maxix;
};

var samplei = function samplei(w) {
  // sample argmax from w, assuming w are
  // probabilities that sum to one
  var r = randf(0, 1);
  var x = 0.0;
  var i = 0;
  while (true) {
    x += w[i];
    if (x > r) {
      return i;
    }
    i++;
  }
  return w.length - 1; // pretty sure we should never get here?
};

var R = {
  // utils
  maxi: maxi,
  samplei: samplei,
  randi: randi,
  softmax: softmax,
  assert: assert,

  // classes
  Mat: Mat,
  RandMat: RandMat,

  // misc?
  forwardLSTM: forwardLSTM,
  initLSTM: initLSTM,
  forwardRNN: forwardRNN,
  initRNN: initRNN,

  // optimization
  Solver: Solver,
  Graph: Graph
};

/* harmony default export */ __webpack_exports__["a"] = (R);

/***/ }),

/***/ "./recurrent/vis.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Graph = function Graph() {
  var _this = this;

  var step_horizon = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;

  _classCallCheck(this, Graph);

  this.add = function (step, y) {
    var time = new Date().getTime(); // in ms
    if (y > _this.maxy * 0.99) _this.maxy = y * 1.05;
    if (y < _this.miny * 1.01) _this.miny = y * 0.95;

    _this.pts.push({ step: step, time: time, y: y });
    if (step > _this.step_horizon) _this.step_horizon *= 2;
  };

  this.drawSelf = function (canv) {
    var pad = 25;
    var H = canv.height;
    var W = canv.width;
    var ctx = canv.getContext('2d');

    ctx.clearRect(0, 0, W, H);
    ctx.font = '10px Georgia';

    var f2t = function f2t(x) {
      var dd = 1.0 * Math.pow(10, 2);
      return '' + Math.floor(x * dd) / dd;
    };

    // draw guidelines and values
    ctx.strokeStyle = '#999';
    ctx.beginPath();
    var ng = 10;
    for (var i = 0; i <= ng; i++) {
      var xpos = i / ng * (W - 2 * pad) + pad;
      ctx.moveTo(xpos, pad);
      ctx.lineTo(xpos, H - pad);
      ctx.fillText(f2t(i / ng * _this.step_horizon / 1000) + 'k', xpos, H - pad + 14);
    }
    for (var i = 0; i <= ng; i++) {
      var ypos = i / ng * (H - 2 * pad) + pad;
      ctx.moveTo(pad, ypos);
      ctx.lineTo(W - pad, ypos);
      ctx.fillText(f2t((ng - i) / ng * (_this.maxy - _this.miny) + _this.miny), 0, ypos);
    }
    ctx.stroke();

    var N = _this.pts.length;
    if (N < 2) return;

    // draw the actual curve
    var t = function t(x, y, s) {
      var tx = x / s.step_horizon * (W - pad * 2) + pad;
      var ty = H - ((y - s.miny) / (s.maxy - s.miny) * (H - pad * 2) + pad);
      return { tx: tx, ty: ty };
    };

    ctx.strokeStyle = 'red';
    ctx.beginPath();
    for (var i = 0; i < N; i++) {
      // draw line from i-1 to i
      var p = _this.pts[i];
      var pt = t(p.step, p.y, _this);
      if (i === 0) ctx.moveTo(pt.tx, pt.ty);else ctx.lineTo(pt.tx, pt.ty);
    }
    ctx.stroke();
  };

  this.step_horizon = step_horizon;
  this.pts = [];
  this.maxy = -9999;
  this.miny = 9999;
}

// canv is the canvas we wish to update with this new datapoint


// elt is a canvas we wish to draw into
;

/* harmony default export */ __webpack_exports__["a"] = (Graph);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "antd":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map