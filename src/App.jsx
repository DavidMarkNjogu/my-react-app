import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'

function App() {

    return(
      // Forgot to include this: the empty tags are to allow multiple use of components, since you are only allowed one per return clause.
      // called a JSX fragment <>...</>
      <> 
        <Header/>
        <Food/>
        <Footer/>
        
      </>
    )
}

export default App
