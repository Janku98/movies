import React, {useState} from "react";


export default function SortingOptions(props) {

    const [state, setState]= useState({value: ""});
  
    const handleChange = e => {
      const {onChange} = props;
      setState({value: e.target.value});
      onChange(e.target.value);
    };
  
    return(
      <select value={state.value} onChange={handleChange}>
          <option value=""></option>
          <option value="name_asc">A -> Z</option>
          <option value="name_desc">Z -> A</option>
          <option value="rating">Rating</option>
        </select>
    );
  };