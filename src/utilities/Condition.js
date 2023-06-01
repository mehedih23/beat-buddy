const errorHandleCondition = (arr, setGetProducts) => {
    if (arr.length > 4) {
        alert('Maximum number of products reach.')
    } else {
        setGetProducts(arr);
    }
};

export {
    errorHandleCondition,
}