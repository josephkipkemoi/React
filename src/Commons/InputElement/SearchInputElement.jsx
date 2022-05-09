import React, { forwardRef, useImperativeHandle, useRef } from "react";
 
// const SearchInputElement = React.forwardRef((props, ref) => <input ref={ref} {...props}/>);

// export default SearchInputElement;

function Input(props, ref) {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus();
      }
    }));
    return <input ref={inputRef} {...props} />;
  }

const InputElement = forwardRef(Input);

export default InputElement;