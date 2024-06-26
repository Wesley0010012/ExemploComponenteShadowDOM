class CardNews extends HTMLElement {
    BASE_URL = "http://localhost:5500/"
    BASE_IMAGE_URL = this.BASE_URL + "assets/img/"
    
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
        autor.textContent = "By " + (this.getAttribute('autor') ?? "Anonymous") 
        
        const linkTitle = document.createElement('a')
        linkTitle.textContent = (this.getAttribute('title'));
        linkTitle.href = this.BASE_URL + this.getAttribute('link-url')

        const newsContent = document.createElement('p')
        newsContent.textContent = this.getAttribute('content')

        cardLeft.appendChild(autor)
        cardLeft.appendChild(linkTitle)
        cardLeft.appendChild(newsContent)
    
        const cardRight = document.createElement('div')
        cardRight.setAttribute('class', 'card_right')

        const image = document.createElement('img')
        image.src = this.BASE_IMAGE_URL + this.getAttribute('image-url')
        
        cardRight.appendChild(image)

        componentRoot.appendChild(cardLeft)
        componentRoot.appendChild(cardRight)

        return componentRoot
    }

    styles() {
        const style = document.createElement('style')
        style.textContent = `
            .card {
                text-align: left;
                width: 720px;
                box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
                display: flex;
                flex-direction: row;
            }
            
            .card_left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            
            .card_left > span {
                font-weight: 400;
            }
            
            .card_left > a {
                margin: 10px 0;
                font-size: 25px;
                color: black;
                font-weight: 500;
                text-decoration: none;
            }
            
            .card_left > p {
                color: rgb(70, 70, 70);
            }
        `

        return style
    }
}

customElements.define('card-news', CardNews)
