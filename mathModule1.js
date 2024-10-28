const math1={
    add:function(a,b){
        return a+b;
    },
    subtract:function(a,b){
        return a-b;
    },
    multiply:function(a,b){
        return a*b;
    },
    divide:function(a,b){
        if (b==0){
            throw new Error('Cant divie by zero');
        }
        return a/b;
    },
    square:function(a){
        return a*a;

    }
}
module.exports=math1;