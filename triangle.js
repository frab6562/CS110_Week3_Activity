
/* TODO - Return the triangle calculations by calling your helper functions.
This function will be used in your eventListener
to print out the correct information about the triangle to your index.html page */
function triangleOutput(){
    /* Fetches the values from the form. Notice that they have 
    id=value1, value2 and value3 in the HTML */
    const a = parseFloat(document.getElementById('value1').value);
    const b = parseFloat(document.getElementById('value2').value);
    const c = parseFloat(document.getElementById('value3').value);

      if (checkTriangle(a,b,c) === true ){
        /*TODO */
        var triangleType = getTriangleType(a, b, c);
        var triangleAngles = getTriangleAngles(a, b, c);
        var triangleAngleType = acuteRightObtuse(a, b, c);
        var trianglePerimeter = perimeter(a, b, c);
        var triangleArea = getArea(a, b, c);
        document.getElementById('output').innerHTML = 'The three sides form a triangle' + "<br/>" +
        'The triangle is ' + triangleType + "<br/>" +
        'The triangle angles are ' + triangleAngles[0] + ', ' + triangleAngles[1] + ', ' + triangleAngles[2] + "<br/>" +
        'The triangle is ' + triangleAngleType + "<br/>" +
        'The triangle perimeter is ' + trianglePerimeter + "<br/>" +
        'The triangle area is ' + triangleArea + "<br/>";
      }
      else if (!isNaN(a) || !isNaN(b) || !isNaN(c))
      {
        document.getElementById('output').innerHTML = 'Invalid side input was detected, try again'
      }
      else{
        document.getElementById('output').innerHTML = 'The given sides do not form a triangle'
        //return "The given sides do not form a triangle";
      }
}


/* TODO - Below are suggested functions .
You do not have to use them, but it is recommended */

/*  Check if triangle */
function checkTriangle(side1, side2, side3){
  if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2)
  {
    return true;
  }
  else
  {
    return false;
  }
}

/* Check if Equilateral, Isosceles or Scalene */
function getTriangleType(side1,side2,side3){
  if (side1 == side2 && side2 == side3 && side1 == side3) // equilateral
  {
      return "Equilateral";
  }
  else if (side1 == side2 || side2 == side3 || side1 == side3) // isoceles
  {
      return "Isoceles";
  }
  else if (side1 != side2 && side2 != side3 && side1 != side3) // scalene
  {
      return "Scalene";
  }
}


/* Calculate perimeter */
function perimeter (side1, side2, side3) {
  var perimeter = side1 + side2 + side3;
  perimeter = perimeter.toFixed(1);
  return perimeter;
}
/* Check if acute, right or obtuse */
function acuteRightObtuse (side1, side2, side3) {
  var sideAngleArray = getTriangleAngles(side1, side2, side3);
  var side1Angle = sideAngleArray[0];
  var side2Angle = sideAngleArray[1];
  var side3Angle = sideAngleArray[2];

  if (side1Angle == 90 || side2Angle == 90 || side3Angle == 90)
  {
    return "Right";
  }
  else if (side1Angle == 90 < side2Angle < 90 && side3Angle < 90)
  {
    return "Acute";
  }
  else if (side1Angle > 90 || side2Angle > 90 || side3Angle > 90)
  {
    return "Obtuse";
  }
}

/* Function that gets the triangle angles*/
function getTriangleAngles(side1, side2, side3){
  const angleA1 =  Math.acos(((side2*side2) + (side3*side3) - (side1*side1))/(2*side2*side3));
  const angleB2 =  Math.acos(((side3*side3) + (side1*side1) - (side2*side2))/(2*side3*side1));
  const angleC3 =  Math.acos(((side1*side1) + (side2*side2) - (side3*side3))/(2*side2*side1));

  var angleA = angleA1*(180/Math.PI);
  var angleB = angleB2*(180/Math.PI);
  var angleC = angleC3*(180/Math.PI);

  angleA = angleA.toFixed(1);
  angleB = angleB.toFixed(1);
  angleC = angleC.toFixed(1);

  return [angleA, angleB, angleC];
}

/* Calculate the area */
function getArea(side1, side2, side3){
  var trianglePerimeter = perimeter(side1, side2, side3);
  var s = trianglePerimeter / 2;
  var sa = s - side1;
  var sb = s - side2;
  var sc = s - side3;
  var underRoot = s * sa * sb * sc;
  var area = Math.sqrt(underRoot);
  area = area.toFixed(1);
  return area;
}

/* TODO - Create the Event listener, which calls the result of triangleOutput() */
document.getElementById('button').addEventListener("click", function(event){
  triangleOutput();
  event.preventDefault();
});



