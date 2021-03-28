import './Right.css';

const Right = () => {
    return (
        <div className="right">
            <div className="right__container">
                <div className="right__cards">
                    {/*알림*/}
                    <div className="notice_card">
                        <div className="notice_card_title">
                            <i className="fa fa-bell-o"></i>
                            <h2>알림</h2>
                        </div>
                        <div className="r_card_inner">
                            <p className="r_card_inner_text">알림1</p>
                            <p className="r_card_inner_text">알림2</p>
                        </div>
                    </div>

                    {/*멤버추가*/}
                    <div className="member_card">
                        <div className="member_card_title">
                            <h2>냉장고멤버</h2>
                            <i className="fa fa-plus"></i>
                        </div>
                        <div className="r_card_inner">

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Right;