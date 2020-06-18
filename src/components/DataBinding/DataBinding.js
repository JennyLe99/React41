import React, { Component } from "react";

export default class DataBinding extends Component {
    hocVien = {
        ma: 1,
        hoTen: "Le Thi A",
        hinhAnh: "https://picsum.photos/200/300",
    };
    //Phuong thuc renderImg do minh tao ra
    renderImg() {
        return <img src="https://picsum.photos/200/300"></img>;
    }
    //Phuong thuc cua React Component

    render() {
        let title = "Hello FE41";
        return (
            <div>
                <div className="container">
                    <div className="card text-left">
                        <img
                            width={100}
                            height={100}
                            className="card-img-top"
                            src={this.hocVien.hinhAnh}
                            alt=""
                        />
                        <div className="card-body">
                            <h4 className="card-title">{this.hocVien.hoTen}</h4>
                            <p className="card-text">Body</p>
                        </div>
                    </div>

                    <div>
                        {/* {Binding bien} */}
                        <h1>{title}</h1>
                        <input value={title} />
                        {this.renderImg()}
                    </div>
                </div>
            </div>
        );
    }
}
