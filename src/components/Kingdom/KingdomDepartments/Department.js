import React, {Component} from 'react';
import classes from './Department.module.css';
import PropTypes from 'prop-types';

class Department extends Component {
  render () {
    let department = null;
     
      switch (this.props.type) {
       
        case ("foreign"):
        department = <div className={classes.Foreign}>F</div>;
        break;

        case ("defence"):
        department = <div className={classes.Defence}>D</div>;
        break;

        case ("agro"):
        department = <div className={classes.Agro}>A</div>;
        break;

        case ("space"):
        department = <div className={classes.Space}>S</div>;
        break;

        default:
          department = null;
      }
    return department;
  }
}

Department.propTypes = {
  type: PropTypes.string.isRequired
}

export default Department;