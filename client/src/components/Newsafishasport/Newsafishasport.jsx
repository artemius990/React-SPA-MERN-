import React from 'react';
import { NavLink } from "react-router-dom";
// import Oneofsix from './components/Oneofsix/Oneofsix';

class Newsafishasport extends React.Component {
	constructor() {
	  super();
	  this.state = {
	    news6: [],
	    afisha6: [],
	    sport6: [],
		isLoading: false
	  };
	}

	componentDidMount() {
	  this.setState({
	    isLoading: true
	  })
	  fetch('/news6')
	    .then(res => res.json())
	    .then(news6 => this.setState({
	      news6,
	      isLoading: false
	    }));
	  fetch('/afisha6')
	    .then(res => res.json())
	    .then(afisha6 => this.setState({
	      afisha6,
	      isLoading: false
	    }));
	  fetch('/sport6')
	    .then(res => res.json())
	    .then(sport6 => this.setState({
	      sport6,
	      isLoading: false
	    }));	  
	}
	

	
    render() {
        //let oneofsix = this.props.oneofsix;
        //let news = this.props.oneofsix.news;
        //let afisha = this.props.oneofsix.afisha;
        //let sport = this.props.oneofsix.sport;
        const {isLoading}= this.state;
        return (
            <div>
              <div className="wrapper">
                <div className="articles">

                  <article className="six">
                    {isLoading && <p>Загружаю...</p>}
                    {this.state.news6.map(news =>
                    <img src={news.img} alt={news.title} title={news.title} />
                    )}

                    {this.state.news6.map(news =>
                    <h2>{news.title}</h2>
                    )}

                    {this.state.news6.map(news =>
                    <p>{news.main}</p>
                    )} {this.state.news6.map(news =>
                    <NavLink to={news.link1} title="посмотреть статью">
                      Подробнее
                    </NavLink>
                    )}

                  </article>


                  <article className="six">
                    {isLoading && <p>Загружаю...</p>}
                    {this.state.afisha6.map(afisha =>
                    <img src={afisha.img} alt={afisha.title} title={afisha.title} />
                    )}


                    {this.state.afisha6.map(afisha =>
                    <h2>{afisha.title}</h2>
                    )}

                    {this.state.afisha6.map(afisha =>
                    <p>{afisha.main}</p>
                    )}

                    {this.state.afisha6.map(afisha =>
                    <NavLink to={afisha.link1} title="посмотреть статью">
                     Подробнее
                    </NavLink>
                    )}


                  </article>

                  <article className="six">
                    {isLoading && <p>Загружаю...</p>}
                    {this.state.sport6.map(sport =>
                    <img src={sport.img} alt={sport.title} title={sport.title} />
                    )}


                    {this.state.sport6.map(sport =>
                    <h2>{sport.title}</h2>
                    )}

                    {this.state.sport6.map(sport =>
                    <p>{sport.main}</p>
                    )}


                    {this.state.sport6.map(sport =>
                    <NavLink to={sport.link1} title="посмотреть статью">
                      Подробнее
                    </NavLink>
                    )}

                  </article>

                </div>
              </div>

              <div className="clear"><br /></div>
            </div>
        );
    }
}

export default Newsafishasport;


{/*
                        <Oneofsix oneofsix={oneofsix} />;
                        <Oneofsix news={news} />;
                        <Oneofsix afisha={afisha} />;
                        <Oneofsix sport={sport} />; */}


// <article className="six">
                    // <img src="images\news.jpg" alt="Новости" title="Новости" />
                    // <h2>Новости</h2>
                    // <p>Мировые новости, а также новости Витебска и Беларуси</p>
                    // <NavLink to="/Three_news" title="посмотреть статью">Подробнее</NavLink>
                // </article>

                // <article className="six">
                    // <img src="images\afisha.png" alt="Афиша" title="Афиша" />
                    // <h2>Афиша</h2>
                    // <p>Кино,концерты,выставки и другие культурные мероприятия</p>
                    // <NavLink to="/Afisha" title="посмотреть статью">Подробнее</NavLink>
                // </article>

                // <article className="six">
                    // <img src="images\sport.jpg" alt="Спорт" title="Спорт" />
                    // <h2>Спорт</h2>
                    // <p>Спортивные события Витебска и итоги мирового спорта</p>
                    // <NavLink to="/Sport" title="посмотреть статью">Подробнее</NavLink>
                // </article>


