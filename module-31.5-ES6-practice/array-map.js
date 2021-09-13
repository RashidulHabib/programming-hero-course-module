//  অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।

const numbers = [3, 5, 6, 7, 8, 8, 32, 45, 67];

const numberMultiply = numbers.map((number) => number * 5);
console.log(numberMultiply);
