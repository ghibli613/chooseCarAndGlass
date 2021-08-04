import React, { Component } from 'react';
import { connect } from "react-redux";

class ThongTinGame extends Component {
    render() {
        const {soBanThang, soBanChoi} = this.props;

        return (
            <div>
                <div className="pt-5">
                    <h1 className="text-success">
                        SỐ BÀN THẮNG:{" "}
                        <span className="text-primary">{soBanThang}</span>
                    </h1>
                    <h1 className="text-success">
                        SỐ BÀN CHƠI:{" "}
                        <span className="text-primary">{soBanChoi}</span>
                    </h1>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    soBanThang: state.oanTuTiReducer.soBanThang,
    soBanChoi: state.oanTuTiReducer.soBanChoi,
});

export default connect(mapStateToProps)(ThongTinGame);