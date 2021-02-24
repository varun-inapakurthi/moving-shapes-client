import { useEffect } from "react";

const Circle = ({ circleValue: { x, y } }) => {
    useEffect(() => {
        var circle = document.getElementById('circle');
        circle.style.position = "absolute";
        circle.style.left = x + "%";
        circle.style.top = y + '%';
    }, [x, y])
    return (

        <div className="circle" id="circle"></div>

    );
}

export default Circle;