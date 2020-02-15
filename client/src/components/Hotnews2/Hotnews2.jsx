import React from 'react';

import News2 from '../News2/News2';
import Newskorotko from '../Newskorotko/Newskorotko';
import Newsvitandobl from '../Newsvitandobl/Newsvitandobl';


class Hotnews2 extends React.Component {
	render(){
	// let news=this.props.news;
	// let newskorotko=this.props.newskorotko;	
	// let newsvitandobl=this.props.newsvitandobl;
	
  return (
    <div>        
        <News2/>;             
        <Newskorotko />;          
        <Newsvitandobl />;  
        
  </div>
  );
  }
}

export default Hotnews2;