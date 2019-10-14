import "./index.css";
const React = require('react');

const SvgTomato = () => (
    <svg width="553" height="489" viewBox="0 0 553 489" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M287.017 417.132C424.546 417.132 536.034 330.345 536.034 223.288C536.034 116.232 424.546 29.4449 287.017 29.4449C149.489 29.4449 38 116.232 38 223.288C38 330.345 149.489 417.132 287.017 417.132Z" fill="#E54E4E"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M92.3581 146.672C92.3831 146.567 92.2339 146.498 92.1307 146.518C47.9573 154.908 48.599 225.102 59.1072 267.816C73.5714 326.607 146 386.341 201.794 405.997C229.443 415.737 279.65 427.075 306.877 418.874C313.811 416.786 322.539 405.688 322.377 398.235C322.215 390.782 313.204 388.806 306.185 386.911C271.561 377.913 219.961 363.184 197.734 350.8C147.143 322.611 120.348 299.692 96.424 253.276C81.9445 225.184 84.9538 177.787 92.3581 146.672Z" fill="black" fill-opacity="0.05"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M508.507 215.859C509.905 218.385 512.844 219.737 515.824 219.223C518.804 218.709 521.167 216.444 521.707 213.584C525.415 193.824 517.496 167.163 503.601 145.852C478.139 106.802 433.557 76.9596 390.226 61.7738C365.686 53.1737 340.244 51.2805 323.816 60.6778C321.341 62.079 319.941 64.744 320.262 67.4422C320.583 70.1412 322.562 72.3487 325.285 73.0458C341.473 77.1091 361.426 80.8643 374.452 88.1553C427.67 117.942 478.138 161.926 508.507 215.859Z" fill="white" fill-opacity="0.13"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M293.785 0L311.627 53.3933H369.367L322.654 86.3924L340.497 139.786L293.785 106.787L247.072 139.786L264.915 86.3924L218.202 53.3933H275.942L293.785 0Z" fill="#256109" fillOpacity="0.99"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M334.987 35.1512L316.745 71.3827L343.388 98.0368L305.471 93.7751L287.229 130.007L282.037 91.141L244.12 86.8794L278.828 67.121L273.636 28.2554L300.279 54.9095L334.987 35.1512Z" fill="#257609" fillOpacity="0.99"/>
    </svg>
);
const SvgPlay = () => (
    <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M37.5 6.25C20.25 6.25 6.25 20.25 6.25 37.5C6.25 54.75 20.25 68.75 37.5 68.75C54.75 68.75 68.75 54.75 68.75 37.5C68.75 20.25 54.75 6.25 37.5 6.25ZM31.25 51.5625L50 37.5L31.25 23.4375V51.5625ZM12.5 37.5C12.5 51.2812 23.7188 62.5 37.5 62.5C51.2812 62.5 62.5 51.2812 62.5 37.5C62.5 23.7188 51.2812 12.5 37.5 12.5C23.7188 12.5 12.5 23.7188 12.5 37.5Z" fill="#FFF9F9"/>
    </svg>

);
const SvgPause = () => (
    <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M6.25 37.5C6.25 20.25 20.25 6.25 37.5 6.25C54.75 6.25 68.75 20.25 68.75 37.5C68.75 54.75 54.75 68.75 37.5 68.75C20.25 68.75 6.25 54.75 6.25 37.5ZM34.375 50H28.125V25H34.375V50ZM37.5 62.5C23.7188 62.5 12.5 51.2812 12.5 37.5C12.5 23.7188 23.7188 12.5 37.5 12.5C51.2812 12.5 62.5 23.7188 62.5 37.5C62.5 51.2812 51.2812 62.5 37.5 62.5ZM46.875 50H40.625V25H46.875V50Z" fill="white"/>
    </svg>

);

class Timer extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            timerOn: false,
            timerStart: 0,
            timerTime: 1500000,
            timerInitial: 1500000,
        };
    }
    startTimer = () => {
        this.setState({
            timerOn: true
        });
        this.timer = setInterval(() => {
            const newTime = this.state.timerTime- 1000;
            if (newTime >= 0) {
                this.setState({
                    timerTime: newTime
                });
            } else {
                clearInterval(this.timer);
                this.setState({timerOn: false});
                alert("Break Time");
            }
        },1000)
    };
    stopTimer = () => {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
    };
    resetTimer = () => {
        if (this.state.timerOn === false) {
            this.setState({
                timerTime: this.state.timerStart
            });
        }
    };
    adjustTimer = input => {
        const { timerTime, timerOn, timerInitial } = this.state;
        const max = 216000000;
        if (!timerOn) {
            if (input === "incHours" && timerTime + 3600000 < max) {
                this.setState({ timerInitial: timerInitial + 3600000 });
            } else if (input === "decHours" && timerInitial - 3600000 >= 0) {
                this.setState({ timerInitial: timerInitial - 3600000 });
            } else if (input === "incMinutes" && timerInitial + 60000 < max) {
                this.setState(
                    {
                        timerInitial: timerInitial + 60000,
                        timerTime: this.state.timerInitial + 60000,
                        timerStart: this.state.timerInitial + 60000
                    });
            } else if (input === "decMinutes" && timerInitial - 60000 >= 0) {
                this.setState({
                    timerInitial: timerInitial - 60000,
                    timerTime: this.state.timerInitial - 60000,
                    timerStart: this.state.timerInitial - 60000
                });
            } else if (input === "incSeconds" && timerInitial + 1000 < max) {
                this.setState({ timerInitial: timerInitial + 1000 });
            } else if (input === "decSeconds" && timerInitial - 1000 >= 0) {
                this.setState({ timerInitial: timerInitial - 1000 });
            }
        }
    };

    render() {
        const { timerTime, timerStart, timerOn, timerInitial } = this.state;
        let seconds = ("0" + (Math.floor((timerTime/ 1000) % 60) % 60)).slice(-2);
        let minutes = ("0" + Math.floor((timerTime/ 60000) % 60)).slice(-2);
        let studyLength = ("0" + Math.floor((timerInitial/ 60000) % 60)).slice(-2);
        return (
            <div className="Countdown-timer">
                <div className="container">
                    <SvgTomato/>
                    <div className="Countdown-time">
                        {minutes} : {seconds}
                    </div>
                    {timerOn === false && (timerStart === 0 || timerTime === timerStart) && (
                        <button className="Button-start" onClick={this.startTimer}>
                            <SvgPlay className="SvgPlay"/>
                        </button>
                    )}
                    {timerOn === true && timerTime >= 1000 && (
                        <button className="Button-stop" onClick={this.stopTimer}>
                            <SvgPause/>
                        </button>
                    )}
                    {timerOn === false &&
                    (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (
                        <button className="Button-start" onClick={this.startTimer}>
                            <SvgPlay className="SvgPlay"/>
                        </button>
                    )}
                </div>
                <div className="adjustTime">
                    <p> Focus Length: </p>
                    <div className="adjustTimeContainer">
                        <button onClick={() => this.adjustTimer("incMinutes")}>&#8679;</button>
                        <div className="setTime">{studyLength} </div>
                        <button onClick={() => this.adjustTimer("decMinutes")}>&#8681;</button>
                    </div>
                    <p> mins </p>
                </div>
            </div>
        );
    }
}
export default Timer;