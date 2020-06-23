import React, { Component } from 'react';
const SearchBox = ({value,onChange}) => {
    return (<div className="form-group">
        <input onChange={onChange} value={value} type="text" placeholder="serach..."  className="form-control"/>
        </div>  );
}
 
export default SearchBox;      