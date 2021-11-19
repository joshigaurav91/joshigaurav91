import '../App.css';
import Header from './Header';
import Footer from './Footer';
import Quote from './Quote';
import { getYear } from '../utilities/date.js';

function App() {

  const appInfo = {
    title: 'Quote Of The Day!',
    author: 'Gaurav Joshi',
    copyright: getYear()
  }
  return (
    <div className = "QuoteApp">
      <Header title = {appInfo.title}/>
      <Quote />
      <Footer copyright = {appInfo.copyright}
              author = {appInfo.author}/>
    </div>
  );
}

export default App;
