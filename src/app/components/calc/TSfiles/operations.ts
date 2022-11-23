import { Stack } from "./Stack";

var stk: Stack<string> = new Stack<string>();

var result: Stack<number> = new Stack<number>();

var arr: string[]=[];

var data=0;
var ans=0;
var openbracket=0;

function moveBack()
{
    stk.pop();
    result.pop();
    return result.peek().toString();
}

export function addData(opr: string): string
{
    if(opr=="<-")
    {
        return moveBack();
    }
    else if(opr=="=")
    {
        return result.peek().toString();
    }
    if(checkOperator(opr))
    {
        if(arr.length!=0 && checkOperator(stk.peek()))
        {
            stk.pop();
        }
        else if(arr.length==0 )
        {
            return "fail";
        }
        else
        {
            arr.push(opr);
            result.push(ans);
        }
    }
    else
    {
        if(arr.length==0)
        {
            arr.push(opr);
            result.push(Number(opr));
        }
        const operator=stk.peek();
        stk.pop();
        const val1=stk.peek();
        stk.pop();
        const val=doOperation(Number(val1),Number(opr),operator);
        stk.push(val.toString());
        if(openbracket==0)
        {
            ans=val;
        }
        if(checkOperator(stk.peek()))
        {
            stk.push(opr);
            const operator=stk.peek();
            stk.pop();
            const val1=stk.peek();
            stk.pop();
            const val=doOperation(Number(val1),Number(opr),operator);
            stk.push(val.toString());
            if(openbracket==0)
            {
                ans=val;
            }
        }
        else
        {
            var s=arr[arr.length-1];
            s=s+opr;
            stk.pop();
            stk.push(s);
        }
    }
    return ans.toString();
}


function doOperation(val1: number,val2: number,opr: string): number
{
    if(opr=="+")
    {
        return val1+val2;
    }
    else if(opr=="-")
    {
        return val1-val2;
    }
    else if(opr=="*")
    {
        return val1*val2;
    }
    else if(opr=="/")
    {
        return val1/val2;
    }
    return val1%val2;
}

function checkInvalidity(opr: string)
{

}


function checkOpenBracket(opr: string)
{
    if(opr=="(")
    {
        return true;
    }
    return false;
}

function checkCLoseBracket(opr: string)
{
    if(opr==")")
    {
        return true;
    }
    return false;
}

function checkEqualSign(opr: string)
{
    if(opr=="=")
    {
        return true;
    }
    return false;
}

function checkOperator(opr: string)
{
    if(opr=="+" || opr=="-" || opr=="*" || opr=="/" || opr=="%")
    {
        return true;
    }
    return false;
}



// else if(checkOpenBracket(opr))
// {
//     if(!stk.empty() && !checkOperator(stk.peek()))
//     {
//         return "fail"
//     }
//     openbracket++;
//     stk.push(opr);
//     result.push(ans);
// }
// else if(checkCLoseBracket(opr))
// {
//     if(openbracket!=0)
//     {
//         if(checkOperator(stk.peek()))
//         {
//             return "fail";
//         }
//         var bracketInData="0";
//         while(!stk.empty() && stk.peek()!=")")
//         {
//             if(!checkOperator(stk.peek()))
//             {
//                 bracketInData=stk.peek();
//             }
//             stk.pop();
//         }
//         stk.pop();
//         openbracket--;
//         stk.push(bracketInData);
//     }
// }