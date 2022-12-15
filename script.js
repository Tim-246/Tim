'use strict'

function calculateIncentives(tier, classes) {

	let incentives = 0;
	let pastClasses = 0;
	tier = tier * 1;

	switch (tier) {
		//Case 1
		case 1: 
		//Bracket 1
		if(classes > 0) {
			if(classes <= 20) {
			incentives += 0.8 * classes;
			} else {
				incentives = 0.8 * 20;
				pastClasses = 20;
			}
		}
	
		//Bracket 2
		if(classes >= 21) {
			if(classes <= 40) {
				incentives += 1.2 * (classes - pastClasses); 
			} else { 
				incentives += 1.2 * 20;
				pastClasses += 20;
			}
		}
		//Bracket 3
		if(classes >= 41) {
			if(classes <= 60) {
				incentives += 1.6 * (classes - pastClasses);
			} else { 
				incentives += 1.6 * 20;
				pastClasses += 20;
			}
		}
		//Bracket 4
		if(classes >= 61) {
			if(classes <= 90) {
				incentives += 1.7 * (classes - pastClasses);
		} else { 
			incentives += 1.7 * 30;
			pastClasses += 30;
		}
		}
		//Bracket 5
		if(classes >= 91) {
			if(classes <= 130) {
				incentives += 1.9 * (classes - pastClasses);
			} else { 
				incentives += 1.9 * 40;
				pastClasses += 40;
			}
		}
		//Bracket 6
		if(classes >= 131) {
			if(classes <= 180) {
				incentives += 2.0 * (classes - pastClasses);
			} else { 
				incentives += 2.0 * 50;
				pastClasses += 50;
			}
		}
		//Bracket 7
		if(classes >= 181) {
			incentives += 2.1 * (classes - pastClasses);
		}
		break;

		//Case 2
		case 2:
			//Bracket 1
			if(classes > 0) {
				if(classes <= 20) {
					incentives += 0.8 * classes;
				} else {
					incentives = 0.8 * 20;
					pastClasses = 20;
				}
			}
			//Bracket 2
			if(classes >= 21) {
				if(classes <= 40) {
	incentives += 1.2 * (classes - pastClasses); 
				} else { 
	incentives += 1.2 * 20;
					pastClasses += 20;
				}
			}
			//Bracket 3
			if(classes >= 41) {
				if(classes <= 60) {
					incentives += 1.6 * (classes - pastClasses);
				} else { 
					incentives += 1.6 * 20;
					pastClasses += 20;
				}
			}
			//Bracket 4
			if(classes >= 61) {
				if(classes <= 90) {
					incentives += 1.7 * (classes - pastClasses);
				} else { 
					incentives += 1.7 * 30;
					pastClasses += 30;
				}
			}
			//Bracket 5
			if(classes >= 91) {
				if(classes <= 130) {
					incentives += 1.9 * (classes - pastClasses);
				} else { 
					incentives += 1.9 * 40;
					pastClasses += 40;
				}
			}
			//Bracket 6
			if(classes >= 131) {
				if(classes <= 180) {
					incentives += 2.1 * (classes - pastClasses);
				} else { 
					incentives += 2.1 * 50;
					pastClasses += 50;
				}
			}
			//Bracket 7
			if(classes >= 181) {
				incentives += 2.3 * (classes - pastClasses);
			}
			
			break;

		//Case 3
		case 3:
			//Bracket 1
			if(classes > 0) {
				if(classes <= 20) {
					incentives += 0.8 * classes;
				} else {
					incentives = 0.8 * 20;
					pastClasses = 20;
				}
			}
			//Bracket 2
			if(classes >= 21) {
				if(classes <= 40) {
					incentives += 1.2 * (classes - pastClasses); 
				} else { 
					incentives += 1.2 * 20;
					pastClasses += 20;
				}
			}
			//Bracket 3
			if(classes >= 41) {
				if(classes <= 60) {
					incentives += 1.6 * (classes - pastClasses);
				} else { 
					incentives += 1.6 * 20;
					pastClasses += 20;
				}
			}
			//Bracket 4
			if(classes >= 61) {
				if(classes <= 90) {
					incentives += 1.7 * (classes - pastClasses);
				} else { 
					incentives += 1.7 * 30;
					pastClasses += 30;
				}
			}
			//Bracket 5
			if(classes >= 91) {
				if(classes <= 130) {
					incentives += 2.0 * (classes - pastClasses);
				} else { 
					incentives += 2.0 * 40;
					pastClasses += 40;
				}
			}
			//Bracket 6
			if(classes >= 131) {
				if(classes <= 180) {
					incentives += 2.2 * (classes - pastClasses);
				} else { 
					incentives += 2.2 * 50;
					pastClasses += 50;
				}
			}
			//Bracket 7
			if(classes >= 181) {
				incentives += 2.5 * (classes - pastClasses);
			}
			
			break;
			
		//Case 4
		case 4:
			//Bracket 1
			if(classes > 0) {
				if(classes <= 20) {
					incentives += 0.8 * classes;
				} else {
					incentives = 0.8 * 20;
					pastClasses = 20;
				}
			}
			//Bracket 2
			if(classes >= 21) {
				if(classes <= 40) {
					incentives += 1.2 * (classes - pastClasses); 
				} else { 
					incentives += 1.2 * 20;
					pastClasses += 20;
				}
			}
			//Bracket 3
			if(classes >= 41) {
				if(classes <= 60) {
					incentives += 1.6 * (classes - pastClasses);
				} else { 
					incentives += 1.6 * 20;
					pastClasses += 20;
				}
			}
			//Bracket 4
			if(classes >= 61) {
				if(classes <= 90) {
					incentives += 1.8 * (classes - pastClasses);
				} else { 
					incentives += 1.8 * 30;
					pastClasses += 30;
				}
			}
			//Bracket 5
			if(classes >= 91) {
				if(classes <= 130) {
					incentives += 2.1 * (classes - pastClasses);
				} else { 
					incentives += 2.1 * 40;
					pastClasses += 40;
				}
			}
			//Bracket 6
			if(classes >= 131) {
				if(classes <= 180) {
					incentives += 2.3 * (classes - pastClasses);
				} else { 
					incentives += 2.3 * 50;
					pastClasses += 50;
				}
			}
			//Bracket 7
			if(classes >= 181) {
				incentives += 2.6 * (classes - pastClasses);
			}
			
			break;
			
		//Case 5
		case 5:
			//Bracket 1
			if(classes > 0) {
				if(classes <= 20) {
					incentives += 0.8 * classes;
				} else {
					incentives = 0.8 * 20;
					pastClasses = 20;
				}
			}
			//Bracket 2
			if(classes >= 21) {
				if(classes <= 40) {
					incentives += 1.2 * (classes - pastClasses); 
				} else { 
					incentives += 1.2 * 20;
					pastClasses += 20;
				}
			}
			//Bracket 3
			if(classes >= 41) {
				if(classes <= 60) {
					incentives += 1.6 * (classes - pastClasses);
				} else { 
					incentives += 1.6 * 20;
					pastClasses += 20;
				}
			}
			//Bracket 4
			if(classes >= 61) {
				if(classes <= 90) {
					incentives += 1.8 * (classes - pastClasses);
				} else { 
					incentives += 1.8 * 30;
					pastClasses += 30;
				}
			}
			//Bracket 5
			if(classes >= 91) {
				if(classes <= 130) {
					incentives += 2.2 * (classes - pastClasses);
				} else { 
					incentives += 2.2 * 40;
					pastClasses += 40;
				}
			}
			//Bracket 6
			if(classes >= 131) {
				if(classes <= 180) {
					incentives += 2.4 * (classes - pastClasses);
				} else { 
					incentives += 2.4 * 50;
					pastClasses += 50;
				}
			}
			//Bracket 7
			if(classes >= 181) {
				incentives += 2.7 * (classes - pastClasses);
			}
			
			break;
			
		//Case 6
		case 6:
			//Bracket 1
			if(classes > 0) {
				if(classes <= 20) {
					incentives += 0.8 * classes;
				} else {
					incentives = 0.8 * 20;
					pastClasses = 20;
				}
			}
			//Bracket 2
			if(classes >= 21) {
				if(classes <= 40) {
					incentives += 1.2 * (classes - pastClasses); 
				} else { 
					incentives += 1.2 * 20;
					pastClasses += 20;
				}
			}
			//Bracket 3
			if(classes >= 41) {
				if(classes <= 60) {
					incentives += 1.7 * (classes - pastClasses);
				} else { 
					incentives += 1.7 * 20;
					pastClasses += 20;
				}
			}
			//Bracket 4
			if(classes >= 61) {
				if(classes <= 90) {
					incentives += 1.8 * (classes - pastClasses);
				} else { 
					incentives += 1.8 * 30;
					pastClasses += 30;
				}
			}
			//Bracket 5
			if(classes >= 91) {
				if(classes <= 130) {
					incentives += 2.3 * (classes - pastClasses);
				} else { 
					incentives += 2.3 * 40;
					pastClasses += 40;
				}
			}
			//Bracket 6
			if(classes >= 131) {
				if(classes <= 180) {
					incentives += 2.5 * (classes - pastClasses);
				} else { 
					incentives += 2.5 * 50;
					pastClasses += 50;
				}
			}
			//Bracket 7
			if(classes >= 181) {
				incentives += 2.8 * (classes - pastClasses);
			}
			
			break;
			
		//Case 7
		case 7:
			//Bracket 1
			if(classes > 0) {
				if(classes <= 20) {
					incentives += 0.8 * classes;
				} else {
					incentives = 0.8 * 20;
					pastClasses = 20;
				}
			}
			//Bracket 2
			if(classes >= 21) {
				if(classes <= 40) {
					incentives += 1.2 * (classes - pastClasses); 
				} else { 
					incentives += 1.2 * 20;
					pastClasses += 20;
				}
			}
			//Bracket 3
			if(classes >= 41) {
				if(classes <= 60) {
					incentives += 1.7 * (classes - pastClasses);
				} else { 
					incentives += 1.7 * 20;
					pastClasses += 20;
				}
			}
			//Bracket 4
			if(classes >= 61) {
				if(classes <= 90) {
					incentives += 1.9 * (classes - pastClasses);
				} else { 
					incentives += 1.9 * 30;
					pastClasses += 30;
				}
			}
			//Bracket 5
			if(classes >= 91) {
				if(classes <= 130) {
					incentives += 2.4 * (classes - pastClasses);
				} else { 
					incentives += 2.4 * 40;
					pastClasses += 40;
				}
			}
			//Bracket 6
			if(classes >= 131) {
				if(classes <= 180) {
					incentives += 2.6 * (classes - pastClasses);
				} else { 
					incentives += 2.6 * 50;
					pastClasses += 50;
				}
			}
			//Bracket 7
			if(classes >= 181) {
				incentives += 2.9 * (classes - pastClasses);
			}
			
			break;
			
		//Case 8
		case 8:
			//Bracket 1
			if(classes > 0) {
				if(classes <= 20) {
					incentives += 0.8 * classes;
				} else {
					incentives = 0.8 * 20;
					pastClasses = 20;
				}
			}
			//Bracket 2
			if(classes >= 21) {
				if(classes <= 40) {
					incentives += 1.2 * (classes - pastClasses); 
				} else { 
					incentives += 1.2 * 20;
					pastClasses += 20;
				}
			}
			//Bracket 3
			if(classes >= 41) {
				if(classes <= 60) {
					incentives += 1.7 * (classes - pastClasses);
				} else { 
					incentives += 1.7 * 20;
					pastClasses += 20;
				}
			}
			//Bracket 4
			if(classes >= 61) {
				if(classes <= 90) {
					incentives += 1.9 * (classes - pastClasses);
				} else { 
					incentives += 1.9 * 30;
					pastClasses += 30;
				}
			}
			//Bracket 5
			if(classes >= 91) {
				if(classes <= 130) {
					incentives += 2.4 * (classes - pastClasses);
				} else { 
					incentives += 2.4 * 40;
					pastClasses += 40;
				}
			}
			//Bracket 6
			if(classes >= 131) {
				if(classes <= 180) {
					incentives += 2.7 * (classes - pastClasses);
				} else { 
					incentives += 2.7 * 50;
					pastClasses += 50;
				}
			}
			//Bracket 7
			if(classes >= 181) {
				incentives += 3.0 * (classes - pastClasses);
			}
			
			break;
			
		//Case 9
		case 9:
				//Bracket 1
				if(classes > 0) {
					if(classes <= 20) {
						incentives += 0.8 * classes;
					} else {
						incentives = 0.8 * 20;
						pastClasses = 20;
					}
				}
				//Bracket 2
				if(classes >= 21) {
					if(classes <= 40) {
						incentives += 1.2 * (classes - pastClasses); 
					} else { 
						incentives += 1.2 * 20;
						pastClasses += 20;
					}
				}
				//Bracket 3
				if(classes >= 41) {
					if(classes <= 60) {
						incentives += 1.7 * (classes - pastClasses);
					} else { 
						incentives += 1.7 * 20;
						pastClasses += 20;
					}
				}
				//Bracket 4
				if(classes >= 61) {
					if(classes <= 90) {
						incentives += 1.9 * (classes - pastClasses);
					} else { 
						incentives += 1.9 * 30;
						pastClasses += 30;
					}
				}
				//Bracket 5
				if(classes >= 91) {
					if(classes <= 130) {
						incentives += 2.5 * (classes - pastClasses);
					} else { 
						incentives += 2.5 * 40;
						pastClasses += 40;
					}
				}
				//Bracket 6
				if(classes >= 131) {
					if(classes <= 180) {
						incentives += 2.8 * (classes - pastClasses);
					} else { 
						incentives += 2.8 * 50;
						pastClasses += 50;
					}
				}
				//Bracket 7
				if(classes >= 181) {
					incentives += 3.1 * (classes - pastClasses);
				}
				
				break;
		
		//Case 10
		case 10:
			//Bracket 1
			if(classes > 0) {
				if(classes <= 20) {
					incentives = 0.8 * classes;
				} else {
					incentives = 0.8 * 20;
					pastClasses += 20;
				}
			}
			//Bracket 2
			if(classes >= 21) {
				if(classes <= 40) {
					incentives += 1.2 * (classes - pastClasses); 
				} else { 
					incentives += 1.2 * 20;
					pastClasses += 20;
				}
			}
			//Bracket 3
			if(classes >= 41) {
				if(classes <= 60) {
					incentives += 1.7 * (classes - pastClasses);
				} else { 
					incentives += 1.7 * 20;
					pastClasses += 20;
				}
			}
			//Bracket 4
			if(classes >= 61) {
				if(classes <= 90) {
					incentives += 1.9 * (classes - pastClasses);
				} else { 
					incentives += 1.9 * 30;
					pastClasses += 30;
				}
			}
			//Bracket 5
			if(classes >= 91) {
				if(classes <= 130) {
					incentives += 2.5 * (classes - pastClasses);
				} else { 
					incentives += 2.5 * 40;
					pastClasses += 40;
				}
			}
			//Bracket 6
			if(classes >= 131) {
				if(classes <= 180) {
					incentives += 2.9 * (classes - pastClasses);
				} else { 
					incentives += 2.9 * 50;
					pastClasses += 50;
				}
			}
			//Bracket 7
			if(classes >= 181) {
				incentives += 3.2 * (classes - pastClasses);
			}
			
			break;
		default:
	} 
	incentives = Math.round((incentives + Number.EPSILON) * 100) / 100
	return incentives;
}

function calculateTotalPay(basePay, classes, incentives) {
	const pay = basePay * classes;
	const totalPay = incentives + pay;
	return totalPay;
}

function displayResults() {
	const basePay = document.getElementById("basePayInput").value;
	const tier = document.getElementById("tierInput").value;
	const classes = document.getElementById("classesInput").value;

	if(classes >= 0 && tier >= 1 && tier <=10 && basePay >= 0) {
	const totalIncentives = calculateIncentives(tier, classes);
	const totalPay = calculateTotalPay(basePay, classes, totalIncentives);
	document.getElementById("showTotalBasePay").innerHTML = "$" + basePay * classes;
	document.getElementById("showTotalIncentives").innerHTML = "$" + totalIncentives;
	document.getElementById("showTotalPay").innerHTML = "$" +  totalPay;
	hideErrorLabel();
	showAll();
	} else {
		hideElem();
		showErrorLabel();
	}
}

function clearAll() {
	document.getElementById("basePayInput").value = "";
	document.getElementById("tierInput").value = "";
	document.getElementById("classesInput").value = "";
	hideElem();
}

function hideElem() {
	document.getElementById("results").style.visibility = "hidden";
	document.getElementById("errorLabel").style.visibility = "hidden";
  }

function showAll() {
	document.getElementById("results").style.visibility = "visible";
}

function showErrorLabel(){
	document.getElementById("errorLabel").style.visibility = "visible";
}

function hideErrorLabel() {
	document.getElementById("errorLabel").style.visibility = "hidden";
}




