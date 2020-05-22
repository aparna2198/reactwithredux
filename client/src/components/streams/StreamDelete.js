import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream,deleteStream } from '../../actions';
import { Link } from 'react-router-dom';

class StreamDelete extends React.Component
{ 
        componentDidMount() {
            console.log(this.props);
            this.props.fetchStream(this.props.match.params.id);
    };
    // use react fragment anytime u want too return multiple elements but not have some prense inside actual dom (else it will disturb our styling)
    //<React.Fragment>multiple elements put here</React.Fragment>
    renderActions() {
     return (
        <>
             <button onClick={() => this.props.deleteStream(this.props.match.params.id)} className="ui button negative">Delete</button>
            <Link to='/' className="ui button">Cancel</Link>
        </>  
        );
    } 
    renderContent() {
        if (!this.props.stream) {
          return "Are you sure you want to delete this stream?"
        }
        return `Are you sure you want to delete the stream with title:${this.props.stream.title}`
  }
    
    render() {

        return (
            <Modal title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        )
    };
}
// to get info from redux store into our component we define mapstatetoo props function
const mapStateToprops = (state,ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}
export default connect(mapStateToprops,{fetchStream,deleteStream}) (StreamDelete);