import "./index.css";

const Info = () => <div className="page info">
    <section className="hero">
        <div className="logo"></div>
        <h1>سايبرترون</h1>
    </section>
    <section className="about">
        <div className="container">
            <div className="content">
                <p><b>سايبرترون</b> هو فريق تابع لمسابقة <b>ديجيتوبيا</b> التابعة لـ<b>وزارة الإتصالات</b>.</p>
                <p>و هذا المشروع هدفه هو تعليم المستخدم كيفية تجنب الهجمات التصيدية عن طريق لعبة باللهجة العربية.</p>
                <p>و القائمون علي هذا المشروع هم :</p>
                <ul>
                    <li>قائد الفريق : <a href="http://amr.ct.ws/">عمرو محمد</a></li>
                    <li>مطور المشروع : <a href="#">ياسين حسين</a></li>
                    <li>مصمم المشروع : <a href="#">عبد الرحمن مجدي</a></li>
                </ul>
                <a href="https://drive.google.com/file/d/18ilUviWbeRDoM8GJv27Zv-PcDzwFxEaD/view?usp=drive_link" target="_blank" rel="noopener">رابط فيديو فكره المشروع</a>
            </div>
            <div className="imgs">
                <img src="https://digitopia.gov.eg/static/home/images/con_logo2.5ec8822ee352.png" alt="digitopia" />
                <img src="https://digitopia.gov.eg/static/home/images/new/TECH-EGYPT-LOGO.d9faa608b4de.png" alt="tech egy" />
            </div>
        </div>
    </section>
</div>;

export default Info;