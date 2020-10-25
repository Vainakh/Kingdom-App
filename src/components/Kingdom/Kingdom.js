import React from 'react';
import Department from './KingdomDepartments/Department';
import classes from './Kingdom.module.css'

const kingdom = (props) => {
  let transformedDepartments = Object.keys(props.departments).map(departmentId => {
    return [...Array(props.departments[departmentId])].map((_, i) => {
      return <Department key={departmentId + i} type={departmentId}/>
    });
  }).reduce((arr, el) => {
    return arr.concat(el)
  }, []);

  if (transformedDepartments.length === 0) {
    transformedDepartments = <p className={classes.DefaultMsg}>Please, start adding department capacities!</p>
  }
    return (
      <div className={classes.Kingdom}>
          {transformedDepartments}
      </div>
    )
};

export default kingdom;