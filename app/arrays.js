exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum: function(arr) {
    var s = 0;
    for (var i = 0; i < arr.length; i++) {
      s += arr[i];
    }
    return s;
  },

  remove: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  removeWithoutCopy: function(arr, item) {

  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    var newArr = arr1;
    for (var i = 0; i < arr2.length; i++) {
      newArr.push(arr2[i]);
    }
    return newArr;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var result = 0;
    arr.forEach(function (i) {
      if (i === item) {
        result++;
      }
    })
    return result;
  },

  duplicates: function(arr) {
    var nums = {};
    for (var i = 0; i < arr.length; i++) {
      if (nums[arr[i]]) {
        nums[arr[i]]++;
      } else {
        nums[arr[i]] = 1;
      }
    }
    var doubles = [];
    for (var key in nums) {
      if (nums[key] !== 1) {
        doubles.push(parseInt(key));
      }
    }
    return doubles;
  },

  square: function(arr) {
    return arr.map(function (i) {
      return i * i;
    });
  },

  findAllOccurrences: function(arr, target) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        result.push(i);
      }
    }
    return result;
  }
};