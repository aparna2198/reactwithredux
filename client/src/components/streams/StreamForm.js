import React from 'react';
import { Field, reduxForm } from 'redux-form';


// import { fy } from '../../ad/fy';
// import { test1 } from '../test1';
// Field f capital because it is supposed to be react component 
// reduxForm is a function does the exact same job as connect fucntionin react-redux library 
// it calls some action creator  and get some form data into our component via mapstatetoprops fucntion this all happends automatically

class StreamForm extends React.Component
{
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }
    //formProps.input (destructing input argument out of the formprops object )
    renderInput=({ input, label, meta }) =>{
        // console.log(meta);
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}
                </label> 
                <input {...input} autoComplete="off"></input>
                {this.renderError(meta)}
            </div>
            
        );
    };
    onSubmit=(formValues)=> {
        this.props.onSubmit(formValues);
    }
    render()
    {
        // console.log(this.props);
    return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
            <Field name="title" component={this.renderInput} label="Enter Title"/>
            <Field name="description" component={this.renderInput} label="Enter Description" />
            <button className="ui button primary">Submit</button>
      </form>
    )
    };
};

const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = "you must enter the a title";
    }
    if (!formValues.description) {
        errors.description = "you must enter the description";
    };
    return errors;
};
export default reduxForm(
    {
        form: 'streamForm',
        validate
    }
)(StreamForm);
