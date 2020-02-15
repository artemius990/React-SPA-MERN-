import React from 'react';
import './Aboutus.css'

class Aboutus extends React.Component {
  constructor() {
    super();
    this.state = {
      aboutus: [],
	  isLoading: false
    };
  }

  componentDidMount() {
	this.setState({ isLoading: true })
    fetch('/aboutus')
      .then(res => res.json())
      .then(aboutus => this.setState({aboutus, isLoading: false}, () => 
      console.log('Customers fetched...', aboutus)
      ));
  }

  render() {
    // let about = this.props.aboutus;
    const {isLoading}= this.state;
    return (
        <div>

          <center>
            <article className="about_us">

              { this.state.aboutus.map
              (a => <h1 key={a.id}>{a.title}</h1>) }


              <div>
                {this.state.aboutus.map(a =>

                <img key={a.id} src={a.img} alt="" className="img_aboutus" />
                )}

              </div>
              {isLoading && <p>Загружаю...</p>}
              <div>
                <br />
                {this.state.aboutus.map(a =>
                <p>{a.ab1} </p>
                )}
                <br />
                {this.state.aboutus.map(a =>
                <p>{a.ab2} </p>
                )}
                <br />

                {this.state.aboutus.map(a =>
                <p>{a.ab3} </p>
                )}
                <br />

                {this.state.aboutus.map(a =>
                <p>{a.ab4} </p>
                )}
                <br />

                {this.state.aboutus.map(a =>
                <p>{a.ab5} </p>
                )}
                <br />

                {this.state.aboutus.map(a =>
                <p>{a.ab6} </p>
                )}

              </div>
            </article>
          </center>
        </div>
    );
  }
}

export default Aboutus;


