import users from './users.js';
// ==============================1==============================
const calculateTotalBalance = users.reduce((TotalMoney, user) => TotalMoney + user.balance, 0);
console.log(calculateTotalBalance);
// ==============================2==============================
const getUserWithFriends = users
.filter(user => user.friends.includes('Briana Decker'))
.map(user => user.name);
console.log(getUserWithFriends);
// ==============================3==============================
const getNamesSortedByFriendsCount = users
.sort((a, b) => a.friends.lendth - b.friends.lendth)
.map(user => user.name);
console.log(getNamesSortedByFriendsCount);
// ==============================4==============================
const uniqueSkills = [];
users.forEach(user => {
    user.skills.forEach(skill => {
        if (uniqueSkills.includes(skill) === false) {
            uniqueSkills.push(skill);
            uniqueSkills.sort();
        }
    });
});
console.log(uniqueSkills);

