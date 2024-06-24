//import logo from './logo.svg';
//import './App.css';
import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/items" 
import Categories from "./components/Categories"
import ShowFullItem from "./components/ShowFullItem"

class  App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      currentItems: [],
      items: [
          {
            id: 1,
            title: "Стул",
            img: "1.jpg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            category: "chairs",
            price: "25.00",

          },

          {
            id: 2,
            title: "Лампа",
            img: "2.jpg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            category: "light",
            price: "100.00",

          },

          {
            id: 3,
            title: "Диван",
            img: "3.jpg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            category: "sofa",
            price: "300.00"

          },

          {
            id: 4,
            title: "Стол",
            img: "4.jpg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            category: "tables",
            price: "170.00",
          },

          {
            id: 5,
            title: "Стул",
            img: "5.jpg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            category: "chairs",
            price: "25.00",

          },

          {
            id: 6,
            title: "Кресло",
            img: "6.jpg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            category: "armchairs",
            price: "150.00",
          },

          {
            id: 7,
            title: "Кресло",
            img: "7.jpg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            category: "armchairs",
            price: "150.00",
          },

          {
            id: 8,
            title: "Кресло",
            img: "8.jpg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            category: "armchairs",
            price: "150.00",
          },

          {
            id: 9,
            title: "Табурет",
            img: "9.jpg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            category: "stools",
            price: "20.00",
          },

          {
            id: 10,
            title: "Лампа",
            img: "10.jpg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            category: "light",
            price: "100.00",
          },

          {
            id: 11,
            title: "Тумба",
            img: "11.jpg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            category: "nightstands",
            price: "40.00",
          },

          {
            id: 12,
            title: "Табурет",
            img: "12.jpg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            category: "stools",
            price: "20.00",
          },

          {
            id: 13,
            title: "Стул",
            img: "13.jpg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            category: "chairs",
            price: "25.00",
          },

          {
            id: 14,
            title: "Диван",
            img: "14.jpg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            category: "sofa",
            price: "300.00",
          },

          {
            id: 15,
            title: "Диван",
            img: "15.jpg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            category: "sofa",
            price: "300.00",
          },

          {
            id: 16,
            title: "Кресло",
            img: "16.jpg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            category: "armchairs",
            price: "150.00",
          },

          {
            id: 17,
            title: "Табурет",
            img: "17.jpg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            category: "stools",
            price: "20.00",
          },

          {
            id: 18,
            title: "Лампа",
            img: "18.jpg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            category: "light",
            price: "100.00",
          },

          {
            id: 19,
            title: "Кресло",
            img: "19.jpg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            category: "armchairs",
            price: "150.00",
          }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem= this.onShowItem.bind(this)
  }
  
  render() {
  return (
    <div className="wrapper">
      <Header />
      <Categories chooseCategory={this.chooseCategory}/>
      <Items  onShowItem={this.onShowItem} items={this.state.currentItems}  onAdd={this.addToOrder}/>
      {this.state.showFullItem && <ShowFullItem  nAdd={this.addToOrder}  onShowItem={this.onShowItem} item={this.state.fullItem}  />}
      <Footer />
    </div>
    
  );
}

onShowItem(item) {
  this.setState({fullItem: item})
  this.setState({showFullItem: !this.state.showFullItem})
}

chooseCategory(category) {
  if (category === 'all')  {
       this.setState({currentItems: this.state.items})
       return
  }

  this.setState({
    currentItems: this.state.items.filter(el => el.category === category)

  })

}

}  



    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/


export default App;
