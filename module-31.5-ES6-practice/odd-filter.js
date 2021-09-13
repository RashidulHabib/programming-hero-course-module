// ৬. অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const oddNumber = numbers.filter((number) => number % 2 != 0);
console.log(oddNumber);
