import React from 'react' 

export default class Address extends React.Component {
    
    render() {

           let display = []
        
            this.props.address && this.props.address.map((rowData, index) => (
                display.push(<div data-testid="address-displayed" className='address-viewer' key={index}>
                    {rowData}
                </div>)
            ))

            if(display.length===0) {
                display.push(<h3  data-testid="fallback-string" className='fallback-string'>No Address To Be Displayed </h3>)
            }
        return(
        <div className='address-container'>
         <div className='address-label'>
             <h2 data-testid="address-label-identifier">Address:</h2> 
         </div>
         <div>
              {display}
        </div>
        </div>
        )
    }
}