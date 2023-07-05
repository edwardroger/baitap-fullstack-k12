import React from 'react';

class App extends React.Component{
    constructor() {
        super();
        this.state = { //state được coi là một vùng nhớ lưu trữ các biến
            color: "red",
            perso: {
                name: "Duck",
                age: "18",
                gender: "male"
            }
        }
    }

    componentWillUnmount() {} //Initialization: Khởi tạo
    componentDidMount() {} //Mounting: Gán component

    componentWillReceivePropsI() {} // Updation: Cập nhật component
    shouldComponentUpdate() {} //Updation
    componentWillUpdate() {} //Updation

    componentWillUnmount() {} //Unmounting: Hủy componet

    render () {
        return (
            <>
                <h1>Hello World!{this.state.perso.name}</h1>;
            </>
        ) 
    }
}

export default App;