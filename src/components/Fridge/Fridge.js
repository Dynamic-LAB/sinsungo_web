import "./Fridge.css";
// import ice from "../../assets/ice.svg";

const Fridge = () => {
    return(
        <main>
            <div className="fridge__container">
                <div className="shelf_life">
                    <div className="shelf_life__title">
                        <div>
                            <h1>유통기한 임박 재료</h1>
                            <span className="ingredients_count">3</span>
                        </div>
                    </div>
                </div>
                <div className="fridge__cards">
                    <div className="card">
                        {/*<img src={ice} alt="ice"/>*/}
                        <div className="card_title">
                            <div>
                                <h1>냉장</h1>
                            </div>
                        </div>
                        <div className="card_inner">
                            <p className="text-primary-p">냉장</p>
                        </div>
                    </div>

                    <div className="card">
                        {/*<img src={ice} alt="ice"/>*/}
                        <div className="card_title">
                            <div>
                                <h1>냉동</h1>
                            </div>
                        </div>
                        <div className="card_inner">
                            <p className="text-primary-p">냉동</p>
                        </div>
                    </div>

                    <div className="card">
                        {/*<img src={ice} alt="ice"/>*/}
                        <div className="card_title">
                            <div>
                                <h1>신선</h1>
                            </div>
                        </div>
                        <div className="card_inner">
                            <p className="text-primary-p">신선</p>
                        </div>
                    </div>

                    <div className="card">
                        {/*<img src={ice} alt="ice"/>*/}
                        <div className="card_title">
                            <div>
                                <h1>실온</h1>
                            </div>
                        </div>
                        <div className="card_inner">
                            <p className="text-primary-p">실온</p>
                        </div>
                    </div>

                    <div className="card">
                        {/*<img src={ice} alt="ice"/>*/}
                        <div className="card_title">
                            <div>
                                <h1>조미료/양념</h1>
                            </div>
                        </div>
                        <div className="card_inner">
                            <p className="text-primary-p">조미료/양념</p>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default Fridge;