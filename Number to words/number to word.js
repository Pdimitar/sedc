	
		
var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
  'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
var scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion',
  'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion'
];

function toWords(num) {
  var line;

 if (num < 20 || num ===0) {
    line = ones[num];
  } else if (num < 100) {
    line = tens[(num / 10) | 0];
    if (num % 10) {
      line += "-" + ones[num % 10];
    }
  } else {
    line = ones[(num / 100) | 0] + " hundred " + toWords(num % 100);
  }
  
  return line.trim();
}

function pretvori(num) {
  var numbers = [];
  while (num > 0) {
    numbers[numbers.length] = num % 1000;
    num = Math.floor(num / 1000);
  }
  return numbers;
}

function dodajstring(item, index) {
  if (item) {
    return item + " " + scales[index];
  }
  return "";
}

function notEmpty(item) {
  return !!item; 
}


  
  
  function getvalue()
		{
			var num= (document.getElementById("number").value);
      
			document.writeln(pretvori(num).map(toWords).map(dodajstring).filter(notEmpty).reverse().join(", "));
			
		
		}
		
		
	