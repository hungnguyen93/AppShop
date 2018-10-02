const getList = () => (
    fetch('http://localhost:8080/api/')
    .then((res) => res.json())
);
export default getList;