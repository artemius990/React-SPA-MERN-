import React from 'react';
import {NavLink} from "react-router-dom";
import './News1.css';

class News1 extends React.Component {
  constructor() {
    super();
    this.state = {
    one: [],
	  news:[],
	  isLoading: false
    };
  }

  componentDidMount() {
	this.setState({ isLoading: true })
    fetch('/one')
      .then(res => res.json())
      .then(one => this.setState({one, isLoading: false}
      ));
    fetch('/news')
      .then(res => res.json())
      .then(news => this.setState({news, isLoading: false}
      ));

  }		


	render(){
	//let news=this.props.news.one;
	//let newsother=this.props.news;
	const {isLoading}= this.state;
	
  return (
    <div>
      {isLoading && <p>Загружаю...</p>}

      <article className="news">

        {this.state.one.map(news =>{
        return (
        <div>
          <h1>{news.title}</h1>
          <div><img src={news.img} alt="" className="img_news" /></div>
          <div>

            {news.main}

            <br />
            <br />
            <br />
            <h3>Читайте также:</h3>
            {this.state.news.map(newsother =>{
            return (
            <div>
              <NavLink to={newsother.link2} title="посмотреть статью" className="a_news">{newsother.titlelink2}
              </NavLink>
              <br />

              <NavLink to={newsother.link3} title="посмотреть статью" className="a_news">{newsother.titlelink3}
              </NavLink>
            </div>
            ) }
            )}
          </div>
        </div>
        ) }
        )}

      </article>
    </div>
  );
  }
}

export default News1;