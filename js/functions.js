console.log("Functions.js loaded");

function reverse_radical(num) {
  if(num == "" || typeof num === NaN || !Number.isInteger(num)){
    return 0;
  } else {
    var numbers = [];
    let i = 0;
    let base_num = 0;
    while(i <= 999) {
      numbers.push({});
      numbers[i].base = base_num;
      numbers[i].squared = Math.pow(base_num, 2);
      base_num++;
      i++;
    }
    var valid_nums = numbers.filter(number_f => (number_f.squared < num && Number.isInteger(num/number_f.squared)));
    //console.log(valid_nums);
    const max_num = valid_nums[valid_nums.length -1].squared;
    if(Number.isInteger(num / Math.sqrt(num))) {
      return Math.sqrt(num);
    } else if(valid_nums.length > 1){
      return Math.sqrt(max_num) + "⎷" + (num /(max_num));
    } else {
      return `⎷${num}`;
    }
  }
}

function quadform(a, b, c)
{
  var x;
  var y;
  var discriminant = Math.pow(b,2) - 4*a*c;
  //if the result will be imaginary/complex
  if(discriminant < 0)
  {
    console.log("X is imaginary. This will be fixed soon. However, the number under the radical is " + discriminant);
    x = "" + (-b) + "+" + reverse_radical(-discriminant)+" i"+"/"+(2*a);
    y = "" + (-b) + "-" + reverse_radical(-discriminant)+" i"+"/"+(2*a);
    return `X = ${x}, ${y}`;
  } else {
    x = (-b + Math.sqrt(discriminant))/(2*a);
    y = (-b - Math.sqrt(discriminant))/(2*a);
    return "X = "+x.toFixed(3)+", "+y.toFixed(3);
  }
}

function vertex(a, b, c)
{
  var x = -b / (2*a);
  var y = (a * Math.pow(x, 2)) + (b * x) + c;
  return `(${x}, ${y})`;
}