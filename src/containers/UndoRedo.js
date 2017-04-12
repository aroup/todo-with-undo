import React,{Component} from 'react'
import * as actions from '../actions'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// let UndoRedo = () => (
//   <p>
//     <button onClick={()=>{return dispatch(undo)}}>
//       Undo
//     </button>
//     <button >
//       Redo
//     </button>
//   </p>
// )

class UndoRedo extends Component{
  handleUndo = ()=>{
    this.props.actions.undo();
  }
  handleRedo = ()=>{
    this.props.actions.redo();
  }
  render(){
    return(
      <div>
      <button onClick={this.handleUndo}>
        Undo
      </button>
      <button onClick={this.handleRedo}>
        Redo
      </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions : bindActionCreators(actions,dispatch)
  }
}

export default connect(null,mapDispatchToProps)(UndoRedo)
