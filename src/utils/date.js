const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const daysInShorts = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const getDayInShort = (index) => daysInShorts[index];

const getDay = (index) => days[index];

export default {
    getDay,
    getDayInShort,
}
