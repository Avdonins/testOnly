const wrapper = document.querySelector('.wrapper')

const handleClick = (e) => {
    const descriptionInPage = document.querySelector('.description');
    const targetParent = e.target.parentNode;
    const descriptionByTarget = targetParent.querySelector('.description');

    if (e.target.id === 'button') {
        if(descriptionByTarget) {
            descriptionByTarget.remove();
            e.target.innerHTML = '+';
            targetParent.classList.add('opacityElem')
            return;
        }
        
        e.target.innerHTML = '-';
        targetParent.classList.remove('opacityElem')
        const createBlock = document.createElement('div')
        createBlock.className = 'description'
        createBlock.innerHTML = e.target.getAttribute('value');
        e.target.after(createBlock);
    }
    if(descriptionInPage) {
        descriptionInPage.parentNode.querySelector('#button').innerHTML = '+'
        descriptionInPage.parentNode.classList.add('opacityElem')
        descriptionInPage.remove();
    }
}

wrapper.addEventListener('click', handleClick)