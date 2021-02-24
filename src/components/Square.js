import { useEffect } from "react";

const Square = ({ squareValue: { x, y } }) => {
    useEffect(() => {
        var square = document.getElementById('square');
        square.style.position = "absolute";
        square.style.left = x + "%";
        square.style.top = y + '%';
    }, [x, y])
    return (
        <div className="square" id="square" ></div>
    );
}

export default Square;