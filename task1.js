function count(){
 var co = 0;
 var nums =[1,1,3,4,5,6];
 var n=nums.length;
 for (i=0;i<=n;i++)
 {
  if((i-1)>=0){
   if (nums[i]<(nums[i-1]+nums[i+1])/2)
   {
    co+=1;
   }
  }
 }
 console.log(co)
}
count()