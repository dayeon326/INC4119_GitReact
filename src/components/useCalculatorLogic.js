import {useState } from "react";

const useCalculatorLogic= () => {
    const [input,setInput] = useState("");
    const [result, setResult] = useState("");

    //'^', '√', '←' 버튼 클릭 시 동작하는 함수
    const handleClick=(value)=>{
        if(value==="^"){
            setInput((prev)=>prev+"**");
        }else if(value==="√"){
            setInput((prev)=>"Math.sqrt("+prev+")");
        }else if(value==="←"){
            setInput((prev)=>prev.slice(0,-1));
        }else{
        setInput((prev)=>prev+value);
    }
};

    const calculateResult=() => {
        try {
            setResult(eval(input).toString()); 
        } catch{
            setResult("Error");
        }
    };

    const clearInput=() =>{
        setInput("");
        setResult("");
    };

    return{input, result, handleClick, calculateResult, clearInput };
};

export default useCalculatorLogic;