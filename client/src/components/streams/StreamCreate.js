import React from 'react';
import StreamForm from './StreamForm';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
// import { fy } from '../../ad/fy';
// import { test1 } from '../test1';
// Field f capital because it is supposed to be react component 
// reduxForm is a function does the exact same job as connect fucntionin react-redux library 
// it calls some action creator  and get some form data into our component via mapstatetoprops fucntion this all happends automatically

class StreamCreate extends React.Component
{

    //formProps.input (destructing input argument out of the formprops object )
   
    onSubmit=(formValues)=> {
        this.props.createStream(formValues);
    }
    render()
    {
        // console.log(this.props);
    return (
        <div>
            <h3> Create a Stream</h3>
            <StreamForm onSubmit={this.onSubmit}/>
     </div>
    )
    };
};



export default connect(null,{createStream})(StreamCreate);