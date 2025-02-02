/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  if (num % 5 === 0 && num % 3 === 0) {
    return 'FizzBuzz';
  }
  if (num % 5 === 0) {
    return 'Buzz';
  }
  if (num % 3 === 0) {
    return 'Fizz';
  }
  return num;
}

/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  if (n < 2) {
    return 1;
  }
  return n * getFactorial(n - 1);
}

/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  return ((n2 - n1 + 1) * (n1 + n2)) / 2;
}

/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  const rect1Top = rect1.top;
  const rect1Bottom = rect1Top + rect1.height;
  const rect1Left = rect1.left;
  const rect1Right = rect1Left + rect1.width;

  const rect2Top = rect2.top;
  const rect2Bottom = rect2Top + rect2.height;
  const rect2Left = rect2.left;
  const rect2Right = rect2Left + rect2.width;

  if (rect1Bottom < rect2Top || rect1Top > rect2Bottom) {
    return false;
  }
  if (rect1Left > rect2Right || rect1Right < rect2Left) {
    return false;
  }
  return true;
}

/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  return (
    (point.x - circle.center.x) ** 2 + (point.y - circle.center.y) ** 2
    < circle.radius ** 2
  );
}

/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  const map = Object.create(null);

  for (let i = 0; i < str.length; i += 1) {
    const key = str[i];
    if (!Object.prototype.hasOwnProperty.call(map, key)) {
      map[key] = true;
    } else {
      map[key] = false;
    }
  }
  return Object.keys(map).find((key) => map[key]) || null;
}

/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  const start = isStartIncluded ? '[' : '(';
  const end = isEndIncluded ? ']' : ')';

  return `${start}${min}, ${max}${end}`;
}

/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  let res = 0;
  let temp = num;

  while (temp > 0) {
    res = res * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }

  return res;
}

/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
const sumNumberDigits = (num) => (num > 9 ? num - 9 : num);

function isCreditCardNumber(ccn) {
  const ccnString = String(ccn);

  return (
    ccnString
      .split('')
      .reverse()
      .map((el, idx) => (idx % 2 !== 0 ? sumNumberDigits(+el * 2) : +el))
      .reduce((total, item) => total + item) % 10 === 0
  );
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  let newNum = 0;
  let temp = num;
  while (temp > 0) {
    newNum += temp % 10;

    temp = Math.floor(temp / 10);
  }
  return newNum > 9 ? getDigitalRoot(newNum) : newNum;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  const PAIRS = {
    '[': ']',
    '{': '}',
    '(': ')',
    '<': '>',
  };

  const temp = [];
  let lastChar = '';
  for (let i = 0; i < str.length; i += 1) {
    const currentChar = str[i];
    if (PAIRS[lastChar] === currentChar) {
      temp.pop();
      lastChar = temp[temp.length - 1];
    } else {
      temp.push(currentChar);
      lastChar = currentChar;
    }
  }

  return temp.length === 0;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  let result = '';
  let temp = num;

  while (temp > 0) {
    result = String(temp % n) + result;
    temp = Math.floor(temp / n);
  }

  return result;
}

/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  let result = '';
  const [firstPath, ...restPathes] = pathes;

  for (let i = 0; i < firstPath.length; i += 1) {
    if (restPathes.every((path) => path[i] === firstPath[i])) {
      result += firstPath[i];
    } else {
      break;
    }
  }

  result = result.slice(0, result.lastIndexOf('/') + 1);

  return result;
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(/* m1, m2 */) {
  throw new Error('Not implemented');
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
const checkColumnTopToBottom = (position, cellRowIndex, cellColIndex, winLength) => {
  const estimatedPositionLength = cellRowIndex + winLength;

  if (estimatedPositionLength > position.length) {
    return false;
  }

  const char = position[cellRowIndex][cellColIndex];
  let count = 1;

  for (let rowIndex = cellRowIndex + 1; rowIndex < winLength; rowIndex += 1) {
    const currentChar = position[rowIndex][cellColIndex];
    if (char !== currentChar) {
      return false;
    }

    count += 1;
  }


  return count === winLength;
};


const checkRowLeftToRight = (position, cellRowIndex, cellColIndex, winLength) => {
  const estimatedRowLength = cellColIndex + winLength;

  const row = position[cellRowIndex];

  if (estimatedRowLength > row.length) {
    return false;
  }

  const char = position[cellRowIndex][cellColIndex];
  let count = 1;

  for (let colIndex = cellColIndex + 1; colIndex < estimatedRowLength; colIndex += 1) {
    const currentChar = row[colIndex];
    if (char !== currentChar) {
      return false;
    }

    count += 1;
  }

  return count === winLength;
};

const checkDiagonalTopRightToBottomLeft = (position, cellRowIndex, cellColIndex, winLength) => {
  const estimatedLastCellColIndex = cellColIndex - winLength + 1;

  if (estimatedLastCellColIndex < 0) {
    return false;
  }

  const estimatedPositionLength = cellRowIndex + winLength;

  if (estimatedPositionLength > position.length) {
    return false;
  }

  const char = position[cellRowIndex][cellColIndex];
  let count = 1;

  for (let rowIndex = cellRowIndex + 1, colIndex = cellColIndex - 1;
    rowIndex < estimatedPositionLength;) {
    const currentChar = position[rowIndex][colIndex];

    if (char !== currentChar) {
      return false;
    }

    count += 1;
    rowIndex += 1;
    colIndex -= 1;
  }

  return count === winLength;
};

const checkDiagonalTopLeftToBottomRight = (position, cellRowIndex, cellColIndex, winLength) => {
  const estimatedLastCellColIndex = cellColIndex + winLength - 1;

  const estimatedLastRow = position[cellRowIndex + winLength - 1];

  if (!estimatedLastRow || estimatedLastRow.length < estimatedLastCellColIndex) {
    return false;
  }

  const estimatedPositionLength = cellRowIndex + winLength;

  if (estimatedPositionLength > position.length) {
    return false;
  }

  const char = position[cellRowIndex][cellColIndex];
  let count = 1;

  for (let rowIndex = cellRowIndex + 1, colIndex = cellColIndex + 1;
    rowIndex < estimatedPositionLength;) {
    const currentChar = position[rowIndex][colIndex];

    if (char !== currentChar) {
      return false;
    }

    count += 1;
    rowIndex += 1;
    colIndex += 1;
  }

  return count === winLength;
};


const checkCell = (position, cellRowIndex, cellColIndex, winLength) => {
  if (checkColumnTopToBottom(position, cellRowIndex, cellColIndex, winLength)) {
    return true;
  }

  if (checkRowLeftToRight(position, cellRowIndex, cellColIndex, winLength)) {
    return true;
  }

  if (checkDiagonalTopLeftToBottomRight(position, cellRowIndex, cellColIndex, winLength)) {
    return true;
  }

  if (checkDiagonalTopRightToBottomLeft(position, cellRowIndex, cellColIndex, winLength)) {
    return true;
  }

  return false;
};


function evaluateTicTacToePosition(position) {
  const winLength = 3;

  for (let rowIndex = 0; rowIndex < position.length; rowIndex += 1) {
    for (let colIndex = 0; colIndex < position[rowIndex].length; colIndex += 1) {
      if (position[rowIndex][colIndex]) {
        const isWin = checkCell(position, rowIndex, colIndex, winLength);

        if (isWin) {
          return position[rowIndex][colIndex];
        }
      }
    }
  }

  return undefined;
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
