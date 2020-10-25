import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Kingdom from '../../components/Kingdom/Kingdom';

class KingdomBuilder extends Component {
  state = {
    departments: {
      foreign: 1,
      defence: 2,
      agro: 3,
      space: 4
    }
  }

  render () {
    return (
      <Aux>
        <Kingdom departments = {this.state.departments}/>
        <div>Build Controls</div>
      </Aux>
    )
  }
}

export default KingdomBuilder;