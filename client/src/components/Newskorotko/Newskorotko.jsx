import React from 'react';
import './Newskorotko.css';

class Newskorotko extends React.Component {
  constructor() {
    super();
    this.state = {
    newskorotko:[],
	  isLoading: false
    };
  }

  componentDidMount() {
	this.setState({ isLoading: true })
    fetch('/newskorotko')
      .then(res => res.json())
      .then(newskorotko => this.setState({newskorotko, isLoading: false}
      ));
  }		

  
	render(){
  //let newskorotko=this.props.newskorotko;
  const {isLoading}= this.state;
  return (    
      <aside className="ColumnRight_news">
        <h4>Коротко:</h4>		
        <br />

        {isLoading && <p>Загружаю...</p>}	

        {this.state.newskorotko.map(a =>
                  <p>{a.nk} </p>
                  )}	  
        <br />
      </aside>    
  );
  }
}

export default Newskorotko;


// {Object.keys(newskorotko).map(elem => {
//   return( 
//   <div key={elem}>
//   <p >{newskorotko[elem]}</p> 
//   <br />
//   </div>)
//   })}      

        // <br />
        // <p>ЦИК Казахстана впервые зарегистрировала женщину кандидатом в президенты</p>
        // <br />

        // <p>Гуайдо признал провал попытки свергнуть Мадуро</p>
        // <br />

        // <p>КНДР запустила несколько ракет в направлении Японского моря </p>
        // <br />

        // <p>Трамп: Китай хочет быть участником ядерного соглашения с участием США и России</p>
