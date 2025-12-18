import { useState, useEffect } from "react";
import { Link } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Layer from "../../components/Layer";
import generate from "../../scripts";

import "./index.css";

const Game = () => {
    const [loading, setLoading] = useState(false),
        [news, setNews] = useState([]),
        [btn, setBtn] = useState(0),
        [data, setData] = useState({}),
        [explain, setExplain] = useState(false),
        [win, setWin] = useState(false),
        [points, setPoints] = useState(0),

        score = ans => {
            setExplain(true);

            if (ans == data.phishing) {
                setWin(true);
                setPoints(prev => {
                    const value = (btn + 1) * 100;
                    generate.stats(value, true);
                    return value;
                });
                new Audio("https://www.myinstants.com/media/sounds/roblox-old-winning-sound-effect.mp3").play();
            } else {
                setWin(false);
                setPoints(prev => prev);
                new Audio("https://www.myinstants.com/media/sounds/aud-20210417-wa0013.mp3").play();
            }
        };

    useEffect(() => {
        try {
            generate.news().then(data => {
                // setNews({source: data[Math.abs(btn % 10)]?.source_url, title: data[Math.abs(btn % 10)]?.title, description: data[Math.abs(btn % 10)]?.description});

                setNews(prev => ({ ...prev, source: data[Math.abs(btn % 10)]?.source_url }));
                generate.trans(data[Math.abs(btn % 10)]?.title).then(data => setNews(prev => ({ ...prev, title: data })));
                generate.trans(data[Math.abs(btn % 10)]?.description).then(data => setNews(prev => ({ ...prev, description: data })));
            });
        } catch (err) {
            throw err;
        }
    }, [btn]);

    useEffect(() => {
        setLoading(true);
        try {
            generate.email(btn).then(data => {
                setData(data);
                setLoading(false);
            });
        } catch (err) {
            throw err;
        }
    }, [btn]);

    return <div className="game">
        <Header />
        <div className="container">
            <section className="score">{points}</section>
            <section className="email">
                <div className="info">
                    <div>{data?.sender?.[0].toUpperCase() || "?"}</div>
                    <p>{data?.sender || "جاري التحميل..."}</p>
                </div>
                <h3>{data?.subject || "جاري التحميل..."}</h3>
                <p className="body" dangerouslySetInnerHTML={{ __html: (data?.body || "جاري التحميل...") }}></p>
            </section>
            <form className="answer">
                <label htmlFor="phishing">تصيد</label>
                <input disabled={explain || loading} onClick={() => score(true)} type="radio" id="phishing" name="ans" hidden />
                <label htmlFor="notphishing">غير تصيد</label>
                <input disabled={explain || loading} onClick={() => score(false)} type="radio" id="notphishing" name="ans" hidden />
            </form>
            <Layer condition={explain} text={win ? "احسنت :)" : "حظ اوفر :("} styleClass={"explain " + (win ? "win" : "lose")}> {/* styleClass! */}
                <p className="lvl">المستوي {btn + 1}</p>
                <p className="lvl">هذا بريد {data.phishing ? "تصيد" : "ليس تصيد"}</p>
                <p dangerouslySetInnerHTML={{ __html: (data?.explanation || "Loading...") }}></p>
                {win ? <button disabled={loading} onClick={() => { setBtn(btn + 1); setExplain(false) }}>التالي</button> :
                    <button disabled={loading} onClick={() => { setBtn(0); setPoints(0); setExplain(false); }}>اعد المحاوله</button>}
                <Link className="exit" to="/play" onClick={() => { setBtn(0); setPoints(0); setExplain(false); }}>خروج</Link>
            </Layer>
            <Layer condition={loading} text="جاري التحميل..." styleClass="load"> {/* styleClass! */}
                <h3>اخبار : {news.title || "جاري التحميل..."}</h3>
                <p>{news.description || "جاري التحميل..."}...</p>
                <a target="_blank" href={news.source}>المصدر : {news.source || "جاري التحميل..."}</a>
            </Layer>
        </div>
        <Footer />
    </div>;
};

export default Game;