import { Stack } from "./Stack";

var stk: Stack<string> = new Stack<string>();

var result: Stack<number> = new Stack<number>();

var data=0;
var ans=0;
var openbracket=0;
export function addData(opr: string): string
{
    if(checkOperator(opr))
    {
        if(!stk.empty() && checkOperator(stk.peek()))
        {
            stk.pop();
        }
        else if(!stk.empty() && (stk.peek()=="(" || stk.peek()==")"))
        {
            // do nothing
        }
        if(!stk.empty())
        {
            stk.push(opr);
        }
    }
    else if(checkOpenBracket(opr))
    {
        openbracket++;
        stk.push(opr);
    }
    else if(checkCLoseBracket(opr))
    {
        if(openbracket!=0)
        {
            var bracketInData="0";
            while(!stk.empty() && stk.peek()!=")")
            {
                if(!checkOperator(stk.peek()))
                {
                    bracketInData=stk.peek();
                }
                stk.pop();
            }
            stk.pop();
            openbracket--;
            stk.push(bracketInData);
        }
    }
    else
    {
        // const operator=stk.peek();
        // stk.pop();
        // const val1=stk.peek();
        // stk.pop();
        // const val=doOperation(Number(val1),Number(opr),operator);
        // stk.push(val.toString());
        // if(openbracket==0)
        // {
        //     ans=val;
        // }
        if(stk.empty() || checkOperator(stk.peek()))
        {
            stk.push(opr);
        }
        else
        {
            var s=stk.peek();
            s=s+opr;
            stk.pop();
            stk.push(s);
        }
    }
    result.push(ans);
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