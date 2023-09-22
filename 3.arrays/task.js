function compareArrays(arr1, arr2) {
    return arr1.every((el, idx) => arr1.length === arr2.length && el === arr2[idx]);  
}

function getUsersNamesInAgeRange(users, gender) {
    let filterUsers =  users.filter((user) => user.gender === gender);
  let filterUsersSummAge = filterUsers.reduce((accumulator, user) => accumulator + user.age, 0);
    if (filterUsersSummAge === 0) {
      return 0;
    } else {
      return filterUsersSummAge/filterUsers.length;
    }
}