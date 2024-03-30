class CardNews extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({mode: 'open'})
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build() {
        const componentRoot = document.createElement('div')
        componentRoot.setAttribute('class', 'card')


        const cardLeft = document.createElement('div')
        cardLeft.setAttribute('class', 'card_left')

        const autor = document.createElement('span')
        const linkTitle = document.createElement('a')

        const newsContent = document.createElement('p')

        cardLeft.appendChild(autor)
        cardLeft.appendChild(linkTitle)
        cardLeft.appendChild(newsContent)
    
        const cardRight = document.createElement('div')
        cardRight.setAttribute('class', 'card_right')

        const image = document.createElement('image')
        
        cardRight.appendChild(image)

        componentRoot.appendChild(cardLeft)
        componentRoot.appendChild(cardRight)

        return componentRoot
    }

    styles() {
        const style = document.createElement('style')

        return style
    }
}

customElements.define('card-news', CardNews)
