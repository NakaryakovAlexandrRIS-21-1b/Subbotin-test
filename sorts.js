//1

 const bblSort = arr => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
			}
		}
	}
	return arr
}

 const quickSort = arr => {
	if (arr.length < 2) return arr
	let pivot = arr[0]
	const left = []
	const right = []

	for (let i = 1; i < arr.length; i++) {
		if (pivot > arr[i]) {
			left.push(arr[i])
		} else {
			right.push(arr[i])
		}
	}
	return quickSort(left).concat(pivot, quickSort(right))
}

 const mergeSort = arr => {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const l = mergeSort(arr.slice(0, mid));
  const r = mergeSort(arr.slice(mid, arr.length));
  return Array.from({ length: l.length + r.length }, () => {
    if (!l.length) return r.shift();
    else if (!r.length) return l.shift();
    else return l[0] > r[0] ? r.shift() : l.shift();
  });
};

var arr = [234, 43, 55, 63, 5, 6, 235, 547]


//2
let a = 1
let b = 2
b = [b, a]
a = b[0]
b = b[1]
console.log(a, b)