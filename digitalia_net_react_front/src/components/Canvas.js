import React from 'react';
import PropTypes from 'prop-types';
const Canvas = ({ draw, height, width, nombre }) => {
    const canvas = React.useRef();
    React.useEffect(() => {
        const context = canvas.current.getContext('2d');
        draw(context);

        context.beginPath();
        context.font = 20 + 'px ' + 'Arial';
        context.textAlign = 'left';
        context.textBaseline = 'top';
        context.fillStyle = 'black';
        context.fillText(nombre, 100, 5);
        context.stroke();

    });
    return (
        <canvas ref={canvas} height={height} width={width} nombre={nombre} />
    );
};
Canvas.propTypes = {
    draw: PropTypes.func.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,

};
export default Canvas;

