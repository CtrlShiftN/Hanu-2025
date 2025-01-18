import ButtonRow from "./ButtonRow";

const Board = (props) => {
    let rows = [];
    for (let i = 0; i < props.size; i++) {
        rows.push(<ButtonRow size={props.size} />);
    }
    return (
        <div className="container">
            {
                rows.map((item) => (
                    <div key={item}>{item}</div>
                ))
            }
        </div>
    );
}
export default Board;