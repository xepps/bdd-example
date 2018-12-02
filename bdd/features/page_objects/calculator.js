module.exports = {
    url: 'http://localhost:3000',
    
    elements: {
        button: val => by.css(`.button--${val}`),
        clear: by.css('button--clear'),
        display: by.name('input')
    }
}