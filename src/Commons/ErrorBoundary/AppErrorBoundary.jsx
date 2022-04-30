import React from "react";

class AppErrorBoundary extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo)
    }

    throwErrorOnPage = () => {
        try {
             this.getDerivedStateFromError()
            throw Error('Crash')

        } catch (error) {
            console.log(error)
        }
    }

    render() {
        if(this.state.hasError) {
            return <h1>Something Bad is about to happen</h1>
        }
        return (
            <>
                <button onClick={this.throwErrorOnPage}>Throw Error</button>
            </>
        )
    }
}

export default AppErrorBoundary;