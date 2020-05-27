import { render as rtlRender, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { initialState, reducer } from './reducer/reducer'
import React from 'react'
import { createStore } from 'redux'
import '@testing-library/jest-dom/extend-expect'
import LandingPage from './components/landingPage/LandingPage'


function render(
  ui,
  {
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'

// override render method
export { render }




// Testing the Container 1 layout 
test('can render with redux with defaults - Positive', () => {
    const { getByTestId }  = render(<LandingPage />)
    expect(getByTestId('name')).toHaveTextContent('Name')
    expect(getByTestId('age')).toHaveTextContent('Age')
    expect(getByTestId('customer')).toHaveTextContent('Customer Id')
    expect(getByTestId('gender')).toHaveTextContent('Gender')
  })

  test('check the DOM that , all the elemenets are rendering if count is matching to the number of elements - Positive', () => {
    const { queryAllByTestId }  = render(<LandingPage />)
    let totalValue = queryAllByTestId("row-click")
    expect(totalValue.length).toBe(5)
  })


    // Accoring to the initial data the number of rows to be displayed should be 5 - Negative 
    test('check the DOM that , all the elemenets are rendering if count is not matching to the number of elements - Negative', () => {
        const { queryAllByTestId }  = render(<LandingPage />)
        let totalValue = queryAllByTestId("row-click")
        expect(totalValue.length).not.toBe(4)
      })
    

  test('check dom has Container 2 - Positive', () => {
    const { getByTestId }  = render(<LandingPage />)
    expect(getByTestId('address-label-identifier')).toHaveTextContent('Address:')

  })


  test('check dom has Container 2 , when No Address is cklicked  - Positive ', () => {
    const { getByTestId }  = render(<LandingPage />)
    expect(getByTestId('fallback-string')).toHaveTextContent('No Address To Be Displayed')
  })


  test('check dom has Container 2 - Negative', () => {
    const { getByTestId }  = render(<LandingPage />)
    expect(getByTestId('address-label-identifier')).not.toHaveTextContent('No Address To Be Displayed:')
  })
 

  test('check dom has Container 1 click on any row', async () => {
    const spy = jest.fn()
    const { getByText }  = render(<LandingPage  handleClick={spy} />)
    let firstElement =  getByText("Manuele")
    console.log(firstElement.getAttributeNames)

    fireEvent.click(firstElement, { target: { innerText : "2	Ranjan	48	Male" } })
    // const { getAllByTestId }  = render(<LandingPage />)
    expect(getAllByTestId('address-displayed')).toBeVisible()

    // await wait(1000).then(() => {
    //     expect(getAllByTestId('address-displayed')).toBeVisible()
    //   });
  })
