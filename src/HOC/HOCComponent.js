import React from 'react';

/* 
    A higher-Order Component is a function that takes a component
    and returns a new component
    Whereas a component transforms props into UI, a higher-order component
    transforms a componet into another component

    // USE HOCS FOR CROSS-CUTTING CONCERNS
    Components are the primary unit of code reuse in React
    
    HOC doesn't modify the input component, nor does it use Iheritance to copy its behavior
    . Rather, a HOC composes the original component by wrapping it in a container component.
    A HOC is a pure function with zero-side effects

    The wrapperd component recevies all the props of the container, along with the new prop, data,
    which it uses to render its output. The HOC isnt concerned with how or why the data is used,
    and the wrapperd component isnt converned with the data came from 

    *** DONT MUTATE THE ORIGINAL COMPONENT. USE COMPOSITION ***
    Mutating HOCs are a leaky abstraction, the consumer must know how they are implemented
    in order to avoid conflicts with other HOCs
    Instad of mutating, HOCs should use composition

    Container components
    They are a part of a strategy of seperating responsibility between high-level and low-level
    converns. Containers manange things like subscriptions and state, and pass props to components that 
    handle things like rendering UI. HOCs use containers as part of their implementation.
    You can think of HOCs as parameterized container component definitions

    Convectoin: Pass unrelated Props through to the wrapperd component
    Hocs adds features to a component. THey shouldnt drastically alter its contract, its expected that
    the componet returned from a HOC has a similar interface to the wrapped component

    HOCs should pass thorugh propos that are unrelated to its specific concers. Most HOcs contain a 
    render method.

    CAVEATS
    * Dont use HOCs inside the Render method
    React's diffing algorithm (called Reconcialliation) uses component identity to determine whether
    it should update the exisiting subtree or throw it away and mount a new one. if the component returned 
    from render is identical ( === ) to the component from the previous render, React recursively updates
    the subtree by diffing it with the new one. If they're not equal, the previous subtree is unmounted 
    completely

    Remounting a component causes the state that component and all of its children to be lost
    Appy HOCs outside the component definition so that the resulting component is created only once.
    then its identity will be consistent across renders.

    ** STATIC METHODS MUST BE COPIED OVER
  
    ** REFS AREN'T PASSED THROUGH
    While the convection for higher-order components is to pass through all props to the wrapperd component,
    this does not work for refs. That's because ref is not really a prop, like key, it's handled specifically bu React
    If you add a ref to an element whose componet is the result of a HOC, the ref refers to an isntance
    of the outermost container component, not the wrapped component

    The solution for this problem is to use the React.forwardRed API (introduced with React 16.3)
*/

export default function HOCComponent() {
    return (
        <>
            <a href='#'>learn HOC</a>
        </>
    )
}