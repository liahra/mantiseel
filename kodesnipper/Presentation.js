class Presentation {
    /* 
    -----
    title: String
    author: String
    slides: Array
    sharing: JSON Object/Boolean?

    -----
    Slides:
    [{
        type: "T1",
        content: [{}, ...]
    }, 
    {
        type: "T2",
        content: [{}, ...]
    },
    ...];

    På slides så vil type være en ID som beskriver typen slide, eks.: 
    T1 kan være Title
    T2 kan være Image with text
    T3 kan være List
    ...
    
    */
    constructor(title, author, slides, sharing){
        this.title = title;
        this.author = author;
        this.slides = slides;
        this.sharing = sharing;
    }

    function addSlide(type, content){
        /*
        let newSlide = {
            type: type,
            content: content
        };

        this.slides.push(newSlide);
        */
    }

    function deleteSlide(index){
        //Remove this.slides[index]
    }

    function updateSlide(index){
        //Update this.slides[index]
    }
}

//module.exports = Presentation