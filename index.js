const sum = function(fromN, toN) {

  if (fromN === toN) {

    return fromN;

  } else {

    return fromN + sum(fromN + 1, toN);

  }

  // Sum all the values from fromN up to toN
};

module.exports = sum;
