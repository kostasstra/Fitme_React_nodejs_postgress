//Imports
import React, { useState } from "react";
import "./css/Autocomplete.css";

const Autocomplete = (props) => {
  // State related variables
  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [input, setInput] = useState("");
  const [isShow, setIsShow] = useState(false);

  const onChange = e => {
    const { suggestions } = props;
    const input = e.currentTarget.value;
    const newFilteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(input.toLowerCase()) == 0
    );
    setActive(0);
    setFiltered(newFilteredSuggestions);
    setIsShow(true);
    setInput(e.currentTarget.value);
    props.setValue(e.currentTarget.value);
  };

const onClick = e => {
    setActive(0);
    setFiltered([]);
    setIsShow(false);
    setInput(e.currentTarget.innerText);
    props.setValue(e.currentTarget.innerText);
  };

const onKeyDown = e => {
    if (e.keyCode === 13) { // enter key
      setActive(0);
      setIsShow(false);
      setInput(filtered[active]);
      props.setValue(filtered[active]);
    }
    else if (e.keyCode === 38) { // up arrow
      return (active === 0) ? null : setActive(active - 1);
    }
    else if (e.keyCode === 40) { // down arrow
      return (active - 1 === filtered.length) ? null : setActive(active + 1);
    }
  };

const renderAutocomplete = () => {
    if (isShow && input) {
      if (filtered.length) {
        return (

   
           
               
                <div className="form-group mb-2"> 

          <ul className="autocomplete  w-100 ml-0 disable-scrollbars">
            {filtered.map((suggestion, index) => {
              let className;
              if (index === active) {
                className = "active";
              }
              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>

        </div>
     


        );
      } else {
        return (
          <div className="no-autocomplete">
            <em>Not found</em>
          </div>
        );
      }
    }
    return <></>;
  }

return (
    <>
      <input
        type="search"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={input}
        placeholder={props.placeholder}
        className={props.className}
      />
      {renderAutocomplete()}
    </>
  );
}

export default Autocomplete;
