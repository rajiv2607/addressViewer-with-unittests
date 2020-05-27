import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../../action/Actions'
import Address from '../addressPage/Address'
import '../../resource/style.scss'
import DialogueMessage from '../dialogueMessage/DialogueMessage'

class LandingPage extends React.Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick(e) {
        this.props.printAddress(e.target.parentElement.innerText[0])
    }
    render() {
        return (          
          <>
            <table >
                <thead>
                    <tr>
                        <th data-testid='customer'>Customer Id</th>
                        <th data-testid='name'>Name</th>
                        <th data-testid='age'>Age</th>
                        <th data-testid='gender'>Gender</th>

                    </tr>
                </thead>
                <tbody onClick={this.handleClick}>
                    {this.props.items.items.map((rowData, index) => (
                        <tr key={rowData.id} data-testid={`element-${index}`}>
                            <td data-testid='row-click' >{rowData.customerId}</td>
                            <td >{rowData.name}</td>
                            <td >{rowData.age}</td>
                            <td >{rowData.gender}</td>
                        </tr>

                    ))}
                </tbody>
            </table>
            <div>
                 <Address address = {this.props.address}/>
            </div>

            {this.props.showDialogue ? <DialogueMessage/> : ''}
            </>
        )
    }
}



const mapStateToProps = (store) => {
    return {
        items: store,
        address: store.address,
        showDialogue:store.showDialogue
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        printAddress: (id) => {
            dispatch(actions.printAddress(id))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
