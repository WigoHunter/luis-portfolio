export const htmlDecode = input => {
    const elem = document.createElement('div');
    elem.innerHTML = input;
    return elem;
}