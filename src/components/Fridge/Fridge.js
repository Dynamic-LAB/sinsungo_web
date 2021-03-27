import "./Fridge.css";
// import ice from "../../assets/ice.svg";

const Fridge = () => {
    return (
        <main>
            <div className="fridge__container">
                <div className="shelf_life">
                    <div className="shelf_life__title">
                        <div className="top_card">
                            <div className="top_card_title">
                                <h2>유통기한 임박 재료</h2>
                                <div className="count">
                                    <h3>3</h3>
                                </div>
                            </div>
                            <div className="top_card_inner">
                                <p className="text-primary-p">음식1</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="fridge__cards">
                    <div className="card">
                        {/*<img src={ice} alt="ice"/>*/}
                        <div className="card_title">
                            <h2>냉장</h2>
                            <i className="fa fa-plus"></i>
                        </div>
                        <div className="card_inner">
                            <span className="text-primary-p">재료명</span>
                            <span className="text-primary-p">갯수</span>
                            <span className="text-primary-p">유통기한</span>
                            <span className="text-primary-p">남은기한</span>
                        </div>
                    </div>

                    <div className="card">
                        {/*<img src={ice} alt="ice"/>*/}
                        <div className="card_title">
                            <h2>냉동</h2>
                            <i className="fa fa-plus"></i>
                        </div>
                        <div className="card_inner">
                            <span className="text-primary-p">재료명</span>
                            <span className="text-primary-p">갯수</span>
                            <span className="text-primary-p">유통기한</span>
                            <span className="text-primary-p">남은기한</span>
                        </div>
                    </div>

                    <div className="card">
                        {/*<img src={ice} alt="ice"/>*/}
                        <div className="card_title">
                            <h2>신선</h2>
                            <i className="fa fa-plus"></i>
                        </div>
                        <div className="card_inner">
                            <span className="text-primary-p">재료명</span>
                            <span className="text-primary-p">갯수</span>
                            <span className="text-primary-p">유통기한</span>
                            <span className="text-primary-p">남은기한</span>
                        </div>
                    </div>

                    <div className="card">
                        {/*<img src={ice} alt="ice"/>*/}
                        <div className="card_title">
                            <h2>실온</h2>
                            <i className="fa fa-plus"></i>
                        </div>
                        <div className="card_inner">
                            <span className="text-primary-p">재료명</span>
                            <span className="text-primary-p">갯수</span>
                            <span className="text-primary-p">유통기한</span>
                            <span className="text-primary-p">남은기한</span>
                        </div>
                    </div>

                    <div className="card">
                        {/*<img src={ice} alt="ice"/>*/}
                        <div className="card_title">
                            <h2>조미료/양념</h2>
                            <i className="fa fa-plus"></i>
                        </div>
                        <div className="card_inner">
                            <span className="text-primary-p">재료명</span>
                            <span className="text-primary-p">갯수</span>
                            <span className="text-primary-p">유통기한</span>
                            <span className="text-primary-p">남은기한</span>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default Fridge;