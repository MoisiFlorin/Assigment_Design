//Sum of two
function sum() {
    var num1 = parseInt(document.getElementById("number1").value);
    var num2 = parseInt(document.getElementById("number2").value);
    var ansSum = document.getElementById("answear_sum");
    ansSum.value = num1 + num2;
}


//Max of Three
function maxOf() {
    var numMax1, numMax2, numMax3;
    numMax1 = Number(document.getElementById("number_max1").value);
    numMax2 = Number(document.getElementById("number_max2").value);
    numMax3 = Number(document.getElementById("number_max3").value);
    var ansMax = document.getElementById("answear_max");

    if (numMax1 > numMax2 && numMax1 > numMax3) {
        ansMax.value = numMax1;
    } else if (numMax2 > numMax1 && numMax2 > numMax3) {
        ansMax.value = numMax2;
    } else if (numMax3 > numMax1 && numMax3 > numMax1) {
        ansMax.value = numMax3;
    }
}


//Prime Number
function primeTest() {
    var number_prime, i, flag = true;
    number_prime = document.getElementById('number_prime').value
    number_prime = parseInt(number_prime)
    for (i = 2; i <= number_prime - 1; i++)
        if (number_prime % i == 0) {
            flag = false;
            break;
        }
    if (flag == true) {
        document.getElementById('answear_prime').innerHTML = number_prime + ' is prime.';
    } else {
        document.getElementById('answear_prime').innerHTML = number_prime + ' is not prime.';
    }
}


//Reverse String
function reverseString() {
    var forward = document.getElementById('reverse_word').value;
    var splitString = forward.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    document.getElementById("answear_reverse").innerHTML = joinArray;
    
}

/*
//Dropdown Menu
function showHide(elem) {
    if (elem.selectedIndex != 0) {
        for (var i = 0; i < divsO.length; i++) {
            divsO[i].style.display = 'none';
        }
        document.getElementById('div' + elem.value).style.display = 'block';
    }
}

window.onload = function () {
    divsO = document.getElementById("frmMyform").getElementsByTagName('div');
}
*/

function openOperation(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("card");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("cardlinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  document.getElementById("defaultOpen").click();