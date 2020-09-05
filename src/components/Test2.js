import React from 'react';
const style={
    color : "red"
}
const test2 = (props) => {
    console.log('2');
return(
    <p>Be explicit about your skills, the process you use, and the kinds of projects you specialize in,
    but be mindful of presenting too much information. UX portfolios should not be a 
    retrospective of ALL past work. 
   Choose projects that are specific, recent, and outstanding, and present them as a design process.
   but be mindful of presenting too much information. UX portfolios should not be a 
    retrospective of ALL past work. 
Choose projects that are specific, recent, and outstanding, and present them as a design process.<div style={style}>{props.children}</div></p>
) 

};





export default test2;