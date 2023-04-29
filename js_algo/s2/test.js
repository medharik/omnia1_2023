describe("pow", function() {

    it("raises to n-th power", function() {
      assert.equal(pow(2, 3), 8);
      assert.equal(pow(3, 4), 81);
    });
  
  });

  function camelize(a) {
    s=a.split("-").map((e,i)=> (i==0)? e:e[0].toUpperCase()+e.split("").splice(1).join("")).join("");
   return s;
    }
    
describe("camelize",function(){
it("test 1 background-color",function(){
    assert.equal(camelize("background-color"),"backgroundColor");
})


});

function max(a,b){
return Math.max(a,b);

}
describe("max",function(){

for(let i=0;i<10;i++){
let m=0;
it(`le max entre ${i} et ${i+1} est ${i+1}`,()=>{
    assert.equal(max(i,i+1),i+1);
});

}

});

// filterRange(arr, 1, 4)
function filterRange(arr, a, b){
    
return arr.filter((x)=> (x>=a && x<=b ));
}
describe("filterRange",()=>{

it("range [5, 3, 8, 1] entre 1 et 4",()=>{
    assert.deepEqual(filterRange([5, 3, 8, 1],1,4),[3,1]);
});
it("range  2 ",()=>{
    assert.equal(filterRange([1,2,7],1,2),1,2);
});

});