import React from 'react'

class MyComponent extends React.Component {
    state = {
        name: '',
        channel: ''
    }
    handleClickButton = () => {
        alert('Click me')
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    render() {
        let name = 'Son'

        return (
            // html code,
            <>
                <div className='first'>
                    <input value={this.state.name} type="text"
                        onChange={(event) => { this.handleOnChangeName(event) }}
                    />
                </div>
                <div> hello my name is {this.state.name}
                    <div className='third'>
                        <button onClick={() => { this.handleClickButton() }}> Click me</button>
                    </div>
                </div>
            </>
        )
    }
}

export default MyComponent;