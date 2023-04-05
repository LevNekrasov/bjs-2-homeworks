class PrintEditionItem{
    constructor(name, releaseDate, pagesCount, state = 100, type = null){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }
    fix(){
        this.state = this.state * 1.5;
        return;
    }
    set state(state){
        if(state < 0){
            this._state = 0;
        }
        if(state > 100){
            this._state = 100;
        }
        else{
            this._state = state;
        }
    }
    get state(){
        return this._state;
    }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount, state, type){
        super(name, releaseDate, pagesCount, state, type);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount, state, type){
        super(name, releaseDate, pagesCount, state, type);
        this.author = author;
        this.type = "book"
    }
}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount, state, type){
        super(author, name, releaseDate, pagesCount, state, type)
        this.type = "novel"
    }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount, state, type){
        super(author, name, releaseDate, pagesCount, state, type)
        this.type = "fantastic"
    }
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount, state, type){
        super(author, name, releaseDate, pagesCount, state, type)
        this.type = "detective"
    }
}

class Library{
    constructor(name){
        this.name = name;
        this.books = []
    }
    addBook(book){
        if(book.state > 30){
            this.books.push(book);
        }
    }
    findBookBy(type, value){
        return this.books.find(book => book[type] == value) || null;
    }
    giveBookByName(bookName){
        const book = this.findBookBy("name", bookName);
        if (book){
            this.books.splice(this.books.indexOf(book), 1);
        }
        return book;
    }
}

class Student{
    constructor(name){
        this.name = name;
        this.marks = {};
    }
    addMark(mark, subject){
        if(mark < 2 || mark > 5){
            return;
        }
        if(this.marks.hasOwnProperty([subject]) == false){
            this.marks[subject] = [];
        }
        this.marks[subject].push(mark);
    }
    getAverageBySubject(subject){
        if(this.marks.hasOwnProperty([subject]) == false){
            return 0;
        }
        return this.marks[subject].reduce((acc, mark) => acc + mark, 0) / this.marks[subject].length
    }
    getAverage(){
        if(Object.keys(this.marks).length == 0){
            return 0;
        }
        let sum = 0;
        for(let i=0; i < Object.keys(this.marks).length; i++){
            let a = Object.keys(this.marks)[i]
            sum+= this.getAverageBySubject(a);
        }
        return sum / Object.keys(this.marks).length;
    }
}