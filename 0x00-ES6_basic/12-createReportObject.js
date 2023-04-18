import createEmployeesObject from './11-createEmployeesObject.js';

export default function createReportObject(employeesList) {
  return {
    allEmployees: createEmployeesObject(employeesList),
    getNumberOfDepartments(employeesList) {
      return Object.key(employeesList).length;
    },
  };
}
