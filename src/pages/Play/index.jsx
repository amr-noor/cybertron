import { Link } from "react-router";

import generate from "../../scripts";

import "./index.css";

const Play = () => <div className="page play">
    <h1>سايبرترون</h1>
    <div>
        <p>أفضل نقاط</p>
        <div>{generate.stats(0).high}</div>
    </div>
    <div>
        <p>المستوي <span>{Math.floor(generate.stats(0).exp / 1000)}</span></p>
        <p>متبقي <span>{(Math.floor(generate.stats(0).exp / 1000) + 1) * 1000 - generate.stats(0).exp}</span> نقطة</p>
        <progress value={generate.stats(0).exp - Math.floor(generate.stats(0).exp / 1000) * 1000} max="1000"></progress>
    </div>
    <Link to="/game">العب</Link>
</div>;

export default Play;