import React, { Component } from 'react'
import { data } from 'jquery';

class List extends Component {

    state = {
        fieldOne: "",
        fieldTwo: "",
        result: "",
        list: []
    }

    num1 = (event) => {
        this.setState({
            fieldOne: event.target.value
        })
    }

    num2 = (event) => {
        this.setState({
            fieldTwo: event.target.value
        })
    }

    addOpp = (event) => {
        event.preventDefault();
        this.setState({ result: parseInt(this.state.fieldOne) + parseInt(this.state.fieldTwo) },
            (prevState) => {
                this.setState({
                    fieldOne: "",
                    fieldTwo: "",
                    list: this.state.list.concat(this.state.result)
                })
            });
    }
    subOpp = (event) => {
        event.preventDefault();
        this.setState({ result: parseInt(this.state.fieldOne) - parseInt(this.state.fieldTwo) },
            () => {
                this.setState({
                    fieldOne: "",
                    fieldTwo: "",
                    list: this.state.list.concat(this.state.result)
                })
            });
    }

    mulOpp = (event) => {
        event.preventDefault();
        this.setState({ result: parseInt(this.state.fieldOne) * parseInt(this.state.fieldTwo) },
            () => {
                this.setState({
                    fieldOne: "",
                    fieldTwo: "",
                    list: this.state.list.concat(this.state.result)
                })
            });
    }
    divOpp = (event) => {
        event.preventDefault();
        this.setState({ result: parseInt(this.state.fieldOne) / parseInt(this.state.fieldTwo) },
            () => {
                this.setState({
                    fieldOne: "",
                    fieldTwo: "",
                    list: this.state.list.concat(this.state.result)
                })
            });
    }

    // deleteEvent = (index, e) => {
    //     data.splice(index, 1);
    //     this.setState({ data: this.state.data })
    // }

    render() {
        return (
            <div>
                <form>
                    <input type="text" value={this.state.fieldOne} onChange={this.num1} />
                    <input type="text" value={this.state.fieldTwo} onChange={this.num2} /><br /><br />
                    <button onClick={this.addOpp}>ADD</button><br />
                    <button onClick={this.subOpp}>SUB</button><br />
                    <button onClick={this.mulOpp}>MUL</button><br />
                    <button onClick={this.divOpp}>DIV</button><br />
                    <button type="reset">RESET</button>

                </form>
                    value:{this.state.result}
                <br />
                <ul>
                    {this.state.list.map((item, index) =>
                        <div>{item}
                        </div>
                    )}
                </ul>
            </div>
        )
    }
}

export default List
