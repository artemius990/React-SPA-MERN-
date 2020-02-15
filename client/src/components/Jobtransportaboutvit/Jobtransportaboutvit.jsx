import React from 'react';
import {NavLink} from "react-router-dom";
// import Oneofsix from './components/Oneofsix/Oneofsix';

class Jobtransportaboutvit extends React.Component {
	constructor() {
	  super();
	  this.state = {
	    job6: [],
	    transport6: [],
	    aboutvit6: [],	    
	    isLoading: false
	  };
	}

	componentDidMount() {
	  this.setState({
	    isLoading: true
	  })
	  fetch('/job6')
	    .then(res => res.json())
	    .then(job6 => this.setState({
	      job6,
	      isLoading: false
	    }));
	  fetch('/transport6')
	    .then(res => res.json())
	    .then(transport6 => this.setState({
	      transport6,
	      isLoading: false
	    }));
	  fetch('/aboutvit6')
	    .then(res => res.json())
	    .then(aboutvit6 => this.setState({
	      aboutvit6,
	      isLoading: false
	    }));	  
	}	
	
	render(){
	//let oneofsix = this.props.oneofsix;
	//let job = this.props.oneofsix.job;
	//let transport = this.props.oneofsix.transport;
	//let aboutvit = this.props.oneofsix.aboutvit;
  const {isLoading}= this.state;
  
  return (
    <div>
      <div className="wrapper">
        <div className="articles">

          <article className="six">

            {this.state.job6.map(job =>
            <img src={job.img} alt={job.title} title={job.title} />
            )}


            {this.state.job6.map(job =>
            <h2>{job.title}</h2>
            )}


            {this.state.job6.map(job =>
            <p>{job.main}</p>
            )}


            {this.state.job6.map(job =>
            <NavLink to={job.link1} title="посмотреть статью">
              Подробнее
            </NavLink>
            )}

          </article>



          <article className="six">

            {this.state.transport6.map(transport =>
            <img src={transport.img} alt={transport.title} title={transport.title} />

            )}


            {this.state.transport6.map(transport =>
            <h2>{transport.title}</h2>
            )}

            {this.state.transport6.map(transport =>
            <p>{transport.main}</p>
            )}


            {this.state.transport6.map(transport =>
            <NavLink to={transport.link1} title="посмотреть статью">
              Подробнее
            </NavLink>
            )}

          </article>


          <article className="six">

            {this.state.aboutvit6.map(aboutvit =>
            <img src={aboutvit.img} alt={aboutvit.title} title={aboutvit.title} />
            )}


            {this.state.aboutvit6.map(aboutvit =>
            <h2>{aboutvit.title}</h2>
            )}


            {this.state.aboutvit6.map(aboutvit =>
            <p>{aboutvit.main}</p>
            )}


            {this.state.aboutvit6.map(aboutvit =>
            <NavLink to={aboutvit.link1} title="посмотреть статью">
             Подробнее
            </NavLink>
            )}

          </article>



        </div>
      </div>
    </div>
  );
    }
}

export default Jobtransportaboutvit;


{/* {this.state.podr.map(oneofsix =>{oneofsix.podr}
                      )} */}

{/*
                <Oneofsix oneofsix={oneofsix} />;
                <Oneofsix job={job} />;
                <Oneofsix transport={transort} />;
                <Oneofsix aboutvit={aboutvit} />; */}

// <article className="six">
                    // <img src="images\rabota.jpg" alt="Работа" title="Работа" />
                    // <h2>Работа</h2>
                    // <p>Информация о вакансиях г.Витебска и в целом по Беларуси</p>
                    // <NavLink to="/Job" title="посмотреть статью">Подробнее</NavLink>
                // </article>

                // <article className="six">
                    // <img src="images\raspisanie_transporta.jpg" alt="Расписание транспорта"
                        // title="Расписание транспорта" />
                    // <h2>Расписание транспорта</h2>
                    // <p>Расписание общественного транспорта г.Витебска</p>
                    // <NavLink to="/Transport" title="посмотреть статью">Подробнее</NavLink>
                // </article>

                // <article className="six">
                    // <img src="images\o_vitebske.JPG" alt="О Витебске" title="О Витебске" />
                    // <h2>О Витебске</h2>
                    // <p>История и факты о нашем городе</p>
                    // <NavLink to="/About_vitebsk" title="посмотреть статью">Подробнее</NavLink>
                // </article>
