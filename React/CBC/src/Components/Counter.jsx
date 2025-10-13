import React from "react"

class Counter extends React.Component {


    constructor(props)
    {
        super(props)
        this.state = {
            count : 0
        }
    }

    componentDidMount()
    {
        console.log("COmponent mounted")
    }

    componentDidUpdate()
    {
        console.log("COmponent updated")

    }
    componentWillUnmount()
    {
        console.log("COmponent unmounted")

    }

    render() {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-100">
    
                <div className="border border-gray-300 rounded-2xl shadow-xl bg-white h-[30vh] w-[30vw] flex flex-col items-center justify-between p-6">
                    
                    <div className="text-6xl font-bold text-gray-800">{this.state.count}</div>
                    <div>{this.props.name}</div>

                    <div className="flex gap-4">

                        <button 
                        onClick={() => {
                            this.setState({count : this.state.count + 1})
                        }} 
                        className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition">
                            Increment
                        </button>

                        <button 
                        onClick={() => {
                            this.setState({count : 0})
                        }}
                         className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition">
                            Reset
                        </button>

                        <button 
                        onClick={() => {
                            this.setState({count : this.state.count - 1})
                        }}
                         className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition">
                            Decrement
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Counter