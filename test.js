function fine_max(nums) {
    let max_num = Number.NEGATIVE_INFINITY;
    for (let num of nums) {
      if (num > max_num) {
        max_num = num; // update the max_num variable
      }
    }
    return max_num;
  }
  
  console.log(fine_max([1, 5, 2, 8, 3])); // expected output: 8
  