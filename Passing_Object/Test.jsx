//Props
const Test = (props) => {
    return (
        <div>
            <ul>
                <li> {props.item["name"]} </li>
                <li> {props.item["class"]} </li>
                <li> {props.item["roll"]} </li>
            </ul>
        </div>
    );
};

export default Test;