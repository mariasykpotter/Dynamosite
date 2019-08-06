function fact(x)
{
 if(x==0)
  { return 1; }
  return x * fact(x-1);
   }
function count(){
 var co = 0;
 var nums =[1,3,4,4,7,9,65];
 var n =nums.length
 for (i=0;i<=n;i++)
 {
   if (Math.pow(2,i)<nums[i]){
    if (nums[i]<fact(i))
    {
     console.log(nums[i]);
     co+=1;
    }
   }
   }
 console.log(co);
}
count()