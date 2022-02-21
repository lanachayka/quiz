import React from 'react';
import st from './Variants.module.css'

export default function Variants({name, variants, setAnswer}) {
  return (
      <div>
          {variants.map(variant => (
              <label key={variant} htmlFor={variant} className={st.radio}>
                  <input
                      onChange={(e) => e.target.checked && setAnswer(variant)}
                      type="radio" id={variant}
                      value={variant} name={name}
                  />
                  <span>{variant}</span>
              </label> 
          ))}
    </div>
  )
}
