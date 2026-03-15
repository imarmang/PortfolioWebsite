// letterClass — either "text-animate" or "text-animate-hover", controls which animation state the letters are in
// strArray — the array of characters, for example "rman".split("") gives ["r", "m", "a", "n"]
// idx — the starting delay index, so letters continue the cascade from where the previous letters left off

import "./AnimatedLetters.css";

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
