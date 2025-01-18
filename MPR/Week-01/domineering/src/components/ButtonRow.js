import Button from "./Button";

const ButtonRow = (props) => {
    function buttonClicker(e) {
        console.log(e.target);
    }
    let buttons = [];
    for (let i = 0; i < props.size; i++) {
        buttons.push(<Button col={i} onClick={buttonClicker}/>);
    }
    return (
        <div className="container">
            {
                buttons.map((item) => (
                    <div className="d-inline" key={item}>{item}</div>
                ))
            }
        </div>
    );
}
export default ButtonRow;