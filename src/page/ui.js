import React, { useEffect, useState } from "react";

var array = ["Alfa", "Bravo", "Charlie"];

function Phonicator(str) {
    var arr = [];
    str = str.toLowerCase();
    for (var i in str) {
        // console.log(str.charCodeAt(i) - 97);
      var value = array[str.charCodeAt(i)-97];
    //   console.log(i-'0');
    arr.push(value);
  }
  return arr;
}

function toCheckPalindrome(str) {
  var len = str.length;
  if (len > 0) {
    for (var i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - i - 1]) {
        return false;
      }
    }
    return true;
  }
}

const TextInput = () => {
  const [userInput, setUserInput] = useState("");
  const [finalarr, setFinalArr] = useState([]);
  const [isPalindrome, setIsPalindrome] = useState(false);

  useEffect(() => {
    var arr = Phonicator(userInput);
    setFinalArr(arr);
    var bool = toCheckPalindrome(userInput);
    setIsPalindrome(bool);
  }, [userInput]);

  return (
    <>
      <form>
        <input
          label={"Enter some string"}
          name={"userstring"}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </form>
      <div>
        {finalarr.map((x) => {
          return <p>{x}</p>;
        })}
      </div>
      <div>{isPalindrome && <p>Magic Word Found</p>}</div>
    </>
  );
};

export default TextInput;
