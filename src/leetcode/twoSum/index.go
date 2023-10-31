/*
两数之和
https://leetcode.cn/problems/two-sum/

要求：
输入： 数组，目标
输出 下标，下标的结果相加等于目标
*/
package main

import (
	"fmt"
)

func main() {
	nums := []int{
		3, 2, 4,
	}
	target := 6

	results := twoSum(nums, target)
	fmt.Println("results", results)

	results2 := twoSum2(nums, target)
	fmt.Println("results2", results2)
}

// 暴力求解
func twoSum(nums []int, target int) []int {
	returnVal := []int{}
	for k1, v1 := range nums {
		diff := target - v1
		for k2, v2 := range nums {
			if diff == v2 && k2 != k1 {
				returnVal = append(returnVal, k2)
			}
		}
	}
	return returnVal
}

// 利用哈希 map
func twoSum2(nums []int, target int) []int {
	hashTable := map[int]int{}
	for i, x := range nums {
		p, ok := hashTable[target-x]
		if ok {
			return []int{p, i}
		}
		hashTable[x] = i
	}
	return nil
}
