const operation=process.argv[2];
let elements_arr=[];
elements_arr=process.argv.slice(3);
function printOnConsole(res,arr,operand){
    for(let i=0;i<arr.length;i++){
        if(isNaN(res)){
            process.stdout.write("Invald input")
            break;
        }
        else{
            if(i==arr.length-1){
                process.stdout.write(arr[i]+"="+res)
            }
            else{
            (operand==='add')?process.stdout.write(arr[i]+"+"):process.stdout.write(arr[i]+"*");
            }
        }
        
    }
}
function do_task(operand,arr){
    let res=(operand==='add')?0:1;
    arr.forEach(element => {
        if(operand==='add'){
            res+=Number(element);
        }
        else{
            res*=Number(element);
        }
    });
    printOnConsole(res,arr,operand);
}
function another_task(operand,arr){
    if(arr.length==2){
        let res=0;
        if(operand=='sub'){
            res=Number(arr[0])-Number(arr[1]);
        }
        else{
            res=Number(arr[0])/Number(arr[1]);
        }
        (isNaN(res))?process.stdout.write("Invald input"):((operand==='sub')?process.stdout.write(arr[0]+"-"+arr[1]+"="+res):process.stdout.write(arr[0]+"/"+arr[1]+"="+res));
    }
    else{
        process.stdout.write("Provide two operands");
    }
}
switch(operation){
    case 'addition':do_task('add',elements_arr);
                    break;
    case 'multiply':do_task('mult',elements_arr);
                    break;
    case 'subtraction':another_task('sub',elements_arr);
                        break;
    case 'division':another_task('div',elements_arr);
                    break;
    default:process.stdout.write("**Invalid Operation valid operations are: addition,multiply,subtraction,division**");
}
