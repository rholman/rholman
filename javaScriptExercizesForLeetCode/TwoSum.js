// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    /** 
    * @author Russell J Holmn, Jr.
    * For every number in nums list:
    * try adding it to every other number in the list to see if total = target
    * we start with index 0 and go to the length of the list -1
    * we take nums[count] and try adding it to every number in the list except nums[count]
    * when the total equals the target we return the indicies of both numbers from the list
     */
    var length = nums.length
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < length; j++) {
            if (i != j) {
                if (nums[i] + nums[j] == target) {
                    return [i, j]
                }
            }
        }
    }
}
