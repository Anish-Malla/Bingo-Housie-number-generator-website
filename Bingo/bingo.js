let fullBoard = false;
let generateNumber = document.querySelector("#generateNumber");
let bingoNumber = document.querySelector("#bingoNumber");
let r = document.querySelector("#resetid");
let num = document.querySelectorAll("td");
let calledNumbers = [];
let lastFiveNumbers = [];
let lastFiveDisplay = document.querySelector("#lastfive");

// getting a random number
function getRandomInt(max, min) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;}


// when the get number button is being pressed

generateNumber.addEventListener("click", function(){
	if (fullBoard === false){
		let flag = false;
		while (flag === false){
			let x = getRandomInt(91,1);
			if (calledNumbers.includes(x) === false){
				calledNumbers.push(x);
				flag = true;
			};
		bingoNumber.textContent = x;
		let y = document.getElementById(x);
		y.classList.add("doneNumber");
		};

		console.log(calledNumbers.length);
		// GETTING LAST 5 NUMS
		if (lastFiveNumbers.length === 5){
			lastFiveNumbers.shift();
		};
		let z = calledNumbers.slice(-1);
		lastFiveNumbers.push(z);
		lastFiveDisplay.textContent = lastFiveNumbers;
		
		// FULL BOARD
		if (calledNumbers.length === 90){
		let fullBoard = true;
		generateNumber.classList.remove("btn-primary");
		generateNumber.classList.add("disabled");
		generateNumber.disabled = true;
		alert("Board is full. Click reset to start again.");
	};
	}
	else{
	alert("Board is full. Click reset to start again.");
	}
})

// RESET BUTTON
r.addEventListener("click", function(){
	if (confirm("The board is going to reset. (cancel to continue playing)")){
		for (let i=0; i < num.length; i++){
			num[i].classList.remove("doneNumber");
		};
		let x = calledNumbers.length;
		for (let i=0; i < x; i++){
			calledNumbers.pop();
		};
		let y = lastFiveNumbers.length;
		for (let i=0; i < y; i++){
			lastFiveNumbers.pop();
		};
		lastFiveDisplay.textContent = "";
		bingoNumber.textContent = "";
		generateNumber.classList.add("btn-primary");
		generateNumber.classList.remove("disabled");
		generateNumber.disabled = false;
	};
});