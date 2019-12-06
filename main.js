var arr = [4,5,734,43,45,100,4,56,23,67,23,58,45];

function sumOdds(a){

var total = 0;

for (let i=0;i<a.length;i++){
    if((arr[i]%2)!==0){
    total += a[i];
    }
  }
  return total;
}
console.log(sumOdds(arr));
