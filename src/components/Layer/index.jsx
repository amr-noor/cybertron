const Layer = props => {
    if (props.condition) {
        return <div className={"layer " + props.styleClass}>
            <h1>{props.text}</h1>
            <div className="card">{props.children}</div>
        </div>;
    }
};

export default Layer;