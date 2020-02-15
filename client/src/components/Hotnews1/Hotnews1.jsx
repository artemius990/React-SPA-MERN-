import React from 'react';

import News1 from '../News1/News1';
import Newskorotko from '../Newskorotko/Newskorotko';
import Newsvitandobl from '../Newsvitandobl/Newsvitandobl';

class Hotnews1 extends React.Component {
	render(){
	// let news=this.props.news;	
	// let newskorotko=this.props.newskorotko;
	// let newsvitandobl=this.props.newsvitandobl;
	
  return (
    <div >
     
          <News1/>;             
          <Newskorotko />;          
          <Newsvitandobl />;  
             
    </div>
  );
  }
}

export default Hotnews1;

