class B {

}

class A {
    constructor(public x: number,
                public y: number) {
    }

    len(): number {
        return (this.x ** 2 + this.y ** 2) ** 0.5;
    }
}

let o: A | B;

function sum(tomb: number[]): number {
    let result = 0;
    tomb.forEach(value => {
        result += value;
    });
    return result;
}


let sqr = (x: number): number => x ** 2;

console.log(sqr(100));

console.log(sum([2, 6, 3]));

class Post {
    id: number;
    title: string;
    content: string;
}

let s = '{    "id": 10,    "title": "hello",    "content": "world"}';
let post: Post = <Post> JSON.parse(s) ;
console.log(post);

