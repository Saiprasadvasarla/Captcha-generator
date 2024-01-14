import { Component } from 'react'
import errors from './Errors'
class CaptchaGenerator extends Component {

    state = {
        value: "",
        captcha: "",
        messageValue: ""
    }

    componentDidMount() {
        { this.callingCapthca() }
    }



    ONEventSubmit = (event) => {
        const { value, captcha, messageValue, dataValue } = this.state
        event.preventDefault();

        if (captcha === "") {
            this.setState({ messageValue: errors.empty })
        }
        else if (value === captcha) {
            this.setState({ messageValue: errors.correct })
        }
        else {
            this.setState({ messageValue: errors.Incorrect })
        }

    }

   

    callingCapthca = () => {
        const result = Math.random().toString(36).substring(2, 7)
        this.setState({ value: result,
            captcha:"",
            messageValue:""
         })

    }

    OnGettingData = (event) => {
        const { captcha } = this.state
        const data = event.target.value
        if (data === "") {
            this.setState({ messageValue: errors.empty })
        }
        else {
            this.setState({ messageValue: "" })
        }

        this.setState({ captcha: data })

    }

    render() {
        const { value, captcha, messageValue } = this.state
        return (
            <center>
                <form onSubmit={this.ONEventSubmit}>
                    <div>
                        <input type="text" value={value} disabled />
                        <button type="button" onClick={() => { this.callingCapthca() }}>Refresh </button>
                    </div>
                    <div>
                        <input type="text" onChange={this.OnGettingData} value={captcha} />
                        <div>
                            <p>{messageValue}</p>
                        </div>

                        <button type="submit">Submit Captcha</button>

                    </div>

                </form>
            </center>
        )
    }

}
export default CaptchaGenerator