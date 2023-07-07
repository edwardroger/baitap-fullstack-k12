import React from 'react';

class App extends React.Component { //lớp: có tính hướng đối tượng

    constructor(){ //Hàm khở tạo. Tạo ra các giá trị ban đầu cho class
        super(); //Túi đựng (có thể đựng props)
        this.state = { //state đc coi là 1 vùng nhớ. để lưu trữ các biến
            color: "red",
            person: {
                name: "Dukck",
                age: "18",
                gender: "Male"
            }
        };
    }

    componentWillMount() {} //Mounting: gán component
    componentDidMount() {} //...: gán component

    componentWillReceiveProps() {} //updation: cập nhật compoet
    shouldComponentUpdate() {} //updation
    componentWillUpdate() {} //updation

    componentWillUnmount() {} //Unmounting: hủy component

    //con trỏ this dùng để chỉ tới cái component hiện tại
    
    render () {
        return <h2>I am a {this.state.color} {this.state.person.name}</h2>
    }
}

export default App;