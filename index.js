import "./style.scss";
import * as spanify from "spanify";

// Pollyfills for IE 11 and Edge
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function(callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

// Convert CoreMedia <a /> tags on page to spans
spanify.spanify();

const sparks = document.querySelectorAll(".spark");

// Move class values to innerHTML
sparks.forEach(spark => {
  let finalValue = "{",
    firstValue = "",
    lastValue = "";

  // Get the full class string from the span
  const classString = spark.className;

  // Get value string and convert to Spark text
  if (classString.match(/values\S+/g)) {
    const valueString = classString.match(/values\S+/g)[0];
    const values = valueString.match(/\d+/g);

    // To show scale numbers later
    firstValue = values[0];
    lastValue = values[values.length - 1];

    // Separate each value with a comma
    values.forEach(value => {
      finalValue = finalValue + value;
      finalValue = finalValue + ",";
    });

    finalValue = finalValue.slice(0, -1); // Remove trailing comma

    finalValue = finalValue + "}";

    // Add some accessibility info
    const ariaValues = finalValue.slice(1, -1);
    spark.setAttribute("aria-label", "Inline chart values: " + ariaValues);

    // Spans with the class "numbers" will prepend the numbers front and back
    if (hasClass(spark, "numbers")) {
      finalValue = firstValue + finalValue + lastValue;
    }

    spark.innerHTML = finalValue;
  }
});

// Helpers
function hasClass(el, className) {
  return el.classList
    ? el.classList.contains(className)
    : new RegExp("\\b" + className + "\\b").test(el.className);
}
