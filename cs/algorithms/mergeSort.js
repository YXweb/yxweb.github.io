var mergeSort = function(arr) {
    if (arr.length==2) return [Math.min(arr[0],arr[1]),Math.max(arr[0],arr[1])]
    else if (arr.length==1) return arr[0];
    a1=mergeSort(arr.slice(0, Math.floor(arr.length/2)));
    a2=mergeSort(arr.slice(Math.floor(arr.length/2),arr.length));
    return merge(a1,a2);
}

var merge = function(a1,a2) {
    var i1=0,i2=0;
    var ret = [];
    while (i1<a1.length || i2<a2.length) {
        if (i1==a1.length || a1[i1]>a2[i2]) ret.push(a2[i2++]);
        else if (i2==a2.length || a1[i1]<a2[i2]) ret.push(a1[i1++]);
    }
    return ret;
}